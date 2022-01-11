export const setBetValue = (bet, count, history) => {
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '.').split('.').reverse().join('.');

  const newBetValue = {
    "id": history.length,
    "bet": bet,
    "currency": "$",
    "data": utc,
    "time": "",
    "win": true,
    "count": count
  };

  const isHistory = history.historyOfBet;
  isHistory.unshift(newBetValue);
};

export const math = (bet, time) => {
  const newTime = 1;
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
  newTime = +res.toFixed(2);
  console.log(newTime);

  time = newTime;
};
