import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite } from '@inlet/react-pixi';

import Bg from "../img/bd1.png"
import BgJson from "../img/bd1.json";


const BackgroundAnim: React.FC = ({ isStart, load, airplane }: boolean) => {
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
            isPlaying={isStart}
            animationSpeed={0.3}
        >
            {
                !isStart && load
            }
            {airplane}
        </AnimatedSprite>
    )
}

export default BackgroundAnim
