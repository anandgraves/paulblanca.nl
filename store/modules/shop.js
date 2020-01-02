const state = () => ({
  shopProductList: []
})

const getters = {
  shopProductList: state => {
    return state.shopProductList
  }
}

const mutations = {
  setShopProducts(state, products) {
    state.shopProductList = products
  }
}

export default {
  state,
  getters,
  mutations
}
