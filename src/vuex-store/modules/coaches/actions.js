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
    await axios.put(`coaches/${userId}.json`, JSON.stringify(newCoach));

    context.commit('registerCoach', newCoach);
  },

  // ERROR HANDLING BY COMPONENT-SIDE TRY/CATCH BLOCK
  async loadCoaches(context) {
    const response = await axios('coaches.json');
    const coaches = [];
    for (const key in response.data) {
      coaches.push({
        ...response.data[key]
      });
    }
    context.commit('setCoaches', coaches);
  }
};
