
var stayTune = require('./index.js');

stayTune(__dirname, function(hasFailed){
  // you could use inquirer to ask user if he wants stop or continue from here with pbbly not up2date local install.
  // That is your matter.
  if(hasFailed) throw 'can t update your modules.';

  // then load your binary as usual with commander.js or minimist ect
  // be careful to load your module after stayTune finished.

  console.log('OK you are now up2date, entering the program')

});