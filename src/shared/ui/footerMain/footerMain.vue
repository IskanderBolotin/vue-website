<template>
  <footer :class="styles.footer">
    <div class="container">
      <div :class="styles.row">
        <div :class="styles.designFix"></div>
        <div :class="styles.menu">
          <NavigationMenu />
        </div>
        <div :class="styles.contacts">
          <Contacts />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import NavigationMenu from "@shared/ui/navigationMenu/navigationMenu.vue";
  import Contacts from "@shared/ui/contacts/contacts.vue"
  import styles from "./footerMain.module.scss";

  export default {
    name: "FooterMain",
    components: {
      NavigationMenu,
      Contacts
    },
    data() {
      return {
        styles,
      };
    },
  };
</script>
