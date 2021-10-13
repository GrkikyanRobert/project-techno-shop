import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row, Col, Carousel} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrendBar from "../components/BrendBar";
import DeviceList from "../components/DeviceList";
import Pagis from "../components/Pagis";
import {DeviceListRequest,} from "../store/actions/device";
import _ from "lodash";
import img from "../imgis/2.png";
import img5 from "../imgis/5.png";
import About from "../components/About";

const Shop = () => {

    const dispatch = useDispatch()

    const {deviceList} = useSelector(state => state.device)

    const [state, setState] = useState({
        activeType: "",
        activeBrend: "",
        activePegis: 1,
        type_id: "",
        brend_id: "",
        pagis_id: "",
        filteredArr: [],
    })

    const typeActive =  (i) => {
         setState({
            ...state,
            activeType: i.id,
            type_id: i.id,
            pagis_id: 1,
            activePegis: 1
        })
    }

    const brendActive =  (i) => {
         setState({
            ...state,
            activeBrend: i.id,
            brend_id: i.id
        })

    }
    const pagisctive = (i) => {

        setState({
            ...state,
            activePegis: i,
            pagis_id: i
        })
    }

    useEffect(() => {

        const {type_id, brend_id, pagis_id,} = state

        dispatch(DeviceListRequest(brend_id, type_id, pagis_id))

    }, [state.type_id, state.brend_id, state.pagis_id])

    return (
        <div className="Container">
            <Row className="mt-2">
                <Col className="blockRight" md={3}>
                    <TypeBar typeActive={typeActive} active={state.activeType}/>
                    <img className="advertisement" src={img5} alt=""/>
                </Col>
                <Col md={7}>
                    <BrendBar brendActive={brendActive} active={state.activeBrend}/>
                    <DeviceList/>

                    <Pagis pagisctive={pagisctive} active={state.activePegis}/>

                </Col>
                <Col className="blockRight" md={2}>

                    <About/>

                    <Carousel className='Carousel'>

                        {_.map(deviceList, (i) => (
                            <Carousel.Item interval={1000} key={i.id}>
                                <img alt="" className={"d-block w-100 "} src={i.img}/>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}


export default Shop;


