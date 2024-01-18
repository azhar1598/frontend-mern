import axios from "axios";

let token: any = null;

export const callApi = (
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT",
    url: string,
    body?: any
) => {
    try {
        const instance = axios.create();
        if (!token)
            return instance({
                method,
                url: `${import.meta.env.VITE_API_URL}${url}`,
                data: body,
            });
        else {
            return instance({
                method,
                url: `${process.env.URL}${url}`,
                data: body,
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
            });
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
