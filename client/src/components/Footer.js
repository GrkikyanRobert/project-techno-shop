import React, {Component, useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {typeListRequest} from "../store/actions/device";
import {SHOP_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";

const Footer = ({typeActive}) => {


    const dispatch = useDispatch()
    const {typeList} = useSelector(state => state.device)


    useEffect(() => {
        dispatch(typeListRequest())
    }, [])
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Существуют две основные трактовки понятия «текст»:
                                имманентная (расширенная, философски нагруженная) и репрезентативная (более
                                частная). Имманентный подход подразумевает отношение к тексту как к автономной
                                реальности, нацеленность на выявление его внутренней структуры. Репрезентативный —
                                рассмотрение текста как особой формы представления информации о внешней тексту
                                действительности.</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>КАТЕГОРИИ</h6>
                            <ul className="footer-links">
                                {typeList.map((i) => (
                                    <li key={i.id} onClick={() => typeActive(i)}>
                                        {i.name}
                                    </li>
                                ))}

                            </ul>

                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>БЫСТРЫЕ ССЫЛКИ</h6>
                            <ul className="footer-links">
                                <li><NavLink to={SHOP_ROUTE}>главная страница!</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="/">Scanfcode</a>.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="/"><i className="fa fa-facebook"/></a></li>
                                <li><a className="twitter" href="/"><i className="fa fa-twitter"/></a></li>
                                <li><a className="dribbble" href="/"><i className="fa fa-dribbble"/></a></li>
                                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Footer;
