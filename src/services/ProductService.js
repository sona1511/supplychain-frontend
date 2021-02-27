import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/products";

class ProductService {

    getProducts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createProduct(products){
        return axios.post(EMPLOYEE_API_BASE_URL, products);
    }

    getProductById(prod_id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + prod_id);

    }

    updateProduct(products, prod_id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + prod_id, products);
    }

    deleteProduct(prod_id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + prod_id);
    }
}

export default new ProductService()