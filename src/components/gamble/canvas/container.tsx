
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'

import * as PIXI from 'pixi.js';
import { Stage, Container, AnimatedSprite, useApp, useTick, Sprite } from '@inlet/react-pixi';

import Load from "./img/animations1.png"
import LoadJson from "./img/animations1.json";
import Plane from "./img/plane.png"
import PlaneJson from "./img/plane.json";

import { IAppState } from 'store'

import { StyledContainer } from './style';

const mapStateToProps = (state: IAppState) => ({
    fetching: state.common.fetching
})
const mapActionsToProps = (dispatch) => ({
})

const connector = connect(mapStateToProps, mapActionsToProps)

const { useState, useEffect, useMemo, useCallback, useRef, forwardRef } = React;


const Airplane = ({rate, isFlying, setIsFlying}: any) => {
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
    const [y, setY] = useState(340);

    useTick(delta => {
      if(rate){
        i += 0.005 * delta;

        if(x > 620){
          setX(x - 100)
        } else {
          setX((i + x) + 1.8);
        }

        if( y < 50){
          setY(y + 1);
        } else {
          setY((y - i) - 0.8);
        }
        setIsFlying(true);

      } else if (isFlying){

        setX((i + x) + 4);
        setY((y - i) - 1.8);

        if( x > 750 && y < 0){
          setX(10)
          setY(340);
          setIsFlying(false);
        }

      }
    });

    return (
      <AnimatedSprite
          anchor={0}
          width={160}
          height={80}
          position={[x, y]}
          textures={textures}
          isPlaying={rate || isFlying}
          initialFrame={0}
          animationSpeed={0.6}
      />
    );
};


const Canvas = ({ rate }: boolean | any) => {
  // const [isLoading, setIsLoading ] = useState(false);
    const willMount = useRef(true);
    const [textures, setTextures] = useState<any[]>([]);
    const [isFlying, setIsFlying] = useState<boolean>(false);
    const random = Math.floor(Math.random() * 10);
    const randomNumber = random ===  1 ? 1.2 : random;
    // const isPlaying = rate ? false : true;

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
        <StyledContainer>
            <Stage width={800} height={400} options={{ autoDensity: true, backgroundColor: 0x708090 }}>
                {
                    !rate && !isFlying &&
                    <AnimatedSprite
                        anchor={0}
                        position={[260, 100]}
                        textures={textures}
                        isPlaying={true}
                        initialFrame={0}
                        animationSpeed={0.4}
                    />
                }
                <Airplane
                    rate={rate}
                    isFlying={isFlying}
                    setIsFlying={setIsFlying}
                />
            </Stage>
        </StyledContainer>
    );
}

export default connector(Canvas)
