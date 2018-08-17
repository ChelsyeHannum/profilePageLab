"use strict";

const EditProfile = {
    template: `
    <form>
    <input type= "text" ng-model="$ctrl.newName" placeholder="Name">
    <input type="text" ng-model ="$ctrl.newContact" placeholder="Contact">
    <input type="text" ng-model ="$ctrl.newBio" placeholder="Bio">
    <button >Edit Profile</button> 
    </form>
    `,

    controller: ["ProfileServices", function(ProfileServices) {
        const vm = this;
    }]

};
angular
    .module("App")
    .component("EditProfile", EditProfile);