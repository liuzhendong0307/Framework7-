import * as types from './mutation-types';

export default {
  ADDNODEVOTE(state,voteNum=1){//这里的state即是上面定义的state常量
    state.nodeVoteCount+=voteNum;
  },
  //为vueVoteCount加1,voteNum为增加的值，默认加1
  ADDVUEVOTE(state,voteNum=1){//这里的state即是上面定义的state常量
    state.vueVoteCount+=voteNum;;
  }
  //示例
//[types.GET_USERINFO] (state, info) {
//  state.userInfo = info;
//},
//
};
