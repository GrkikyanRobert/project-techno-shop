import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AllBasket} from "../../store/actions/basket";
import {UpdatebasketAdmin} from "../../store/actions/device";


const AdminBasket = () => {

    const dispatch = useDispatch()

    const {basketAll} = useSelector(state => state.basket)

    useEffect(() => {
        dispatch(AllBasket())
    }, [])

    const removeToHistory = async () => {
        dispatch(UpdatebasketAdmin())
        dispatch(AllBasket())
    }

    return (
        <div className="">

            <table className={"table-of-cart"}>
                <thead>
                <tr>
                    <th>Product id</th>
                    <th className="shoping__product">User id</th>
                    <th>Count</th>
                    <th>phone</th>

                </tr>
                </thead>
                <tbody>
                {
                    basketAll.map((item) => (
                        <tr key={Math.random() * 1000000}>
                            <td className="shoping__cart__item">

                                <h5>{item.praductId}</h5>
                            </td>
                            <td className="shoping__cart__price">
                                {item.userId}
                            </td>
                            <td className="shoping__cart__item__close">
                                            <span className=""><i
                                                className="fa fa-remove"/> {item.count}
                                            </span>
                            </td>
                            <td className="shoping__cart__item__close">
                                            <span className=""><i
                                                className="fa fa-remove"/> {item.phone}
                                            </span>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
            <button className={"btn btn-primary"}
                    onClick={removeToHistory}
            >
                Удалить историю
            </button>
        </div>
    );
}


export default AdminBasket;
