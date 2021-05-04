import React from 'react';

import Resume from './Resume';

const Home = (props) => {
    
    return (
            
        <div>
            <Resume setIsPrint={props.setIsPrint} setData={props.setData} />
        </div>
    );
}

export default Home;
