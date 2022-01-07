// import React, { useState, useRef} from 'react';
//
// import * as PIXI from 'pixi.js';
// import { AnimatedSprite, PixiComponent, BitmapText, Text, Graphics } from '@inlet/react-pixi';
//
// // import Plane from "animations/plane.png"
// // import PlaneJson from "animations/plane.json";
//
// const Airplane: React.FC<any> = ({ex}: any) => {
//
//     const willMount = useRef(true);
//     const graphics = useRef(null);
//     const [textures, setTextures] = useState<any[]>([]);
//
//     const loadSpritesheet = () => {
//         const baseTexture = PIXI.BaseTexture.from(Plane);
//         const spritesheet = new PIXI.Spritesheet(baseTexture, PlaneJson);
//         spritesheet.parse(() => {
//             setTextures(Object.keys(spritesheet.textures).map((t, i) => spritesheet.textures[t]));
//         })
//     }
//
//     if (willMount.current) {
//         loadSpritesheet();
//         willMount.current = false;
//     }
//
//
//
//   }
