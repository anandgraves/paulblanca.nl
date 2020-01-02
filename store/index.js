import cart from './modules/cart'

const state = () => ({
  shopProductList: []
})

const getters = {
  shopProductList: state => {
    return state.shopProductList
  }
}

const mutations = {
  setShopProducts(state, payload) {
    state.shopProductList = payload
  }
}

const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const products = await Promise.resolve([
        {
          uuid: 'c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
          slug: 'domestic-abuse-kristal',
          title: 'Domestic Abuse',
          series: 'Kristal',
          price: 550,
          thumbnailUrl: '/images/snow-white-kristal-s.jpg',
          alt: 'test',
          quantity: 1
        },
        {
          uuid: '332f2a22-db76-4107-a165-ab7742bc6226',
          slug: 'test-title-kristal',
          title: 'Test title',
          series: 'Kristal',
          price: 550,
          thumbnailUrl: '/images/snow-white-kristal-s.jpg',
          alt: 'test',
          quantity: 1
        }
      ])
      return commit('setShopProducts', products)
    } catch (error) {
      console.log('Er gaat iets mis met nuxtserverinit', error)
    }
  }
}

/*
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
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart
  }
}
