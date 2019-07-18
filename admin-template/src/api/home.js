import request from '@/utils/request'

export function getMenuList() {
  return request({
    url: '/api/v1/menu',
    method: 'get'
  })
}
