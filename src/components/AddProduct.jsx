import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class AddProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            prod_id: this.props.match.params.prod_id,
            prodName: '',
            prodBrand: '',
            prodPrice: ''
        }
        this.changeProdNameHandler = this.changeProdNameHandler.bind(this);
        this.changeProdBrandHandler = this.changeProdBrandHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.prod_id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.prod_id).then( (res) =>{
                let product = res.data;
                this.setState({prodName: product.prodName,
                    prodBrand: product.prodBrand,
                    prodPrice : product.prodPrice
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName, prodBrand: this.state.prodBrand, prodPrice: this.state.prodPrice};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.prod_id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.prod_id).then( res => {
                this.props.history.push('/products');
            });
        }
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
   
    getTitle(){
        if(this.state.prod_id === '_add')
        {
            return <h3 className="text-center">Add Product </h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                   <br /> <br />
                    <br /> <br />


                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                
                                <div className = "card-body">
                                    <form>
                                    <br /> 
                                        <div className = "form-group">
                                            <label> Product  Name: </label>
                                            <input placeholder="Product Name" name="prodName" className="form-control" 
                                                value={this.state.prodName} onChange={this.changeProdNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Brand: </label>
                                            <input placeholder="Product Brand" name="prodBrand" className="form-control" 
                                                value={this.state.prodBrand} onChange={this.changeProdBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="prodPrice" className="form-control" 
                                                value={this.state.prodPrice} onChange={this.changeProdPriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
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

export default AddProduct
