import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, Text } from '@inlet/react-pixi';

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

    const textStyle = new PIXI.TextStyle({
        align: 'center',
        fontFamily: ' sans-serif',
        fontSize: 90,
        fontWeight: 700,
        fill: '#ffffff',
        stroke: '#ffffff',
        strokeThickness: 0,
        letterSpacing: 0,
        dropShadow: true,
        dropShadowColor: '#ffffff',
        dropShadowBlur: 2,
        dropShadowDistance: 0,
        wordWrap: true,
        wordWrapWidth: 1400,
        fontVariant: 'small-caps'
    })

    return (
        <>
            <AnimatedSprite
                anchor={0}
                position={[700, 200]}
                width={490}
                height={490}
                textures={textures}
                isPlaying={true}
                animationSpeed={0.5}
            />
            <Text text={"expectation to the new round"} anchor={0.5} x={960} y={760} style={textStyle} />
        </>
    )
}

export default LoadAnim
