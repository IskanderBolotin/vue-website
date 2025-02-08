<template>
  <div :class="styles.wrapper">
    <div :class="productClasses">
      <div :class="styles.image">
        <div :class="styles.imageInner" @click="openModal">
          <img :src="image" :alt="name" />
        </div>
      </div>
      <div :class="styles.details">
        <h2 :class="styles.name" @click="openModal">{{ name }}</h2>
        <div :class="styles.priceBlock">
          <div v-if="isInStock" :class="styles.bottom">
            <div :class="styles.prices">
              <div v-if="oldPrice" :class="styles.oldPrice">
                {{ oldPrice }} $
              </div>
              <div :class="styles.price">{{ price }} $</div>
            </div>
            <div :class="styles.button">
              <CustomButton :onClick="handleBuyClick" :state="buttonState">
                Купить
              </CustomButton>
            </div>
          </div>
          <div v-else :class="styles.emptyText">Продана на аукционе</div>
        </div>
      </div>
    </div>
    <ProductModal 
      :product="productModalData"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script>
import ProductModal from "@widgets/product/ui/productModal/productModal.vue";
import CustomButton from "@shared/ui/customButton/customButton.vue";
import styles from "./product.module.scss";

export default {
  name: "ProductItem",
  components: {
    CustomButton,
    ProductModal,
  },
  props: {
    description: {
      type: String,
      required: true,
    },
    gallery: {
      type: Array,
      default: () => [],
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: [Number, String],
      required: true,
    },
    oldPrice: {
      type: [Number, String],
      default: null,
    },
    isInStock: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      buttonState: "",
      isModalOpen: false,
      styles,
    };
  },
  computed: {
    productClasses: function () {
      return {
        [this.styles.product]: true,
        [this.styles.empty]: !this.isInStock,
      };
    },
    productModalData: function () {
      return {
        name: this.name,
        description: this.description,
        price: this.price,
        images: this.gallery,
      }
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async handleBuyClick() {
      if (this.buttonState === "checked") {
        return
      }
      this.buttonState = "preloader";

      try {
        await this.performPurchase();
        this.buttonState = "checked";
      } catch (error) {
        console.error("Ошибка при покупке:", error);
        this.buttonState = "";
        alert("Произошла ошибка при покупке.");
      }
    },
    performPurchase() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.2) {
            resolve();
          } else {
            reject(new Error("Ошибка оплаты"));
          }
        }, 2000);
      });
    },
  },
};
</script>
