<template>
  <div :class="styles.product">
    <div :class="styles.image">
      <div :class="styles.imageInner">
        <img :src="image" :alt="name" />
      </div>
    </div>
    <div :class="styles.details">
      <h2 :class="styles.name">{{ name }}</h2>
      <div :class="styles.bottom">
        <div :class="styles.prices">
          <div v-if="oldPrice" :class="styles.oldPrice">{{ oldPrice }} $</div>
          <div :class="styles.price">{{ price }} $</div>
        </div>
        <div :class="styles.button">
          <CustomButton :onClick="handleBuyClick" :state="buttonState">
            Купить
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomButton from "@shared/ui/customButton/customButton.vue";
  import styles from "./product.module.scss";

  export default {
    name: "ProductItem",
    components: {
      CustomButton,
    },
    props: {
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
    },
    data() {
      return {
        buttonState: "",
        styles,
      };
    },
    methods: {
      async handleBuyClick() {
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
