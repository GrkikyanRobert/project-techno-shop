import React, { useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Dropdown, Form, Row} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";
import {brendListRequest, createDeviceRequest, typeListRequest} from "../../store/actions/device";
import FileInput from "../FileInput";
import _ from 'lodash';

const CreateDevice = ({show, onHide}) => {

    const dispatch = useDispatch()

    const {typeList}=useSelector(state =>state.device )
    const {brendList}=useSelector(state => state.brend )
    const {deviceListError}=useSelector(state =>state.device )


    useEffect(() => {
        dispatch(brendListRequest())
        dispatch(typeListRequest())
        console.log(deviceListError,88888)
    }, [])


    const [selectType, setSelectType] = useState("")
    const [sellectBrend, setSellectBrend] = useState("")
    const [TypeId, setTypeId] = useState("")
    const [BrendId, setBrendId] = useState("")
    const [formData, setFormData] = useState({})
    const [info, setInfo] = useState([])





    const addInfo = () => {

    setInfo([...info, {title: '', description: '', number: Date.now()}])

    }


    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        console.log(key, value, number,"kkkkk vvv nnnn")
        const x = info.map((i) => i.number === number ? {...i, [key]: value} : i)
        setInfo(x)
    }


    const searchType = (i) => {
            setSelectType(i.name)
            setTypeId(i.id)
    }


    const searchBrend = (i) => {
        setSellectBrend(i.name)
        setBrendId(i.id)
    }




    const handleChange = (path, ev) => {
        console.log(path, ev,8888)
        _.set(formData, path, ev);
        setFormData(formData)
    }

    const addDevice =  () => {
        _.set(formData, 'info', JSON.stringify(info));
        _.set(formData, 'typeId', TypeId);
        _.set(formData, 'brandId', BrendId);
         dispatch(createDeviceRequest(formData))
        console.log(formData)
        if (deviceListError){
            onHide()
        }
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                    {<p className="errorMessig"> {deviceListError}</p>}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-3">
                        <Dropdown.Toggle>{selectType ? selectType : "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {typeList.map(i => (
                                <Dropdown.Item
                                    onClick={() => searchType(i)}
                                    key={i.id}>
                                    {i.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2 mb-3">
                        <Dropdown.Toggle>{sellectBrend ? sellectBrend : "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brendList.map(i => (
                                <Dropdown.Item
                                    onClick={() => searchBrend(i)}
                                    key={i.id}>
                                    {i.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        // value={formData.name}
                        onChange={(ev => {
                            handleChange('name', ev.target.value)
                        })}

                        className="mt-3"
                        placeholder="Введите название устройства"
                    />


                    <Form.Control
                        // value={formData.price}
                        onChange={(ev => {
                            handleChange('price', ev.target.value)
                        })}

                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <hr/>
                    <FileInput accept="image/*"
                               onChange={(ev, files) => handleChange('img', files[0])}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {_.map( info,i => (
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title ? i.title:"" }
                                    onChange={(e) =>  changeInfo('title', e.target.value, i.number)}

                                    placeholder="Введите название свойства"
                                />

                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    value={i.description ? i.description : ""}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>


        </Modal>
    );
}




export default CreateDevice;
