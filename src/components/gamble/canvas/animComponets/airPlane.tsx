import React, { useState, useRef, useCallback } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, PixiComponent, BitmapText, Text, Graphics, useTick } from '@inlet/react-pixi';

import Plane from "./images/plane.png"
import PlaneJson from "./images/plane.json";

import CountTicker from "./countTicker"

const Airplane: React.FC<any> = ({ lang, history, rate, rate2, time, addHistory, setTimer, cleanTimer, isFlying, setFlying, win, outWintext }: any) => {

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
    const [xs, setXs] = useState<number>(1)
    const [count, setCount] = useState<number>(1)

    const lost = x > 10 && isFlying && !time;
    const roundedCount = count.toFixed(2);

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
                i += 0.002 * delta;
                const isXs = x > 1350 && (xs === 250 ? setXs(0) : setXs(xs + 1));
                const getSpeedX = xs > 125 ? -2 : 2;
                const getSpeedY = xs > 125 ? 1.5 : -1.5;
                const speedX = x < 650 ? 4 : x < 1350 ? 3 : getSpeedX;
                console.log(y);

                const speedY = (y > 840 && 0.6) || (y > 835 && 0.9) || (y > 830 && 1.4) || (y > 825 && 1.6) || (y > 820 && 2) || (y > 815 && 2.5) || (y > 805 && 2.8) || (y > 790 && 3.5) || (y > 200 && 4) || getSpeedY;

                setX((i + x) + speedX);
                setY((y - i) - speedY);

                if (x < 15 && y > 930) setFlying(true);

            } else if (isFlying) {

                setX((i + x) + 13);
                setY((y - i) - 7);

                if (x > 950 && y < 0) {
                    const getHistory = history.history;

                    getHistory.pop();
                    getHistory.unshift(+count.toFixed(2));
                    addHistory(getHistory);

                    setX(10)
                    setY(940);
                    setXs(1);
                    setCount(1);
                    setFlying(false);
                }
            }
        });
    };

    if ((!rate && !rate2) && time === +roundedCount) {
        outWintext();
        cleanTimer();
    };

    const draw = useCallback(g => {
        if (time) {
            if (x < 1300) {
                g.lineStyle(10, 0xff0000, 1).moveTo(x + 10, y + 125).lineTo(x, y + 125);
                g.lineStyle(10, 0xff0000, 0.1).moveTo(x + 10, y + 125).lineTo(x, y + 1000);
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
                x > 10 && <CountTicker time={time} lost={win ? false : lost} count={count} setCount={setCount} />
            }
            {
                lost && <Text text={win ? "вы успели" : "улетел"} anchor={0.5} x={950} y={400} style={isFlyTextStyle} />
            }
        </>
    );
};

export default Airplane
