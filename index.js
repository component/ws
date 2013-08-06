module.exports = function() {
  return global.WebSocket || global.MozWebSocket;
}
