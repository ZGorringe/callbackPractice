/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});

var getName = function(cb){
  var thisName = names[0];
  cb(thisName);  
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

var getName = function(cb){
  var thisName = names[names.length-1];
  cb(thisName);  
}c

multiply(num1, num2, function(answer){
  console.log('The answer is ', answer);
})

var math = function(cb){
  var theAnswer = num1 * num2;
  cb(theAnswer);
}

contains(names, 'Colt', function(yes){
  if(yes === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

var findName = function(cb){
  for(var i = 0; i < names.length; i++){
    if(names[i] === 'Colt'){
      var yes = true;
    }
    else {
      var yes = false;
    }
  }
  cb(yes);
}


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

var sortedNames = names.sort();

var removeName = function(cb){
  for(var i = 0; i < sortedNames.length; i++){
    if(sortedNames[i + 1] === sortedNames[i]){
      sortedNames.splice(sortedNames[i]);
    }
  }
  cb(sortedNames);
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});

var findName = function(cb){
  var index = names.indexOf
  for(var i = 0; i < names.length; i++){
    var index = names.indexOf[i];
    var name = names[i];
  }
  cb(name, index);
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});







