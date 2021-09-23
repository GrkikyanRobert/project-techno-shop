import React, {Component} from 'react';
import {connect} from "react-redux";
import {Col, Card, Image,} from "react-bootstrap"
import {DeviceListRequest} from "../store/actions/device";
import img from "../imgis/2.png"
import {withRouter} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import _ from "lodash"


class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fillArr: []
        }

    }

    async componentDidMount() {
        await this.props.DeviceListRequest()
    }


    render() {
        const {history} = this.props
        const {deviceList} = this.props

        return (
            <div className="devList">
                {_.map(deviceList, (i) => (

                    <Col md={4} className={"mt-5"} key={i.id} onClick={() => history.push(DEVICE_ROUTE + "/" + i.id)}>
                        <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                            <Image width={120} height={120} src={i.img}/>
                            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                                <div>{i.name}</div>
                                <div className="d-flex align-items-center">
                                    <div>{i.rating}</div>
                                    <Image width={18} height={18} src={img}/>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </div>
        );
    }
}


const mapSateToProps = (state) => ({
    deviceList: state.device.deviceList || [],
})

const mapDispatchToProps = {
    DeviceListRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(DeviceList)


export default withRouter(Container);
