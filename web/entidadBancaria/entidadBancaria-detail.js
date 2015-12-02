
function GetEntidadController($scope, $routeParams, entidadBancariaService) {

    var botonA = document.getElementById("accept");
    botonA.style.display = "none";
    var botonC = document.getElementById("cancel");
    botonC.style.display = "none";
    
    $scope.mensaje="DETALLE ENTIDAD BANCARIA";
    
    var response = entidadBancariaService.read($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
    
    $scope.volver = function(path) {
        window.history.back();
    };
    
}

app.controller("GetEntidadController", GetEntidadController);




