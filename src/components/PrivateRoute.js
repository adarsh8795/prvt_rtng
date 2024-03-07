import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    // const {component} = props;

    const [isRendered,setIsRendered] = useState(false);
   
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        console.log('login',login);
        if(!login){
            navigate('/')
        }
        else{
            setIsRendered(true);
        }
    },[])

    if(!isRendered){
        return <></>
    }

  return (
    <>
    {/* {component} */}
    {props.children}
    </>
  )
}

export default PrivateRoute
