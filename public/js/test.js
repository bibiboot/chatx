    "use strict";
    window.addEventListener('load', init, false); 
    var constants = new Object(); 
    var transformObject;
    var transformObject2;
    var transformObject3;
    var transformObject4;
    var transformObject5;
    var transformObject6;
    var transformObject7;
    var transformObject8;
    var svgElement;
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    var velocity = 50;
    var direction = 1;
    var MAX_X = 500;
    var MAX_Y = 320;
    function initConstants()
    {
      constants.delay = 12; 
      constants.initialTheta = 0;
      constants.thetaDelta = 0.3;
      svgElement = document.getElementById("svgElement");
      transformObject = svgElement.createSVGTransform();
      transformObject2 = svgElement.createSVGTransform();
      transformObject3 = svgElement.createSVGTransform();
      transformObject4 = svgElement.createSVGTransform();
      transformObject5 = svgElement.createSVGTransform();
      transformObject6 = svgElement.createSVGTransform();
      transformObject7 = svgElement.createSVGTransform();
      transformObject8 = svgElement.createSVGTransform();
    }

    function init() {
      var head0 = document.getElementById("head0"); 
      var body0 = document.getElementById("body0"); 
      var lhand0 = document.getElementById("lhand0"); 
      var rhand0 = document.getElementById("rhand0"); 
      var lfoot0 = document.getElementById("lfoot0"); 
      var lthigh0 = document.getElementById("lthigh0"); 
      var rthigh0 = document.getElementById("rthigh0"); 
      var lfoot0 = document.getElementById("lfoot0"); 
      var rfoot0 = document.getElementById("rfoot0"); 

      initConstants(); 

      head0.transform.baseVal.appendItem(transformObject8); 
      head0.currentTheta = constants.initialTheta;
      lfoot0.transform.baseVal.appendItem(transformObject3); 
      lfoot0.currentTheta = constants.initialTheta;
      rfoot0.transform.baseVal.appendItem(transformObject2); 
      rfoot0.currentTheta = constants.initialTheta;
      rhand0.transform.baseVal.appendItem(transformObject4); 
      rhand0.currentTheta = constants.initialTheta;
      lhand0.transform.baseVal.appendItem(transformObject5); 
      lhand0.currentTheta = constants.initialTheta;
      body0.transform.baseVal.appendItem(transformObject7); 
      body0.currentTheta = constants.initialTheta;
      lthigh0.transform.baseVal.appendItem(transformObject); 
      lthigh0.currentTheta = constants.initialTheta;
      rthigh0.transform.baseVal.appendItem(transformObject6); 
      rthigh0.currentTheta = constants.initialTheta;

      lfoot0.currentTheta += 45;
      lfoot0.transform.baseVal.getItem(0).setRotate(lfoot0.currentTheta, 0, 0);

      rfoot0.currentTheta -= 45;
      rfoot0.transform.baseVal.getItem(0).setRotate(rfoot0.currentTheta, 0, 0);
      
      //lhand0.currentTheta += 45;
      //lhand0.transform.baseVal.getItem(0).setRotate(lhand0.currentTheta, 0, 75);
      
      //rhand0.currentTheta -= 45;
      //rhand0.transform.baseVal.getItem(0).setRotate(rhand0.currentTheta, 0, 75);
      
      lthigh0.currentTheta += 30;
      lthigh0.transform.baseVal.getItem(0).setRotate(lthigh0.currentTheta, 0, 150);
      
      rthigh0.currentTheta -= 30;
      rthigh0.transform.baseVal.getItem(0).setRotate(rthigh0.currentTheta, 0, 150);

      //requestAnimationFrameID = window.requestAnimationFrame(rotate_lthigh);
      //requestAnimationFrameID = window.requestAnimationFrame(rotate_lfoot);
      //requestAnimationFrameID = window.requestAnimationFrame(move_body_h);
      requestAnimationFrameID = window.requestAnimationFrame(bend);

    }

    function doAnim() {
    }

    function doRotate() {
      ball0.transform.baseVal.getItem(0).setRotate(ball0.currentTheta, 0, 0);
      ball0.currentTheta += constants.thetaDelta; 
      requestAnimationFrameID = window.requestAnimationFrame(doRotate); 
    }

    function doJump() {
      ball1.vx = 50;
      ball1.vy = 50;
      ball1.x.baseVal.value += s2d(ball1.vx);
      requestAnimationFrameID = window.requestAnimationFrame(doJump); 
    }

    function doHead() {
      head0.transform.baseVal.getItem(0).setRotate(head0.currentTheta, 300, 150);
      head0.currentTheta += constants.thetaDelta; 
      if(head0.currentTheta > 10 || head0.currentTheta < -10) constants.thetaDelta*=-1;
      requestAnimationFrameID = window.requestAnimationFrame(doHead); 
    }

    function doLeg() {
      rfoot0.transform.baseVal.getItem(0).setRotate(rfoot0.currentTheta, 300, 200);
      lfoot0.currentTheta += constants.thetaDelta; 
      lfoot0.transform.baseVal.getItem(0).setRotate(lfoot0.currentTheta, 300, 200);
      rfoot0.currentTheta += constants.thetaDelta; 
      if(lfoot0.currentTheta > 15 || lfoot0.currentTheta < -15) constants.thetaDelta*=-1;
      if(rfoot0.currentTheta > 45 || rfoot0.currentTheta < -45) constants.thetaDelta*=-1;
      requestAnimationFrameID = window.requestAnimationFrame(doLeg); 
    }
    
    function bend() {
    	rotate_body(1, 0, 150, 90, 0);
    	rotate_hands(1, 0, 150, 90, 0);
    	rotate_head(1, 0, 150, 90, 0);
    	if(body0.currentTheta == 0)
    		return;
    	requestAnimationFrameID = window.requestAnimationFrame(bend);
    	
    }
    
    function rotate_body(theta, cx, cy, upperbound, lowerbound) {
    
    	if(body0.currentTheta > upperbound)
    		direction = -1;
    	if(body0.currentTheta < lowerbound)
    		direction = 1;

    	body0.currentTheta += direction*theta;
    	body0.transform.baseVal.getItem(0).setRotate(body0.currentTheta, cx, cy);
    }
    
    function rotate_hands(theta, cx, cy, upperbound, lowerbound) {
    	if(body0.currentTheta > upperbound)
    		direction = -1;
    	if(body0.currentTheta < lowerbound)
    		direction = 1;
    	
    	lhand0.currentTheta += direction*theta;
    	lhand0.transform.baseVal.getItem(0).setRotate(lhand0.currentTheta, cx, cy);
    	
    	rhand0.currentTheta += direction*theta;
    	rhand0.transform.baseVal.getItem(0).setRotate(rhand0.currentTheta, cx, cy);
    }
    
    function rotate_head(theta, cx, cy, upperbound, lowerbound) {
    	if(body0.currentTheta > upperbound)
    		direction = -1;
    	if(body0.currentTheta < lowerbound)
    		direction = 1;
    	
    	head0.currentTheta += direction*theta;
    	head0.transform.baseVal.getItem(0).setRotate(head0.currentTheta, cx, cy);
    }

    function move_body_h() {
      if(head0.x.baseVal.value > MAX_X || head0.x.baseVal.value < -1*MAX_X) velocity *= -1;   
      head0.x.baseVal.value += s2d(velocity)
      //body0.x.baseVal.value += s2d(velocity)
      //lhand0.x.baseVal.value += s2d(velocity)
      //rhand0.x.baseVal.value += s2d(velocity)
      //rthigh0.x.baseVal.value += s2d(velocity)
      //lthigh0.x.baseVal.value += s2d(velocity)
      
      //try to control the body
      body0.x.baseVal.value += s2d(velocity)*cos(body0.currentTheta);
      body0.y.baseVal.value += s2d(velocity)*(-sin(body0.currentTheta));
      
      //try to control the feet
      lfoot0.x.baseVal.value += s2d(velocity)*cos(lfoot0.currentTheta);
      lfoot0.y.baseVal.value += s2d(velocity)*(-sin(lfoot0.currentTheta));
      
      rfoot0.x.baseVal.value += s2d(velocity)*cos(rfoot0.currentTheta);
      rfoot0.y.baseVal.value += s2d(velocity)*(-sin(rfoot0.currentTheta));
      
      //try to control the hands
      lhand0.x.baseVal.value += s2d(velocity)*cos(lhand0.currentTheta);
      lhand0.y.baseVal.value += s2d(velocity)*(-sin(lhand0.currentTheta));
      
      rhand0.x.baseVal.value += s2d(velocity)*cos(rhand0.currentTheta);
      rhand0.y.baseVal.value += s2d(velocity)*(-sin(rhand0.currentTheta));
      
      //try to control the thighs
      lthigh0.x.baseVal.value += s2d(velocity)*cos(lthigh0.currentTheta);
      lthigh0.y.baseVal.value += s2d(velocity)*(-sin(lthigh0.currentTheta));
      
      rthigh0.x.baseVal.value += s2d(velocity)*cos(rthigh0.currentTheta);
      rthigh0.y.baseVal.value += s2d(velocity)*(-sin(rthigh0.currentTheta));
      
      requestAnimationFrameID = window.requestAnimationFrame(move_body_h); 
    }

    function move_body_v() {
      if(head0.y.baseVal.value > MAX_Y || head0.y.baseVal.value < -1*MAX_Y) velocity *= -1;
      head0.y.baseVal.value += s2d(velocity)*(-cos(body0.currentTheta));

      //try to control the body
      body0.y.baseVal.value += s2d(velocity)*(-cos(body0.currentTheta));
      body0.x.baseVal.value += s2d(velocity)*(-sin(body0.currentTheta));

      //try to control the feet
      lfoot0.y.baseVal.value += s2d(velocity)*(-cos(lfoot0.currentTheta));
      lfoot0.x.baseVal.value += s2d(velocity)*(-sin(lfoot0.currentTheta));

      rfoot0.y.baseVal.value += s2d(velocity)*(-cos(rfoot0.currentTheta));
      rfoot0.x.baseVal.value += s2d(velocity)*(-sin(rfoot0.currentTheta));

      //try to control the hands
      lhand0.y.baseVal.value += s2d(velocity)*(-cos(lhand0.currentTheta));
      lhand0.x.baseVal.value += s2d(velocity)*(-sin(lhand0.currentTheta));

      rhand0.y.baseVal.value += s2d(velocity)*(-cos(rhand0.currentTheta));
      rhand0.x.baseVal.value += s2d(velocity)*(-sin(rhand0.currentTheta));

      //try to control the thighs
      lthigh0.y.baseVal.value += s2d(velocity)*(-cos(lthigh0.currentTheta));
      lthigh0.x.baseVal.value += s2d(velocity)*(-sin(lthigh0.currentTheta));

      rthigh0.y.baseVal.value += s2d(velocity)*(-cos(rthigh0.currentTheta));
      rthigh0.x.baseVal.value += s2d(velocity)*(-sin(rthigh0.currentTheta));

      requestAnimationFrameID = window.requestAnimationFrame(move_body_v);
    }

    function rotate_lthigh(){
      lthigh0.transform.baseVal.getItem(0).setRotate(lthigh0.currentTheta, 300, 200);
      lthigh0.currentTheta += constants.thetaDelta; 
      //requestAnimationFrameID = window.requestAnimationFrame(rotate_lfoot);
    }

    function rotate_lfoot(){
      var cord = end_lthigh(60, 50, lthigh0.x.baseVal.value, lthigh0.y.baseVal.value); 
      console.log(cord);
      //lfoot0.transform.baseVal.getItem(0).setRotate(lfoot0.currentTheta, 300, 200);
      lfoot0.transform.baseVal.getItem(0).setRotate(lfoot0.currentTheta, cord[0], cord[1]);
      lfoot0.currentTheta += constants.thetaDelta;
      requestAnimationFrameID = window.requestAnimationFrame(rotate_lfoot);
    }

    function end_lthigh(theta, len, mx, my){
        var cord = new Array();
        theta = theta_to_radian(theta);
        cord[0] = mx + len*Math.sin(theta);
        cord[1] = my + len*Math.cos(theta);
        return cord;
    }

    function theta_to_radian(theta){
        return theta*(Math.PI/180);
    }

    function cos(theta){
        return Math.cos(theta_to_radian(theta));
    }

    function sin(theta){
        return Math.sin(theta_to_radian(theta));
    }

	function tan(theta){
        return Math.tan(theta_to_radian(theta));
    }
    
    function s2d(s){
      return (s / 1000) * constants.delay;
    }

    function s2dy(s, item){
      return (s / 1000) * constants.delay * Math.cos(theta_to_radian(item.currentTheta)); 
    }
