
function ListEntidadController($scope, entidadBancariaService) {

    var response = entidadBancariaService.findAll(); 

    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    });

    response.error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });

}

app.controller("ListEntidadController", ListEntidadController);


