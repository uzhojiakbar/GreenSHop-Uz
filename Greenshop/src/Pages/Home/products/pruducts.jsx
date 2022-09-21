import React, { Component } from "react";
import DataProducts from "../../../Mock/data-products";
import Products from "../../../Components/sections/pruducts/index.jsx";
import './style.css'

class ProdutcsMain extends Component {
    state = {
        list: DataProducts
    }
    render() {
        let FilterProduct = ({ target: { value } }) => {
            let res = DataProducts.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({ list: res })
        }
        let get = () => {
            return this.state.list.map((value) => (
                <Products
                    image={value.image}
                    name={value.name}
                    price={value.price}
                    discount={value.discount}
                >
                </Products>
            ))
        }
        if (this.state.list.length){
            get()
        }else{
            return <Products>
                "Hech nima yoq"
            </Products>
        }
        return (
            <div>
                <form action="">
                    <input onChange={FilterProduct} type="text" placeholder=" input name" />
                </form>
                <div className="main-flowers">
                    {
                        get()
                    }
                </div>
            </div>
        )
    }
}


export default ProdutcsMain;