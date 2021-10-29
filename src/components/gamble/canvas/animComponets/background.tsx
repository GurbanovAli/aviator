import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite } from '@inlet/react-pixi';

import Bg from "./images/bd1.png"
import BgJson from "./images/bd1.json";


const BackgroundAnim: React.FC = ({ getStart, load, airplane }: boolean | any) => {
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(Bg);
        const spritesheet = new PIXI.Spritesheet(baseTexture, BgJson);
        spritesheet.parse(() => {
            setTextures(Object.keys(spritesheet.textures).map((t, i) => spritesheet.textures[t]));
        })
    }

    if (willMount.current) {
        loadSpritesheet();
        willMount.current = false;
    }

    return (
        <AnimatedSprite
            anchor={0}
            position={[0, 0]}
            width={800}
            height={400}
            textures={textures}
            isPlaying={getStart}
            animationSpeed={0.3}
        >
            {
                !getStart && load
            }
            {airplane}
        </AnimatedSprite>
    )
}

export default BackgroundAnim
