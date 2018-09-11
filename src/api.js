import axios from 'axios'

const _domain = "http://www.shanghaifoxie.com";

export default {
  /**
   * 获取一级信息
   * @param params
   * @returns {AxiosPromise<any>}
   * indexType - 1：首页 2：本会介绍 3：新闻中心 4：政策法规 5：慈善公益 6：名寺宝刹
   * pageNo:1 - 从1开始，由前端控制
   * pageSize - 每页大小，由前端控制
   */
  getLevel1(params){
   return axios.get(`${_domain}/web/api/pageIndex`,{params:params});
  },

  /**
   * 获取二级信息
   * @param params
   * @returns {AxiosPromise<any>}
   * type:
   * 1.领导成员 2.现任会长 3.历届领导 4.沪佛春秋, 5.沪佛动态
   * 6.各地法讯, 7.放眼世界, 8.国家政策, 9.佛教制度,10.地方法规
   * 11.表格下载, 12.慈悲新闻, 13.慈悲喜舍, 14.名寺宝刹, 15.地图导览
   * 16.上海佛协, 17.慈善公益 18.当代 19.近代 20.古代
   */
  getLevel2(params){
    return axios.get(`${_domain}/web/api/sort_article`,{params:params});
  },

  /**
   * 获取详情
   * @param params
   * @returns {AxiosPromise<any>}
   */
  getDetails(params){
    return axios.get(`${_domain}/web/api/detail`,{params:params})
  },

  /**
   * 搜索
   * @param {*} params
   */
  getSearch(params){
    return axios.get(`${_domain}/web/api/search`,{params:params})
  }
}
