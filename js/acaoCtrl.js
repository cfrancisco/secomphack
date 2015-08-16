/**
 * Controls the Blog
 */
app.controller('acaoCtrl', function ($scope, $location, $http ) {

    $scope.acao = {};
	$scope.listaAcoes = [];

    $scope.acao =
    {
		"type" : "acao",	
		"radius" : "10000",
		"duration" : "10000",
		"people" : "10",
		"description" : "Anunciar feira de adoção de cachorrinhos no Jardim Primavera. ",
		"state" : "ACTIVE"
     }

	$scope.listaAcoes = function(){
  		$scope.listaAcoes.push($scope.acao);
  		$scope.listaAcoes.push($scope.acao);
  		$scope.listaAcoes.push($scope.acao);
  		$scope.listaAcoes.push($scope.acao);
  		$scope.listaAcoes.push($scope.acao);
  	}

	$scope.cadastraAcoes = function(obj){
  		$scope.listaAcoes.push(obj);
  	}

  	$scope.escolheAcao = function(index)
  	{
  		$scope.listaAcoes[index].state = "CHOICED";
  	}

  	$scope.terminaAcao = function(index)
  	{
  		$scope.listaAcoes[index].state = "FINISHED";
  	}


  	$scope.init = function(){
  		console.log("Entrou no Controlador da Acao");
  		console.log(" tem uma acao: ");
  		console.log($scope.acao);
  	}

	$scope.init();
});
