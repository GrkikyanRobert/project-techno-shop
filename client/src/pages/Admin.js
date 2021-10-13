import React, { useState} from 'react';
import { useSelector} from "react-redux";
import {Container, Button} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteDevice from "../components/modals/DeleteDevice";
import {Link} from "react-router-dom";
import {ADMIN_HISTORY,} from "../utils/consts";

 const Admin=()=> {

     const [brandVisible, setBrandVisible]=useState(false)
     const [typeVisible, setTypeVisible]=useState(false)
     const [deviceVisible, setDeviceVisible]=useState(false)
     const [deleteDeviceId, setDeleteDeviceId]=useState(false)



   const {myAccount}= useSelector(state => state.loginins )


        return (

            <div>
                {myAccount.role ==="ADMIN" ?     <Container className="d-flex flex-column">
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setTypeVisible(true)}
                    >
                        Добавить тип
                    </Button>

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setBrandVisible(true)}
                    >
                        Добавить бренд
                    </Button>

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setDeviceVisible(true)}
                    >
                        Добавить устройство
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setDeleteDeviceId(true)}
                    >
                        Удалить устройство
                    </Button>

                    <Link
                        variant={"outline-dark"}
                        className="btn btn-success mt-lg-4"
                        to="adminBasket"
                    >
                        Заказы
                    </Link>
                    <Link
                        variant={"outline-dark"}
                        className="btn btn-success mt-lg-4"
                        to={ADMIN_HISTORY}
                    >
                        История заказов
                    </Link>


                    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
                    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
                    <DeleteDevice show={deleteDeviceId} onHide={() => setDeleteDeviceId(false)}/>
                </Container>   :null}
            </div>

        );

}


export default Admin;

