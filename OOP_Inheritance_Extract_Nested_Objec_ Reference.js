var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

function hash(obj, path) {
    var parts = path.split(".");
    if (parts.length==1){
        return obj[parts[0]];
    }
	if(obj != undefined){
		return hash(obj[parts[0]], parts.slice(1).join("."));
	} else {
		return undefined;
	}
}

console.log(hash(obj,'person.name')); // 'joe'
console.log(hash(obj,'person.history.bio')); // { funFact: 'I like fishing.'}
console.log(hash(obj,'person.history.homeStreet')); // undefined
console.log(hash(obj,'person.animal.pet.needNoseAntEater')); // undefined