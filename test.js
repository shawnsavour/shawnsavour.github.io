// loop 10000 times
var url = 'https://visitcount.itsvg.in/api?id=shawnsavour&icon=3&color=6';
// fetech the url but sleep 0.5s each time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (var i = 0; i < 10000; i++) {
    fetch(url);
    await sleep(10);
    console.log("await");
}
    
