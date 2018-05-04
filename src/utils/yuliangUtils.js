export default {
  width: window.innerWidth / 1440,
  getTableWidth: function (ths) {
    let width = 0
    for (let i in ths) {
      let words = ths[i]
      width += this.getWidthByWords(words) + this.width * 20
    }
    return width + 'px'
  },
  getWidthByWords: function (words) {
    let width = 0
    // /.*[\u4e00-\u9fa5]+.*/ 是否包含中文
    let regex = /[\u4e00-\u9fa5]/ // 是否是中文
    if (words) {
      for (let i in words) {
        if (regex.test(words[i])) {
          width += this.width * 100
        } else {
          width += this.width * 8
        }
      }
    }
    return width
  }
}
