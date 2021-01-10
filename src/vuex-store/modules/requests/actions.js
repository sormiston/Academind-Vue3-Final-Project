import axios from 'axios';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.userEmail,
      message: payload.message
    };

    try {
      const response = await axios.post(
        `requests/${payload.coachId}.json`,
        JSON.stringify(newRequest)
      );
      if (response.status < 200 || response.status >= 300)
        throw new Error(response.status);

      newRequest.id = response.data.name;
      context.commit('addRequest', newRequest);
    } catch (err) {
      console.error(err.message);
    }
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    try {
      const response = await axios(`requests/${coachId}.json`);
      if (response.status < 200 || response.status >= 300)
        throw new Error(response.status);
      
      const requests = [];
      for (const key in response.data) {
        requests.push({
          ...response.data[key]
        });
      }
      
      context.commit('setRequests', requests);
    } catch (err) {
      console.error(err.message);
    }
  }
};
