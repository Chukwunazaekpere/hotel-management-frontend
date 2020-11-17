import React from "react";
import Button from "./Button";

export const Undefined = () =>{
    const style = {
        fontFamily: "Georgia, Verdana, Geneva, Tahoma, sans-serif",
        backgroundColor: "aquamarine",
        minHeight: "100vh",
        fontWeight: 'bold',
        fontStyle: "italic",
        color: 'white',
        fontWeight: 'bold'
      }

    return(
        <React.Fragment>

            <div className='row' style={style}>
                <div className='col-4 mt-5 mb-5'></div>
                <div className='col-4 mt-5'>
                    <h1>PAGE NOT FOUND</h1>
                    <div className='ml-5 col-8'>
                        <Button />
                    </div>
                </div>

            </div>

           

        </React.Fragment>

        
    )
}