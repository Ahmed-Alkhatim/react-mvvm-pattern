import api from "./axios"

async function usePost(route, data) {
    const response = await api.post(route, data);
    return response}

export default usePost