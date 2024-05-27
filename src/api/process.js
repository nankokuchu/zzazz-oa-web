import request from '@/utils/request'

const API_PATH = '/admin/process'

export default {

  // 全てのプロセスタイプとプロセステンプレートを取得
  findProcessType() {
    return request({
      url: `${API_PATH}/findProcessType`,
      method: 'get'
    })
  },

  // 個別プロセステンプレートのデータを取得
  getProcessTemplate(processTemplateId) {
    return request({
      url: `${API_PATH}/getProcessTemplate/`+processTemplateId,
      method: 'get'
    })
  },

  // プロセスの作成
  startUp(processFormVo) {
    return request({
      url: `${API_PATH}/startUp`,
      method: 'post',
      data: processFormVo
    })
  },
}
