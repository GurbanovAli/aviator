import React from 'react';

import * as PIXI from 'pixi.js';
import { Text, useTick } from '@inlet/react-pixi';

const CountTicker: React.FC<any> = ({ time, lost, count, setCount }: any) => {

    const textStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: ' Helvetica, sans-serif',
        fontSize: 240,
        fontWeight: "500",
        fill: lost ? ['#ff675c', '#ff4133'] : ['#ffffff', '#bad5ff'], // gradient
        stroke: '#63a0ff',
        strokeThickness: 5,
        letterSpacing: 8,
        dropShadow: true,
        dropShadowColor: lost ? '#eb6c63' : '#ccced2',
        dropShadowBlur: 2,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    });

    let i = 0;

    useTick(delta => {
        if (time) {
            i += 0.002 * delta;
            setCount(i + count)
        }
    });

    let roundedCount = count.toFixed(2);

    return (
        <>
            <Text text={roundedCount + "x"} anchor={0.5} x={940} y={600} style={textStyle} />
        </>
    )
}


export default CountTicker
