import React, { Component } from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import Products from "../../../Mock/data";
import ShopPage from "../../../Pages/Shop";

class AllProducts extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        data: Products
    }
    render() {
        let addtoSHop = () => {
            console.log(Products)
            this.setState(
                {data: [
                    ...this.state.Products,
                    {title:'salom'}
                ]}
            )
        }
        let CHegirmaniHisobla = () => {
            if (this.props.discount > 0) {
                let OradagiNarx = this.props.discount - this.props.price
                let Foiz = this.props.discount / 100
                let javob = Math.floor(OradagiNarx / Foiz)
                return <p className="chegirmafoiz">{javob}% OFF</p>
            }
        }
        let discount = () => {
            if (this.props.discount > 0) {
                let OradagiNarx = this.props.discount - this.props.price
                let Foiz = this.props.discount / 100
                let javob = Math.floor(OradagiNarx / Foiz)
                return <div className="discount">
                    {this.props.discount}  $
                </div>
            }
        }
        return (
            <div className="main">
                {CHegirmaniHisobla()}
                <div className="flower">
                    <div className="img">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="about-flower">
                        <div className="name-product">{this.props.name}</div>
                        <div className="price-main">
                            <div className="price-product">
                                {this.props.price}$
                            </div>
                            <div className="discount">
                                {
                                    discount()
                                }
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <button onClick={addtoSHop} className="shopcart FontAwesomeIcon" >
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                        <button className="shopcart FontAwesomeIcon" >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className="shopcart FontAwesomeIcon" >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
}


export default AllProducts;