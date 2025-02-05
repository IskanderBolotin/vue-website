<template>
  <div class="fullScreen">
    <header-main />
    <main class="mainContent">
      <slot></slot>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
  import HeaderMain from "@shared/ui/headerMain/headerMain.vue";
  import styles from "./layout.module.scss";

  export default {
    name: "Layout",
    components: {
      HeaderMain
    },
    data() {
      return {
        styles
      }
    }
  }
</script>