
app.config(function ($routeProvider) {
    
    $routeProvider.when('/entidadBancaria/list', {
        templateUrl: "entidadBancaria/entidadBancaria-list.html",
        controller: "ListEntidadController"
    });

    $routeProvider.when('/entidadBancaria/:idEntidadBancaria', {
        templateUrl: "entidadBancaria/entidadBancaria-detail.html",
        controller: "GetEntidadController"
    });

    $routeProvider.when('/entidadBancaria/delete/:idEntidadBancaria', {
        templateUrl: "entidadBancaria/entidadBancaria-delete.html",
        controller: "DeleteEntidadController"
    });
    
    $routeProvider.when('/entidad/insert', {
        templateUrl: "entidadBancaria/entidadBancaria-detail.html",
        controller: "InsertEntidadController"
    });
    
    $routeProvider.when('/entidadBancaria/update/:idEntidadBancaria', {
        templateUrl: "entidadBancaria/entidadBancaria-detail.html",
        controller: "UpdateEntidadController"
    });
    
});