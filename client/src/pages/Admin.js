import React, {Component} from 'react';
import {connect} from "react-redux";
import {Container, Button} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteDevice from "../components/modals/DeleteDevice";
import {Link} from "react-router-dom";
import {ADMIN_HISTORY,} from "../utils/consts";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            brandVisible: false,
            typeVisible: false,
            deviceVisible: false,
            deleteDeviceId: false,
        })
    }

    render() {
        const {myAccount}=this.props
        const {brandVisible, typeVisible, deviceVisible,deleteDeviceId} = this.state



        return (


          <div>
              {myAccount.role ==="ADMIN" ?     <Container className="d-flex flex-column">
                  <Button
                      variant={"outline-dark"}
                      className="mt-4 p-2"
                      onClick={() => this.setState({typeVisible: true})}
                  >
                      Добавить тип
                  </Button>

                  <Button
                      variant={"outline-dark"}
                      className="mt-4 p-2"
                      onClick={() => this.setState({brandVisible: true})}
                  >
                      Добавить бренд
                  </Button>

                  <Button
                      variant={"outline-dark"}
                      className="mt-4 p-2"
                      onClick={() => this.setState({deviceVisible: true})}
                  >
                      Добавить устройство
                  </Button>
                  <Button
                      variant={"outline-dark"}
                      className="mt-4 p-2"
                      onClick={() => this.setState({deleteDeviceId: true})}
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


                  <CreateBrand show={brandVisible} onHide={() => this.setState({brandVisible: false})}/>
                  <CreateDevice show={deviceVisible} onHide={() => this.setState({deviceVisible: false})}/>
                  <CreateType show={typeVisible} onHide={() => this.setState({typeVisible: false})}/>
                  <DeleteDevice show={deleteDeviceId} onHide={() => this.setState({deleteDeviceId: false})}/>
              </Container>   :null}
          </div>

        );
    }
}

const mapSateToProps = (state) => ({
    myAccount: state.loginins.myAccount,
})

const mapDispatchToProps = {

}

const Containers = connect(
    mapSateToProps,
    mapDispatchToProps,
)(Admin)


export default Containers;
