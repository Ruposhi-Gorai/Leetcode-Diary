var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let sellPrice = prices[i]
        if (sellPrice < buyPrice) {
            buyPrice = sellPrice
        } else {
            let profit = sellPrice - buyPrice;
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }
    return maxProfit;


};