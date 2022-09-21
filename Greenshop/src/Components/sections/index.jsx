import React, { Component } from "react";
import './style.css'
import trashicon from '../../Assets/img/trash.png'

class ShopSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            subtotal: 0,
        };
    }
    render() {
        let totalprice = this.props.price * this.state.counter;
        let pr = this.props;
        let pluss = () => {
            this.setState({
                counter: this.state.counter + 1,
            })
        }
        let minuss = () => {
            this.setState({
                counter: this.state.counter > 0 ? this.state.counter - 1 : this.state.counter,
            }
            )
        }
        let clear = () => {
            this.setState({
                counter: 0,
            })
        }
        return (
            <div className="ShopCard">
                <div className="name">
                    <div className="img">
                        <img src={this.props.img} alt="" />
                    </div>
                    <div className="title">
                        <p className='tit'>{pr.title}</p>
                        <p className="SKU"> <span>SKU:</span> {pr.SKU}</p>
                    </div>
                </div>
                <p className="price">
                    {pr.price} $
                </p>
                <p className="quantity">
                    <button onClick={pluss}>+</button>
                    {this.state.counter}
                    <button onClick={minuss}>-</button>
                </p>
                <p className="total">
                    {totalprice}$
                </p>
                <button onClick={clear} className='trash'>
                    <img src={trashicon} alt="" />
                </button>
            </div>
        )
    }
}
export default ShopSection;