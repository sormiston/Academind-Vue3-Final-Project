import axios from '../../../axios';

export default {
  async registerCoach(context, payload) {
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate
    };

    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token
    const response = await axios.put(`coaches/${userId}.json?auth=${token}`, JSON.stringify(newCoach));
    console.log(response)
    context.commit('registerCoach', newCoach);
  },

  // ERROR HANDLING BY COMPONENT-SIDE TRY/CATCH BLOCK
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return
    const response = await axios('coaches.json');
    const coaches = [];
    for (const key in response.data) {
      coaches.push({
        ...response.data[key]
      });
    }
    
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp')
  }
};
