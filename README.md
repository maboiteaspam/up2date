# up2date

Node module to ensure your modules are up to date before the process get s run.

Sometimes you need to distribute binary to some module, node made it so easy, 
but those people may not be familiar with nodes ect.

To make that process of keeping the bin up to date, i made that module to put into your binary before they are run.



# Usage

```js
var stayTune = require('up2date');

stayTune(__dirname, function(hasFailed){
    // you could use inquirer to ask user if he wants stop or continue from here with pbbly not up2date local install.
    // That is your matter.
    if(hasFailed) throw 'can t update your modules.';
    
    // then load your binary as usual with commander.js or minimist ect
    // be careful to load your module after stayTune finished.
    
    var program = require('commnder');
    program.some...
    
    program.parse(....);
    
});
```