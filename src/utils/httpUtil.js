export default {
  setGetParam: function (url, paramObject) {
    let param = '?'
    for (let i in paramObject) {
      let oneParam = i + '=' + paramObject[i]
      param += oneParam + '&'
    }
    param = param.substring(0, param.length - 1)
    return url + param
  }
}
