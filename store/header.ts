export const useHeaderStore = defineStore('headerStore', () => {
  const isNavOpen = ref(false)

  const set = function (newIsNavOpen: boolean) {
    isNavOpen.value = newIsNavOpen
  }

  return {isNavOpen, set}
})
