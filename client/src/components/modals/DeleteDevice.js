import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Image,} from "react-bootstrap";
import {Deletedevice, DeviceListRequest,} from "../../store/actions/device";

const  DeleteDevice=({show, onHide,})=>{

    const dispatch = useDispatch()

    const {deviceList}=useSelector(state => state.device)

    const [deviceName ,setDeviceName]=useState("")
    const [deviceId ,setDeviceId]=useState("")
    const [deviceImg ,setDeviceImg]=useState("")


    useEffect(()=>{
        dispatch(DeviceListRequest())
    },[])


        const olldevice = (i) => {
            setDeviceName(i.name)
            setDeviceId(i.id)
            setDeviceImg(i.img)
        }

        const  del_Device = async () => {
            dispatch(Deletedevice(deviceId))
            dispatch(DeviceListRequest())
        }


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
                                        onClick={() => olldevice(i)}
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
                    <Button variant="outline-success" onClick={del_Device}>удалить</Button>
                </Modal.Footer>
            </Modal>
        );

}




export default DeleteDevice;
