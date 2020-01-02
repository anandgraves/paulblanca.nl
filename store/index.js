import cart from './modules/cart'
import shop from './modules/shop'

/*
export const getters = {
  inCart: state => state.productList,
  inCartCount: state => state.productList.length,
  countOfProductsInCart: state => state.productList.length
}

export const mutations = {
  ADD_TO_CART: (state, product) => {
    state.productList.push(product)
  }
}

export const actions = {
  addToCart({ commit }, product) {
    commit('ADD_TO_CART', product)
    this.$router.push('/shopping-cart')
  }
}

*/

export default {
  modules: {
    cart,
    shop
  }
}
