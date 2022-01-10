import React, { useState, useRef, useCallback } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, PixiComponent, BitmapText, Text, Graphics, useTick } from '@inlet/react-pixi';

import { IAppState, IAppDispatch } from 'store'

import Counter from "../../counter"

import Plane from "animations/plane.png"
import PlaneJson from "animations/plane.json";

const Airplane: React.FC<IAppState | IAppDispatch> = ({
    history,
    rate,
    rate2,
    time,
    win,
    isFlying,
    counter,
    addHistory,
    setTimer,
    cleanTimer,
    setFlying,
    outWintext }: IAppState | IAppDispatch) => {

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

    let k = 0;
    const [x, setX] = useState<number>(10);
    const [y, setY] = useState<number>(940);
    const [xs, setXs] = useState<number>(1);
    const [speedY, setSpeedY] = useState<number>(0.5);
    const [count, setCount] = useState<number>(1);

    const lost = x > 10 && isFlying && !time;
    const roundedCount = +count.toFixed(2);

    const isFlyTextStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: ' sans-serif',
        fontSize: 120,
        fontWeight: "500",
        fill: win ? "green" : '#ff4133',
        stroke: win ? "green" : '#ff1100',
        strokeThickness: 2,
        letterSpacing: 2,
        dropShadow: true,
        dropShadowColor: win ? "green" : '#ff1100',
        dropShadowBlur: 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 700,
    })

    if (!time && !isFlying) {
        let j = 0;

        useTick(delta => {
            j += 0.005 * delta;

            if (xs < 3.025) {
                setXs(j + xs);
            } else {
                setTimer(3)
                setXs(1)

                if (win) {
                    outWintext();
                }
            }
        });

    } else {
        useTick(delta => {
            if (time) {
                k += 0.002 * delta;

                const startXs = x > 1300 && (xs === 250 ? setXs(0) : setXs(xs + 1));

                const speedX = x < 650 ? 4 : (x < 1300 ? 3 : (xs > 125 ? -2 : 2));
                const getSpeedY = xs === 1 ? setSpeedY(speedY + 0.008) : setSpeedY(xs > 125 ? 1.5 : -1.5);

                setX((k + x) + speedX);
                setY((y - k) - speedY);

                if (x < 15 && y > 930) { setFlying(true) };

            } else if (isFlying) {

                setX((k + x) + 13);
                setY((y - k) - 7);

                if (x > 950 && y < 0) {
                    const getHistory = history.history;

                    getHistory.pop();
                    getHistory.unshift(roundedCount);
                    addHistory(getHistory);

                    setX(10);
                    setY(940);
                    setXs(1);
                    setSpeedY(0.5);
                    setCount(1);
                    setFlying(false);
                }
            }
        });
    };


    if ((!rate && !rate2) && time === roundedCount) {
        outWintext();
        cleanTimer();
    };

    const draw = useCallback(g => {
        if (time) {
            if (x < 1300) {
                g.lineStyle(10, 0xff0000, 1).moveTo(x + 10, xs === 1 ? y + 125 : (xs > 125 ? y - 10 : y + 10)).lineTo(x, y + 125);
                g.lineStyle(10, 0xff0000, 0.1).moveTo(x + 10, xs === 1 ? y + 125 : (xs > 125 ? y - 10 : y + 10)).lineTo(x, y + 1000);
            }
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
                isPlaying={time || isFlying}
                animationSpeed={0.6}
            />
            <Graphics draw={draw} ref={graphics.current} />
            {
                x > 10 && <Counter time={time} lost={win ? false : lost} count={count} setCount={setCount} canvas={true}/>
            }
            {
                lost && <Text text={win ? "вы успели" : "улетел"} anchor={0.5} x={950} y={400} style={isFlyTextStyle} />
            }
        </>
    );
};

export default Airplane
