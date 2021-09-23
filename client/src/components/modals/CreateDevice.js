import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Col, Dropdown, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {brendListRequest, createDeviceRequest, typeListRequest} from "../../store/actions/device";
import FileInput from "../FileInput";
import _ from 'lodash';

class CreateDevice extends Component {

    async componentDidMount() {
        await this.props.brendListRequest()
        await this.props.typeListRequest()


    }

    constructor(props) {
        super(props);
        this.state = ({
            selectType: "",
            sellectBrend: "",
            TypeId: "",
            BrendId: "",
            formData: {},
            info: [],
        })
    }


    addInfo = () => {
        const {info} = this.state
        this.setState({
            info: [...info, {title: '', description: '', number: Date.now()}]

        })
    }
    removeInfo = (number) => {
        const {info} = this.state
        this.setState({
            info: info.filter(i => i.number !== number)
        })
    }

    changeInfo = (key, value, number) => {
        const {info} = this.state
        const x = info.map((i) => i.number === number ? {...i, [key]: value} : i)

        this.setState({info: x})
    }


    searchType = (i) => {
        this.setState({
            selectType: i.name  ,
            TypeId:i.id,

        })
    }


    searchBrend = (i) => {
        this.setState({
            sellectBrend: i.name,
            BrendId: i.id,
        })
    }
    handleChange = (path, ev) => {

        const {formData} = this.state;
        _.set(formData, path, ev);
        this.setState({formData})
    }

    addDevice = () => {
        const {formData, info, TypeId,BrendId,} = this.state;
        _.set(formData, 'info', JSON.stringify(info));
        _.set(formData, 'typeId', TypeId);
        _.set(formData, 'brandId', BrendId);
        this.props.createDeviceRequest(formData)


    }

    render() {
        const {info,  selectType, sellectBrend, formData,} = this.state
        const {show, onHide,deviceListError} = this.props
        const {typeList, brendList} = this.props



        return (
            <Modal
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить тип
                        { <p className="errorMessig"> {deviceListError}</p> }
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-3">
                            <Dropdown.Toggle>{selectType ? selectType : "Выберите тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {typeList.map(i => (
                                    <Dropdown.Item
                                        onClick={() => this.searchType(i)}
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
                                        onClick={() => this.searchBrend(i)}
                                        key={i.id}>
                                        {i.name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Control
                            value={formData.name ? formData.name : ""}
                            onChange={(ev => {
                                this.handleChange('name', ev.target.value)
                            })}

                            className="mt-3"
                            placeholder="Введите название устройства"
                        />


                        <Form.Control
                            value={formData.price ? formData.price : ""}
                            onChange={(ev => {
                                this.handleChange('price', ev.target.value)
                            })}

                            className="mt-3"
                            placeholder="Введите стоимость устройства"
                            type="number"
                        />
                        <hr/>
                        <FileInput accept="image/*"
                                   onChange={(ev, files) => this.handleChange('img', files[0])}
                        />
                        <hr/>
                        <Button
                            variant={"outline-dark"}
                            onClick={this.addInfo}
                        >
                            Добавить новое свойство
                        </Button>
                        {info.map(i => (
                            <Row className="mt-4" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title ? i.title : ""}
                                        onChange={(e) => this.changeInfo('title', e.target.value, i.number)}

                                        placeholder="Введите название свойства"
                                    />

                                </Col>

                                <Col md={4}>
                                    <Form.Control
                                        value={i.description ? i.description : ""}
                                        onChange={(e) => this.changeInfo('description', e.target.value, i.number)}
                                        placeholder="Введите описание свойства"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => this.removeInfo(i.number)}
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
                    <Button variant="outline-success" onClick={this.addDevice}>Добавить</Button>
                </Modal.Footer>


            </Modal>
        );
    }
}

const mapSateToProps = (state) => ({
    typeList: state.device.typeList,
    createDevice: state.device.createDevice,
    brendList: state.brend.brendList,
    totalCount: state.device.totalCount,
    page: state.device.page,
    limit: state.device.limit,
    deviceListError: state.device.deviceListError,
})

const mapDispatchToProps = {
    typeListRequest,
    brendListRequest,
    createDeviceRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(CreateDevice)


export default Container;
