<template>
  <div v-if="isOpen" :class="styles.overlay" @mousedown="closeModal">
    <div :class="styles.content" @mousedown.stop>
      <div :class="styles.inner">
        <div :class="styles.preview">
        

        <carousel
          :per-page="1"
          :navigate-to="currentSlide"
          :pagination-enabled="true"
        >
          <slide v-for="(image, index) in product.images" :key="index">
            <div :class="styles.image">
              <div :class="styles.imageInner">
                <img :src="image" alt="Product Image"/>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <div :class="styles.info">
        <h2 :class="styles.title">{{ product.name }}</h2>
        <div :class="styles.description">
          <p>{{ product.description }}</p>
          <p><strong>Цена:</strong> {{ product.price }} $</p>
        </div>
      </div>
      </div>
      <button @click="closeModal" :class="styles.closeButton">X</button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import styles from "./productModal.module.scss";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      styles,
    };
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
