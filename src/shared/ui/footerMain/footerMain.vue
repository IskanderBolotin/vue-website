<template>
  <footer :class="styles.footer">
    <div class="container">
      <NavigationMenu />
    </div>
  </footer>
</template>

<script>
  import NavigationMenu from "@shared/ui/navigationMenu/navigationMenu.vue";
  import styles from "./footerMain.module.scss";

  export default {
    name: "FooterMain",
    components: {
      NavigationMenu,
    },
    data() {
      return {
        styles,
      };
    },
  };
</script>
