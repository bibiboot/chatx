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
    }

    function extendObject(){

      var head0 = document.getElementById("head0");
      var body0 = document.getElementById("body0");
      var lhand0 = document.getElementById("lhand0");
      var rhand0 = document.getElementById("rhand0");
      var lthigh0 = document.getElementById("lthigh0");
      var rthigh0 = document.getElementById("rthigh0");
      var lfoot0 = document.getElementById("lfoot0");
      var rfoot0 = document.getElementById("rfoot0");

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
    }

