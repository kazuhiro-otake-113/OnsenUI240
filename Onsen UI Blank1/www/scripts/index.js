// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.

var mAppUrl = "https://mobile-otk220.azurewebsites.net/";
var client;
var ncmb;
var appKey = "14c1de68f0d3f719c2368b89723f7e4be88de1ddb1b40584c1933db791df731e";
var clientKey = "44e245113576fa4eaf9607c0c2692eda0ab504b64a8404b12add6369f46cd7e7";

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

        //nifty mobile backendに接続
        ncmb = new NCMB(appKey, clientKey);
        NCMB.initialize(appKey, clientKey);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();