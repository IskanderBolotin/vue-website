<template>
  <div>
    <div v-if="isLoading">Загрузка...</div>
    <div v-else>
      <ul :class="styles.list">
        <li v-for="picture in filteredPictures" :class="styles.item">
          <Product
            :image="picture.image"
            :name="picture.name"
            :price="picture.price"
            :oldPrice="picture.oldPrice"
            :isInStock="picture.isInStock"
            :description="picture.description"
            :gallery="picture.gallery"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Product from "@widgets/product/ui/product/product.vue";
import styles from "./productList.module.scss";

export default {
  name: "productList",
  components: {
    Product,
  },
  data() {
    return {
      styles,
    };
  },
  computed: {
    ...mapGetters(["getFilteredPictures", "isLoading"]),
    filteredPictures() {
      return this.getFilteredPictures;
    },
  },
};
</script>
