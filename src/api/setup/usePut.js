
import api from "./axios"

async function usePut(route, data) {
    const response = await api.put(route, data);
    return response
}

export default usePut