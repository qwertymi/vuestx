import axios from 'axios'

const state = {
  gnbData: [],
  noticeData: [],
  newsData: []
};

const actions = {
  // gnb.json 데이터를 axois 로 받아옴
  fetchgnbData({
    commit
  }) {
    axios.get('./data/gnb.json')
      .then(response => {
        commit('UPDATE_GNB', response.data)
      })
      .catch(err => console.log(err))
  },
  fetchNewsData({commit}) {
    // news.josn axois로 호출
    axios.get('./data/news.json')
      .then(response => {
        commit('UPDATE_NEWS',response.data)
      })
      .catch(err => console.log(err))
  },
  fetchNoticeData({commit}) {
    axios.get('./data/notice.json')
    .then(response => {
      commit('UPDATE_NOTICE',response.data)
    })
      .catch(err => console.log(err))
  }
};

const mutations = {
  UPDATE_GNB(state, payload) {
    console.log(payload)
    state.gnbData = payload;
  },
  UPDATE_NEWS(state,payload){
    state.newsData = payload
  },
  UPDATE_NOTICE(state,payload){
    state.noticeData = payload
  }

};

const getters = {
  getGnbData(state) {
    return state.gnbData;
  },
  getNoticeData(state) {
    return state.noticeData;
  },
  getNewsData(state) {
    return state.newsData;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}