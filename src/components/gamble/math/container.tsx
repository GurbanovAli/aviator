import React from 'react';

type TMath = {
    bet: number;
    setTimer: (item: number) => void;
}

export const math = (bet, setTimer) => {
    const time = 1;
    const min;
    const max;
    const betValue = bet != 0 && bet;

    if (betValue) {
        if (bet < 3) {
            min = 1;
            max = 10;
        } else if (bet > 3 && bet < 6) {
            min = 1;
            max = 4;
        } else if (bet > 6 && bet < 9) {
            min = 1;
            max = 3;
        } else {
            min = 1;
            max = 2;
        }
    } else {
      min = 1;
      max = 10;
    }

    const res = Math.random() * (max - min + 1) + min;
    time = res;
    setTimer(time)
}


// export default Math
