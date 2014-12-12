'use strict';
app.factory('blahService', function () {

    function getEnvironmentSettings() {
        var wsh = null,
          env = null;

        try {
            wsh = new ActiveXObject("Wscript.Shell");
        } catch (ex) {
            console.log(ex.name + ': ' + ex.message);
        }

        if (wsh !== null) {
            try {
                env = wsh.Environment("PROCESS");
            } catch (ex) {
                console.log(ex.name + ': ' + ex.message);
            }
        }
        return env;
    }

    function getEnvironmentSetting(key) {
        var env = getEnvironmentSettings(),
          value = "unknown";

        if (env !== null) {
            try {
                value = env.Item(key);
            } catch (ex) {
                console.log(ex.name + ': ' + ex.message);
            }
        }
        return value;
    }

    return {
        computerName: getEnvironmentSetting("COMPUTERNAME")
    };
});
