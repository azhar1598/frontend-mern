import { callApi } from "./apiHandler"

export const loginApi = (payload: any) =>
    callApi('POST', '/auth/login', payload)