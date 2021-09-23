import React, {Component} from 'react';
import {connect} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup"
import {DeviceListRequest, typeListRequest} from "../store/actions/device";

class TypeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
            type_id: ""
        }

    }

    async componentDidMount() {
        await this.props.typeListRequest()
    }

    render() {
        const {typeList} = this.props
        const {active} = this.props

        return (
            <ListGroup>
                {typeList.map(i => (
                    <ListGroup.Item key={i.id}

                                    style={{cursor: "pointer"}}
                                    onClick={() => this.props.typeActive(i)}
                                    active={i.id === active}

                    >{i.name}</ListGroup.Item>

                ))}

            </ListGroup>
        );
    }
}

const mapSateToProps = (state) => ({
    typeList: state.device.typeList,
    page: state.device.page,
})

const mapDispatchToProps = {
    typeListRequest,

    DeviceListRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(TypeBar)


export default Container;
