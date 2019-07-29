<template>
  <div id="app_home">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader'
    export default {
        components: {
            AppHeader
        }
    }
</script>
<style lang="sass" scoped>
  #user_login
    display: none
</style>
