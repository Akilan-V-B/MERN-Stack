const details = {
    state : 'TamilNadu',
    address : {
        street : 'second street',
        city : 'CBE'
    }
}

for(const key in details){
    console.log(key, details[key]);
}
console.log(details.address.city);
console.log(details.city);
console.log(details?.add?.state); //optimal chaining.
//console.log(details.add.state); //error.