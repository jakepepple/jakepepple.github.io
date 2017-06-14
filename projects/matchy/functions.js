/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function search(animals, name){
      for (var i = 0; i < animals.length; i++){
          if (name.toUpperCase() === animals[i].name.toUpperCase()){
              return animals[i];
          }
            
          
      } return null;
  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function replace(animals, name, replacement){
     
      for (var i = 0; i < animals.length; i++){
          if (name.toUpperCase() === animals[i].name.toUpperCase()){
              animals[i] = replacement;
          }
  }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function remove(animals, name){
      
      for (var i = 0; i < animals.length; i++){
          if (name.toUpperCase() === animals[i].name.toUpperCase()){
              animals.splice(i, 1);
          }
  }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  function add(animals, animal){
      var unique = true;
      for (var i = 0; i < animals.length; i++){
          if (animal.name === animals[i].name){
              unique = false;
          }
      }
      if (animal.name.length > 0 && animal.species.length > 0 && unique === true){
          animals.push(animal);
      }
      
  }


/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}