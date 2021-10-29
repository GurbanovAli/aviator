import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

const P = styled.p`
  font-size:50px;
  font-weight: 600;
  color: white;
  background: red;
  border-radius: 3px;
  margin: 0;
  padding: 0 0 0 1rem;
  text-align: left;
  `


const Loader = ({ isStart, setIsStart }: number | any) => {

    let i = 0;
    const [count, setCount] = useState(0);
    const [x, setX] = useState(1);
    const random = Math.floor(Math.random() * 10);
    const randomNumber = 3 // random === 1 ? 1.2 : random;

    useEffect(() => {
        if (!isStart) {
            i += 0.000025;

            setX((i * 2) + x);
            let roundedCount = +String(x).slice(0, 4);
            setCount(roundedCount);
        } else {
            setX(1);
            setCount(0);
        }
    });

    if (!isStart && count > 3.5) {
        setIsStart(randomNumber)
    }

    return (
        <P> 0 </P>
    )
}

export default Loader
