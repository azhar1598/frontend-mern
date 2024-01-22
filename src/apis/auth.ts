import { callApi } from "./apiHandler"

export const loginApi = async (payload: any) => {
    try {
        const res = await callApi('POST', '/auth/login', payload);
        return res;
    } catch (error: any) {
        return error.response; // Rethrow the error to be handled in the calling function
    }
}