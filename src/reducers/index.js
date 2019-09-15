export default (state = { place: 'hoge' }, action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      // stateは触らない、新しく生成しコピー後に書き換えたいところだけ別にセットする。
      return Object.assign({}, state, { place: action.place });
    default:
      return state;
  }
};
