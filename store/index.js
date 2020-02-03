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
  SET_SHOP_PRODUCTS(state, payload) {
    state.shopProductList = payload
  }
}

const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const products = await Promise.resolve([
        {
          uuid: 'c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
          slug: 'snow-white-giulia-kristal',
          title: 'Snow White Giullia',
          subtitle: '8',
          series: 'Kristal',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          edition: '25',
          price: 550,
          alt: 'test',
          inventory: 19,
          quantity: 1,
          image: {
            width: 1300,
            height: 910,
            filename: 'snow-white-kristal',
            alt: 'test'
          }
        },
        {
          uuid: '332f2a22-db76-4107-a165-ab7742bc6123',
          slug: 'domestic-violence-giulia-kristal',
          title: 'Domestic violence giulia',
          subtitle: '7',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          series: 'Kristal',
          edition: '25',
          price: 550,
          alt: 'test',
          inventory: 1,
          quantity: 1,
          image: {
            width: 1300,
            height: 910,
            filename: 'snow-white-kristal',
            alt: 'test'
          }
        },
        {
          uuid: '5c61ade0-287f-4bd6-b5bd-2a5dd90e4327',
          slug: 'deformation-portrait',
          title: 'Deformation portrait',
          subtitle: '7',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          series: 'Deformation',
          edition: '19',
          price: 550,
          alt: 'test',
          inventory: 19,
          quantity: 1,
          image: {
            width: 1500,
            height: 1802,
            filename: 'deformation-portrait',
            alt: 'Deformation by Paul Blanca'
          }
        },
        {
          uuid: 'c2f161f6-28c5-4bac-8574-3995dd5ea8e0',
          slug: 'selfportrait-mickey-mouse',
          title: 'Selfportrait Mickey Mouse',
          subtitle: '7',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          series: 'Kristal',
          edition: '25',
          price: 550,
          alt: 'test',
          inventory: 1,
          quantity: 1,
          image: {
            width: 1300,
            height: 910,
            filename: 'snow-white-kristal',
            alt: 'test'
          }
        },
        {
          uuid: '3ae373e1-23a7-4a85-9d3d-d8de003f1221',
          slug: 'heroince-tic-tac-too',
          title: 'Heroince tic tac too',
          subtitle: '7',
          medium: 'Lambda print',
          dimensions: '42x40cm',
          series: 'Kristal',
          edition: '25',
          price: 550,
          alt: 'test',
          inventory: 1,
          quantity: 1,
          image: {
            width: 1300,
            height: 910,
            filename: 'snow-white-kristal',
            alt: 'test'
          }
        }
      ])
      return commit('SET_SHOP_PRODUCTS', products)
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
