import { basicRequest } from '../axios/AxiosCreate';

export const adminLogin = async (data) => {
    try {
        var response = await basicRequest.post('/Admin/Admin-login', {
            adminEmail: data.email,
            adminPassword: data.password
        })
        return response;
    }
    catch (error) {
        console.error("Error in adminLogin:", error);
        throw error;
    }
}

