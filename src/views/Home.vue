<template>
    <div>
      <Register />
    </div>
    <RouterView />
  </template>
  
  <script>
    import Register from '@/components/register.vue'
     export default {
    name: 'ho-me',
    components: {
        Register
    }
  }
  </script>
  