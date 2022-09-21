import React, { Component } from "react";
import './style.css'

class Products extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                <p>{this.props.children}</p>
                <div className="flower">
                    <div className="img">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="about-flower">
                        <div className="name-product">{this.props.name}</div>
                        <div className="price-main">
                            <div className="price-product">{this.props.price}$</div>
                            <div className="discount">${this.props.discount}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;