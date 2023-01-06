export { }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      SECRET_TOKEN: string
      SECRET_REFRESH_TOKEN: string
      EXPIRES_IN_TOKEN: string
      EXPIRES_IN_REFRESH_TOKEN: string
    }
  }
}