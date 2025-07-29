import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Refreshhandler({isauth}) {
    console.log(isauth)
   const navigate=useNavigate();
   const location=useLocation();

   useEffect(() => {
    if(JSON.parse(localStorage.getItem('token'))){
        isauth(true);
        if(location.pathname=='/login'||location.pathname=='/signup'||location.pathname=='/'){
            navigate('/home');
        }
    }
   }, [navigate,location,isauth]);

    return ( <div>

    </div> );
}

export default Refreshhandler;