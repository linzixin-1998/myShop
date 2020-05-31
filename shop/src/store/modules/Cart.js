const state = {
  cartList: "",//所有商品
  selectedList: [],//选中的商品
  unSelectedList: [],//未选中的商品
  selectAll: false,
  //total: 0
}

const mutations = {
  //设置所有购物车所有商品数据
  setCartList(state, res) {
    state.cartList = res
    //过滤出选中和未选中的
    this.commit("filterState")
  },

  //将购物车列表中选中和未选中的都过滤出来
  filterState: function (state) {
    state.selectedList = []
    state.unSelectedList = []
    state.cartList.forEach(d => {
      if (d.check) {
        state.selectedList.push(d);
      } else {
        state.unSelectedList.push(d);
      }
    });
  },

  // 点击每个item将是否选中状态取反，再遍历是否所有item全为选中状态，最后过滤出选中和未选中的
  clickSelect(state, index) {
    state.cartList[index].check = ! state.cartList[index].check;
    state.selectAll = true
    state.cartList.forEach(d => {
      if (!d.check) {
        return (state.selectAll = false);
      }
    });
    this.commit("filterState")
    //console.log(state.cartList[index])
  },
  
  //点击全选按钮时
  clickSelectAll(state) {
    state.selectAll = !state.selectAll
    state.cartList.forEach(item => {
      item.check = state.selectAll;
    });
    this.commit("filterState")
  },

  
  //点击删除或者支付时触发事件
  payOrDelete(state) {
    state.cartList = state.unSelectedList
    state.selectedList=[]
  },




  addNum(state,index){
      state.cartList[index].num+=1
  },
  reduceNum(state,index){
    if(state.cartList[index].num>1){
      state.cartList[index].num-=1
    }
    
}
}


const getters = {
  //计算商品总价格
  total: function (state) {
    let total = 0;
    state.selectedList.forEach(item => total += item.num * item.price);
    return total
  },


}
export default {
  state,
  mutations,
  getters
}
