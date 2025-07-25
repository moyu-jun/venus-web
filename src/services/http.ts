import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import type { R } from '@/types'

// 创建axios实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 添加认证token
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 添加请求时间戳
    config.metadata = { startTime: new Date() }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse<R<unknown>>) => {
    // 计算请求耗时
    const endTime = new Date()
    const startTime = response.config.metadata?.startTime
    if (startTime) {
      const duration = endTime.getTime() - startTime.getTime()
      console.log(`API请求耗时: ${duration}ms - ${response.config.url}`)
    }

    // 检查业务状态码
    if (response.data && response.data.code !== 0) {
      return Promise.reject(new Error(response.data.message || '请求失败'))
    }

    return response
  },
  (error: AxiosError) => {
    // 处理HTTP错误状态码
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 401:
          // 未授权，清除token并跳转登录
          localStorage.removeItem('auth_token')
          window.location.href = '/login'
          break
        case 403:
          console.error('权限不足')
          break
        case 404:
          console.error('请求的资源不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error(`请求失败: ${status}`)
      }

      // 如果后端返回了错误信息，使用后端的错误信息
      if (data && typeof data === 'object' && data !== null && 'message' in data) {
        error.message = (data as { message: string }).message
      }
    } else if (error.request) {
      // 网络错误
      error.message = '网络连接异常，请检查网络设置'
    }

    return Promise.reject(error)
  },
)

// 扩展axios配置类型以支持metadata
declare module 'axios' {
  interface InternalAxiosRequestConfig {
    metadata?: {
      startTime: Date
    }
  }
}

export default http
