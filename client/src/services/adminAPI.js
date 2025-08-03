import { AdminRequest } from '../axios/AxiosCreate';

export const adminApi = async (data) => {
    try {
        var response = await AdminRequest.post('/Admin/Admin-login', data)
        return response;
    } 
    catch (error) {
        console.error("Error in adminApi:", error);
    }
}

