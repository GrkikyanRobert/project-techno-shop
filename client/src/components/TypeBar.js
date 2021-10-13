import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup"
import { typeListRequest} from "../store/actions/device";

const TypeBar=({active, typeActive})=> {

    const dispatch=useDispatch()


    const {typeList} = useSelector(state => state.device)

    useEffect(()=>{
        dispatch(typeListRequest())
    },[])




        return (
            <ListGroup>
                {typeList.map(i => (
                    <ListGroup.Item key={i.id}

                                    style={{cursor: "pointer"}}
                                    onClick={() => typeActive(i)}
                                    active={i.id === active}

                    >{i.name}</ListGroup.Item>

                ))}

            </ListGroup>
        );

}

export default TypeBar;
