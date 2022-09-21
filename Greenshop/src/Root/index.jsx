import React, { Component, Fragment } from "react";
import ShopPage from "../Pages/Shop";
import ProdutcsMain from "../Pages/Home/products/pruducts";

class Root extends Component{
    render(){
        return (
            <Fragment>
                {/* <ShopPage></ShopPage> */}
                <ProdutcsMain></ProdutcsMain>
            </Fragment>
        )
    }
}

export default Root;