
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

function isSantaClausable(obj) {
    return (((typeof(obj.sayHoHoHo) === 'function')) &&
             (typeof(obj.distributeGifts) === 'function') &&
             (typeof(obj.goDownTheChimney) === 'function'))? true : false;
}

console.log(isSantaClausable(santa)); // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE
