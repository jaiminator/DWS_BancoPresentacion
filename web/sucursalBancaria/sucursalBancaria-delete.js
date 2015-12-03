
function DeleteSucursalController($scope, $routeParams, sucursalBancariaService) {

    $scope.borrar = function () {

        var response = sucursalBancariaService.delete($routeParams.idSucursalBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has borrado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    };

    $scope.retornar = function () {
//        window.history.back();
        location.href = "#/sucursalBancaria/list";
    };

}

app.controller("DeleteSucursalController", DeleteSucursalController);



