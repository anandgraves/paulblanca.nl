const state = () => ({
  cartProductList: [],
})

const getters = {
  cartProducts: (state) => {
    return state.cartProductList
  },
  cartProductsQuantity: (state) => {
    const sumOfQuantity = state.cartProductList
      .map((product) => product.quantity)
      .reduce((total, quantity) => total + quantity, 0)
    return sumOfQuantity
  },
  cartProductQuantityById: (state) => (uuid) => {
    return state.cartProductList.find((product) => product.uuid === uuid)
      .quantity
  },
  cartProductsSubTotal: (state) => {
    return state.cartProductList
      .map((product) => product.quantity * product.price)
      .reduce((total, price) => total + price, 0)
  },
}

const mutations = {
  ADD_TO_CART: (state, product) => {
    const copyProduct = { ...product }
    state.cartProductList.push(copyProduct)
  },
  CHANGE_QUANTITY_IN_CART: (state, { uuid, quantity }) => {
    const list = state.cartProductList.map((cartProduct) => {
      if (cartProduct.uuid === uuid) {
        cartProduct.quantity = quantity
      }
      return cartProduct
    })
    state.cartProductList = list
  },
  INCREMENT_CART_PRODUCT_QUANTITY: (state, { uuid }) => {
    const cartProduct = state.cartProductList.find(
      (product) => product.uuid === uuid
    )
    cartProduct.quantity++
  },
  REMOVE_FROM_CART: (state, uuid) => {
    state.cartProductList = state.cartProductList.filter(
      (product) => product.uuid !== uuid
    )
  },
}

const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.cartProductList.find(
        (cartProduct) => cartProduct.uuid === product.uuid
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
  },
  removeProductFromCart({ commit }, uuid) {
    commit('REMOVE_FROM_CART', uuid)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
