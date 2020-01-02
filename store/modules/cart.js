const state = () => ({
  productList: []
})

const getters = {
  cartProducts: state => {
    return state.productList
  }
}

const mutations = {
  addProductToCart(state, product) {
    state.productList.push(product)
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
