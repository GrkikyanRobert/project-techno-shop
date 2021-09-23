import React, {Component} from 'react';
import {connect} from "react-redux";
import {Row, Card} from "react-bootstrap"
import _ from "lodash"
import {brendListRequest, DeviceListRequest,} from "../store/actions/device";


class BrendBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
            brend_id: "",
        }
    }

    async componentDidMount() {
        await this.props.brendListRequest()
    }


    render() {

        const {active} = this.props

        const {brendList} = this.props
        return (
            <Row className="d-flex">
                {_.map(brendList, i => (
                    <Card
                        key={i.id}
                        className='p-3, foverFilter '
                        style={{cursor: "pointer"}}
                        onClick={() => this.props.brendActive(i)}
                        border={i.id === active ? "red" : "light"}
                    >{i.name}</Card>
                ))}
            </Row>
        );
    }
}

const mapSateToProps = (state) => ({
    brendList: state.brend.brendList,
    deviceList: state.device.deviceList


})

const mapDispatchToProps = {
    brendListRequest,
    DeviceListRequest,

}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(BrendBar)


export default Container;
