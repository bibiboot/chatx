    var constants = new Object();
    var transformObject;
    var transformObject2;
    var transformObject3;
    var transformObject4;
    var transformObject5;
    var transformObject6;
    var transformObject7;
    var transformObject8;
    var transformObject9;
    var transformObject10;
    var transformObject11;
    var transformObject12;
    var transformObject13;
    var transformObject14;
    var transformObject15;
    var transformObject16;
    var transformObject17;
//    var transformObject18;
    var transformObject19;
    var transformObject20;
    var svgElement;
    var requestAnimationFrameID; // Contains the requestAnimationFrame() object.
    var velocity = 50;
    var bendDirection = 1;
    var flyDirection = 1;
    var walkFlag = 0;
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
      transformObject9 = svgElement.createSVGTransform();
      transformObject10 = svgElement.createSVGTransform();
      transformObject11 = svgElement.createSVGTransform();
      transformObject12 = svgElement.createSVGTransform();
      transformObject13 = svgElement.createSVGTransform();
      transformObject14 = svgElement.createSVGTransform();
      transformObject15 = svgElement.createSVGTransform();
      transformObject16 = svgElement.createSVGTransform();
      transformObject17 = svgElement.createSVGTransform();
//      transformObject18 = svgElement.createSVGTransform();
      transformObject19 = svgElement.createSVGTransform();
      transformObject20 = svgElement.createSVGTransform();
    }

    function extendObject(){

      var head0 = document.getElementById("head0");
      var body0 = document.getElementById("body0");
      var lhand0 = document.getElementById("lhand0");
      var rhand0 = document.getElementById("rhand0");
      var lthigh0 = document.getElementById("lthigh0");
      var rthigh0 = document.getElementById("rthigh0");
        var heart0 = document.getElementById("heart0");
        var mouth0 = document.getElementById("mouth0");
        var tear0 = document.getElementById("tear0");
        var tear1 = document.getElementById("tear1");
        var tear2 = document.getElementById("tear2");
        var tear3 = document.getElementById("tear3");
        var rain1 = document.getElementById("rain1");
        var rain2 = document.getElementById("rain2");
        var rain3 = document.getElementById("rain3");
        var rain4 = document.getElementById("rain4");
        var rain5 = document.getElementById("rain5");
//        var cloud0 = document.getElementById("cloud0");

      head0.transform.baseVal.appendItem(transformObject8);
      head0.currentTheta = constants.initialTheta;
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
        heart0.transform.baseVal.appendItem(transformObject9);
        mouth0.transform.baseVal.appendItem(transformObject10);
        mouth0.currentTheta = constants.initialTheta;
        tear0.transform.baseVal.appendItem(transformObject11);
        tear1.transform.baseVal.appendItem(transformObject12);
        tear2.transform.baseVal.appendItem(transformObject13);
        tear3.transform.baseVal.appendItem(transformObject14);
        rain1.transform.baseVal.appendItem(transformObject15);
        rain2.transform.baseVal.appendItem(transformObject16);
        rain3.transform.baseVal.appendItem(transformObject17);
        rain4.transform.baseVal.appendItem(transformObject19);
        rain5.transform.baseVal.appendItem(transformObject20);
//        cloud0.transform.baseVal.appendItem(transformObject18);
    }

