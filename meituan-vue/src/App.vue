<template>
  <div id="app">
    <!-- <default-page /> -->
    <router-view/>
  </div>
</template>

<script>
import DefaultPage from '@/layout/Default'
export default {
  name: 'App',
  components: {
    DefaultPage
  }
}
</script>

<style>

</style>
