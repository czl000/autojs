auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
robot.before();
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 4334029334023294E64756E647B316364796F6E6D316E64627F69646E296E64756E647E216364796F6E6E2D41494E4B3C61657E6368664C6167637D303873303360303030343B336F6D607F6E656E647D3E65647E2E6572796B6E227F6D616E6E2D657A75696F236F6D6E276F6F676C656E216E64627F69646E216070737E2D657A75696E23756474796E67637E23556474796E676371436479667964797B356E64602");
sleep(500);

//进入Advanced页
if (text("Sources").exists()) {
    robot.clickTextCenter("Sources");
    sleep(200);
    robot.clickTextCenter("Advanced");
    sleep(200);
}
click(508, 936);
sleep(200);
home();
robot.after();