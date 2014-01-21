	
	//window.addEventListener('load', init_env(), false); 
	//window.onload=init_env();
	
	function init_env()
	{
		var sky=document.getElementById("sky");
		sky.setAttribute("points", "-545,-320 545,-320 545,150 -545,150");
		sky.setAttribute("style", "stroke:black;stroke-width:0.5; fill: azure");
		
		var field=document.getElementById("field");
		field.setAttribute("points", "-545,150 545,150 545,320 -545,320");
		field.setAttribute("style", "stroke:black;stroke-width:0.5; fill: url(#id_field)");
		
		var cloud=document.getElementById("cloud");
		cloud.setAttribute("d", "m-263.35001,-184.58783c11.71255,0 22.22501,-9.69754 22.22501,-20.35966c0,-10.02733 -8.41371,-19.23575 -19.11346,-20.17006c0.19052,-1.29152 0.28574,-2.69304 0.28574,-4.09448c0,-16.46033 -14.70346,-29.78796 -32.89307,-29.78796c-14.47797,0 -26.73343,8.43626 -31.17532,20.1701c-2.25742,-0.57709 -4.63867,-0.74197 -7.05161,-0.87938c-17.8436,-1.04419 -26.47958,4.23189 -26.47958,24.16014c0,1.28876 0.09216,2.52811 0.34607,3.70978c-6.25156,1.34372 -10.91879,6.42746 -10.91879,12.47023c0,7.03752 8.06454,14.78131 15.875,14.78131l88.90002,0l0,0l0,-0.00002z");
		cloud.setAttribute("style", "stroke:black; fill:white");
		
		var sun_angle1=document.getElementById("sun_poly1");
		var sun_angle2=document.getElementById("sun_poly2");
		var sun_angle3=document.getElementById("sun_poly3");
		var sun_angle4=document.getElementById("sun_poly4");
		var sun_core=document.getElementById("sun_path");
		sun_angle1.setAttribute("points", "425,-320  360,-270  435,-275");
		sun_angle1.setAttribute("style", "stroke: none; fill: #FFFF00;");
		sun_angle2.setAttribute("points", "435,-275  380,-220  470,-240");
		sun_angle2.setAttribute("style", "stroke: none; fill: #FFFF00;");
		sun_angle3.setAttribute("points", "460,-240  425,-170  505,-210");
		sun_angle3.setAttribute("style", "stroke: none; fill: #FFFF00;");
		sun_angle4.setAttribute("points", "505,-210  510,-140  545 -200");
		sun_angle4.setAttribute("style", "stroke: none; fill: #FFFF00;");
		sun_core.setAttribute("d", "M 425 -320 A 120 120, 0, 0, 0, 545 -200 L 545 -320 Z");
		sun_core.setAttribute("style", "fill:#FFD700");
		
		dialogue_cloud(-100,-100,100,60);
	}
	
	function dialogue_cloud(x,y,a,b)
	{
		var dialogue=document.getElementById("dialogue");
		dialogue.setAttribute("d", "M "+x+","+y+" A "+a+","+b+" 0 1,1 "+(x+60)+","+(y+20)+" L "+(x-30)+","+(y+50)+" Z");
		dialogue.setAttribute("style", "stroke-width:3; stroke:black; fill:white");
	}
	