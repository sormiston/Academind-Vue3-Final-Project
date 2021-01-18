export default {
  requests(state) {
    return state.requests
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0
  }
}