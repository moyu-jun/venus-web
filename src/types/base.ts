// API 接口统一响应
export interface R<T> {
  code: number
  message: string
  data: T
}

// API 接口分页响应数据类型
export interface PageResult<T> {
  total: number
  list: Array<T>
}

// API 接口分页请求数据类型
export interface PageQuery {
  page: number
  size: number
}
