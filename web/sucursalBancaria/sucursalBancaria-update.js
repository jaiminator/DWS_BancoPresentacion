

function UpdateSucursalController($scope, $routeParams, sucursalBancariaService) {
    
    $scope.mensaje="ACTUALIZAR SUCURSAL BANCARIA";

    $scope.sucursalBancaria = {
    };
    
    var response = sucursalBancariaService.read($routeParams.idSucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.sucursalBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


    $scope.aceptar = function () {
        
        var response = sucursalBancariaService.update($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has actualizado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    
}

app.controller("UpdateSucursalController", UpdateSucursalController);








