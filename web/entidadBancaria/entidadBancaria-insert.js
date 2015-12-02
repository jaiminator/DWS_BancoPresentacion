
function InsertEntidadController($scope, entidadBancariaService) {
    
    var botonR = document.getElementById("return");
    botonR.style.display = "none";
    
    $scope.mensaje = "NUEVA ENTIDAD BANCARIA";

    $scope.entidadBancaria = {
    };

    $scope.aceptar = function () {
        
        if ($scope.myForm.$valid) {
            
            var response = entidadBancariaService.insert($scope.entidadBancaria);

            response.success(function (data, status, headers, config) {
                alert("Has insertado el registro");
                window.history.back();
            });

            response.error(function (data, status, headers, config) {
                alert("Ha fallado la petición. Estado HTTP:" + status);
            });
            
        } else {
            alert("ERROR: HAY CAMPOS VACÍOS");
        }
        
    };
    
    $scope.cancelar = function(path) {
            window.history.back();
    };
    
}

app.controller("InsertEntidadController", InsertEntidadController);







