import api from "./axios"

async function useGet(param) {
    const data = await api.get(param);
    return data;
}

export default useGet