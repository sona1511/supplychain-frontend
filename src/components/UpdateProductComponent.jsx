import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prod_id: this.props.match.params.prod_id,
             prodName: '',
            prodBrand: '',
            prodPrice: ''
        }
        this.changeProdNameHandler = this.changeProdNameHandler.bind(this);
        this.changeProdBrandHandler = this.changeProdBrandHandler.bind(this);
        this.changeProdPriceHandler = this.changeProdPriceHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.prod_id).then( (res) =>{
            let product = res.data;
            this.setState({prodName: product.prodName,
                prodBrand: product.prodBrand,
                prodPrice : product.prodPrice
            });
        });
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName, prodBrand: this.state.prodBrand, prodPrice: this.state.prodPrice};
        console.log('product => ' + JSON.stringify(product));
        console.log('prod_id => ' + JSON.stringify(this.state.prod_id));
        ProductService.updateProduct(product, this.state.prod_id).then( res => {
            this.props.history.push('/products');
        });
    }
     
    changeProdNameHandler= (event) => {
        this.setState({prodName: event.target.value});
    }

    changeProdBrandHandler= (event) => {
        this.setState({prodBrand: event.target.value});
    }

    changeProdPriceHandler= (event) => {
        this.setState({prodPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Product Name: </label>
                                            <input placeholder="First Name" name="prodName" className="form-control" 
                                                value={this.state.prodName} onChange={this.changeProdNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Brand: </label>
                                            <input placeholder="Brand" name="prodBrand" className="form-control" 
                                                value={this.state.prodBrand} onChange={this.changeProdBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Product Price: </label>
                                            <input placeholder="Price" name="emailId" className="form-control" 
                                                value={this.state.prodPrice} onChange={this.changeProdPriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}


export default UpdateProductComponent
