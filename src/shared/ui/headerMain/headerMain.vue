<template>
  <header :class="styles.header">
    <div class="container">
      <div :class="styles.row">
        <div :class="styles.designFix"></div>
        <div :class="styles.menu">
            <NavigationMenu />
        </div>
        <div :class="styles.search">
          <div :class="styles.filed">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import NavigationMenu from "@shared/ui/navigationMenu/navigationMenu.vue";
  import SearchForm from "@shared/ui/searchForm/searchForm.vue";
  import styles from "./headerMain.module.scss";

  export default {
    name: "HeaderMain",
    components: {
      NavigationMenu,
      SearchForm
    },
    data() {
      return {
        styles,
      };
    },
  };
</script>
