import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchCommentItem} from "@/api";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        return response;
      });
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => commit('SET_ASK', data))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => context.commit('SET_JOBS', response.data))
  },
  FETCH_USER({commit}, name) {
    fetchUserInfo(name)
      .then(({data}) => commit('SET_USER', data))
  },
  FETCH_ITEM({commit}, id) {
    fetchCommentItem(id)
      .then(({data}) => commit('SET_ITEM', data))
  }
}