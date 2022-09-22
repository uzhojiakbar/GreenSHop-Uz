import React, { Component } from "react";
import DataProducts from "../../../Mock/data-products";
import AllProducts from "../../../Components/sections/pruducts/index.jsx";
import './style.css'
import search from '../../../Assets/search.gif'
import ShopPage from "../../../Pages/Shop";

class ProdutcsMain extends Component {
    state = {
        list: DataProducts
    }
    render() {
        let FilterProduct = ({ target: { value } }) => {
            let res = DataProducts.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({ list: res })
        }
        let FilterProductPrice = ({ target: { value } }) => {
            let res = DataProducts.filter((item) => String(item.price).includes(value))
            this.setState({ list: res })
        }
        let FilterDiscount = ({ target: { value } }) => {
            let res = DataProducts.filter((item) => value == 0 ? item.discount > 0 : item.discount < 0)
            this.setState({ list: res })
        }
        let get = () => {
            return this.state.list.map((value) => (
                <AllProducts className="Products"
                    image={value.image}
                    name={value.name}
                    price={value.price}
                    discount={value.discount}
                >
                </AllProducts>
            ))
        }
        if (this.state.list.length){
            get()
        }else{
            return <div>
                <form className="forms" action="">
                    <input className="input" onChange={FilterProduct} type="text" placeholder=" name, e.g: Broadleaf " />
                    <input className="input" onChange={FilterProductPrice} type="number" placeholder="price, e.g: 20" />
                </form>
                <div className="Eroooor"> 
                    <p className="erooooooor">Hech nima mavjud emas</p>
                    <img src={search} alt="" />
                </div >
            </div>
        }
        return (
            <div>
                <form className="forms" action="">
                    <input className="input" onChange={FilterProduct} type="text" placeholder=" name, e.g: Broadleaf " />
                    <input className="input" onChange={FilterProductPrice} type="number" placeholder="price, e.g: 20" />
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