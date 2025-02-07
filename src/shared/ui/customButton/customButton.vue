<template>
  <button @click="handleClick" :class="buttonClass" :disabled="isDisabled">
    <span v-if="state === 'preloader'" :class="styles.inner">
      <span :class="styles.icon"><span :class="styles.loader"></span></span> Загрузка...
    </span>
    <span v-else-if="state === 'purchase'" :class="styles.inner">
      <span :class="styles.icon"><span :class="styles.loader"></span></span> Отправка...
    </span>
    <span v-else-if="state === 'checked'" :class="styles.inner">
      <span :class="styles.icon"><IconCheck /></span> В корзине
    </span>
    <span v-else :class="styles.inner">
      <slot>OK</slot>
    </span>
  </button>
</template>

<script>
  import IconCheck from "./icons/icon-check.svg?inline";
  import styles from "./customButton.module.scss";

  export default {
    name: "CustomButton",
    components: {
      IconCheck
    },
    props: {
      state: {
        type: String,
        default: "",
        validator: (value) =>
          ["", "preloader", "purchase", "checked"].includes(value),
      },
      onClick: {
        type: Function,
        default: () => {},
      },
    },
    data() {
      return {
        styles,
      };
    },
    computed: {
      isDisabled() {
        return this.state === "preloader" || this.state === "purchase";
      },
      buttonClass() {
        return {
          [this.styles.button]: true,
          [this.styles.preloader]: this.state === "preloader",
          [this.styles.purchase]: this.state === "purchase",
          [this.styles.checked]: this.state === "checked",
        };
      },
    },
    methods: {
      handleClick() {
        if (!this.isDisabled) {
          this.onClick();
        }
      },
    },
  };
</script>
