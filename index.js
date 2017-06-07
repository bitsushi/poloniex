const autobahn = require('autobahn')

const WSURI = 'wss://api.poloniex.com'

var connection = new autobahn.Connection({
  url: WSURI,
  realm: 'realm1'
})

console.log(WSURI)

connection.onopen = session => {

  console.log("connection open")

  function marketEvent(args, kwargs) {
    console.log("market", args)
  }
  function tickerEvent(args, kwargs) {
    console.log("ticker", args)
  }
  function trollboxEvent(args, kwargs) {
    console.log("trollbox", args)
  }
  session.subscribe("BTC_ETH", marketEvent)
  session.subscribe("ticker", tickerEvent)
  session.subscribe("trollbox", trollboxEvent)
}

connection.onclose = () => {
  console.log("connection closed")
}

connection.open()

