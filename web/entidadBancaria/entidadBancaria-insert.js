
function InsertEntidadController($scope, entidadBancariaService) {
    
    $scope.mensaje = "NUEVA ENTIDAD BANCARIA";

    $scope.entidadBancaria = {
    };

    $scope.aceptar = function () {
        
        var response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has insertado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };


}

app.controller("InsertEntidadController", InsertEntidadController);







