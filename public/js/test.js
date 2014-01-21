    "use strict";
    window.addEventListener('load', init, false); 

    function init() {

      initConstants(); 
      extendObject();

      //requestAnimationFrameID = window.requestAnimationFrame(move_body_v);
      //requestAnimationFrameID = window.requestAnimationFrame(move_body_h);
      //requestAnimationFrameID = window.requestAnimationFrame(bend);
      //requestAnimationFrameID = window.requestAnimationFrame(fly);
      //requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
      //requestAnimationFrameID = window.requestAnimationFrame(split);
      //requestAnimationFrameID = window.requestAnimationFrame(walk);
      
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

    function thigh_split() {
        flyDirection = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        requestAnimationFrameID = window.requestAnimationFrame(thigh_split);
    }


    function split(cx, cy) {
        // Joint of the thighs around which split happens
        flyDirection = 1;
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        //requestAnimationFrameID = window.requestAnimationFrame(split);
    }

    function split_fly() {
        // Joint of the thighs around which split happens
        flyDirection = 1;
        var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y. baseVal.value;
        rotate_lthigh(1, cx, cy, flyDirection);
        rotate_rthigh(-1, cx, cy, flyDirection);
        requestAnimationFrameID = window.requestAnimationFrame(split_fly);
    }
    
    function walk() {
    
    	var cx = lthigh0.x.baseVal.value;
        var cy = lthigh0.y.baseVal.value;
        
    	if(walkFlag <80){
    	        move_body_h();   	    
    		walkFlag ++;	
    	}
    	else if(walkFlag < 125){
       
                lthigh0.y.baseVal.value = body0.y.baseVal.value+100;
                lthigh0.x.baseVal.value = body0.x.baseVal.value;
                rthigh0.y.baseVal.value = body0.y.baseVal.value+100;
                rthigh0.x.baseVal.value = body0.x.baseVal.value;

    		split(body0.x.baseVal.value, body0.y.baseVal.value+100);	
		walkFlag ++;
    	}
	else
		walkFlag = 0;
    		
    	requestAnimationFrameID = window.requestAnimationFrame(walk);
    }
    

