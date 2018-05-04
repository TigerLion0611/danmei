let baseUrl = getBaseUrl()
let urls = {
  customerInformationList: baseUrl + 'customerInformation/list'
}

function getBaseUrl () {
  let url = 'http://localhost:9090/'
  return url
}

export default urls
