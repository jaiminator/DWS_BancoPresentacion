
function GetEntidadController($scope, $routeParams, entidadBancariaService) {

    var boton = document.getElementById("boton");
    boton.style.display = "none";
    
    $scope.mensaje="DETALLE ENTIDAD BANCARIA";
    
    var response = entidadBancariaService.read($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
    
}

app.controller("GetEntidadController", GetEntidadController);




