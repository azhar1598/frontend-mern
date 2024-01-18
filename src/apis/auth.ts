import { apiHandler } from "./apiHandler"

export const login = (data:any) =>
    apiHandler('url', 'POST', data)