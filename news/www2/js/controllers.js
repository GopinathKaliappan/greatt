/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,$http) {


    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk,Backand, $state, $rootScope, $location,LoginService) {


$scope.signin=function(a,b) {
  

  var email=a;
   var password=b;
   window.localStorage['emails']=email;
               LoginService.signin(email, password)
                .then(function (response) {
window.localStorage['signed']='yes';
                  
                    console.log(response);
                    onLogin();
                

                }, function (error) {
                  
                    console.log(error)
                })
        }

        function anonymousLogin() {
            LoginService.anonymousLogin();
            onLogin('Guest');
        }

        function onLogin(username) {

            $rootScope.$broadcast('authorized');
            //alertService.showAlert("Logged in Successfully");
           var tt= Backand.getUserDetails();
           tt.$$state.value.fullName; 
            $state.go('app.activity');

    }

        function signout() {
            LoginService.signout()
                .then(function () {
                    //$state.go('tab.login');
                    $rootScope.$broadcast('logout');
                    $state.go($state.current, {}, {reload: true});
                })

        }

        function socialSignIn(provider) {
            LoginService.socialSignIn(provider)
                .then(onValidLogin, onErrorInLogin);

        }

        function socialSignUp(provider) {
            LoginService.socialSignUp(provider)
                .then(onValidLogin, onErrorInLogin);

        }

        function onValidLogin (response){
       
            onLogin();
            login.username = response.data || login.username;
        }

        function onErrorInLogin (rejection){
            login.error = rejection.data;
            $rootScope.$broadcast('logout');

        }


        //login.username = '';
        //login.error = '';
        //login.signin = signin;
        //login.signout = signout;
        //login.anonymousLogin = anonymousLogin;
        //login.socialSignup = socialSignUp;
        //login.socialSignin = socialSignIn;



    /*$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
*/

})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout,$cordovaImagePicker, Backand,ionicMaterialMotion, ionicMaterialInk) {
    // Set Header

    var tt= Backand.getUserDetails();
          $scope.myname= tt.$$state.value.fullName;
           
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();


})

.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
})
.controller('ActivityCtrl', function($scope, $stateParams, $timeout,$cordovaImagePicker,$cordovaSocialSharing, ionicMaterialMotion, ionicMaterialInk) {
    //meme start 

function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.send();
}


$scope.shareanywhere=function(){


var image = new Image();
image.id = "start-image";
image.src = canvas.toDataURL();
document.getElementById('memecanvas').appendChild(image);


     $cordovaSocialSharing
    .share('This is Your MEME', 'Nanga Coimbatoreunga', image.src, 'www.looty.com') // Share via native share sheet
    .then(function(result) {

        
        var r=[];


      
r.push({'myimage':image.src});

window.localStorage['myimages']=angular.toJson(r);

      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
}


$scope.pick=function(){


     var options = {
   maximumImagesCount: 1,
   width: 800,
   height: 800,
   quality: 80
  };
  $cordovaImagePicker.getPictures(options)
    .then(function (results) {


      
  toDataUrl(results, function(base64Img) {
  console.log(base64Img);
  $scope.results=base64Img;
});    



 setTimeout(function () {
        $scope.$apply(function () {
 $scope.results=$scope.results;

       });
    }, 1000);

      
    }, function(error) {
      // error getting photos
    });
}

var ctx="";
var x="";
var y="";
  var memeSize = 300;

  var canvas = document.getElementById('memecanvas');
  ctx = canvas.getContext('2d');


  // Set the text style to that to which we are accustomed



  canvas.width = memeSize;
  canvas.height = memeSize;

  //  Grab the nodes
  var img = document.getElementById('start-image');
  var topText = document.getElementById('top-text');
  var bottomText = document.getElementById('bottom-text');

  // When the image has loaded...
  img.onload = function() {
    drawMeme()

  }  

  topText.addEventListener('keydown', drawMeme)
  topText.addEventListener('keyup', drawMeme)
  topText.addEventListener('change', drawMeme)

  bottomText.addEventListener('keydown', drawMeme)
  bottomText.addEventListener('keyup', drawMeme)
  bottomText.addEventListener('change', drawMeme)

  function drawMeme() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, 0, 0, memeSize, memeSize);

    ctx.lineWidth  = 4;
    ctx.font = '20pt sans-serif';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    var text1 = document.getElementById('top-text').value;
    text1 = text1.toUpperCase();
    x = memeSize / 2;
    y = 0;

    wrapText(ctx, text1, x, y, 300, 28, false);

    ctx.textBaseline = 'bottom';
    var text2 = document.getElementById('bottom-text').value;
    text2 = text2.toUpperCase();
    y = memeSize;

    wrapText(ctx, text2, x, y, 300, 28, true);

  }

  function wrapText(context, text, x, y, maxWidth, lineHeight, fromBottom) {

    var pushMethod = (fromBottom)?'unshift':'push';
    
    lineHeight = (fromBottom)?-lineHeight:lineHeight;

    var lines = [];
    var y = y;
    var line = '';
    var words = text.split(' ');

    for (var n = 0; n < words.length; n++) {
      var testLine = line + ' ' + words[n];
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;

      if (testWidth > maxWidth) {
        lines[pushMethod](line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines[pushMethod](line);

    for (var k in lines) {
      context.strokeText(lines[k], x, y + lineHeight * k);
      context.fillText(lines[k], x, y + lineHeight * k);
    }


  }


  //meme

//meme end    
    
 
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();





})

.service('share',function($cordovaSocialSharing){

return {

    shareanywhere:function(img){


     $cordovaSocialSharing
    .share('This is Your MEME', 'Nanga Coimbatoreunga', img ,'www.google.com') // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
},
toDataUrl:function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.send();
}

}
})

.controller('GalleryCtrl', function($scope,$http, $stateParams, $timeout,$cordovaSocialSharing, ionicMaterialInk, ionicMaterialMotion,Backand,share) {





try 
{

    
    $scope.my=angular.fromJson(window.localStorage['my']);
}

catch(e)
{

}
$scope.share=function(img){


var tt;

share.toDataUrl(img, function(base64Img) {
  console.log(base64Img);
  tt=base64Img;

share.shareanywhere(tt);
});



}

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });




$scope.filt=function(search){

return $http ({
  method: 'GET',
  url: Backand.getApiUrl() + '/1/objects/meme',
  params: {
    pageSize: 20,
    pageNumber: 1,
    filter: [
      {
        fieldName: 'name',
        operator: 'contains',
        value: search
      }
    ],
    sort: ''
  }
}).then(function successCallback(response) {
    
$scope.myimg=response.data.data;
    setTimeout(function () {
        $scope.$apply(function () {
    $scope.myimg=response.data.data;

        })
}, 2000);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}

$scope.aaa=function(a){
 


return $http ({
  method: 'GET',
  url: Backand.getApiUrl() + '/1/objects/meme',
  params: {
    pageSize: 20,
    pageNumber: 1,
    filter: [
      {
        fieldName: 'type',
        operator: 'contains',
        value: a
      }
    ],
    sort: ''
  }
}).then(function successCallback(response) {
    
$scope.myimg=response.data.data;
    setTimeout(function () {
        $scope.$apply(function () {
    $scope.myimg=response.data.data;

        })
}, 2000);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

 }






return $http ({
  method: 'GET',
  url: Backand.getApiUrl() + '/1/objects/meme',
  params: {
    pageSize: 20,
    pageNumber: 1,
    sort: '[{fieldName:\'type\', order:\'asc\'}]'
  }
}).then(function successCallback(response) {
    
try
{


$scope.my=response.data.data;
window.localStorage['my']=angular.toJson(my);
    }
    catch(e)
    {

    }

    
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });







$scope.zoomMin = 1;

})


    .controller('LoginCtrll', function (Backand, $state, $rootScope, $location,LoginService) {
        var login = this;

        function signin() {
            LoginService.signin(login.email, login.password)
                .then(function (response) {
                    console.log(response);
                    onLogin();
                }, function (error) {
                    console.log(error)
                })
        }


        function anonymousLogin() {
            LoginService.anonymousLogin();
            onLogin('Guest');
        }

        function onLogin(username) {
            $rootScope.$broadcast('authorized');
            $state.go('tab.dashboard');
            login.username = username || Backand.getUsername();
    }

        function signout() {
            LoginService.signout()
                .then(function () {
                    //$state.go('tab.login');
                    $rootScope.$broadcast('logout');
                    $state.go($state.current, {}, {reload: true});
                })

        }

        function socialSignIn(provider) {
            LoginService.socialSignIn(provider)
                .then(onValidLogin, onErrorInLogin);

        }

        function socialSignUp(provider) {
            LoginService.socialSignUp(provider)
                .then(onValidLogin, onErrorInLogin);

        }

        onValidLogin = function(response){
       
       //     onLogin();
            login.username = response.data || login.username;
        }

        onErrorInLogin = function(rejection){
            login.error = rejection.data;
            $rootScope.$broadcast('logout');

        }


        login.username = '';
        login.error = '';
        login.signin = signin;
        login.signout = signout;
        login.anonymousLogin = anonymousLogin;
        login.socialSignup = socialSignUp;
        login.socialSignin = socialSignIn;

    })

.controller('about',function(){




})
    .controller('SignUpCtrl', function (Backand, $state, $scope,$rootScope, LoginService,alertService) {
        var vm = this;


$scope.condition="Password Should be minimum 8 Char";
        vm.signup = signUp;

        function signUp(){
            $scope.errorMessage = '';

            LoginService.signup(vm.email, vm.email, vm.email, vm.password, vm.again)
                .then(function (response) {
                    // success
                    onLogin();
                }, function (reason) {
                    if(reason.data.error_description !== undefined){
                        $scope.errorMessage  = reason.data.error_description;
                    }
                    else{
           
 
                   //     vm.errorMessage = reason.data;
                    }
                });
        }


        function onLogin() {
            $rootScope.$broadcast('authorized');

            $scope.successlogin = 'Successfully Registered Login to Continue';

setTimeout(function(){
      alertService.showAlert("Successfully Registerd Login to Continue");
            $state.go('login');
     
        },2000);
         }


        vm.email = '';
        vm.password ='';
        vm.again = '';
        vm.firstName = '';
        vm.lastName = '';
        vm.errorMessage = '';
    })

    .controller('DashboardCtrl', function (ItemsModel, $rootScope) {
        var vm = this;

        function goToBackand() {
            window.location = 'http://docs.backand.com';
        }

        function getAll() {
            ItemsModel.all()
                .then(function (result) {
                    vm.data = result.data.data;
                });
        }

        function clearData() {
            vm.data = null;
        }

        function create(object) {
            ItemsModel.create(object)
                .then(function (result) {
                    cancelCreate();
                    getAll();
                });
        }

        function update(object) {
            ItemsModel.update(object.id, object)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function deleteObject(id) {
            ItemsModel.delete(id)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function initCreateForm() {
            vm.newObject = {name: '', description: ''};
        }

        function setEdited(object) {
            vm.edited = angular.copy(object);
            vm.isEditing = true;
        }

        function isCurrent(id) {
            return vm.edited !== null && vm.edited.id === id;
        }

        function cancelEditing() {
            vm.edited = null;
            vm.isEditing = false;
        }

        function cancelCreate() {
            initCreateForm();
            vm.isCreating = false;
        }

        vm.objects = [];
        vm.edited = null;
        vm.isEditing = false;
        vm.isCreating = false;
        vm.getAll = getAll;
        vm.create = create;
        vm.update = update;
        vm.delete = deleteObject;
        vm.setEdited = setEdited;
        vm.isCurrent = isCurrent;
        vm.cancelEditing = cancelEditing;
        vm.cancelCreate = cancelCreate;
        vm.goToBackand = goToBackand;
        vm.isAuthorized = false;

        $rootScope.$on('authorized', function () {
            vm.isAuthorized = true;
            getAll();
        });

        $rootScope.$on('logout', function () {
            clearData();
        });

        if (!vm.isAuthorized) {
            $rootScope.$broadcast('logout');
        }

        initCreateForm();
        getAll();

    });

