

function EntidadBancariaService($http) {

    this.findAll = function () {
        var config = {
            method: "GET",
            url: "../banco-api/api/entidadBancaria"
        };

        var response = $http(config);

        return response;
    };

    this.read = function (idEntidadBancaria) {
        var config = {
            method: "GET",
            url: "../banco-api/api/entidadBancaria/" + idEntidadBancaria
        };

        var response = $http(config);

        return response;
    };

    this.delete = function (idEntidadBancaria) {
        var config = {
            method: "DELETE",
            url: "../banco-api/api/entidadBancaria/" + idEntidadBancaria
        };

        var response = $http(config);

        return response;
    };

    this.insert = function (entidadBancaria) {
        var config = {
            method: "POST",
            url: "../banco-api/api/entidadBancaria",
            data: entidadBancaria
        };

        var response = $http(config);

        return response;

    };

    this.update = function (entidadBancaria) {

        var config = {
            method: "PUT",
            url: "../banco-api/api/entidadBancaria",
            data: entidadBancaria
        };

        var response = $http(config);

        return response;


    };

};

app.service("entidadBancariaService", EntidadBancariaService);
