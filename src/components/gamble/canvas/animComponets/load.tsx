import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite } from '@inlet/react-pixi';

import Load from "./images/load2.png"
import LoadJson from "./images/load2.json";


const LoadAnim: React.FC = () => {
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(Load);
        const spritesheet = new PIXI.Spritesheet(baseTexture, LoadJson);
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
            position={[660, 240]}
            width={600}
            height={600}
            textures={textures}
            isPlaying={true}
            animationSpeed={0.5}
        />
    )
}

export default LoadAnim
