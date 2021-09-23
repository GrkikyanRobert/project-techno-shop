import {connect} from "react-redux";
import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import {} from "./style.css"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar/>
                <Wrapper/>
                <Footer/>
            </BrowserRouter>
        );
    }
}

const mapSateToProps = (state) => ({})

const mapDispatchToProps = {}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(App)


export default Container;
