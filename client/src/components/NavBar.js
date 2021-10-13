import React, {} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {NavLink, withRouter} from "react-router-dom"
import {Nav, Navbar, Button} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {IsAuthRequest} from "../store/actions/user";

const NavBar=({history})=>{

    const dispatch=useDispatch()

        const{token}=useSelector(state =>state.loginins)
        const{myAccount}=useSelector(state =>state.loginins)


    const onAuthorization =  () => {

        history.push(LOGIN_ROUTE)

    }

   const logOut = async () => {
        await dispatch(IsAuthRequest(true))
        window.location.href = "/";
    }

        return (
            <div>

                <Navbar bg="dark" variant="dark">

                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}> Интернет магазин </NavLink>
                    {token ? <Nav className="ml-auto" style={{color: 'white'}}>
                            {
                                myAccount.role === "ADMIN" ?
                                    <Button
                                        onClick={() => history.push(ADMIN_ROUTE)}
                                        variant={"outline-light"}>
                                        Админ панель
                                    </Button>
                                    :
                                    <Button
                                        onClick={() => history.push(BASKET_ROUTE)}
                                        variant={"outline-light"}>
                                        Корзинка
                                    </Button>
                            }

                            <Button
                                onClick={() => logOut()}
                                variant={"outline-light"} className="ml-2">Выйти</Button>
                        </Nav> :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={onAuthorization}>Aвторизация</Button>
                        </Nav>
                    }
                </Navbar>

            </div>
        );

}


export default withRouter(NavBar);
