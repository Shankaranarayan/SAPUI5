sap.ui.define(["com/sk/project/skApp1/controller/BaseController",
               "sap/ui/model/json/JSONModel"], function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.sk.project.skApp1.controller.countdown.Countdown", {
        onInit:function(){
            this.timer={
                "days":0,
                "hours":0,
                "minutes":0,
                "seconds":0
            }
            let myTilesModel = new JSONModel(this.timer)
            this.getView().setModel(myTilesModel,"timer")
            //this.showTime()
            setInterval(this.showTime.bind(this),1000)
        },
        showTime: function(){
            let curr = new Date()
            let teched = new Date("Dec 8 2021")
            let diff = teched.getTime() - curr.getTime()
            this.timer.days = Math.floor(diff/(24*60*60*1000))
            this.timer.hours = Math.floor((diff % (24*60*60*1000))/(1000*60*60))
            this.timer.minutes = Math.floor((diff % (60*60*1000))/(1000*60))
            this.timer.seconds = Math.floor((diff % (1000*60))/1000)
            this.getView().getModel("timer").setData(this.timer)
        }
    });
});
