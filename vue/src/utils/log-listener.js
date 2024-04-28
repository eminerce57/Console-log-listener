
console._log = console.log;
console._error = console.error;

console.log = function() {
    var args = Array.prototype.slice.call(arguments);
    Logger(args,`log`)
}


console.error = function() {
    var args = Array.prototype.slice.call(arguments);
    Logger(args,`error`)
}

function Logger(args, types) {
    const payload = {
        log: args[0],
        date: new Date().toLocaleString(), 
        type: types
    }

    console.table({ "New Log Coming": payload }); 
}
