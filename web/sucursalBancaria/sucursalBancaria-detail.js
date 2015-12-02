
function GetSucursalController($scope, $routeParams, sucursalBancariaService) {

    var botonA = document.getElementById("accept");
    botonA.style.display = "none";
    var botonC = document.getElementById("cancel");
    botonC.style.display = "none";
    
    $scope.mensaje="DETALLE SUCURSAL BANCARIA";
    
    var response = sucursalBancariaService.read($routeParams.idSucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.sucursalBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
    
    $scope.volver = function(path) {
        window.history.back();
    };
    
}

app.controller("GetSucursalController", GetSucursalController);







