var app = angular.module("myApp", [
  "ngRoute","ngMessages"]);
app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "./Page/login.html",
      controller: "ctrlLogin",
    });
  },
]);

app.controller("ctrlAerobic", function ($scope) {
  //   ------------
  // -----------------------------------------------------------------
});

app.controller("HeaderFooter", function ($scope) {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 30) {
        $(".nav-bar").addClass("fixed-header");
        $("header .logo").addClass("headerLogoTransition");
        $(".logo").css("display", "none");
        $(".logoAdd").css("display", "block");
        $(".menu-icon").css("top", "-85px");
      } else {
        $(".nav-bar").removeClass("fixed-header");
        $(".logoAdd").css("display", "none");
        $("header .logo").removeClass("headerLogoTransition");
        $(".logo").css("display", "block");
        $(".menu-icon").css("top", "0px");
      }
    });
  });
  // =====================================
});

// --------------------------- // ------------------------------------------

app.controller("ctrlLogin", function ($scope, $location) {
  $scope.signUpButton = function () {
    angular
      .element(document.querySelector(".container"))
      .addClass("sign-up-mode");
  };
  $scope.signInButton = function () {
    angular
      .element(document.querySelector(".container"))
      .removeClass("sign-up-mode");
  };

  $scope.isLogin = false;
  $scope.dataInfo = [];

  if (localStorage.getItem("user-list")) {
    $scope.dataInfo = angular.fromJson(localStorage.getItem("user-list"));
  }
  $scope.resetForm = function () {
    $scope.user = {};
  };
  $scope.add_user = function () {
    $scope.dataInfo.push($scope.user);
    // console.log($scope.user);
    // $scope.user = null;
    localStorage.setItem("user-list", angular.toJson($scope.dataInfo));
    $scope.signInButton();

    console.log($scope.dataInfo);
  };

  $scope.login = function () {
    var user = $scope.check_Login($scope.email, $scope.password);
    console.log(user);
    if (user) {
      $location.path("/displayDataLocal");
    } else {
      alert("ERROR");
    }

    // console.log($scope.password);
  };
  $scope.check_Login = function (email, password) {
    for (var i = 0; i < $scope.dataInfo.length; i++) {
      if (
        $scope.dataInfo[i].email == email &&
        $scope.dataInfo[i].password == password
      ) {
        return $scope.dataInfo[i];
      }
    }
    // console.log($scope.dataInfo[i]);
    return false;
  };
  // -----------
  $(document).ready(function () {
    $step = 1;
    $loops = Math.round(100 / $step);
    $increment = 360 / $loops;
    $half = Math.round($loops / 2);
    $barColor = "#ec366b";
    $backColor = "#feeff4";

    $(function () {
      clock.init();
    });
    clock = {
      interval: null,
      init: function () {
        $(".input-btn").click(function () {
          switch ($(this).data("action")) {
            case "start":
              clock.stop();
              clock.start($(".input-num").val());
              break;
            case "stop":
              clock.stop();
              break;
          }
        });
      },
      start: function (t) {
        var pie = 0;
        var num = 0;
        var min = t ? t : 1;
        var sec = min * 60;
        var lop = sec;
        $(".count").text(min);
        if (min > 0) {
          $(".count").addClass("min");
        } else {
          $(".count").addClass("sec");
        }
        clock.interval = setInterval(function () {
          sec = sec - 1;
          if (min > 1) {
            pie = pie + 100 / (lop / min);
          } else {
            pie = pie + 100 / lop;
          }
          if (pie >= 101) {
            pie = 1;
          }
          num = (sec / 60).toFixed(2).slice(0, -3);
          if (num == 0) {
            $(".count").removeClass("min").addClass("sec").text(sec);
          } else {
            $(".count").removeClass("sec").addClass("min").text(num);
          }
          //$('.clock').attr('class','clock pro-'+pie.toFixed(2).slice(0,-3));
          //console.log(pie+'__'+sec);
          $i = pie.toFixed(2).slice(0, -3) - 1;
          if ($i < $half) {
            $nextdeg = 90 + $increment * $i + "deg";
            $(".clock").css({
              "background-image":
                "linear-gradient(90deg," +
                $backColor +
                " 50%,transparent 50%,transparent),linear-gradient(" +
                $nextdeg +
                "," +
                $barColor +
                " 50%," +
                $backColor +
                " 50%," +
                $backColor +
                ")",
            });
          } else {
            $nextdeg = -90 + $increment * ($i - $half) + "deg";
            $(".clock").css({
              "background-image":
                "linear-gradient(" +
                $nextdeg +
                "," +
                $barColor +
                " 50%,transparent 50%,transparent),linear-gradient(270deg," +
                $barColor +
                " 50%," +
                $backColor +
                " 50%," +
                $backColor +
                ")",
            });
          }
          if (sec == 0) {
            clearInterval(clock.interval);
            $(".count").text(0);
            //$('.clock').removeAttr('class','clock pro-100');
            $(".clock").removeAttr("style");
          }
        }, 1000);
      },
      stop: function () {
        clearInterval(clock.interval);
        $(".count").text(0);
        $(".clock").removeAttr("style");
      },
    };
  });
});

app.directive("compareTo", function () {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo",
    },
    link: function (scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function (modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function () {
        ngModel.$validate();
      });
    },
  };
});
