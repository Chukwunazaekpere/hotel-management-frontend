import React from "react";
import Button from "./Utilities/Button";
import Navbar from "./Utilities/Navbar";


export const Homepage = (props) => {
    const homeStyle = {
        justifyContent: "center",
        alignItems: "center"
    }

   
    //=======================================================================

    if(props.match.path === '/'){

        return (
            <div style={homeStyle}>
                <div className='row'>
                    <div className='col'><Navbar /></div>
                </div>
                
                {/* Authentication */}
                <div>
                    {/* {authentication} */}
                </div>
                <div className='row'>
                    <div className='col-5 mt-5'></div>
                    <h1 className='col- mt-5'>Homepage</h1>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                {/* Authentication */}
                {/* {authentication} */}
            </div>
        )
    }

    
};
