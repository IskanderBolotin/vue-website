<template>
  <div :class="styles.form">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Поиск по названию картины"
      @keyup.enter="handleSearch"
      @input="handleInput"
      :class="styles.input"
    />
    <CustomButton :state="buttonState" :onClick="handleSearch">
      Найти
    </CustomButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["updateSearchQuery"]),
    async handleSearch() {
      if (!this.searchQuery.trim()) {
        return;
      }

      this.buttonState = "preloader";

      try {
        await this.performSearch();
        this.buttonState = "";
        this.updateSearchQuery(this.searchQuery);
      } catch (error) {
        console.error("Ошибка поиска:", error);
        this.buttonState = "";
      }
    },
    handleInput() {
      if (!this.searchQuery.trim()) {
        this.updateSearchQuery("");
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
        }, 500);
      });
    },
  },
};
</script>
