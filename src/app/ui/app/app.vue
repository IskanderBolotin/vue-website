<template>
  <MainPage />
</template>

<script>
  import MainPage from "@pages/mainPage/mainPage.vue";
  import styles from "./app.module.scss";

  export default {
    name: "App",
    components: {
      MainPage,
    },
    data() {
      return {
        styles,
      };
    },
    mounted() {
      this.$store.dispatch("fetchPictures");
    },
  };
</script>
