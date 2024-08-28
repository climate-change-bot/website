export const useHeaderStore = defineStore('headerStore', () => {
  const isNavOpen = ref(false)

  const set = function (newIsNavOpen) {
    isNavOpen.value = newIsNavOpen
  }

  return {isNavOpen, set}
})
