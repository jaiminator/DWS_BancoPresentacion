
function GetSucursalController($scope, $routeParams, sucursalBancariaService) {

    var boton = document.getElementById("boton");
    boton.style.display = "none";
    
    $scope.mensaje="DETALLE SUCURSAL BANCARIA";
    
    var response = sucursalBancariaService.read($routeParams.idSucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.sucursalBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
    
}

app.controller("GetSucursalController", GetSucursalController);







