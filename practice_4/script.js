// // Setup
// var collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(object, id, prop, value) {
    
//     if ( prop !== "tracks" && value !== ""){
//       object[id][prop] = value;
//     } 
//     else if (prop === "tracks" && value !== ""){
//       if(object[id].hasOwnProperty(prop)){
//         object[id][prop].push(value);
//       } else {
//         var tracks = [];
//          tracks.push(value);
//         object[id]['tracks'] = tracks;
//       } 
//     }
//     else if (value === ""){
//         delete object[id][prop];
//       }
//     return object;
//   }
  
//   updateRecords(collection, 5439, 'artist', 'ABBA');

//   var myArray = [];
// var i = 5;
// while ( i > -1){
//     myArray.push(i);
//     i--;
// }
// console.log(myArray);

function sum(arr, n) {
    // Only change code below this line
  if(n<=0){
    console.log("Dis is n: " + n);
    return 0;
  } else {
    var sums = sum(arr, n - 1) + arr[n - 1];
    console.log(sums);
    return sums;
  }
    // Only change code above this line
  }

  sum([2, 3, 4], 2);
  sum([2, 3, 4, 5], 3);