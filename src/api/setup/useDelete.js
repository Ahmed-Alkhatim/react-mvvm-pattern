import api from "./axios"

async function useDelete(route, params) {
    const data = await api.delete(route, { params });
    return data;
}

export default useDelete
