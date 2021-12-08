sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.sk.project.skApp1.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.sk.project.skApp1",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
