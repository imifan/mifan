// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("msgCtrl", function($scope, $rootScope, $http) {
  var DOC, msg;
  DOC = $scope.DOC;
  $scope.$on("$viewContentLoaded", function() {
    return $scope.$emit("pageChange", "msg");
  });
  $scope.expander = function(target) {};
  $scope.setMBill = function(index) {
    return $scope.toggleMBill(["love", "answer", "share"]);
  };
  msg = {
    init: function() {
      msg.getAskMe();
      $scope.askMe = [];
      $scope.askMeMsg = "";
      return $scope.askMeMore = false;
    },
    getAskMe: function() {
      var api;
      api = "" + API.askme + $scope.privacyParamDir + "/type/askme";
      if (IsDebug) {
        api = API.askme;
      }
      return $http.get(api).success(msg.getAskMeCb);
    },
    getAskMeCb: function(data) {
      if (String(data.msg) === "ok") {
        return $scope.askMe = data.result;
      } else {
        return $scope.askMeMsg = data.msg;
      }
    }
  };
  msg.init();
  return false;
});
