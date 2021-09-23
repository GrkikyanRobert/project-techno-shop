import React, {Component} from 'react';
import {connect} from "react-redux";
import {AllBasket} from "../../store/actions/basket";
import {UpdatebasketAdmin} from "../../store/actions/device";

class AdminBasket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 1
        }
    }

    async componentDidMount() {
        await this.props.AllBasket()
    }

    removeToHistory = async () => {
        await this.props.UpdatebasketAdmin()
        await this.props.AllBasket()

    }

    render() {
        const {basketAll} = this.props

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
                        onClick={this.removeToHistory}
                >
                    Удалить историю
                </button>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    basketAll: state.basket.basketAll

})

const mapDispatchToProps = {
    AllBasket,
    UpdatebasketAdmin
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(AdminBasket)


export default Container;
