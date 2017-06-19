function objectValues(data){
    var dataArray = [];
    
    for (var propertyName in data){
        dataArray.push(data[propertyName]);
    }
    return dataArray;
}

function keysToString(data){
    var key = Object.keys(data);
    var newString = key.join(" ");
    return newString;
}

function valuesToString(data){
     var dataArray = [];
    for (var propertyName in data){
        if (typeof data[propertyName] === 'string'){
        dataArray.push(data[propertyName]);
        } 
    }
    var newString = dataArray.join(" ");
    return newString;
}

function arrayOrObject(data){
    var isAnArray = Array.isArray(data);
    if (isAnArray){
        return "array";
    } else if (!isAnArray  && typeof data === "object"){
        return "object";
    }
}

function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.substr(1);
}

function capitalizeAllWords(words){
    var wordsArray = words.split(" ");
    var capitalizedWordsArray = [];
    for (var i = 0; i < wordsArray.length; i++){
        capitalizedWordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].substr(1);
    }
    return capitalizedWordsArray.join(" ");
}

function welcomeMessage(data){
    var name = data.name;
     var capsName = name.charAt(0).toUpperCase() + name.substr(1);
    return "Welcome " + capsName + "!";
}

function profileInfo(data){
     var capsName = data.name.charAt(0).toUpperCase() + data.name.substr(1);
     var capsSpecies = data.species.charAt(0).toUpperCase() + data.species.substr(1);
     return capsName + " is a " + capsSpecies;
}

function maybeNoises(data){
    if(Array.isArray(data.noises) && data.noises.length > 0){
        return data.noises.join(" ");
    } else {
        return "there are no noises";
    }
}

function hasWord(string, word){
    return string.includes(word);
}

function addFriend(name, object){
    object.friends.push(name);
    return object;
}

function isFriend(name, object){
   if (object.friends){
   var friendString = object.friends.join(" ");
    return friendString.includes(name);
   } else {
       return false;
   }
}

function nonFriends(name, data){
    var nonFriendsArray = [];
    for (var i = 0; i < data.length; i++){
        if(data[i]['name'] !== name && data[i]['friends'] && !(data[i]['friends'].includes(name))){
            nonFriendsArray.push(data[i]['name']);
          } 
          
        } return  nonFriendsArray;
    
}
    
    
function updateObject(object, key, value){
    object[key] = value;
    return object;
    }  
    
function removeProperties(object, properties){
   var property = "";
    for (var i = 0; i < properties.length; i++){
        property = properties[i];
        if (object.hasOwnProperty(property)){
              delete object[property];
            }
        } return object;
    }
    

function dedup(array){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if (newArray.includes(array[i])){
            
        } else {
            newArray.push(array[i]);
        }
    } return newArray;
}
    
   
    
