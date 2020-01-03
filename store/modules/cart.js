const state = () => ({
  productList: []
})

const getters = {
  cartProducts: state => {
    return state.productList
  },
  cartProductsQuantity: state => {
    const sumOfQuantity = state.productList
      .map(product => product.quantity)
      .reduce((total, quantity) => total + quantity, 0)
    return sumOfQuantity
  },
  cartProductQuantityById: state => uuid => {
    return state.productList.find(product => product.uuid === uuid).quantity
  },
  cartProductsSubTotal: state => {
    return state.productList
      .map(product => product.quantity * product.price)
      .reduce((total, price) => total + price, 0)
  }
}

const mutations = {
  ADD_TO_CART: (state, product) => {
    state.productList.push(product)
  },
  CHANGE_QUANTITY_IN_CART: (state, { uuid, quantity }) => {
    state.productList.map(cartProduct => {
      if (cartProduct.uuid === uuid) {
        cartProduct.quantity = quantity
      }
      return cartProduct
    })
  },
  INCREMENT_CART_PRODUCT_QUANTITY: (state, { uuid }) => {
    const cartProduct = state.productList.find(product => product.uuid === uuid)
    cartProduct.quantity++
  }
}

const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.productList.find(
        cartProduct => cartProduct.uuid === product.uuid
      )
      if (!cartItem) {
        commit('ADD_TO_CART', product)
      } else {
        commit('INCREMENT_CART_PRODUCT_QUANTITY', cartItem)
      }
    }
    this.$router.push('/shopping-cart')
  },
  changeQuantityInCart({ commit }, payload) {
    commit('CHANGE_QUANTITY_IN_CART', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
