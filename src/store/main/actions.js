export function updateModalStatus({ commit }) {
  commit("UPDATE_MODAL_STATUS");
}
export function updateRegin({ commit }) {
  console.log("updateRegin");
  commit("UPDATE_REGIN");
}
export function setSlideIndex({ commit }, payload) {
  commit("SET_SLIDE_INDEX", payload);
}
export function setSwiper({ commit }, payload) {
  commit("SET_SWIPER", payload);
}


