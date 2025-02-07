<template>
  <div :class="styles.form">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Поиск по названию картины"
      @keyup.enter="handleSearch"
      :class="styles.input"
    />
    <CustomButton :state="buttonState" :onClick="handleSearch">
      Найти
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from "@shared/ui/customButton/customButton.vue";
import styles from "./searchForm.module.scss";

export default {
  name: "SearchForm",
  components: {
    CustomButton,
  },
  data() {
    return {
      searchQuery: "",
      buttonState: "",
      styles,
    };
  },
  methods: {
    async handleSearch() {
      if (!this.searchQuery.trim()) {
        return;
      }

      this.buttonState = "preloader";

      try {
        await this.performSearch();
        this.buttonState = "";
      } catch (error) {
        console.error("Ошибка поиска:", error);
        this.buttonState = "";
      }
    },
    performSearch() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.searchQuery.toLowerCase().includes("ошибка")) {
            reject(new Error("Искусственная ошибка"));
          } else {
            resolve();
          }
        }, 2000);
      });
    },
  },
};
</script>
