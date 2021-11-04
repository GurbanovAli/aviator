import React, { useState, useEffect } from 'react';


const IsCounter: React.FC = ({ isStart, count, setCount, text }: any) => {

    let i = 0;
    const [x, setX] = useState(1);

    useEffect(() => {
        if (isStart) {
            i += 0.000015;

            setX((i * 2) + x);
            setCount(+x.toFixed(2);
        } else {
            setX(1);
            setCount(1);
        }
    });

    return (
        <>
            { text + count }
        </>
    )
};

export default IsCounter
