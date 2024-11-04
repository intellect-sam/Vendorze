import axios from "axios";

class AuthServices {
    static async login(email: string, password: string) {
        const response = await axios.post("")
        if (response.data){
            sessionStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
    }

    static logout() {
        sessionStorage.removeItem('user');
    }

    static getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('user') || 'null');
    }
}