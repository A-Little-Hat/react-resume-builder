import React from 'react';

import Resume from './Resume';

const Home = (props) => {
    
    return (
            
            <Resume setIsPrint={props.setIsPrint} setData={props.setData} />
        
    );
}

export default Home;
