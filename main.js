/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Obniz = require("./obniz-babel.js");

var obniz = new Obniz("29672377");
obniz.onconnect = async function () {
  obniz.display.print("Hi,");
  
};