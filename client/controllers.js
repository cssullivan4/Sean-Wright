angular.module('myApp.controllers', [])
.controller('PagesCtrl', function ($scope, $window) {
    console.log('Page controller reporting for duty');
    // $window.location.reload();
    // function to set the height on fly
    function autoHeight() {
        $('#content').css('min-height', 0);
        $('#content').css('min-height', (
            $(document).height()
            - $('#header').height()
            - $('#footer').height()
        ));
    }
    if ($(window).width() < 960) {
        alert('Current site build is not fully supportive of mobile views. Please view from a larger screen for best experience.');
     }
     else {
        console.log('Your screen size is preferred for site build currently.');
     }
    // onDocumentReady function bind
    $(document).ready(function () {
        autoHeight();
    });

    // onResize bind of the function
    $(window).resize(function () {
        autoHeight();
    });
});