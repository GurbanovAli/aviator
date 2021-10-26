
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import * as PIXI from 'pixi.js';
import { Stage, Container, AnimatedSprite, useApp, useTick, Sprite } from '@inlet/react-pixi';

import Load from "./img/animations1.png"
import LoadJson from "./img/animations1.json";
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


const Avia = ({rate}: any) => {
    let i = 0;
    const [x, setX] = useState(10);
    const [y, setY] = useState(340);

    useTick(delta => {
      if(rate){
        i += 0.005 * delta;

        if(x > 650){
          setX(x - 30)
        } else {
          setX((i * 100) + x);
        }

        if( y < 50){
          setY(y + 10);
        } else {
          setY((y - i) - 0.2);
        }
      }else {
        setX(10)
        setY(340);
      }
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


const Canvas = ({ rate }: boolean | any) => {
  // const [isLoading, setIsLoading ] = useState(false);
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);
    let isFinishAnim = false;


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

    // if(!rate){
    //   setTimeout(() => , 3000);
    // }

    return (
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0xff5c87 }}>
                {
                    !rate &&
                    <AnimatedSprite
                        anchor={0}
                        position={[260, 100]}
                        textures={textures}
                        isPlaying={true}
                        initialFrame={0}
                        animationSpeed={0.4}
                    />
                }
                <Avia rate={rate}/>
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
