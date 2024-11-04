import { _BASE_API_URL } from "@/constants";
import axios from "axios";

export class FetchAllVendors {
    private static all_vendors = `${_BASE_API_URL}/api/Vendor/all-vendors`

    static async getAllVendors(): Promise<any> {
        try {
            const response = await axios.get(FetchAllVendors.all_vendors, {
                headers: {
                accept: 'text/plain', // Set the Accept header as required
                },
            })
             return response.data;
        } catch (error) {
            console.error('Error fetching vendors:', error);
            throw error;
        }
    }

    static async getVendorsById(id: string): Promise<any> {
        try {
            const response = await axios.get(`${_BASE_API_URL}/api/Vendor/vendor/${id}`)
            return response.data;
        } catch (error) {
            console.error('Error fetching vendors:', error);
            throw error;
        }
    }
}