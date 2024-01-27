module.exports.run = async() => {
  
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
console.log('flip')

await delay(30000)

var request = require('request'); //require somewhere and use
var url = 'https://projeca.urss131313.repl.co';
var url2 = 'https://pasv1.urss131313.repl.co';
var url3 = 'https://pasv2.urss131313.repl.co'

  
//omitted for brevity


function ping() {
request(url, function(err, response, body) {
  console.log('ping na URl!!!')
    //console.log(url)
  ping2();
})
  //setTimeout(ping, 10000)
};
function ping2() {
request(url2, function(err, response, body) {
  console.log('ping na URl2!!!')
  //process.exit(0)
    //console.log(url)
  //ping3();
})
  //setTimeout(ping, 10000)
}

async function ping3() {
request(url3, function(err, response, body) {
  console.log('ping na URl3!!!')
  
})
  //await delay(9000);
 // process.exit(1)
    //console.log(url)
  //setTimeout(ping, 10000)
}

  
ping();
//ping2();
//ping3();



await delay(5000);



try {

const slashHandler = require('./flop.js');
slashHandler.run()
  
  
} catch (err) {console.log(err)}
  



}