//var APIURL = "http://localhost:8090/MobileApps/instagram/";
var APIURL = "http://mnrsofttech.com/mobileApps/instagram/";
app.controller('homeCtrl', function($scope) {

});

app.controller('searchCtrl', function($scope) {

});

app.controller('mediaCtrl', function($scope) {

});

app.controller('activityCtrl', function($scope) {

});
app.controller('postCtrl', function($scope,$rootScope,$state,$ionicModal,$ionicScrollDelegate,$timeout,$stateParams,$http,$localStorage,$cordovaCamera,$ionicActionSheet,$cordovaFileTransfer,$ionicLoading,$cordovaCapture) {
  var filepath="";
    $scope.uploadPhotoOrVideo = function(){
        var options = {
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
              mediaType: Camera.MediaType.ALLMEDIA
          };

          $cordovaCamera.getPicture(options).then(function(data) {
          filepath = "file:"+data;
          $scope.post.media_url = filepath;
          document.getElementById("output_ele").innerHTML = '<video src="'+filepath+'" width="100%" height="300" controls ></video>';
          document.getElementById("output_ele").innerHTML = '<img src="'+filepath+'" width="100%" height="300" />';
          document.getElementById("output_media").innerHTML = JSON.stringify(data);
          // $scope.media.push(data.localURL);
        }, function(error) {
          // error getting photos
          $scope.post.media_url = '';
          document.getElementById("output_media").innerHTML = JSON.stringify(data);
        });


    }//end uploadPhotoOrVideo

    $scope.capturePhoto = function(){
        var options = { limit: 1 };

         $cordovaCapture.captureImage(options).then(function(imageData) {
           // Success! Image data is here
           filepath = imageData[0].fullPath;
           $scope.post.media_url = filepath;
           document.getElementById("output_ele").innerHTML = '<img src="'+filepath+'" width="100%" height="300" />';
           document.getElementById("output_media").innerHTML = JSON.stringify(imageData);
         }, function(err) {
            $scope.post.media_url = "";
          document.getElementById("output_media").innerHTML = JSON.stringify(imageData);
         });
    } // capturePhoto

    $scope.captureVideo = function(){
      var options = { limit: 1};

       $cordovaCapture.captureVideo(options).then(function(videoData) {
         filepath = videoData[0].fullPath;
          $scope.post.media_url = filepath;
         document.getElementById("output_ele").innerHTML = '<video src="'+filepath+'" width="100%" height="300" controls></video>';
         document.getElementById("output_media").innerHTML = JSON.stringify(videoData);
       }, function(err) {
           $scope.post.media_url = "";
         document.getElementById("output_media").innerHTML = JSON.stringify(videoData);
       });
    } //end captureVideo


    $scope.postData = function(data){
      var options = {};
      var server = APIURL+"post_media";
      $cordovaFileTransfer.upload(server, filePath, options).then(function(result) {
          $scope.outputofFileUpload = result;

            document.getElementById("alert_log").innerHTML = JSON.stringify(result);

            console.log("SUCCESS: " + JSON.stringify(result));
            console.log('Result_' + result.response[0] + '_ending');
            $ionicLoading.hide();
            alert("success");
            alert(JSON.stringify(result.response));
            $scope.post.media_url = result.url;
            $http.post(APIURL+"post", post).success(function(successData){
                document.getElementById("alert_log2").innerHTML = JSON.stringify(successData);
            });
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
            $ionicLoading.hide();
            //alert(JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });


    }//End PostData;
});

app.controller('chatCtrl', function($scope) {

});

app.controller('profileCtrl', function($scope) {

});

app.controller('loginCtrl', function($scope,$http) {
  $scope.doLogin = function(loginData) {
    //console.log('Doing login', $scope.loginData);

    //Socket.emit("Login",$scope.loginData);

    $http.post(APIURL+"login",loginData).then(function(result){
      console.log(result);

    });

  };
});

app.controller('signupCtrl', function($scope,$http,$localStorage,$rootScope,$state,$stateParams) {
    $scope.signupUser = function(signup){
        $http.post(APIURL+"signup",signup).success(function(result){
          console.log(result);
          if(result && result.status=="success"){
              var userData = {
                user_id:result.user_id,
                name:signup.name,
                mobile:signup.mobile,
                email:signup.email,
                ProfilePic:result.ProfilePic,
                android_token:result.android_token
              }

              $localStorage.userData = userData;
              $rootScope.login = true;
              //$scope.android_gcm();
              //$state.go('app.groupchat',{name:result.data.mobile});
              $state.go('tab1');
            }else{
              alert(result.message);
            }//End
        });
    }

});

app.controller('editProfileCtrl', function($scope) {

});

app.controller('changePasswordCtrl', function($scope) {

});

app.controller('settingsCtrl', function($scope) {

});
