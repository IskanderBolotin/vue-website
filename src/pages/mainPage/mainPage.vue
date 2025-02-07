<template>
  <Layout>
    <div class="container">
      <h1 class="title">Картины эпохи Возрождения</h1> 
      <div>
        <ProductList />
      </div>
    </div>
  </Layout>
</template>

<script>
  import ProductList from "@widgets/product/ui/productList/productList.vue";
  import Layout from "@shared/ui/layout/layout.vue";
  import styles from "./mainPage.module.scss";

  export default {
    name: "MainPage",
    components: {
      Layout,
      ProductList
    },
    data() {
      return {
        styles,
      };
    },
  };
</script>
