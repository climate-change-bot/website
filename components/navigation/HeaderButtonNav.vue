<template>
  <li>
    <NuxtLink :to="route"
              exact-active-class="block py-2 pl-3 pr-4 text-white bg-default-color-dark rounded lg:bg-transparent lg:text-default-color lg:p-0 dark:text-white"
              class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-default-color-dark lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page">{{ text }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'HeaderButtonNav',
  props: {
    route: {
      type: String,
      default: function () {
        return '/'
      }
    },
    text: {
      type: String,
      default: function () {
        return 'Home'
      }
    }
  }
}
</script>

<style scoped>

</style>
