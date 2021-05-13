import request from '@/utils/request'

export default {
  //轮播图数据查询
  getBannerList(){
    return request ({
      url: '/xiyuehome/banneruser/getAllBanner',
      method: 'get',
    })
  },
  getIndexList(){
    return request ({
      url: '/xiyuecourse/indexFront/index',
      method: 'get',
    })
  },
}