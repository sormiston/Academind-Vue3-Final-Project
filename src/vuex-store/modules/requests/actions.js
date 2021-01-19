import axios from 'axios';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.userEmail,
      message: payload.message
    };

    const response = await axios.post(
      `requests/${payload.coachId}.json`,
      JSON.stringify(newRequest)
    );
    if (response.status < 200 || response.status >= 300)
      throw new Error(response.message);

    newRequest.id = response.data.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await axios(`requests/${coachId}.json?auth=${token}`);
    const requests = [];
    if (response.data) {
      const data = Object.entries(response.data);
      data.forEach(entry => {
        const id = entry[0];

        requests.push({
          ...entry[1],
          id
        });
      });
    }
    context.commit('setRequests', requests);
  }
};
