module.exports.run = async() => 
  
  
{const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log('flop')

await delay(1000)

try {

const slashHandler = require('./flip.js');
slashHandler.run()
  
  
} catch (err) {console.log(err)}
  
}