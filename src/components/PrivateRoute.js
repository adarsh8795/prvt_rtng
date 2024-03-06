import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({props}) => {
    // const {component} = props;
   
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/')
        }
    })

  return props;
}

export default PrivateRoute
