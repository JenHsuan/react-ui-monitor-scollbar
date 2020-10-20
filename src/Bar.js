import React from 'react';
import PropTypes from 'prop-types'

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
