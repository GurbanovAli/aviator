import React from 'react';

import * as PIXI from 'pixi.js';
import { Text, useTick } from '@inlet/react-pixi';

import { device, size } from 'device'

type TCounter = {
    time: number;
    lost: boolean;
    count: number;
    setCount: (item: number) => void;
}

const Counter: React.FC<TCounter> = ({ time, lost, count, setCount }: TCounter) => {

    const { innerWidth: width, innerHeight: height } = window;
    const isSize = Object.values(size);
    const setSize = isSize.find(item => item >= window.innerWidth);

    const setСoordinates = (size, boolean) => {
        switch (size) {
            case '1024':
                return boolean ? 780: 500;
            case '700':
                return 420;
            default:
                return boolean ? 940 : 600;
        }
    }

    const textStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: ' Helvetica, sans-serif',
        fontSize: window.innerWidth === 1024 ? 200 : 240,
        fontWeight: "500",
        fill: lost ? ['#ff675c', '#ff4133'] : ['#ffffff', '#bad5ff'],
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

    const roundedCount = +count.toFixed(2);

    return (
        <>
            <Text text={roundedCount + "x"} anchor={0.5} x={setСoordinates(setSize, true)} y={setСoordinates(setSize)} style={textStyle} />
        </>
    )
}


export default Counter
