import React, { useEffect, } from 'react';
import { useDispatch, useSelector} from "react-redux";
import {Pagination} from "react-bootstrap";
import {DeviceListRequest} from "../store/actions/device";

const  Pagis=({active, pagisctive})=>{

    const dispatch=useDispatch()



        const{totalCount}=useSelector(state =>state.device )
        const{limit}=useSelector(state =>state.device )



    useEffect(()=>{
        dispatch(DeviceListRequest())
    },[])


        const pageCount = Math.ceil(totalCount / limit)

        const pages = []

        for (let i = 0; i < pageCount; i++) {
            pages.push(i + 1)
        }

        return (

            <Pagination className="mt-3">
                {pages.map(i => (
                    <Pagination.Item
                        key={i}
                        active={active === i}

                        onClick={() => pagisctive(i)}
                    >{i}</Pagination.Item>
                ))}

            </Pagination>
        );

}
export default Pagis;
