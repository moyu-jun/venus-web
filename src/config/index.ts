// 解析环境变量中的 boolean 值
const parseEnvBoolean = (value: string | undefined, defaultValue = false): boolean => {
  if (value === undefined) return defaultValue
  return value.toLowerCase() === 'true'
}

// 解析环境变量中的 number 值
const parseEnvNumber = (value: string | undefined, defaultValue = 0): number => {
  if (value === undefined) return defaultValue
  const parsed = parseInt(value, 10)
  return isNaN(parsed) ? defaultValue : parsed
}

// 环境变量参数
export const config = {
  appEnv: import.meta.env.VITE_APP_ENV,
  appTitle: import.meta.env.VITE_APP_TITLE,
  appPort: parseEnvNumber(import.meta.env.VITE_APP_PORT, 3000),
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  isMock: parseEnvBoolean(import.meta.env.VITE_ENABLE_MOCK, false),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
