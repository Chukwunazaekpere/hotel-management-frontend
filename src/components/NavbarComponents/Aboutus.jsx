import React, { useState } from 'react';


export const About = () => {
    const [name, setName] = useState();

    return(
        <section className='text-white'>
            <h2>About Hotel - Celestial</h2>
            <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                Et quas earum eaque nihil aliquam rem doloribus, <br/>
                omnis quam provident architecto similique accusantium, <br/>
                porro numquam aliquid pariatur ipsa magnam ab dicta.
            </h5>
        </section>
    );
}