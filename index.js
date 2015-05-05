
var which = require('which');

var stayTune = function(cwd, done){
  which('npm', function(err, path){
    var npmP = require('child_process').spawn(path, ['update'], {cwd:cwd});
    npmP.stdout.on('data', function(d){
      process.stdout.write(d);
    });
    npmP.stderr.on('data', function(d){
      process.stderr.write(d);
    });
    npmP.on('close', function(code){
      done( (code===0) );
    });
  })
};

module.exports = stayTune;
