export const useUUIDStore = defineStore('uuidStore', () => {
  const uuid = ref('')

  const set = function (newUuid) {
    uuid.value = newUuid
  }

  return {uuid, set}
})
