<template>
  <div class="fullScreen">
    <header-main />
    <main class="mainContent">
      <div :class="styles.wrapper">
        <slot></slot>
      </div>
    </main>
    <footer-main />
  </div>
</template>

<script>
  import HeaderMain from "@shared/ui/headerMain/headerMain.vue";
  import FooterMain from "@shared/ui/footerMain/footerMain.vue";
  import styles from "./layout.module.scss";

  export default {
    name: "Layout",
    components: {
      HeaderMain,
      FooterMain
    },
    data() {
      return {
        styles
      }
    }
  }
</script>