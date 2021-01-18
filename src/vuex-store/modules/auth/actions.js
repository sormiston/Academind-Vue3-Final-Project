let timer;

export default {
  async login(context, payload) {
    payload = {
      ...payload,
      mode: 'login'
    };
    return context.dispatch('auth', payload);
  },

  async signup(context, payload) {
    payload = {
      ...payload,
      mode: 'signup'
    };
    return context.dispatch('auth', payload);
  },
  async auth(context, payload) {
    const url =
      payload.mode === 'login'
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.error.message || 'Failed to authenticate.'
      );
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = +localStorage.getItem('tokenExpiration');

    const expiresIn = tokenExpiration - new Date().getTime();

    if (expiresIn < 0) return;

    timer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('logoutEject');
  }
};
