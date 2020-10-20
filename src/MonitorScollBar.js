import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './themes/Theme';
import Index from './Index';



const MonitorScollBar = ({showScanSpinner}) => {
    return (
        <ThemeProvider theme={Theme}>
            <Index showScanSpinner = {showScanSpinner}/>    
        </ThemeProvider>
    )
};

export default MonitorScollBar
