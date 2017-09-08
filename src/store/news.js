import api from '@/api'

const NEWS_SET = 'NEWS_SET'
const NEWS_LIST_GET = 'NEWS_LIST_GET'
const NEWS_DETAIL_GET = 'NEWS_DETAIL_GET'
const NEWS_EDIT = 'NEWS_EDIT'
const NEWS_DELETE = 'NEWS_DELETE'

export default {
  state: {
    newsId: '',
    newsList: []
  },
  mutations: {
    [NEWS_SET] (state, params) {
      state[params.target] = params.data
    }
  },
  actions: {
    [NEWS_LIST_GET] ({commit}, params) {
      let url = '/api/news'
      if (params) {
        url += '?key=' + params.key
      }
      return api.get(url).then(res => {
        return res
      })
    },
    [NEWS_DETAIL_GET] ({commit, dispatch}, params) {
      return api.get(`/api/news/${params.id}/`).then(res => {
        return res
      })
    },
    [NEWS_EDIT] ({commit, dispatch}, params) {
      return api.post('/api/news', params).then(res => {
        dispatch('NEWS_LIST_GET')
        return res
      })
    },
    [NEWS_DELETE] ({commit, dispatch}, params) {
      return api.delete(`/api/news/${params.id}/`).then(res => {
        return res
      })
    }
  }
}
