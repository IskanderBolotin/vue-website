<template>
  <header :class="styles.header">
    <div class="container">header</div>
  </header>
</template>

<script>
  import styles from "./headerMain.module.scss";

  export default {
    name: "HeaderMain",
    data() {
      return {
        styles,
      };
    },
  };
</script>
