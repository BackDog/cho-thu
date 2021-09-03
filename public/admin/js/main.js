var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http, $templateRequest, $sce, $compile) {
	var mainCtrl = this;

	mainCtrl.openModal = function() {
		_openModal();
	}

	$scope.currentMenu = {};
	mainCtrl.changeMenu = function(item) {
		$scope.menu.forEach(function(e) {
			if (e.id == item.id){
				e.active = true;
				$scope.currentMenu = e;
				mainCtrl.listType(e.path);
				var templateUrl = $sce.getTrustedResourceUrl('admin/html/page/'+e.path+'.html');
			    $templateRequest(templateUrl).then(function(template) {
			        $compile($("#view").html(template).contents())($scope);
			    }, function() {
			    });
			}else{
				e.active = false;
			}
		})
	}

	$http.get("/data/menu").then(function (response) {
    	$scope.menu = response.data;
    	mainCtrl.changeMenu($scope.menu[0]);
    });

	$scope.table = {};

    $http.get("/data/guild").then(function (response) {
    	$scope.table['guild'] = response.data;
    });
	$http.get("/data/town").then(function (response) {
    	$scope.table['town'] = response.data;
    });
    $http.get("/data/user").then(function (response) {
    	$scope.table['user'] = response.data;
    });
    $http.get("/data/product").then(function (response) {
    	$scope.table['product'] = response.data;
    });
    $http.get("/data/unit").then(function (response) {
    	$scope.table['unit'] = response.data;
    });
    
    $scope.modalType = "";
    $scope.modalTitle = "";

    mainCtrl.actionTableBtn = function(action, objCode, data, type, title, actionTitle) {
    	// add - unit - {} - Chỉnh Sửa - Đơn vị
    	// ADD UPDATE REMOVE -- REPORT
    	$scope.modalCode = action;
    	// unit, product, user, town, guild
    	$scope.modalObjCode = objCode;
    	// {}
    	$scope.modalData = JSON.parse(JSON.stringify(data));
    	// Chỉnh Sửa, Xóa
    	$scope.modalType = type;
    	// Đơn vị, Hàng hóa, Người Dùng
    	$scope.modalTitle = title;
    	$scope.modalActionTitle = actionTitle;
    	if(action == 'add'){
    		_openModal('mainModal');
    	}else if(action == 'update'){
			_openModal('mainModal');
    	}else if(action == 'remove'){
    		_openModal('mainModal');
    	}else if(action == 'town'){
    		$scope.modalTown_Guild = $scope.modalData;
    		$http.get("/town/" + $scope.modalTown_Guild._id).then(function (response) {
				$scope.table['town'].rows = response.data;
	    	});
    		_openModal('townModal');
    	}else if(action == 'report'){

    	}
    }
    mainCtrl.actionTable = function() {
    	console.log($scope.modalTown_Guild, $scope.modalData);
    	if ($scope.modalCode == "add") {
    		$http.post("/" + $scope.modalObjCode, $scope.modalData).then(function (response) {
    			if ($scope.modalObjCode == "town"){
    				$http.get("/town/" + $scope.modalTown_Guild._id).then(function (response) {
						$scope.table['town'].rows = response.data;
			    	});
    			}else {
    				mainCtrl.listType($scope.modalObjCode);
    			}
    			_closeModal('mainModal');
    		});
    	}else if($scope.modalCode == "update") {
    		$http.post("/" +$scope.modalObjCode+ "-update", $scope.modalData).then(function (response) {
    			if ($scope.modalObjCode == "town"){
    				$http.get("/town/" + $scope.modalTown_Guild._id).then(function (response) {
						$scope.table['town'].rows = response.data;
			    	});
    			}else {
    				mainCtrl.listType($scope.modalObjCode);
    			}
    			_closeModal('mainModal');
    		});
    	}else if($scope.modalCode == "remove") {
    		$http.post("/" +$scope.modalObjCode+ "-remove", $scope.modalData).then(function (response) {
    			if ($scope.modalObjCode == "town"){
    				$http.get("/town/" + $scope.modalTown_Guild._id).then(function (response) {
						$scope.table['town'].rows = response.data;
			    	});
    			}else {
    				mainCtrl.listType($scope.modalObjCode);
    			}
    			_closeModal('mainModal');
    		});
    	}
    }
	mainCtrl.listType = function(name) {
		$http.get("/" + name).then(function (response) {
			$scope.table[name].rows = response.data;
    	});
	}

	mainCtrl.selectTypeFilter = function(data, filter) {
		return $scope.table[data].rows;
	}

	// USER
	$scope.modelUser = {
		name: '',
		address: '',
		phone: '',
		id_guild: '',
		id_town: '',
		password: ''
	}
	$scope.userCreateGuild = [];
	$http.get("/user-guild").then(function (response) {
		$scope.userCreateGuild = response.data;
    });
	$scope.userCreateTown  = [];
	$scope.login = {
		phone: '',
		password: ''
	}
	$scope.cart = {
		id_user: '',
		password: ''
	}
	mainCtrl.userLogin = function() {

	}
	mainCtrl.userSignUp = function() {

	}
	mainCtrl.userOrder = function() {

	}

	mainCtrl.userGetHistory = function(hash) {

	}

	mainCtrl.guildReport = function(data) {
		
	}

	// ORDER
	// REPORT

});

var exampleModal = document.getElementById('exampleModal');
function _openModal(name) {
	$("#"+name).modal("show");
}
function _closeModal(name) {
	$("#"+name).modal("hide");
}