import request from '@/utils/request'


export default {
  getCurrentUser() {
    return request({
      url: `/admin/process/getCurrentUser`,
      method: 'get'
    })
  }
}
