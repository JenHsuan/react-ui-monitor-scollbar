import styled from 'styled-components';
import { variant } from 'styled-system';


export const MonitorScrollBarStyle = styled('div')(
    variant({
      scale: 'monitorScrollBar',
      variants: {
        primary: {}
      },
    })
); 

export const MonitorScrollBarLabelStyle  = styled('div')(
    variant({
      scale: 'monitorScrollBarLabel',
      variants: {
        primary: {}
      },
    })
); 
