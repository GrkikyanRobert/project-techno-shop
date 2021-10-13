import React, {useState} from 'react';
import {connect} from "react-redux";
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE,} from "../utils/consts";
import {NavLink,} from "react-router-dom";
import {IsAuthRequest, LoginRequest, RegisterRequest} from "../store/actions/user";

const Auth = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState(undefined)

    const OnWhit = async () => {
        const location = props.match.path === LOGIN_ROUTE
        if (location) {
            await props.LoginRequest(email, password)
        } else {
            await props.RegisterRequest(email, password, phone);
        }
    }

    const location = props.match.path === LOGIN_ROUTE

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{location ? "Aвторизация" : "Регистрация "}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        type="password"
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    {location ? null
                        :
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш номер телефона..."
                            value={phone}
                            type="tel"
                            onChange={ev => setPhone(ev.target.value)}
                        />
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {location
                            ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}
                            onClick={OnWhit}
                        >
                            {location ? "Войти" : "Регистрация"}
                        </Button>
                    </Row>

                    {!location ? <p className="errorMessig">{props.Register_Error} </p> : null}
                    {location ? <p className="errorMessig">{props.Error_Message} </p> : null}

                </Form>
            </Card>

        </Container>
    );

}

const mapSateToProps = (state) => ({
    Error_Message: state.loginins.Error_Message,
    Register_Error: state.register.Register_Error,
})

const mapDispatchToProps = {
    RegisterRequest,
    LoginRequest,
    IsAuthRequest,
}

const Containers = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Auth)


export default Containers;
