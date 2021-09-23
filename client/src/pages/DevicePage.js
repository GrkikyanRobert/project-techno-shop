import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap";
import {
    AddToCart, CreateRateDeviceAll,
    CreateRateDeviceOne,
    DeviceInfoRequest,
    UpdateRateDeviceOne
} from "../store/actions/device";
import memoizeOne from "memoize-one"
import img from "../imgis/4.png"
import _ from 'lodash'
import { SHOP_ROUTE} from "../utils/consts";

class DevicePage extends Component {
    constructor() {
        super();
        this.state = {
            isAdded: false
        }
    }

    async componentDidMount() {

        const {id} = this.props.match.params
        if (id) {
            await this.props.DeviceInfoRequest(id)
        }
        await   this.props.CreateRateDeviceAll()
    }


    fetchDeviceInfo = memoizeOne((id) => {
        if (id) {
            this.props.DeviceInfoRequest(id)
        }
    }, _.isEqual)


    addToCart = (item) => {


        const {product} = this.props

        if (!product.length) {
            this.props.AddToCart(item)
            this.props.history.push(SHOP_ROUTE)
        } else {
            const isFound = () => {
                for (let i = 0; i < product.length; i++) {
                    if (product[i].name === item.name) {
                        return false
                    }
                }
                return true;
            }
            if (isFound()) {
                this.props.AddToCart(item)

                this.props.history.push(SHOP_ROUTE)
            } else {
                this.setState({isAdded: true})
                setTimeout(() => {
                    this.setState({isAdded: false})
                }, 2000)
            }
        }
    }

    updateReting = async () => {
        const {id} = this.props.deviceInfo
        const {rate, myAccount} = this.props

        const tryFind =  () => {
            for (let i = 0; i < rate.length; i++) {
                if (id === rate[i].deviceId && myAccount.id === rate[i].userId) {
                    return false
                }
            }
            return true
        }

        if (tryFind()) {
            await this.props.CreateRateDeviceOne(myAccount.id, id)
            await this.props.UpdateRateDeviceOne(id)
            await this.props.DeviceInfoRequest(id)

        }
        await this.props.DeviceInfoRequest(id)
        await   this.props.CreateRateDeviceAll()


        return

    }

    render() {

        const {deviceInfo} = this.props
        const {isAdded} = this.state


        const {id} = this.props.match.params

        this.fetchDeviceInfo(id)

        return (
            <div>

                <Container>
                    <Row style={{paddingTop: 50,}}>
                        <Col md={4}>
                            <Image width={300} height={300} src={deviceInfo?.img}/>
                        </Col>
                        <Col md={4}>
                            <Row className="d-flex flex-column align-items-center">
                                <h2>{deviceInfo?.name}</h2>
                                <div
                                    onClick={this.updateReting}
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        background: `url(${img}) no-repeat center center`,
                                        width: 240,
                                        height: 240,
                                        backgroundSize: 'cover',
                                        fontSize: 64,
                                        cursor:"pointer"

                                    }}>
                                    {deviceInfo?.rating}
                                </div>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Card
                                className="d-flex flex-column align-items-center justify-content-around"
                                style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                            >
                                <h3> ОТ: {deviceInfo?.price} руб</h3>
                                <Button onClick={() => this.addToCart(deviceInfo)} variant={"outline-dark"}>Добавить в
                                    корзину</Button>
                                {isAdded ?
                                    <div className={"isAdded"}>Вы уже добавили этот продукт в корзину</div> : null}

                            </Card>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-column m-3">
                        <h1>Характеристики</h1>
                        {_.map(deviceInfo?.info, (info, index) =>
                            <Row key={info.id}
                                 style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Row>

                </Container>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    deviceInfo: state.device.deviceInfo,
    product: state.toCart.product,
    myAccount: state.loginins.myAccount,
    rate: state.device.rate,

})

const mapDispatchToProps = {
    DeviceInfoRequest,
    AddToCart,
    CreateRateDeviceOne,
    UpdateRateDeviceOne,
    CreateRateDeviceAll

}

const Containers = connect(
    mapSateToProps,
    mapDispatchToProps,
)(DevicePage)


export default Containers;
