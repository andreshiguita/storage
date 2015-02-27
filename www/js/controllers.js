angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localStorage) {
  
  var transacciones = [
    {numero: "3002140552", valor: "5000", estado: "Aprobado", fecha:"01/12/2010", autorizacion: "42424234234"},
    {numero: "3104567890", valor: "10000", estado: "Rechazado", fecha:"01/12/2014", autorizacion: ""},
    {numero: "3147652010", valor: "3500", estado: "Aprobado", fecha:"01/12/2012", autorizacion: "3456783"},
    {numero: "3116459087", valor: "6200", estado: "Rechazado", fecha:"01/12/2009", autorizacion: ""},
    {numero: "3138790976", valor: "2600", estado: "Aprobado", fecha:"01/12/2008", autorizacion: "45678"},
  ];

  $scope.transacciones = $localStorage.transacciones;

  $scope.getData = function(){
    $localStorage.transacciones = transacciones;
  };

  $scope.showData = function(){
    $scope.transacciones = $localStorage.transacciones;
    $scope.transacciones.sort(custom_sort);
    console.log("total",  $scope.transacciones.length);
  };

  $scope.addData = function(){
    $scope.transacciones.push({numero: "3205678903", valor: "7000", estado: "Rechazado", fecha:"01/12/2006", autorizacion: ""});
    $scope.transacciones.sort(custom_sort);
    console.log("total:transacciones",  $scope.transacciones.length);
  }

  $scope.delData = function(){
    $scope.transacciones.sort(custom_sort);
    $scope.transacciones.splice(0,$scope.transacciones.length);
    // $scope.transacciones.splice(0,1);
    $scope.transacciones.sort(custom_sort);


    console.log("total:transacciones",  $scope.transacciones);
  }

  function custom_sort(a, b) {
    return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
