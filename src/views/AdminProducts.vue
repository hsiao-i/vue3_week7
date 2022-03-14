<template>
  <h2>後台產品列表</h2>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal()">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-end">{{ item.origin_price }}</td>
          <td class="text-end">{{ item.price }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal()"
              >
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal ref="productModal"></ProductModal>
  </div>
</template>

<script>
import ProductModal from '@/components/ProductModal'

export default {
  components: {
    ProductModal
  },
  data() {
    return {
      products: [],
      isNew: true,
      tempProduct: {}
    }
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/products/all`
        )
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          this.$httpMessageState(err.response, '錯誤訊息')
        })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      // 抓 bootstrap、開啟 modal
      const productComponent = this.$refs.productModal
      productComponent.openModal()
    },
    openProductModal() {}
  },
  mounted() {
    this.getProducts()
  }
}
</script>
