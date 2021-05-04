import React from 'react';
import Resume from './Resume';

const Home = (props) => {
    
    return (
            
        <div>
            <Resume setData={props.setData} />
        </div>
    );
}

export default Home;
