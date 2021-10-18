
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import * as PIXI from 'pixi.js';
import { Stage, Container, AnimatedSprite, useApp, useTick, Sprite } from '@inlet/react-pixi';

// import KingHuman from "./img/animations1.png"
// import KingHumanJson from "./img/animations1.json";
import avia from "./img/plane.png"

import { IAppState } from 'store'

import { StyledContainer } from './style';

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)

const { useState, useEffect, useMemo, useCallback, useRef, forwardRef } = React;


const Avia = ({setCount}: any) => {
    let i = 0;
    const [x, setX] = useState(10);
    const [y, setY] = useState(340);

    useTick(delta => {
        i += 0.0025 * delta;

        setX((i * 100) + x);
        setY((y - i) - 0.2);
        setCount(x);
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


const Canvas = ({ rate, setCount }: boolean | any) => {
    // const willMount = useRef(true);
    // const [textures, setTextures] = useState<any[]>([]);

    // const loadSpritesheet = () => {
    //     const baseTexture = PIXI.BaseTexture.from(KingHuman);
    //     const spritesheet = new PIXI.Spritesheet(baseTexture, KingHumanJson);
    //     spritesheet.parse(() => {
    //         setTextures(Object.keys(spritesheet.textures).map((t) => spritesheet.textures[t]));
    //     });
    // }

    // if (willMount.current) {
    //     loadSpritesheet();
    //     willMount.current = false;
    // }

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0xff5c87 }}>
                {
                    rate && <Avia setCount={setCount}/>
                }
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
