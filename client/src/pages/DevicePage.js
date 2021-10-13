import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Container, Row, Col, Image, Card, Button} from "react-bootstrap";
import {
    AddToCart, CreateRateDeviceAll,
    CreateRateDeviceOne,
    DeviceInfoRequest,
    UpdateRateDeviceOne
} from "../store/actions/device";
import img from "../imgis/4.png"
import _ from 'lodash'
import {SHOP_ROUTE} from "../utils/consts";

const DevicePage = (props) => {

    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        const {id} = props.match.params
        if (id) {
            props.DeviceInfoRequest(id)
        }
        props.CreateRateDeviceAll()
    }, [])

    const addToCart = (item) => {

        if (!props.product.length) {
            props.AddToCart(item)
            props.history.push(SHOP_ROUTE)
        } else {
            const isFound = () => {
                for (let i = 0; i < props.product.length; i++) {
                    if (props.product[i].name === item.name) {
                        return false
                    }
                }
                return true;
            }
            if (isFound()) {
                props.AddToCart(item)

                props.history.push(SHOP_ROUTE)
            } else {
                setIsAdded(true)
                setTimeout(() => {
                    setIsAdded(false)
                }, 2000)
            }
        }
    }

    const updateReting = async () => {
        console.log(1111)
        const {id} = props.deviceInfo

        const tryFind = () => {
            for (let i = 0; i < props.rate.length; i++) {
                if (id === props.rate[i].deviceId && props.myAccount.id === props.rate[i].userId) {
                    return false
                }
            }
            return true
        }

        if (tryFind()) {
            await props.CreateRateDeviceOne(props.myAccount.id, id)
            await props.UpdateRateDeviceOne(id)
            await props.DeviceInfoRequest(id)
        }
        await props.DeviceInfoRequest(id)
        await props.CreateRateDeviceAll()
    }

    return (
        <div>
            <Container>
                <Row style={{paddingTop: 50,}}>
                    <Col md={4}>
                        <Image width={300} height={300} src={props.deviceInfo?.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{props.deviceInfo?.name}</h2>
                            <div
                                onClick={updateReting}
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    background: `url(${img}) no-repeat center center`,
                                    width: 240,
                                    height: 240,
                                    backgroundSize: 'cover',
                                    fontSize: 64,
                                    cursor: "pointer"

                                }}>
                                {props.deviceInfo?.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                        >
                            <h3> ОТ: {props.deviceInfo?.price} руб</h3>
                            <Button onClick={() => addToCart(props.deviceInfo)} variant={"outline-dark"}>Добавить в
                                корзину</Button>
                            {isAdded ?
                                <div className={"isAdded"}>Вы уже добавили этот продукт в корзину</div> : null}

                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {_.map(props.deviceInfo?.info, (info, index) =>
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
