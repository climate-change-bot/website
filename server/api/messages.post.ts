export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)

  return await $fetch(config.rasaApi + '/webhooks/rest/webhook', {
    method: 'POST',
    body
  })
})
