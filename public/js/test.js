    "use strict";
    window.addEventListener('load', init, false); 

    function init() {

      initConstants(); 
      extendObject();

      //requestAnimationFrameID = window.requestAnimationFrame(move_body_v);
      //requestAnimationFrameID = window.requestAnimationFrame(move_body_h);
      //requestAnimationFrameID = window.requestAnimationFrame(bend);
      //requestAnimationFrameID = window.requestAnimationFrame(fly);
      //requestAnimationFrameID = window.requestAnimationFrame(knee_split);
      //requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
      //requestAnimationFrameID = window.requestAnimationFrame(split);
      requestAnimationFrameID = window.requestAnimationFrame(walk);
      
    }

    function bend() {
    	if(body0.currentTheta > 90)
    		bendDirection = -1;
        // Mid point
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
    	rotate_body(1, cx, cy, bendDirection)
    	rotate_lhand(1, cx, cy, bendDirection);
    	rotate_rhand(1, cx, cy, bendDirection);
    	rotate_head(1, cx, cy, bendDirection);
    	if(body0.currentTheta == 0){
    		bendDirection = 1;
    		return;
    	}
    	requestAnimationFrameID = window.requestAnimationFrame(bend);	
    }
    
    function fly() {
    	if(lhand0.currentTheta > 80)
    		flyDirection = -1;
    	if(lhand0.currentTheta < -20)
    		flyDirection = 1;
        var lcx = lhand0.x.baseVal.value;
        var lcy = lhand0.y. baseVal.value;
        var rcx = rhand0.x.baseVal.value;
        var rcy = rhand0.y. baseVal.value;
    	rotate_lhand(1, 0, 75, flyDirection);
    	rotate_rhand(1, 0, 75, -flyDirection);
    	requestAnimationFrameID = window.requestAnimationFrame(fly);
    }

    function knee_split() {
        // Rotation of the foot
        flyDirection = 1;
        var lcx = lfoot0.x.baseVal.value;
        var lcy = lfoot0.y. baseVal.value;
        var rcx = rfoot0.x.baseVal.value;
        var rcy = rfoot0.y. baseVal.value;
        rotate_lfoot(1, lcx, lcy, flyDirection);
        rotate_rfoot(-1, rcx, rcy, flyDirection);
        requestAnimationFrameID = window.requestAnimationFrame(knee_split);
    }

    function thigh_split() {
        flyDirection = 1;
        var x = lthigh0.x.baseVal.value;
        var y = lthigh0.y. baseVal.value;
        var z = sqrt(pow(x, 2) + pow(y, 2));
        var deta = atan(y/x);
        var alpha = lthigh0.currentTheta - deta;
        var cx = z*sin(alpha);
        var cy = z*cos(alpha);
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
    }


    function split(cx, cy) {
        // Joint of the thighs around which split happens
        flyDirection = 1;
        //var cx = lthigh0.x.baseVal.value;
        //var cy = lthigh0.y.baseVal.value;
        
        rotate_lfoot(1, cx, cy, flyDirection);
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rfoot(-1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        //requestAnimationFrameID = window.requestAnimationFrame(split);
    }

    function split_fly() {
        // Joint of the thighs around which split happens
        flyDirection = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        console.log(cx, cy);
        rotate_lfoot(1, cx, cy, flyDirection);
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rfoot(-1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        requestAnimationFrameID = window.requestAnimationFrame(split_fly);
    }
    
    var flag = 1;
    function walk() {
    
    	var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y.baseVal.value;
    	if(flag != 1) {
    		var x = lthigh0.x.baseVal.value;
        	var y = lthigh0.y.baseVal.value;
    		var z = sqrt(pow(x, 2) + pow(y, 2));
        	var deta = atan(y/x);
        	var alpha = lthigh0.currentTheta - deta;
        	cx = z*sin(alpha);
        	cy = z*cos(alpha);
        }
        
    	if(walkFlag < 50) {
    		split(cx, cy);	
    		walkFlag ++;
    	}
    	else if(walkFlag < 100){
    	    move_body_h();   	    
    		walkFlag ++;	
    	}
    	else {
    		walkFlag = 1;
    		flag = 2;
    	}
    		
    	requestAnimationFrameID = window.requestAnimationFrame(walk);
    }
    
