var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http, $templateRequest, $sce, $compile) {
  // var mainCtrl = this;
  
  $http.get("/user-product").then(function (response) {
    console.log(response);
    $scope.inventory = response.data;
  });

  $http.get("/user-guild").then(function (response) {
    $scope.guild = response.data;
  });

  $scope.changeGuild = function(guild) {

  }

  // $scope.inventory = [
  //   { id :  1, category : "thịt heo", 
  //   description : "https://image-us.24h.com.vn/upload/3-2019/images/2019-08-01/1564631153-821-thumbnail.jpg",  
  //   price :   2.99, qty : 1 },
  //   { id :  2, category : "thịt heo", 
  //   description : "https://image-us.24h.com.vn/upload/3-2019/images/2019-08-01/1564631153-821-thumbnail.jpg",   
  //   price :   2.99, qty : 1, onSale : true },
  //   { id :  3, category : "dưa leo",   
  //   description : "https://cdn.tgdd.vn/Products/Images/8785/226881/bhx/dua-leo-vi-500g-202009292350248147.jpg",     
  //   price :   30, qty : 1 },
  //   { id :  4, category : "dưa leo",   
  //   description : "https://cdn.tgdd.vn/Products/Images/8785/226881/bhx/dua-leo-vi-500g-202009292350248147.jpg",       
  //   price :  30, qty : 1 },
  //   { id :  5, category : "cà chua",        
  //   description : "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",          
  //   price :  29.99, qty : 1 },
  //   { id :  6, category : "cà chua",        
  //   description : "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg",            
  //   price :  29.99, qty : 1 },
  //   { id :  7, category : "trứng gà", 
  //   description : "https://vcdn-vnexpress.vnecdn.net/2015/02/14/eggs-03-4600-1423905018.jpg",  
  //   price :  49.99, qty : 1 },
  //   { id :  8, category : "trứng gà", 
  //   description : "https://vcdn-vnexpress.vnecdn.net/2015/02/14/eggs-03-4600-1423905018.jpg",  
  //   price :  79.99, qty : 1 }
  // ];
  
  $scope.cart = [];
  
  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };
  
  $scope.getCost = function(item) {
    return item.qty * item.price;
  };

  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.id);
    if (found) {
      found.qty += itemToAdd.qty;
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));}
  };
  
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, item) {
      return sum + $scope.getCost(item);
    }, 0);
    console.log('total: ' + total);
    return total;
  };
  
  $scope.clearCart = function() {
    $scope.cart.length = 0;
  };
  
  $scope.removeItem = function(item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
  
});
