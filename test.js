auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();
unlock.unlock();
// ==================================================


robot.clickTextCenter("不赚钱,离开");


// ==================================================
sleep(1000);
robot.after();