import React from 'react';

function Bar({color}) {
    return (
        <svg>
            <rect width={105} height={3} fill={color} rx={1}/>
        </svg>
    )
}

export default Bar

Bar.propTypes = {
    color: PropTypes.string.isRequired
};
