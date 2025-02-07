<template>
  <div :class="styles.row">
    <div :class="styles.item">
      <a href="tel:+78125555555" :class="styles.line">
        <span :class="styles.icon">
          <IconPhone />
        </span>
        <span :class="styles.text">
          +7 (812) 555-55-55
        </span>
      </a>
    </div>
    <div :class="styles.item">
      <div :class="styles.line">
        <div :class="styles.icon">
          <IconAddress />
        </div>
        <div :class="styles.text">
          г. Санкт-Петербург, ул. Ефимова, 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconAddress from "./icons/icon-address.svg?inline";
import IconPhone from "./icons/icon-phone.svg?inline";
import styles from "./contacts.module.scss";

export default {
  name: "Contacts",
  components: {
    IconAddress,
    IconPhone,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
