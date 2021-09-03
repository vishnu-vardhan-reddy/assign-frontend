import axios from "../Axios";

export const productsResponse = async () => {
    try {
        const response = await axios({
            method: "get",
            url: '/v1/product'
        })
        if(response){
            console.log(response.data)
            return response.data;
        }
    } catch (error) {
        console.log(error.response)
    }
} 