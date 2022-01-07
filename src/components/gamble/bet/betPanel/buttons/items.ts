export const setBetValue = (bet, count, history) => {
  const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '.').split('.').reverse().join('.');

  const newBetValue = {
    "bet": bet,
    "currency": "$",
    "data": utc,
    "time": "",
    "win": true,
    "count": +count.toFixed(2)
  };

  const isHistory = history.historyOfBet;
  isHistory.unshift(newBetValue);
};
