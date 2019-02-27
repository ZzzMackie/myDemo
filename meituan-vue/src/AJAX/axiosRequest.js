import axios from '@/axios'

export default {
  // 获取搜索热词
  getSeachHotList (params) {
    return axios.get('/meituan/header/searchHotWords.json', params)
  },
  // 获取首页左边导航菜单列表
  getMenuList (params) {
    return axios.get('/meituan/index/nav.json', params)
  },
  // 获取首页推荐页
  resultsByKeywords (params) {
    return axios.get('/meituan/index/resultsByKeywords.json', params)
  },
  // 获取省份列表
  getProvinceList (params) {
    return axios.get('/meituan/city/province.json', params)
  },
  // 获取热门城市
  getHotCity (params) {
    return axios.get('/meituan/city/hot.json', params)
  },
  // 获取最近访问
  getRecentCity (params) {
    return axios.get('/meituan/city/recents.json', params)
  },
  // 搜索城市
  getCityList (params) {
    return axios.get('/meituan/city/cityList.json', params)
  },
  // 获取搜索列表
  getSearchList (params) {
    return axios.get('/meituan/header/search.json', params)
  },
  // 获取详情页
  getProducts (params) {
    return axios.get('/meituan/list/goodsList.json')
  },
  register (params) {
    return axios.get('/meituan/register', params)
  },
  login (params) {
    return axios.get('/meituan/login', {params})
  },
  getCurPoisition (params) {
    return axios.get('/meituan/city/getPosition.json', params)
  },
  getDetail (params) {
    return axios.get('/meituan/product/detail.json', params)
  },
  getRecommend (params) {
    return axios.get('meituan/list/recommend.json', params)
  }
}
