'use strict';
app.provider("EnvConfig", function () {
    var envConfig = {
        apiAuthBaseURI: "http://authhost:8080/",
        apiResourceBaseURI: "http://resourcehost:8081/"
    };
    this.$get = function () {
        var url = '/config.json',
          q = null;
        try {
            q = new XMLHttpRequest();
        } catch (error1) {
            try {
                q = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error2) {
                q = null;
            }
        }

        if (q !== null) {
            q.open("GET", url, false);  // synchronous request
            q.send(null);
            if (q.status === 200) {
                angular.extend(envConfig, angular.fromJson(q.responseText));
            }
        }
        return envConfig;
    };
});
