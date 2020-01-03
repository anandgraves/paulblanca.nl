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
          title: 'Snow White Giullia',
          subtitle: '8',
          series: 'Kristal',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          edition: '25',
          price: 550,
          thumbnailUrl: '/images/snow-white-kristal-l.jpg',
          alt: 'test',
          inventory: 19
        },
        {
          uuid: '332f2a22-db76-4107-a165-ab7742bc6226',
          slug: 'test-title-kristal',
          title: 'Test title',
          subtitle: '7',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          series: 'Kristal',
          edition: '25',
          price: 550,
          thumbnailUrl: '/images/snow-white-kristal-l.jpg',
          alt: 'test',
          inventory: 1
        }
      ])
      return commit('setShopProducts', products)
    } catch (error) {
      console.log('Er gaat iets mis met nuxtserverinit', error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart
  }
}
