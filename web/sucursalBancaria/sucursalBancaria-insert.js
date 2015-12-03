
function InsertSucursalController($scope, sucursalBancariaService) {
    
    var botonR = document.getElementById("return");
    botonR.style.display = "none";
    
    $scope.mensaje = "NUEVA SUCURSAL BANCARIA";
    
    $scope.show = false;

    $scope.sucursalBancaria = {
    };

    $scope.aceptar = function () {
        
        if ($scope.myForm.$valid) {
            
            var response = sucursalBancariaService.insert($scope.sucursalBancaria);

            response.success(function (data, status, headers, config) {
                alert("Has insertado el registro");
                window.history.back();
            });

            response.error(function (data, status, headers, config) {
                alert("Ha fallado la petición. Estado HTTP:" + status);
            });
            
        } else {
            alert ("HAY ERRORES AL INSERTAR");
            $scope.show = true;
        }
        
    };
    
    $scope.cancelar = function() {
//            window.history.back();
            location.href = "#/sucursalBancaria/list";
    };

}

app.controller("InsertSucursalController", InsertSucursalController);







