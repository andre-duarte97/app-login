<template>
</template>
<script>
  import { logout } from './login.service'
  export default {
    name: 'AppLogout',
    mounted () {
      logout()
    }
  }
</script>
