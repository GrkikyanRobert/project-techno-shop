import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE,} from "../utils/consts";
import {NavLink,} from "react-router-dom";
import {IsAuthRequest, LoginRequest, RegisterRequest} from "../store/actions/user";


class Auth extends Component {

    async componentDidMount() {
        const {Register_Error} = this.props
        this.setState({
            RegisterErrorMesig: Register_Error
        })
    }

    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: '',
            phone: undefined,

        })
    }


    OnWhit = async () => {
        const location = this.props.match.path === LOGIN_ROUTE
        const {email, password, phone} = this.state
        if (location) {

            await this.props.LoginRequest(email, password)

        } else {
            await this.props.RegisterRequest(email, password, phone);

        }
    }

    render() {
        const {Register_Error, Error_Message,} = this.props;
        const {email, password, phone} = this.state


        const location = this.props.match.path === LOGIN_ROUTE


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
                            onChange={ev => this.setState({email: ev.target.value})}
                        />


                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль..."
                            value={password}
                            type="password"
                            onChange={ev => this.setState({password: ev.target.value})}

                        />

                        {location ? null
                            :
                            <Form.Control
                                className="mt-3"
                                placeholder="Введите ваш номер телефона..."
                                value={phone}
                                type="tel"
                                onChange={ev => this.setState({phone: ev.target.value})}

                            />
                        }


                        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {location ? <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :

                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>

                                </div>

                            }

                            <Button

                                variant={"outline-success"}
                                onClick={this.OnWhit}
                            >

                                {location ? "Войти" : "Регистрация"}

                            </Button>


                        </Row>

                        {!location ? <p className="errorMessig">{Register_Error} </p> : null}
                        {location ? <p className="errorMessig">{Error_Message} </p> : null}

                    </Form>
                </Card>

            </Container>
        );
    }
}

const mapSateToProps = (state) => ({
    isAuth: state.user.isAuth,
    error: state.user.error,
    userList: state.loginins.userList,
    errors: state.loginins.errors,
    Error_Message: state.loginins.Error_Message,
    token: state.loginins.token,
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
