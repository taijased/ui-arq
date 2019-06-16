export function updateModalSubscribe({ commit }) {
  commit("UPDATE_MODAL_SUBSCRIBE");
}

export function updateModalSignUp({ commit }) {
  console.log("oolo");
  commit("UPDATE_MODAL_SIGNUP");
}

export function updateRegin({ commit }) {
  commit("UPDATE_REGIN");
}

export function setSlideIndex({ commit }, payload) {
  commit("SET_SLIDE_INDEX", payload);
}

export function setSwiper({ commit }, payload) {
  commit("SET_SWIPER", payload);
}


