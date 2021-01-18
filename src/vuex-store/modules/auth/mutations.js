export default {
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.logoutEjected = false
  },
  logoutEject(state) {
    state.logoutEjected = true
  }
}