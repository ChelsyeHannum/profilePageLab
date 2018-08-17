"use strict";

const UserProfile = {
    template: `

<p> {{ $ctrl.name }} </p> 
<p> {{ $ctrl.contact }}</p>
<p> {{$ctrl.bio}}</p>
<button ng-click ="$ctrl.getUserProfile();">Update</button> 
`,

    controller: ["ProfileServices", function(ProfileServices) {
        const vm = this;
    }]

}

angular
    .module("App")
    .component("UserProfile", UserProfile);