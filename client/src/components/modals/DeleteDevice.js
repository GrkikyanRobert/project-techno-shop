import React, {Component} from 'react';
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Image,} from "react-bootstrap";
import {Deletedevice, DeviceListRequest,} from "../../store/actions/device";

class DeleteDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceName: "",
            deviceId: "",
            deviceImg: ""
        }
    }


    async componentDidMount() {

        await this.props.DeviceListRequest()

    }


    render() {

        this.olldevice = (i) => {
            this.setState({
                deviceName: i.name,
                deviceId: i.id,
                deviceImg: i.img
            })
        }

        this.del_Device = async () => {
            const {deviceId,} = this.state
            await this.props.Deletedevice(deviceId)
            await this.props.DeviceListRequest()
        }


        const {show, onHide, deviceList} = this.props
        const {deviceName, deviceImg} = this.state
        return (
            <Modal
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        удалить тип
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-3">
                            <Dropdown.Toggle>{deviceName ? deviceName : "Выберите тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {deviceList.map(i => (
                                    <Dropdown.Item
                                        onClick={() => this.olldevice(i)}
                                        key={i.id}>
                                        {i.name}
                                    </Dropdown.Item>

                                ))}
                            </Dropdown.Menu>
                            {deviceImg ? <Image width={120} height={120} src={deviceImg}/> :
                                <p style={{color: "red"}}>выберите устройство</p>}
                        </Dropdown>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={this.del_Device}>удалить</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapSateToProps = (state) => ({
    deviceList: state.device.deviceList || [],
    DeleteDeviceId: state.device.DeleteDeviceId,
})

const mapDispatchToProps = {
    Deletedevice,
    DeviceListRequest,
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(DeleteDevice)


export default Container;
