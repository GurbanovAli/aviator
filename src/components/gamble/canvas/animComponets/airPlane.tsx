import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, useTick } from '@inlet/react-pixi';

import Plane from "../img/plane.png"
import PlaneJson from "../img/plane.json";


const Airplane = ({ rate, isFlying, setIsFlying }: any) => {
    const willMount = useRef(true);
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
    const [x, setX] = useState(10);
    const [y, setY] = useState(900);

    useTick(delta => {
        if (rate) {
            i += 0.005 * delta;

            if (x > 1300) {
                setX(x - 100)
            } else {
                setX((i + x) + 3.8);
            }

            if (y < 50) {
                setY(y + 1);
            } else {
                setY((y - i) - 2.2);
            }
            setIsFlying(true);

        } else if (isFlying) {

            setX((i + x) + 9);
            setY((y - i) - 4.6);

            if (x > 750 && y < 0) {
                setX(10)
                setY(900);
                setIsFlying(false);
            }

        }
    });

    return (
        <AnimatedSprite
            anchor={0}
            width={360}
            height={180}
            position={[x, y]}
            textures={textures}
            isPlaying={rate || isFlying}
            animationSpeed={0.6}
        />
    );
};

export default Airplane
