import React, { useState, useRef } from 'react';

import * as PIXI from 'pixi.js';
import { AnimatedSprite, Text } from '@inlet/react-pixi';

import { device, size } from 'device'

import Load from "animations/load.png"
import LoadJson from "animations/load.json";
import Loading from "animations/loading.png"
import LoadingJson from "animations/loading.json";

const LoadAnim: React.FC = ({ lang } : any) => {
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);
    const [ldTextures, setLdTextures] = useState<any[]>([]);

    const text = lang.loading;

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(Load);
        const baseLdTexture = PIXI.BaseTexture.from(Loading);
        const spritesheet = new PIXI.Spritesheet(baseTexture, LoadJson);
        const spritesheetLd = new PIXI.Spritesheet(baseLdTexture, LoadingJson);
        spritesheet.parse(() => {
            setTextures(Object.keys(spritesheet.textures).map((t, i) => spritesheet.textures[t]));
        })
        spritesheetLd.parse(() => {
            setLdTextures(Object.keys(spritesheetLd.textures).map((t, i) => spritesheetLd.textures[t]));
        })
    }

    if (willMount.current) {
        loadSpritesheet();
        willMount.current = false;
    }

    const { innerWidth: width, innerHeight: height } = window;
    const isSize = Object.values(size);
    const setSize = isSize.find(item => item >= window.innerWidth);

    const setСoordinates = (size, boolean) => {
        switch (size) {
            case '1024':
                return boolean ? [600, 140]: [500, 800];
            case '700':
                return 420;
            default:
                return boolean ? [700, 160] : [600, 800];
        }
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
                position={setСoordinates(setSize, true)}
                width={490}
                height={490}
                textures={textures}
                isPlaying={true}
                animationSpeed={0.5}
            />
            <Text text={text} anchor={0.5} x={960} y={700} style={textStyle} />

            {
                <AnimatedSprite
                    anchor={0}
                    position={setСoordinates(setSize)}
                    width={700}
                    height={20}
                    textures={ldTextures}
                    isPlaying={true}
                    animationSpeed={0.5}
                />
            }
        </>
    )
}

export default LoadAnim
