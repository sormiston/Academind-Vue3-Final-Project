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
    newRequest.coachId = payload.coachId
      context.commit('addRequest', newRequest); 
    
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token
    const response = await axios(`requests/${coachId}.json?auth=${token}`);
    const requests = [];
    for (const key in response.data) {
      requests.push({
        ...response.data[key]
      });
    }

    context.commit('setRequests', requests);
  }
};
