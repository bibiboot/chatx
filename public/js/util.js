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


