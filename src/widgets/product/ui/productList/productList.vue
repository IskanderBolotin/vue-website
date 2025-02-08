<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-else>
      <ul :class="styles.list">
        <li v-for="picture in filteredPictures" :class="styles.item" :key="picture.id">
          <Product
            :id="picture.id"
            :image="picture.image"
            :name="picture.name"
            :price="picture.price"
            :oldPrice="picture.oldPrice"
            :isInStock="picture.isInStock"
            :description="picture.description"
            :gallery="picture.gallery"
            :isInCart="isInCart(picture.id)"
            @toggle-cart="toggleCart"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Product from "@widgets/product/ui/product/product.vue";
import styles from "./productList.module.scss";

export default {
  name: "ProductList",
  components: {
    Product,
  },
  data() {
    return {
      styles,
    };
  },
  computed: {
    ...mapGetters(["getFilteredPictures", "isLoading", "isInCart"]),
    filteredPictures() {
      return this.getFilteredPictures;
    },
  },
  methods: {
    ...mapActions(["toggleCart"]),
  },
};
</script>