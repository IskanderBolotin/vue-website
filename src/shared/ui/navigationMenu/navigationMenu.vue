<template>
  <nav>
    <button
      v-if="isMobile"
      @click="openMenu"
      :class="styles.burger"
      aria-label="Открыть меню"
    >
      <span :class="styles.burgerLine"></span>
      <span :class="styles.burgerLine"></span>
      <span :class="styles.burgerLine"></span>
    </button>
    <div v-if="isMenuOpen" :class="styles.overlay" @click="closeMenu"></div>
    <div :class="[styles.wrapper, { [styles.listOpen]: isMenuOpen, [styles.mobile]: isMobile }]">
      <button
        v-if="isMobile"
        @click="closeMenu"
        :class="styles.close"
        aria-label="Закрыть меню"
      >
        X
      </button>
      <ul :class="[styles.list, { [styles.mobile]: isMobile }]">
        <li v-for="item in menuItems" :key="item.key" :class="styles.item">
          <a :href="item.path" :class="styles.link">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { isMobile } from "@shared/libs/isMobile";
import styles from "./navigationMenu.module.scss";

export default {
  name: "NavigationMenu",
  data() {
    return {
      menuItems: [
        { title: "Каталог", path: "#", key: "catalog" },
        { title: "Доставка", path: "#", key: "delivery" },
        { title: "Оплата", path: "#", key: "payment" },
        { title: "Контакты", path: "#", key: "contacts" },
        { title: "О компании", path: "#", key: "about" },
      ],
      isMobile: isMobile(),
      isMenuOpen: false,
      styles,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
