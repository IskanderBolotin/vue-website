<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
  import Layout from "@shared/ui/layout/layout.vue";
  import styles from "./app.module.scss";

  export default {
    name: 'app',
    components: {
      Layout,
    },
    data () {
      return {
        message: 'Welcome to Vue.js',
        styles
      }
    }
  }
</script>