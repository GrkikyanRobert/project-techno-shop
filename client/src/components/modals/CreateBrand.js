import React, {Component} from 'react';
import {connect} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrandRequest} from "../../store/actions/device";

class CreateBrand extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }


    addBrend = async () => {

        const {name} = this.state
        await this.props.createBrandRequest(name)

    }

    render() {

        const {show, onHide, brendListError} = this.props

        const {name,} = this.state

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
                            placeholder={"Введите название бренда"}
                        />
                    </Form>
                    {
                        <p className={brendListError === "Бренд успешно добавлен" ? "ОК_Messig" : "errorMessig"}>{brendListError}</p>}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={this.addBrend}>Добавить</Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

const mapSateToProps = (state) => ({
    brendListError: state.brend.brendListError,
})

const mapDispatchToProps = {
    createBrandRequest
}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(CreateBrand)


export default Container;
