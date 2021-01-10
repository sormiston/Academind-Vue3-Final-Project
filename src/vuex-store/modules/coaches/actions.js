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

    try {
      const userId = context.rootGetters.userId;
      const response = await axios.put(
        `coaches/${userId}.json`,
        JSON.stringify(newCoach)
      );
    
      if (response.status < 200 || response.status >= 300)
        throw new Error(response.status);
      context.commit('registerCoach', newCoach);
    } catch (err) {
      console.error(err.message);
    }
  },

  async loadCoaches(context) {
    try {
      const response = await axios('coaches.json');
      if (response.status < 200 || response.status >= 300)
        throw new Error(response.status);

      const coaches = [];
      console.log(coaches);
      for (const key in response.data) {
        coaches.push({
          ...response.data[key]
        });
      }
      context.commit('setCoaches', coaches);
    } catch (err) {
      console.error(err.message);
    }
  }
};
