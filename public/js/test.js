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
//        requestAnimationFrameID = window.requestAnimationFrame(walk);
//        requestAnimationFrameID = window.requestAnimationFrame(fuck);
        
//        requestAnimationFrameID = window.requestAnimationFrame(shocked);
        
//        requestAnimationFrameID = window.requestAnimationFrame(suck);
//        requestAnimationFrameID = window.requestAnimationFrame(love);
//        requestAnimationFrameID = window.requestAnimationFrame(lol);
//        requestAnimationFrameID = window.requestAnimationFrame(wicked);
//        requestAnimationFrameID = window.requestAnimationFrame(sad);
//        requestAnimationFrameID = window.requestAnimationFrame(rain);
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
        
    	if(walkFlag < 80){
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
    

    // rtong
    var i=0;

    function shake() {
        if(i<20){
            move_body_h();  
            i++;
        } else if(i<40){
            if(i==20) velocity=-velocity;
            move_body_h();  
            i++;
        } else {
            i=0;
            velocity=-velocity;
        }
    }

    // rtong
    function lean(){
    	if(body0.currentTheta > 15)
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
    	}
    }

    // rtong
    function hands_on_right() {
    	if(lhand0.currentTheta > 0)
    		flyDirection = -1;
    	if(lhand0.currentTheta < -80){
            flag=true;
        }
    	rotate_lhand(1, 0, 75, flyDirection);
    }

    var flag=false;

    // rtong
    function fuck(){
        if(flag==false){
            hands_on_right();
        } else if (flag){
            lhand0.y.baseVal.value = lthigh0.y.baseVal.value - 75*sin(body0.currentTheta);
            lhand0.x.baseVal.value = lthigh0.x.baseVal.value + 75*cos(body0.currentTheta);
            lean();
            shake();
        }
        console.log(flag);
        
        requestAnimationFrameID = window.requestAnimationFrame(fuck);
    }

    // rtong
    function shocked(){
        if (i%5==0){
            velocity=-velocity;
        }
        move_body_h();
        move_body_v();
        i++;
        requestAnimationFrameID = window.requestAnimationFrame(shocked);
    }

    // rtong
    var j=0;
    function incline(){
        if (j<30){
            move_body_h();
            velocity=-velocity;
            move_body_v();
            velocity=-velocity;
            j++;
        }
    }

    // rtong
    function on_the_knees(){
        flyDirection = 1;
        
        if(i<120){
            i++;
            var cx = lthigh0.x.baseVal.value;
            var cy = lthigh0.y.baseVal.value-5*cos(body0.currentTheta);
            console.log(body0.currentTheta);
            if(i<50)
                rotate_lthigh(1, cx, cy, flyDirection);
            rotate_rthigh(1, cx, cy, flyDirection);
        } else {
            flag=true;
        }
    }

    // rtong
    function suck(){
        if(flag==false){
            on_the_knees();
            incline();
        } else if (flag==true){
            lean();
            shake();
        }
        
        requestAnimationFrameID = window.requestAnimationFrame(suck);
    }

    // rtong
    var scale_para=1;
    function love(){
        heart0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
        scale_para+=0.05;
        requestAnimationFrameID = window.requestAnimationFrame(love);
    }

    // rtong2
    function wicked(){
        if(scale_para<20){
            mouth0.transform.baseVal.getItem(0).setSkewX(scale_para);
            mouth0.transform.baseVal.getItem(0).setSkewY(scale_para);
            scale_para+=0.5;
        } else {
            scale_para=-scale_para;
        }
        console.log(scale_para);
        requestAnimationFrameID = window.requestAnimationFrame(wicked);
    }

    // rtong2
    var flag_lol=1;
    var scale_para=0.9
    function lol(){
        if(scale_para<1 && scale_para>0.8){
            if(flag_lol==1)
                scale_para+=0.05;
            else if (flag_lol==-1)
                scale_para-=0.05;
            mouth0.transform.baseVal.getItem(0).setScale(scale_para,scale_para);
        } else {
            flag_lol=-flag_lol;
            scale_para=scale_para+0.05*flag_lol;
        }
        fly();
        requestAnimationFrameID = window.requestAnimationFrame(lol);
    }

    // rtong2
    var theta=0;
    var drop=0;
    var a=0.1;
    function sad(){
        if(theta<6){
            mouth0.currentTheta += theta;
            mouth0.transform.baseVal.getItem(0).setRotate(mouth0.currentTheta, 0, 25);
            theta+=0.1;
        }
        if(drop>0)
            tear0.y.baseVal.value+=velocity/100+a;
        if(drop>2)
            tear1.y.baseVal.value+=velocity/100+a;
        if(drop>4)
            tear2.y.baseVal.value+=velocity/100+a;
        if (drop>6)
            tear3.y.baseVal.value+=velocity/100+a;
        if (drop>8){
            drop=0;
            a=0.1;
            tear0.y.baseVal.value=0;
            tear1.y.baseVal.value=0;
            tear2.y.baseVal.value=0;
            tear3.y.baseVal.value=0;
        }
        a+=0.1;
        drop+=0.1;
        requestAnimationFrameID = window.requestAnimationFrame(sad);
    }

    // rtong2
    var a1=0.1;
    var a2=0.1;
    var a3=0.1;
    var a4=0.1;
    var a5=0.1;
    function rain(){
            rain1.y.baseVal.value+=velocity/100+a1*0.1;
            rain2.y.baseVal.value+=velocity/100+a2*0.2;
            rain3.y.baseVal.value+=velocity/100+a3*0.4;
            rain4.y.baseVal.value+=velocity/100+a4*0.8;
            rain5.y.baseVal.value+=velocity/100+a5*1.6;
//            cloud0.x.baseVal.value+=velocity/100+a;
        
        if(rain1.y.baseVal.value>400){
            a1=0;
            rain1.y.baseVal.value=-400;
        }
        if(rain2.y.baseVal.value>400){
            a2=0;
            rain2.y.baseVal.value=-400;
        }
        if(rain3.y.baseVal.value>400){
            a3=0;
            rain3.y.baseVal.value=-400;
        }
        if(rain4.y.baseVal.value>400){
            a4=0;
            rain4.y.baseVal.value=-400;
        }
        if(rain5.y.baseVal.value>400){
            a5=0;
            rain5.y.baseVal.value=-400;
        }
        a1+=0.03;
        a2+=0.03;
        a3+=0.03;
        a4+=0.03;
        a5+=0.03;
        requestAnimationFrameID = window.requestAnimationFrame(rain);
    }