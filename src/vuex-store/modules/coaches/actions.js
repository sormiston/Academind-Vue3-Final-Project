export default {
  registerCoach(context, payload) {
    // dynamically generate new id based on last in list
    // const currentCoaches = context.getters.coaches
    // const lastIdNum = Number(currentCoaches[currentCoaches.length - 1].id[1])
    // const newId = 'c' + (lastIdNum + 1)
    
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description:payload.desc,
      hourlyRate: payload.rate
    };
    context.commit('registerCoach', newCoach)
  }
};
