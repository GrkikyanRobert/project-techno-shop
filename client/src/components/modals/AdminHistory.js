import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UpdatebasketAdminGet} from "../../store/actions/device";


const AdminHistory = () => {
    const dispatch = useDispatch()

    const {AdminBasketAll} = useSelector(state => state.device)

    useEffect(() => {
        dispatch(UpdatebasketAdminGet())
    }, [])


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
                    AdminBasketAll.map((item) => (
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

        </div>
    );

}

export default AdminHistory;
