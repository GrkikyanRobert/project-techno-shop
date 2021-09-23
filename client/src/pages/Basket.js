import React, {Component} from 'react';
import {connect} from "react-redux";
import {AddToCart, removeItem} from "../store/actions/device";
import {createBasket} from "../store/actions/basket";

class Basket extends Component {


    deleteProduct = (id) => {

        this.props.removeItem(id)
    }

    postPraduct=(delId)=>{
       const {id, phone}=this.props.myAccount

      this.props.createBasket(1,delId.id,id,phone)

        this.props.removeItem(delId.id)
    }


    render() {
        const {product} = this.props

        return (
            <div>
                {product.length? <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table className={"table-of-cart"}>
                            <thead>
                            <tr >
                                <th style={{paddingLeft:20}} >название</th>
                                <th style={{paddingLeft:20}}  className="shoping__product">изображение </th>
                                <th style={{paddingLeft:20}} >цена</th>
                                <th style={{paddingLeft:20}} >Удалять</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                product.map((item) => (
                                    <tr key={Math.random() * 1000000}>
                                        <td className="shoping__cart__item">

                                            <h5>{item.name}</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            <img className="shoping__cart__img" src={item.img} alt=""/>
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className=""><i
                                                // onClick={() =>removeItem(item.title)}
                                                className="fa fa-remove"/> {item.price} Руб
                                            </span>
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span onClick={()=>this.deleteProduct(item.id)} className=""><i
                                                // onClick={() =>removeItem(item.title)}
                                                className="fa fa-remove"/>   X</span>

                                        </td>

                                        <td className="shoping__cart__item__close">
                                            <button onClick={()=>this.postPraduct(item)} className="button buy">Заказ</button>

                                        </td>


                                    </tr>

                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>:
                    <div className={"emptyCart"} >
                        <img src="https://rokket.ru/media/img/cart_empty.png" alt=""/>
                    </div>

                }

            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    product: state.toCart.product,
    myAccount: state.loginins.myAccount,
})

const mapDispatchToProps = {
    AddToCart,
    removeItem,
    createBasket
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Basket)


export default Container;

