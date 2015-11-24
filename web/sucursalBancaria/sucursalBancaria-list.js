
function ListSucursalController($scope, sucursalBancariaService) {

    var response = sucursalBancariaService.findAll(); 

    response.success(function (data, status, headers, config) {
        $scope.sucursalesBancarias = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });

}

app.controller("ListSucursalController", ListSucursalController);





