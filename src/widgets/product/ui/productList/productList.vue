<template>
  <div>
  <ul :class="styles.list">
    <li v-for="picture in pictures" :class="styles.item">
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
</template>

<script>
import Product from "@widgets/product/ui/product/product.vue";
import Picture1 from "./images/picture-1.jpg";
import Picture2 from "./images/picture-2.jpg";
import Picture3 from "./images/picture-3.jpg";
import Picture4 from "./images/picture-4.jpg";
import styles from "./productList.module.scss";

export default {
  name: "productList",
  components: {
    Product,
  },
  data() {
    return {
      pictures: [
        { image: Picture1, name: "«Рождение Венеры» Сандро Боттичелли", price: "1 000 000", oldPrice: "2 000 000", description: "Test", gallery: [Picture1, Picture2, Picture3, Picture4], },
        { image: Picture2, name: "«Тайная вечеря»  Леонардо да Винчи", price: "3 000 000", description: "Test", gallery: [Picture1, Picture2, Picture3, Picture4], },
        { image: Picture3, name: "«Сотворение Адама» Микеланджело", price: "5 000 000", oldPrice: "6 000 000", description: "Test", gallery: [Picture1, Picture2, Picture3, Picture4], },
        { image: Picture4, name: "«Урок анатомии»  Рембрандт", price: "1 000 000", oldPrice: "2 000 000", isInStock: false, description: "Test", gallery: [Picture1, Picture2, Picture3, Picture4], },
      ],
      styles,
    };
  },
};
</script>
