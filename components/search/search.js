// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    search: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    titletap(e) {
      // 获取点击的索引
      const { index } = e.currentTarget.dataset
      this.triggerEvent("titletap", index)
    }
  }
})
