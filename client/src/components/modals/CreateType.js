import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createTypeRequest} from "../../store/actions/device";


const CreateType = ({show, onHide}) => {


    const dispatch = useDispatch()
    const {typeListError} = useSelector(state => state.device)

    const [name, setName] = useState("")

    const addType = async () => {
        dispatch(createTypeRequest(name))
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
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        placeholder={"Введите название типа"}
                    />
                </Form>

                {
                    <p className={typeListError === "Тип успешно добавлен" ? "ОК_Messig" : "errorMessig"}>{typeListError}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );

}




export default CreateType;
