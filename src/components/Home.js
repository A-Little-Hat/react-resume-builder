import React from 'react';
import Resume from './Resume';

const Home = (props) => {
    
    return (
            
        <div>
            home page
            <Resume setData={props.setData} />
        </div>
    );
}

export default Home;
