import React, { Component } from "react";
import ShopSection from "../../Components/sections";
import Products from "../../Mock/data";
import './style.css'

class ShopPage extends Component {
    render() {
        return (
            <div className="Main">
                <div className="ShopProducts">
                    {Products.map((value) => (
                        <ShopSection img={value.img}
                            title={value.title}
                            price={value.price}
                            SKU={value.SKU}
                            quantity={value.quantity}
                        >
                        </ShopSection>
                    ))}
                </div>
            </div>
        )
    }
}

export default ShopPage;