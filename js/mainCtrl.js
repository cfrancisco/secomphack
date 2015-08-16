/**
 * Controls the Blog
 */
app.controller('mainCtrl', function ($scope, $location, $http ) {

	$scope.isLogged = 0;


  	$scope.loginProtagonistaUm = function()
  	{
  		$scope.loggedWithUser = 1;
  		$scope.isLogged = 2;
  		alert("Seja bem vindo ");
  		console.log("logou o Protagonista 1");

  	  for (var i in $scope.UserList )
      {
          if ($scope.UserList[i].userId == $scope.loggedWithUser)
          {
                $scope.userAcaoList = $scope.UserList[i].acaoList;
          }
      }

  	}

	$scope.loginProtagonistaDois = function()
  	{
  		$scope.loggedWithUser = 2;
  		$scope.isLogged = 2;
  		alert("Seja bem vindo ");
  		console.log("logou o Protagonista 2");
 	   for (var i in $scope.UserList )
       {
          if ($scope.UserList[i].userId == $scope.loggedWithUser)
          {
                $scope.userAcaoList = $scope.UserList[i].acaoList;
          }
      }
  	}

  	$scope.loginProdutor = function()
  	{
  		$scope.isLogged = 1;
  		alert("Seja bem vindo ");
  		console.log("logou o produtor");
  	}



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

  	$scope.userAcaoList = [];



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
  

$scope.participarAcao = function(acao_id)
  	{
      if($scope.loggedWithUser == undefined)
      {
         alert("Por favor faça login para participar da Ação :) ")
         return false;
      }

      var auxUser;
      for (var i in $scope.UserList )
      {
          if ($scope.UserList[i].userId == $scope.loggedWithUser)
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
                $scope.userAcaoList = auxUser.acaoList;
                if ($scope.acaoList[i].alreadyPeople == $scope.acaoList[i].people)     
                {
                      $scope.acaoList[i].state = "Em desenvolvimento";      
                }
            }
      }
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


  	$scope.init = function(){
  		console.log("Entrou no Controlador da mainCtrl");
  	}

	$scope.init();
});
