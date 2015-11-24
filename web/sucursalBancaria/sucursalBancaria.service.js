

function SucursalBancariaService($http) {

    this.findAll = function () {
        var config = {
            method: "GET",
            url: "../banco-api/api/sucursalBancaria"
        };

        var response = $http(config);

        return response;
    };

    this.read = function (idSucursalBancaria) {
        var config = {
            method: "GET",
            url: "../banco-api/api/sucursalBancaria/" + idSucursalBancaria
        };

        var response = $http(config);

        return response;
    };

    this.delete = function (idSucursalBancaria) {
        var config = {
            method: "DELETE",
            url: "../banco-api/api/sucursalBancaria/" + idSucursalBancaria
        };

        var response = $http(config);

        return response;
    };

    this.insert = function (sucursalBancaria) {
        var config = {
            method: "POST",
            url: "../banco-api/api/sucursalBancaria",
            data: sucursalBancaria
        };

        var response = $http(config);

        return response;

    };

    this.update = function (sucursalBancaria) {

        var config = {
            method: "PUT",
            url: "../banco-api/api/sucursalBancaria",
            data: sucursalBancaria
        };

        var response = $http(config);

        return response;


    };

};

app.service("sucursalBancariaService", SucursalBancariaService);
