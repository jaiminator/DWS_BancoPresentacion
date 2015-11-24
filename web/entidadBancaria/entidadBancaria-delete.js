
function DeleteEntidadController($scope, $routeParams, entidadBancariaService) {

    $scope.borrar = function () {

        var response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("Has borrado el registro");
            window.history.back();
        });

        response.error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    };

    $scope.retornar = function (path) {
        window.history.back();
    };

}

app.controller("DeleteEntidadController", DeleteEntidadController);



