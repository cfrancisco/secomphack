/**
 * Controls the Blog
 */
app.controller('mainCtrl', function ($scope, $location, $http ) {


	$scope.isLogged = 0;

 //    $scope.acao = {};
	// $scope.listaAcoes = [];

 //    $scope.acao =
 //    {
	// 	"type" : "acao",	
	// 	"radius" : "10000",
	// 	"duration" : "10000",
	// 	"people" : "10",
	// 	"description" : "Anunciar feira de adoção de cachorrinhos no Jardim Primavera. ",
	// 	"state" : "ACTIVE"
 //     }

	// $scope.listaAcoes = function(){
 //  		$scope.listaAcoes.push($scope.acao);
 //  		$scope.listaAcoes.push($scope.acao);
 //  		$scope.listaAcoes.push($scope.acao);
 //  		$scope.listaAcoes.push($scope.acao);
 //  		$scope.listaAcoes.push($scope.acao);
 //  	}

	// $scope.cadastraAcoes = function(obj){
 //  		$scope.listaAcoes.push(obj);
 //  	}

  	$scope.loginProtagonistaUm = function()
  	{
  		$scope.loggedWithUser = 1;
  		 console.log($scope.loggedWithUser);
  		$scope.isLogged = 0;
  		alert("Seja bem vindo ");
  		console.log("logou o Protagonista 1");
  	}

	$scope.loginProtagonistaDois = function()
  	{
  		$scope.loggedWithUser = 2;
  		 console.log($scope.loggedWithUser);
  		$scope.isLogged = 0;
  		alert("Seja bem vindo ");
  		console.log("logou o Protagonista 2");
  	}


  	$scope.loginProdutor = function()
  	{
  		$scope.isLogged = 1;
  		alert("Seja bem vindo ");

  		console.log("logou o produtor");
  		// $scope.listaAcoes[index].state = "FINISHED";
  	}

	// $scope.terminaAcao = function(index)
 //  	{
 //  		$scope.listaAcoes[index].state = "FINISHED";
 //  	}


  	$scope.init = function(){
  		console.log("Entrou no Controlador da mainCtrl");
  		// console.log(" tem uma acao: ");
  		// console.log($scope.acao);
  	}

	$scope.init();
});
