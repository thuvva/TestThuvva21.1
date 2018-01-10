let AWS = require('aws-sdk');
exports.handler = function(event, context, callback){
    var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

}