import React from 'react';
import Draggable from 'react-draggable';

const DraggableCircle = (color, callback) => {
    const originX = 0;
    const destX = 100;

    const handleDrag = (e, data) => {
        callback();
    };
    return (
        <Draggable
            axis="x"
            bounds={{left: originX, right: destX}}
            handle=".handle"
            defaultPosition={{x: originX + freshRate, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onDrag={handleDrag}>
            <div>
                <div className="handle">
                    <svg height = {14} width = {14}>
                        <circle cx={7} cy={7} r={7} stroke="none" strokeWidth="3" fill={color} />
                    </svg> 
                </div>
            </div>
        </Draggable>
    )
}

DraggableCircle.propTypes = {
    color: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
};


export default DraggableCircle;
