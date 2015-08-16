/**
 * Controls the Blog
 */
app.controller('acaoCtrl', function ($scope, $location, $http ) {

    $scope.acao = {};
	$scope.listaAcoes = [];
	$scope.hasAction = false;
  $scope.UserList = [
  {
    "userName": "Bernardo Lanza",
    "userId": "1",
    "acaoList": []
  },{
    "userName": "Francisco Cabelo",
    "userId": "2",
    "acaoList": []
  }
  ];

  // $scope.loggedWithUser = 0;
 
	$scope.acaoList = [ 
  	{
      "id" : "1",
  		"userName" : "Roberto Carlos",
  		"userId" : "4",
  		"description" : "Anunciar feira de adoção de cachorrinhos no Jardim Primavera. ",
  		"state" : "Aberto",
  		"people" : 3,
  		"alreadyPeople" : 0,
  		"type" : "acao",	
  		"radius" : "10000",
  		"duration" : "10000"
   },
  {
      "id" : "2",
    "userName" : "João Balboa",
    "userId" : "2",
    "description" : "Doação de Sangue para o hospital das Clinicas. ",
    "state" : "Aberto",
    "people" : 2,
    "alreadyPeople" : 0,
    "type" : "acao",  
    "radius" : "10000",
    "duration" : "10000"
    },
   {
      "id" : "3",
    "userName" : "Fernanda Montenegro",
    "userId" : "1",
    "description" : "Cartazes na Unicamp sobre a coleta de agasalho para o Lar dos Artistas. ",
    "state" : "Aberto",
    "people" : 10,
    "alreadyPeople" : 0,
    "type" : "acao",  
    "radius" : "10000",
    "duration" : "10000"
    }
    ];



  $scope.verDetalhesAcao = function(myobj)
  {
    $scope.obj = myobj;

  $scope.hasAction = true;
    }
  
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

  	$scope.participarAcao = function(acao_id)
  	{
        if($scope.$parent.loggedWithUser == undefined)
        {
          alert("Por favor faça login para participar da Ação :) ")
          return false;
        }

      var auxUser;
      console.log($scope.$parent.loggedWithUser);
      for (var i in $scope.UserList )
      {
          if ($scope.UserList[i].userId == $scope.$parent.loggedWithUser)
          {
                auxUser = $scope.UserList[i];
                for (var j in  $scope.UserList[i].acaoList )
                { 
                          if ($scope.UserList[i].acaoList[j].id == acao_id)     
                          {
                             alert("Você já está inscrito nesta ação! Obrigado!! :) ");
                             return false;  
                          }
                }
          }
      }


      for (var i in $scope.acaoList )
      {
            if  ($scope.acaoList[i].id == acao_id)
            {
                if ($scope.acaoList[i].alreadyPeople == $scope.acaoList[i].people)     
                {
                    alert("Obrigado por tentar ajudar, mas a ação já está em desenvolvimento, escolha outra! :) ");
                    return false;    
                }

                // $scope.acaoList[i].state = "Escolhida";
                $scope.acaoList[i].alreadyPeople++;
                alert("Obrigado por colaborar! ")
                auxUser.acaoList.push($scope.acaoList[i]);
                if ($scope.acaoList[i].alreadyPeople == $scope.acaoList[i].people)     
                {
                      $scope.acaoList[i].state = "Em desenvolvimento";      
                }
            }
      }
  	}

  	$scope.terminaAcao = function(index)
  	{
  		$scope.listaAcoes[index].state = "FINISHED";
  	}

    $scope.cancelarAcao = function()
    {
       $scope.acao = {};
    }  
 
    $scope.enviarAcao = function(ac)
    {
       ac.id = "4";
       ac.userId = 2;
       ac.userName = "Bernardo Lanza";
       ac.state = "Aberto";
       ac.alreadyPeople = 0;
       $scope.acaoList.push(ac);
       $scope.acao = {};
       alert("Cadastrado com Sucesso! ");
    }
	// $scope.terminaAcao = function(index)
 //  	{
 //  		$scope.listaAcoes[index].state = "FINISHED";
 //  	}


  	$scope.init = function(){
  		console.log("Entrou no Controlador da Acao");
  		console.log(" tem uma acao: ");
  		console.log($scope.acao);
  	}

	$scope.init();
});
