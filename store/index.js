export const state = () => ({
  products: [
    {
      uuid: 'c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
      title: 'Domestic Abuse',
      series: 'Kristal',
      price: 400,
      thumbnailUrl: '/images/thumbnail.jpg'
    }
  ],
  inCart: []
})

export const getters = {
  inCart: state => state.inCart,
  inCartCount: state => state.inCart.length
}

export const mutations = {
  addToCart(state, uuid) {
    const selectedProduct = state.products.find(
      product => product.uuid === uuid
    )
    const hasSelectedProductInCart = state.inCart.find(
      product => product.uuid === uuid
    )
    if (!hasSelectedProductInCart) {
      state.inCart.push(selectedProduct)
    }
  }
}
