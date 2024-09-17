import {v4 as uuidv4} from 'uuid'

export const useUUIDStore = defineStore('uuidStore', () => {
  const uuid = ref(uuidv4())

  return {uuid}
})
