
function InsertSucursalController($scope, sucursalBancariaService) {
    
    $scope.mensaje = "NUEVA SUCURSAL BANCARIA";

    $scope.sucursalBancaria = {
    };

    $scope.aceptar = function () {
        
        var response = sucursalBancariaService.insert($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has insertado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };


}

app.controller("InsertSucursalController", InsertSucursalController);







