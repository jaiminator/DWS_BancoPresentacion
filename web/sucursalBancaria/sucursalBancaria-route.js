
app.config(function ($routeProvider) {
    
    $routeProvider.when('/sucursalBancaria/list', {
        templateUrl: "sucursalBancaria/sucursalBancaria-list.html",
        controller: "ListSucursalController"
    });

    $routeProvider.when('/sucursalBancaria/:idSucursalBancaria', {
        templateUrl: "sucursalBancaria/sucursalBancaria-detail.html",
        controller: "GetSucursalController"
    });

    $routeProvider.when('/sucursalBancaria/delete/:idSucursalBancaria', {
        templateUrl: "sucursalBancaria/sucursalBancaria-delete.html",
        controller: "DeleteSucursalController"
    });
    
    $routeProvider.when('/sucursal/insert', {
        templateUrl: "sucursalBancaria/sucursalBancaria-detail.html",
        controller: "InsertSucursalController"
    });
    
    $routeProvider.when('/sucursalBancaria/update/:idSucursalBancaria', {
        templateUrl: "sucursalBancaria/sucursalBancaria-detail.html",
        controller: "UpdateSucursalController"
    });
    
});

