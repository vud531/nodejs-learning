var waitTime = 3000;
var currentTime = 0;
var waitInterval = 1500;
var percentWaited = 0;

function writeWaitingPercent(p) {
   process.stdout.clearLine();
   process.stdout.cursorTo(0);
   process.stdout.write(`waiting ... ${p}%`);
}

console.log("Wait for it");

var interval = setInterval(function() {

   currentTime += waitInterval;
   percentWaited = Math.floor((currentTime/waitTime) * 100);
   writeWaitingPercent(percentWaited);
  //console.log(`waiting ${currentTime/1000} seconds...`);

}, waitInterval);

setTimeout(function() {

   clearInterval(interval);
   writeWaitingPercent(100);
   console.log("\n\ndone\n\n");

}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
