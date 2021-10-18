
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import * as PIXI from 'pixi.js';
import { Stage, Container, AnimatedSprite, useApp, useTick, Sprite } from '@inlet/react-pixi';

import KingHuman from "./img/animations1.png"
import KingHumanJson from "./img/animations1.json";
import avia from "./img/plane.png"

import { IAppState } from 'store'

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)

const { useState, useEffect, useMemo, useCallback, useRef, forwardRef } = React;

let i = 0;

const Avia = () => {

    const [x, setX] = useState(100);
    const [y, setY] = useState(360);

    useTick(delta => {
        i += 0.05 * delta;

        setX((i * 0.5) + x);
        setY(i / -0.2);
    });

    return (
        <Container position={[x, y]}>
            <Sprite
                image={avia}
                anchor={0.5}
                x={50}
                y={50}
            />
        </Container>
    );
};


const Canvas = ({ rate, x, y }: boolean | any) => {
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);

    const loadSpritesheet = () => {
        const baseTexture = PIXI.BaseTexture.from(KingHuman);
        const spritesheet = new PIXI.Spritesheet(baseTexture, KingHumanJson);
        spritesheet.parse(() => {
            setTextures(Object.keys(spritesheet.textures).map((t) => spritesheet.textures[t]));
        });
    }

    // Hooks way to do ComponentWillMount
    if (willMount.current) {
        loadSpritesheet();
        willMount.current = false;
    }

    return (
        <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0xeef1f5 }}>
            <Avia />

        </Stage>
    );
}

export default connector(Canvas)
