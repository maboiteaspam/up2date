
var which = require('which');

var stayTune = function(cwd, done){
  which('npm', function(err, path){
    var npmP = require('child_process').spawn(path, ['update'], {cwd:cwd});
    var failed = false;
    npmP.stdout.on('data', function(d){
      if(!failed) failed = !!(''+d).match(/error/)
    });
    npmP.stderr.on('data', function(d){
      if(!failed) failed = !!(''+d).match(/error/)
    });
    npmP.on('close', function(){
      done(failed);
    });
  })
};

module.exports = stayTune;
