import React, {Component} from 'react';
import {connect} from "react-redux";
import {Pagination} from "react-bootstrap";
import {DeviceListRequest} from "../store/actions/device";

class Pagis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }

    async componentDidMount() {
        await this.props.DeviceListRequest()
    }


    render() {
        const {totalCount, limit, active} = this.props

        const pageCount = Math.ceil(totalCount / limit)

        const pages = []

        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }

        return (

            <Pagination className="mt-3">
                {pages.map(i => (
                    <Pagination.Item
                        key={i}
                        active={active === i}

                        onClick={() => this.props.pagisctive(i)}
                    >{i}</Pagination.Item>
                ))}

            </Pagination>
        );
    }
}

const mapSateToProps = (state) => ({
    totalCount: state.device.totalCount,
    limit: state.device.limit,
})

const mapDispatchToProps = {
    DeviceListRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Pagis)


export default Container;
