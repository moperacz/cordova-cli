
var isWin = !!process.platform.match(/^win/);

if (isWin) {
  module.exports = ['android'];
} else {
  module.exports = ['ios', 'android', 'blackberry'];
}