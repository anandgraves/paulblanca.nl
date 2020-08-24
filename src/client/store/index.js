const state = () => ({
  shopProductList: [
    {
      slug: 'selfportrait-mother-and-son-2014',
      series: '',
      year: 2014,
      title: 'Selfportrait Mother And Son',
      description: `<p>I regularly make selfportraits that reflect my life. This photo is a selfportrait where I carry my mother, just like I had carried her to bed for 4 years because she couldn't walk. It was taken 32 years after the first "Selfportrait Mother & Son 1982". <a href="https://www.npostart.nl/fotostudio-de-jong-6/15-02-2014/VPWON_1209690" target="_blank" rel="noopener noreferrer">Watch the episode of Dutch tv programme 'Fotostudio de Jong'</a> where the selfportrait "Mother & Son 2014" had been discussed with Wilfried de Jong.</p>`,
      edition: {
        '30x40cm': '1 of 10',
        '40x50cm': '1 of 10',
        '100x120cm': '1 of 10',
      },
      prices: {
        '30x40cm': {
          none: 1900,
          dibond: 2800,
          plexiglass: 3400,
        },
        '40x50cm': {
          none: 3800,
          dibond: 4000,
          plexiglass: 4200,
        },
        '100x120cm': {
          none: 8000,
          dibond: 8200,
          plexiglass: 8400,
        },
      },
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
      title: 'Mother and Daughter Monique & Anika',
      edition: {
        '30x40cm': '1 of 10',
        '40x50cm': '1 of 10',
        '100x120cm': '1 of 10',
      },
      prices: {
        '30x40cm': {
          none: 1900,
          dibond: 2800,
          plexiglass: 3400,
        },
        '40x50cm': {
          none: 3800,
          dibond: 4000,
          plexiglass: 4200,
        },
        '100x120cm': {
          none: 8000,
          dibond: 8200,
          plexiglass: 8400,
        },
      },
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
      title: 'Par La Pluie Des Femmes',
      edition: {
        '30x40cm': '1 of 10',
        '40x50cm': '1 of 10',
        '100x120cm': '1 of 10',
      },
      prices: {
        '30x40cm': {
          none: 1900,
          dibond: 2800,
          plexiglass: 3400,
        },
        '40x50cm': {
          none: 3800,
          dibond: 4000,
          plexiglass: 4200,
        },
        '100x120cm': {
          none: 8000,
          dibond: 8200,
          plexiglass: 8400,
        },
      },
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
      title: 'Deformation',
      edition: {
        '30x40cm': '1 of 10',
        '40x50cm': '1 of 10',
        '100x120cm': '1 of 10',
      },
      prices: {
        '30x40cm': {
          none: 1900,
          dibond: 2800,
          plexiglass: 3400,
        },
        '40x50cm': {
          none: 3800,
          dibond: 4000,
          plexiglass: 4200,
        },
        '100x120cm': {
          none: 8000,
          dibond: 8200,
          plexiglass: 8400,
        },
      },
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