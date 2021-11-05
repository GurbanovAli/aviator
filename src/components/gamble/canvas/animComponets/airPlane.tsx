import React, { useState, useRef, useCallback } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, PixiComponent, BitmapText, Text, Graphics, useTick } from '@inlet/react-pixi';

import Plane from "./images/plane.png"
import PlaneJson from "./images/plane.json";


const Airplane: React.FC = ({ isStart, setIsStart, isFlying, setIsFlying }: any) => {

    const willMount = useRef(true);
    const graphics = useRef(null);
    const [textures, setTextures] = useState<any[]>([]);

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(Plane);
        const spritesheet = new PIXI.Spritesheet(baseTexture, PlaneJson);
        spritesheet.parse(() => {
            setTextures(Object.keys(spritesheet.textures).map((t, i) => spritesheet.textures[t]));
        })
    }

    if (willMount.current) {
        loadSpritesheet();
        willMount.current = false;
    }

    let i = 0;
    const [x, setX] = useState<number>(10);
    const [y, setY] = useState<number>(940);
    // const [height, setHeight] = useState<number>(4)
    const [xs, setXs] = useState<number>(1)
    const [count, setCount] = useState<number>(1)
    const lost = x > 10 && isFlying && !isStart;

    const textStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 240,
        fontWeight: 500,
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
    })

    const isFlyTextStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: ' sans-serif',
        fontSize: 120,
        fontWeight: 500,
        fill: '#ff4133',
        stroke: '#ff1100',
        strokeThickness: 2,
        letterSpacing: 2,
        dropShadow: true,
        dropShadowColor: '#ff1100',
        dropShadowBlur: 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 700,
    })

    useTick(delta => {
        if (isStart) {
            i += 0.002 * delta;
            const isXs = x > 1350 && (xs === 250 ? setXs(0) : setXs(xs + 1));
            const getSpeedX = xs > 125 ? -2 : 2;
            const getSpeedY = xs > 125 ? 1.5 : -1.5;
            const speedX = x < 650 ? 4 : x < 1350 ? 3 : getSpeedX;
            const speedY = (y > 840 && 0.6) || (y > 835 && 0.8) || (y > 830 && 1) || (y > 825 && 1.2) || (y > 200 && 2) || getSpeedY;

            setX((i + x) + speedX);
            setY((y - i) - speedY);
            // setHeight((i + height) + speedY)
            setCount(i + count)
            setIsFlying(true);

        } else if (isFlying) {

            setX((i + x) + 9);
            setY((y - i) - 4.6);

            if (x > 950 && y < 0) {
                setX(10)
                setY(940);
                setXs(1)
                setCount(1)
                setIsFlying(false);
            }
        }
    });

    let roundedCount = count.toFixed(2);

    if (isStart === +roundedCount) {
        setIsStart(0);
    } else {
        if (!isStart) {
            setTimeout(() => { setIsStart(3) }, 5000);
            clearTimeout();
        }
    }

    const draw = useCallback(g => {
        if (isStart) {
            if (x < 1300) {
                g.lineStyle(10, 0xff0000, 1).moveTo(x + 10, y + 125).lineTo(x, y + 125);
                g.lineStyle(10, 0xff0000, 0.1).moveTo(x + 10, y + 125).lineTo(x, y + 1000);
            }
            // console.log(height)
          //  g.height = height + 30;
            g.width = x + 30;
        } else {
            g.clear()
        }
    }, [x, y]);

    return (
        <>
            <AnimatedSprite
                anchor={0}
                width={400}
                height={200}
                position={[x, y]}
                textures={textures}
                isPlaying={isStart || isFlying}
                animationSpeed={0.6}
            />
            <Graphics draw={draw} ref={graphics.current} />
            {
                x > 10 && <Text text={roundedCount + "x"} anchor={0.5} x={940} y={600} style={textStyle} />
            }
            {
                lost && <Text text={"лох улетел"} anchor={0.5} x={950} y={400} style={isFlyTextStyle} />
            }
        </>
    );
};

// <Line isStart={isStart} x={x} y={y} color={0xff0000} />

export default Airplane
