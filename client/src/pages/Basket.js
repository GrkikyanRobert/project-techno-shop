import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../store/actions/device";
import {createBasket} from "../store/actions/basket";

const Basket = () => {


    const dispatch = useDispatch()


    const {product} = useSelector(state => state.toCart)
    const {myAccount} = useSelector(state => state.loginins)


    const deleteProduct = (id) => {
        dispatch(removeItem(id))
    }

    const postPraduct = (delId) => {
        const {id, phone} = myAccount
        dispatch(createBasket(1, delId.id, id, phone))
        dispatch(removeItem(delId.id))
    }


    return (
        <div>
            {product.length
                ?
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table className={"table-of-cart"}>
                            <thead>
                            <tr>
                                <th style={{paddingLeft: 20}}>название</th>
                                <th style={{paddingLeft: 20}} className="shoping__product">изображение</th>
                                <th style={{paddingLeft: 20}}>цена</th>
                                <th style={{paddingLeft: 20}}>Удалять</th>
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
                                                className="fa fa-remove"/> {item.price} Руб
                                            </span>
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span onClick={() => deleteProduct(item.id)} className=""><i
                                                className="fa fa-remove"/>   X</span>

                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <button onClick={() => postPraduct(item)} className="button buy">Заказ</button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <div className={"emptyCart"}>
                    <img src="https://rokket.ru/media/img/cart_empty.png" alt=""/>
                </div>
            }
        </div>
    );

}

export default Basket;
