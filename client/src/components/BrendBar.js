import React, {useEffect,} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row, Card} from "react-bootstrap"
import _ from "lodash"
import {brendListRequest,} from "../store/actions/device";


const BrendBar = ({active, brendActive}) => {

    const dispatch = useDispatch()

    const {brendList} = useSelector(state => state.brend)
    useEffect(() => {
        dispatch(brendListRequest())
    }, [])


    return (
        <Row className="d-flex">
            {_.map(brendList, i => (
                <Card
                    key={i.id}
                    className='p-3, foverFilter '
                    style={{cursor: "pointer"}}
                    onClick={() => brendActive(i)}
                    border={i.id === active ? "red" : "light"}
                >{i.name}</Card>
            ))}
        </Row>
    );

}


export default BrendBar;


