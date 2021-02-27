import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
    }
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
}

deleteProduct(prod_id){
    ProductService.deleteProduct(prod_id).then( res => {
        this.setState({products: this.state.products.filter(product => product.prod_id !== prod_id)});
    });
}
viewProduct(prod_id){
    this.props.history.push(`/view-product/${prod_id}`);
}
editProduct(prod_id){
    this.props.history.push(`/add-product/${prod_id}`);
}

componentDidMount(){
    ProductService.getProducts().then((res) => {
        this.setState({ products: res.data});
    });
    
}

addProduct(){
    this.props.history.push('/add-product/_add');
}

render() {
    return (
        <div>
            <bbr></bbr>
            <br/>
             <br/>
             <br/>
             <br/>    
             <h2 className="text-center">Product List</h2>
             <bbr> </bbr><br/>
             <div className = "row">
                 <br /> <br />
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product Name</th>
                                <th> Product Brand</th>
                                <th> Product Price</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product => 
                                    <tr key = {product.prod_id}>
                                         <td> {product.prodName} </td>   
                                         <td> {product.prodBrand}</td>
                                         <td> {product.prodPrice}</td>
                                         <td>
                                             <button onClick={ () => this.editProduct(product.prod_id)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.prod_id)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.prod_id)} className="btn btn-info">View </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>
             <div className = "row">
                 <div class ="text-right">
                 <button className="btn btn-secondary" onClick={this.addProduct}> Add Product</button>
                 </div>
                
             </div>
           

        </div>
        
    )
}
}


export default ListProductComponent
