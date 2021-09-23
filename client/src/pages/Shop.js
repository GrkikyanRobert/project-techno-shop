import React, {Component} from 'react';
import {connect} from "react-redux";
import {Row, Col, Carousel} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrendBar from "../components/BrendBar";
import DeviceList from "../components/DeviceList";
import Pagis from "../components/Pagis";
import {brendAll, brendListRequest, DeviceListRequest, typeListRequest} from "../store/actions/device";
import memoizeOne from "memoize-one";
import _ from "lodash";
import img from "../imgis/2.png";
import img5 from "../imgis/5.png";
import About from "../components/About";

class Shop extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeType: "",
            activeBrend: "",
            activePegis: 1,
            type_id: "",
            brend_id: "",
            pagis_id: "",
            filteredArr: [],
        }

    }


    typeActive = async (i) => {
        this.setState({
            activeType: i.id,
            type_id: i.id,
            pagis_id: 1,
            activePegis: 1
        })

    }

    brendActive = async (i) => {

        this.setState({
            activeBrend: i.id,
            brend_id: i.id
        })

    }
    pagisctive = async (i) => {


        this.setState({
            activePegis: i,
            pagis_id: i
        })
    }


    fetchDeviceInfo = memoizeOne(async (x, y, z, f) => {



            await this.props.DeviceListRequest(y, x, z, f)

    },_.isEqual)


    render() {
        const {type_id, brend_id, pagis_id,} = this.state
        const {limit, deviceList,} = this.props


        this.fetchDeviceInfo(type_id, brend_id, pagis_id, limit)

        return (
            <div className="Container">
                <Row className="mt-2">
                    <Col className="blockRight" md={3}>
                        <TypeBar typeActive={this.typeActive} active={this.state.activeType}/>
                        <img className="advertisement" src={img5} alt=""/>
                    </Col>
                    <Col md={7}>
                        <BrendBar brendActive={this.brendActive} active={this.state.activeBrend}/>
                        <DeviceList/>

                        <Pagis pagisctive={this.pagisctive} active={this.state.activePegis}/>

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
}

const mapSateToProps = (state) => ({
    deviceList: state.device.deviceList,
    typeList: state.device.typeList,
    brendList: state.brend.brendList,
    totalCount: state.device.totalCount,
    page: state.device.page,
    limit: state.device.limit,
    offset: state.device.offset,
    brendAll: state.brend.brendAll,


})

const mapDispatchToProps = {
    brendListRequest,
    typeListRequest,
    DeviceListRequest,
    brendAll

}

const Containers = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Shop)


export default Containers;
