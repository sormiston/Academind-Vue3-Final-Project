export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  getCoach(state) {
    return id => state.coaches.find(coach => coach.id === id);
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) return true;
    else if (lastFetch) {
      const current = new Date().getTime();
      return (current - lastFetch) / 1000 > 60;
    }
  },
  getAllCoachIds(state) {
    return state.coaches.reduce((acc, curr) => [...acc, curr.id], []);
  }
};
