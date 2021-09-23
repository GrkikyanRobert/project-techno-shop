import React from 'react';
import {connect} from "react-redux";

const About=()=>{

        return (
            <div>
                <h3>кратко о нас</h3>
                <p>
                    Понятие «содержание высказывания» связано
                    с категорией информативности речи
                    и присуще только тексту. Оно
                    сообщает читателю индивидуально-авторское
                    понимание отношений между явлениями,
                    их значимости во всех сферах придают ему смысловую цельность.
                </p>
            </div>
        );

}

const mapSateToProps = (state) => ({})

const mapDispatchToProps = {}

const Container = connect(
    mapSateToProps,
    mapDispatchToProps,
)(About)


export default Container;
