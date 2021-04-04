import axios from '@/axios'

export default {
    state: {
        carts: [],
        cart: []
    },
    getters: {
        shoppingCart: state => {
            return state.cart
        },
        cartItemCount: state => {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        },
        cartTotal: state => {
            let total = 0
            if(state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        }
    },
    mutations: {
        ADD_TO_CART: (state, { product, quantity }) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += quantity
                return
            }
            state.cart.push({product, quantity})
        },
        DELETE_ITEM: (state, id) => {
            state.cart = state.cart.filter(item => item.product._id !== id)
        },

        SUB_ONE: (state, item) => {
            item.quantity -= 1
        },
        ADD_ONE: (state, item) => {
            item.quantity += 1
        },

        GET_CARTS: (state, carts) => {
            state.carts = carts
        },
        GET_CART: (state, cart) => {
            state.cart = cart
        },
        CLEAR_CART: state => state.cart = null
    },
    actions: {
        addProductToCart: ({commit}, { product, quantity }) => {
            commit('ADD_TO_CART', { product, quantity })
        },
        deleteItem: ({commit}, id) => {
            commit('DELETE_ITEM', id)
        },

        subOne: ({commit}, item) => {
            if(item.quantity <= 1) {
                commit('DELETE_ITEM', item.product._id)
                return
            }
            commit('SUB_ONE', item)
        },
        addOne: ({commit}, item) => {
            commit('ADD_ONE', item)
        },

        saveCart: async ({dispatch}, _cart) => {
            const cart = {
                user: _cart.user,
                name: _cart.name,
                items: _cart.items,
                cartTotal: _cart.cartTotal
            }
            await axios.post('/carts/new', _cart)
            dispatch({cart})
        },

        getAllCarts: async ({commit}) => {
            const res = await axios.get('/carts')
            commit('GET_CARTS', res.data)
        },
        getACart: async ({commit}, id) => {
            const res = await axios.get('/carts/' + id)
            commit('GET_CART', res.data)
        },
        clearCart: ({commit}) => {
            commit('CLEAR_CART')
        }
    }
}