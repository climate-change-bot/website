export const useUUIDStore = defineStore('uuidStore', () => {
  const uuid = ref('')

  const set = function (newUuid: string) {
    uuid.value = newUuid
  }

  return {uuid, set}
})
