sap.ui.define(["com/sk/project/skApp1/controller/BaseController",
               "sap/ui/model/json/JSONModel"], function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.sk.project.skApp1.controller.Tiles", {
        onInit:function(){
            var oModel = new JSONModel("../model/tiles.json")
            this.getView().setModel(oModel,"tiles")
        },
        press: function(oRoute){
            this.getOwnerComponent().getRouter().navTo(oRoute)
        }
    });
});
