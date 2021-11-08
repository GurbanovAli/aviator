import React, { useState, useEffect } from 'react';


const IsCounter: React.FC = ({ rate, setRate, isStart, setIsStart, getCash, setGetCash, count, setCount, text, check, setCheck, bet }: any) => {

    let i = 0;
    const [x, setX] = useState(1);

    useEffect(() => {
        if (isStart) {
            i += 0.000011;

            setX((i * 2) + x);
            setCount(+x.toFixed(2));
        } else {
            setX(1);
            setCount(1);
        }
    });

    let roundedCount = count.toFixed(2);

    console.log(count, roundedCount)

    if (getCash) {
        setGetCash(false);
        setRate(false);
        setIsStart(0);

    } else if (isStart === +roundedCount) {
        setIsStart(0);
        if (rate) {
            setRate(false);
            setCheck(check - bet)
        }
    }

    return (
        <>
            { text + (count + bet) }
        </>
    )
};

export default IsCounter
