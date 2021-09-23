import React, {Component} from 'react';
import {connect} from "react-redux";
import {UpdatebasketAdmin, UpdatebasketAdminGet} from "../../store/actions/device";

class AdminHistory extends Component {

 async   componentDidMount (){
      await  this.props.UpdatebasketAdminGet()
    }


    render() {
        const {AdminBasketAll} = this.props
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
}
const mapSateToProps = (state) => ({
    basketAll:state.basket.basketAll,
    AdminBasketAll:state.device.AdminBasketAll
})

const mapDispatchToProps = {
    UpdatebasketAdmin,
    UpdatebasketAdminGet
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(AdminHistory)


export default Container;
