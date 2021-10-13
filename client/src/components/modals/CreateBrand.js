import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrandRequest} from "../../store/actions/device";


const CreateBrand = ({show, onHide}) => {

    const dispatch = useDispatch()

    const {brendListError} = useSelector(state => state.brend)

    const [name, setName] = useState("")

    const addBrend = async () => {
        dispatch(createBrandRequest(name))
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
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={(ev) => {
                            setName(ev.target.value)
                        }}
                        placeholder={"Введите название бренда"}
                    />
                </Form>
                {
                    <p className={brendListError === "Бренд успешно добавлен" ? "ОК_Messig" : "errorMessig"}>{brendListError}</p>}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrend}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;
