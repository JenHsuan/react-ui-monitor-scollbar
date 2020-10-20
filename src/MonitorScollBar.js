import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';
import { 
    MonitorScrollBarLabelStyle
} from './styles/Style';

import { ThemeProvider } from 'styled-components';
import Theme from './themes/Theme';
import DraggableCircle from './DraggableCircle';
import Bar from './Bar';

const MonitorScollBar = ({showScanSpinner, color, callback}) => {
    return (
        <ThemeProvider theme={Theme}>
           <MonitorScrollBarLabelStyle variant='main'>
            <MonitorScrollBarLabelStyle variant='start'>
                OFF
            </MonitorScrollBarLabelStyle>
            <MonitorScrollBarLabelStyle variant='circle'>
                <DraggableCircle color={color} callback={callback}/>    
            </MonitorScrollBarLabelStyle>
            <MonitorScrollBarLabelStyle variant='rect'>
                <Bar/>
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
        </ThemeProvider>
    )
};

export default MonitorScollBar
