const state = () => ({
  productList: []
})

const getters = {
  cartProducts: state => {
    return state.productList
  },
  cartProductsQuantity: state => {
    return state.productList.length
  }
}

const mutations = {
  ADD_TO_CART: (state, product) => {
    state.productList.push(product)
    console.log('productList', state.productList)
  }
}

const actions = {
  addProductToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
    this.$router.push('/shopping-cart')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
