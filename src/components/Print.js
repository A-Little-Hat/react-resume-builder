import React from 'react';

const Print = (props) => {
    return (
        <div>
            {
                console.log(props.data)
            }
        </div>
    );
}

export default Print;
