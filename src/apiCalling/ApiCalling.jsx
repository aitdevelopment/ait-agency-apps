import axios from 'axios'

export const getProudects = async()=>{
    // todo 
    try {
        const proudects = await axios.get("https://fakestoreapi.com/products");
        // console.log(proudects.data)
        if(proudects.status === 200){
            return proudects.data;
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
}
export const getProductByCategory=async(id)=>{
    // todo 
    try {
        const proudect = await axios.get(`https://fakestoreapi.com/products/category/${id}`);
        // console.log(proudects.data)
        if(proudect.status === 200){
            return proudect.data;
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
}
export const getProductById= async(id)=>{
    try {
        const proudect = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(proudects.data)
        if(proudect.status === 200){
            return proudect.data;
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
}
const getProductByLimit=()=>{
    // todo 
}

export const getAllCategory = async()=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        return response.data;
    } catch (error) {
        
    }
}