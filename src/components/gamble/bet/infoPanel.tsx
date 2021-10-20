import React, { useState } from 'react';

import styled from 'styled-components'

import { StyledInfoPanel } from './style'

const P = styled.p`
  font-size:60px;
  color: white;
  margin:0;
  `

const InfoPanel: React.FC = ({ rate }: any) => {
 // let exe = () => <P> you win {bet * counter}</P>;
 let [ ex, setEx ] = useState<boolean>(false);

    // result = true;
    //console.log(0);
    
    // for (let i = 0; i <= 1000; i++) {
    //   console.log(1);
      
    //   result();
    //   if(i === 1000){
    //     finished = false;
    //     // result = finished ? (<P> you win {bet * counter}</P>) : (<P>your bet {bet}</P>);
    //   }
    // }
   // return result;

  // let ex = bet * counter;

  // let exe = rate ? (<P> you win </P>) : (<P>your bet {bet}</P>)
  // if(finished){
  //   setEx( ex ? true : false);
    
  // }

  return (
    <StyledInfoPanel>
          <P>
           {
            rate ? "your bet" : ( ex ? "you win" : "rr") 
           }
          </P>
    </StyledInfoPanel>
  )
};

export default InfoPanel