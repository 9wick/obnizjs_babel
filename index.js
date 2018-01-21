/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Obniz = require("obniz-for-node6.10.js");


exports.displayHandler = function(event, context, callback) {
  var obniz = new Obniz("29672377");
  obniz.onconnect = function () {
    obniz.display.clear();
    obniz.display.print("Hi,");
  
    obniz.wait(5000).then(function(){
      callback(null, "some success message");
    });
  };
};
