﻿'use strict';
app.factory('ordersService', ['$http', 'ngResourceSettings', function ($http, ngResourceSettings) {

    var serviceBase = ngResourceSettings.apiResourceBaseUri;

    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'api/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);