

function UpdateEntidadController($scope, $routeParams, entidadBancariaService) {
    
    var botonR = document.getElementById("return");
    botonR.style.display = "none";
    
    $scope.mensaje="ACTUALIZAR ENTIDAD BANCARIA";

    $scope.entidadBancaria = {
    };
    
    var response = entidadBancariaService.read($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


    $scope.aceptar = function () {
        
        var response = entidadBancariaService.update($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has actualizado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };
    
    $scope.cancelar = function(path) {
        window.history.back();
    };
    
}

app.controller("UpdateEntidadController", UpdateEntidadController);








