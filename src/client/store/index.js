const state = () => ({
  shopProductList: [
    {
      slug: 'selfportrait-mother-and-son-2014',
      series: '',
      year: 2014,
      title: 'Selfportrait Mother And Son 2014',
      image: {
        width: 900,
        height: 900,
        filename: 'paulblanca-selfportrait-mother-and-son-2014-900w',
        type: 'jpg',
        alt: 'Selfportrait Mother And Son 2014, by Paul Blanca',
      },
    },
    {
      slug: 'mother-and-daughter-monique-v-and-anika-2008',
      series: 'Kristal',
      year: 2008,
      title: 'Chokochoko - Kristal 2008',
      image: {
        width: 627,
        height: 627,
        filename: 'chokochoko-kristal-900w',
        type: 'jpg',
        alt: 'Chokochoko - Kristal 2008, by Paul Blanca',
      },
    },
    {
      slug: 'par-la-pluie-des-femmes-1-1990',
      series: 'Par La Pluie Des Femmes',
      year: 1990,
      title: 'Par La Pluie Des Femmes 1990',
      image: {
        width: 787,
        height: 787,
        filename: 'crying-girls-900w',
        type: 'jpg',
        alt: 'Par La Pluie Des Femmes - Crying Girls 1990, by Paul Blanca',
      },
    },
    {
      slug: 'deformation-1-2006',
      series: 'Deformation',
      year: 2006,
      title: 'Deformation 2006',
      image: {
        width: 900,
        height: 900,
        filename: 'deformation-900w',
        type: 'jpg',
        alt: 'Deformation 2006, by Paul Blanca',
      },
    },
  ],
})

const getters = {
  shopProductList: (state) => {
    return state.shopProductList
  },
}

const mutations = {
  SET_SHOP_PRODUCTS(state, payload) {
    state.shopProductList = payload
  },
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
