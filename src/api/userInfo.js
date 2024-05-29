import request from '@/utils/request'


export default {
  getCurrentUser() {
    return request({
      url: `/admin/system/sysUser/getCurrentUser`,
      method: 'get'
    })
  }
}
