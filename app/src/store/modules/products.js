import axios from '@/axios'


export default {
    state: {
        products: [],
        product: null
    },
    getters: {
        products: state => state.products,
        product: state => state.product
    },
    mutations: {
        GET_PRODUCTS: (state, products) => {
            state.products = products
        },
        GET_PRODUCT: (state, product) => {
            state.product = product
        },
        CLEAR_PRODUCT: state => state.product = null
    },
    actions: {
        getAllProducts: async ({commit}) => {
            const res = await axios.get('/products')
            commit('GET_PRODUCTS', res.data)
        },
        getAProduct: async ({commit}, id) => {
            const res = await axios.get('/products/' + id)
            commit('GET_PRODUCT', res.data)
        },
        clearProduct: ({commit}) => {
            commit('CLEAR_PRODUCT')
        }
    }
}