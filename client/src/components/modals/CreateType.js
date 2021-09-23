
import React, {Component} from 'react';
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createTypeRequest} from "../../store/actions/device";


class CreateType extends Component {



    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    addType = async () => {
        const {name} = this.state
        await  this.props.createTypeRequest(name)
    }

    render() {
        const {typeListError}=this.props

        const {name} = this.props
        const {show, onHide} = this.props
        return (
            <Modal
                show={show}
                onHide={onHide}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить тип
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={(e) => {
                                this.setState({name: e.target.value})
                            }}
                            placeholder={"Введите название типа"}
                        />
                    </Form>

                    { <p className={typeListError ==="Тип успешно добавлен"  ? "ОК_Messig" : "errorMessig" }>{typeListError}</p> }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={this.addType}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapSateToProps = (state) => ({

    typeListError: state.device.typeListError,
})

const mapDispatchToProps = {
    createTypeRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(CreateType)


export default Container;
