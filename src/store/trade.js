import api from '@/api'

const TRADE_SET = 'TRADE_SET'
const TRADE_LIST_GET = 'TRADE_LIST_GET'
const TRADE_ADD = 'TRADE_ADD'

export default {
  state: {
    tradeList: []
  },
  mutations: {
    [TRADE_SET] (state, params) {
      state[params.target] = params.data
    }
  },
  actions: {
    [TRADE_LIST_GET] ({commit}, params) {
      return api.get('/api/user/trade_list').then(res => {
        commit('SET_USER_TRADE_LIST', res.data)
      })
    },
    [TRADE_ADD] ({commit, dispatch}, params) {
      return api.post('/api/user/trade_add', params).then(res => {
        dispatch('TRADE_LIST_GET')
        return res
      })
    }
  }
}
