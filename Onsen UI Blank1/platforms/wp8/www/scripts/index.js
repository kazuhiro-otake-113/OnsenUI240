// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.

var mAppUrl = "https://mobile-otk220.azurewebsites.net/";
var client;

(function () {
    "use strict";


    // ネイティブへのアクセスが可能になるイベント(deviceready)
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        // ここからAplの処理を記載
        console.log("---AplStart!---");

        //MobileAppsへ接続
        client = new WindowsAzure.MobileServiceClient(mAppUrl);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();