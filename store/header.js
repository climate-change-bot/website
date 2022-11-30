export const state = () => ({
  isNavOpen: Boolean
})

export const mutations = {
  set(state, isNavOpen) {
    state.isNavOpen = isNavOpen
  }
}
