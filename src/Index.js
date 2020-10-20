import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';
import { 
    MonitorScrollBarLabelStyle
} from './styles/Style';

function Index({showScanSpinner}) {
    return (
        <MonitorScrollBarLabelStyle variant='main'>
            <MonitorScrollBarLabelStyle variant='start'>
                OFF
            </MonitorScrollBarLabelStyle>
            <MonitorScrollBarLabelStyle variant='circle'>
                <Circle/>    
            </MonitorScrollBarLabelStyle>
            <MonitorScrollBarLabelStyle variant='rect'>
                <svg>
                    <rect width={105} height={3} fill={"white"} rx={1}/>
                </svg>
            </MonitorScrollBarLabelStyle>
            <MonitorScrollBarLabelStyle variant='end'>
              SLOW
            </MonitorScrollBarLabelStyle>
            {showScanSpinner && (
             <MonitorScrollBarLabelStyle variant='spinner'>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
             </MonitorScrollBarLabelStyle>
            )}
        </MonitorScrollBarLabelStyle>
    )
}

export default Index
