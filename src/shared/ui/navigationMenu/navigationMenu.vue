<template>
  <nav>
    <ul :class="styles.list">
      <li v-for="item in menuItems" :key="item.key" :class="styles.item">
        <a :href="item.path" :class="styles.link">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
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
        styles,
      };
    },
  };
</script>
