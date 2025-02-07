<template>
  <div v-if="isOpen" :class="styles.overlay" @mousedown="closeModal">
    <div :class="styles.content" @mousedown.stop>
      <h2>{{ product.name }}</h2>

      <carousel
        :per-page="1"
        :navigate-to="currentSlide"
        :pagination-enabled="true"
      >
        <slide v-for="(image, index) in product.images" :key="index">
          <img :src="image" alt="Product Image" :class="styles.sliderImage" />
        </slide>
      </carousel>

      <div :class="styles.description">
        <p>{{ product.description }}</p>
        <p><strong>Цена:</strong> {{ product.price }} руб.</p>
      </div>

      <button @click="closeModal" :class="styles.closeButton">Закрыть</button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import styles from "./productModal.module.scss"

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      styles
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
