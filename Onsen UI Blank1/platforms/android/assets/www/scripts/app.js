// ログイン
function login() {
    console.log("ログイン押下");

    //ログイン
    //client.login("aad").then(authSuccess, handleError);
/*
    var DtimeDb = ncmb.DataStore("MasterEmp");
    DtimeDb.equalTo("empId", "z2h3542")
           .fetchAll()
           .then(function (results) {
               console.log("ncmb : " + results);
           })
         .catch(function (err) {
             console.log(err);
         });

    console.log("end :");
*/
    //画面遷移
    myNavigator.pushPage('time.html');


    // -- 勤怠時間読み込み Start--

    var table = client.getTable('Attendance');
    console.log("table : " + JSON.stringify(table));

    
    table.read().then(function (results) {
        var numItemRead = results.length;
        console.log("results.length : " + numItemRead);
        console.log("results : " + JSON.stringify(results));
        setData(results);
    }, handleError);

}

function setData(array) {
    var table = document.getElementById("timeTable");

    for (var i = 0; i < array.length; i++) {
        console.log("setData : " + JSON.stringify(array));

        var name = table.rows[i].cells[0];
        name.innerHTML = array[i].empNo;

        var workDay = table.rows[i].cells[1];
        workDay.innerHTML = array[i].workDay;

        var startTime = table.rows[i].cells[2];
        startTime.innerHTML = array[i].startTime;

        var endTime = table.rows[i].cells[3];
        endTime.innerHTML = array[i].endTime;
    }
}

//位置情報取得
function getGeolocation() {
    console.log("getGeolocation Call!!");
    var option = { timeout: 6000 };

    navigator.geolocation.getCurrentPosition(onSuccess, handleError, option);

}

var onSuccess = function (position) {
    console.log("緯度:　" + position.coords.latitude);
    console.log("経度:　" + position.coords.longitude);
}

function authSuccess() {
    console.log("成功");
}

function handleError() {
    console.log("失敗");
}

function timeRegist() {
    console.log("timeRegist() Call!!");

    var table = client.getTable('Attendance');

    var newItem = {
        startTime: new Date(),
        empNo: 'z2h3542'
    };

    table
        .insert(newItem)
        .done(function (insertedItem) {
            var id = insertedItem.id;
        }, failure);


}