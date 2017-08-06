/**
 * stock.js
 * 
 * Stock object model
 * @author  Jon Bonso
 *
 */

class Stock {
  constructor(id, {stockName, stockPrice}) {
    this.id = id;
    this.stockPrice = stockPrice;
    this.stockName = stockName;
  }
}