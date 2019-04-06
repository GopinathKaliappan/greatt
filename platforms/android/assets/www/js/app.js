
var language = 'english';

 var getImage = function (string)  {

    var elem= document.createElement("div");
    elem.innerHTML = string;

    var images = elem.getElementsByTagName("img");
    try {
      var img = new Image();
      img.src = images[0].src;
      return images[0].src;    
    } catch(e) {
       return '';
    }

 }





var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova', 'xml', 'rss-parser'])
    .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
          function($q, $http, $rootScope, $location, $window, $timeout,$ionicPlatform){
      
          $rootScope.$on("$locationChangeStart", function(event, next, current){
              $rootScope.error = null;
              console.log("Route change!!!", $location.path());
              var path = $location.path();
              
              
          });
          
// $ionicPlatform.ready(function() {

//     if( ionic.Platform.isAndroid() )  { 

//    admobid = { // for Android
//       banner: 'ca-app-pub-5179473842241588/7169440949' // Change this to your Ad Unit Id for banner...
//    };



//    if(AdMob) {
    
//    alert(1); 
//          AdMob.createBanner( {
//          adId:admobid.banner, 
//          position:AdMob.AD_POSITION.BOTTOM_CENTER, 
//          autoShow:true
//       } );
//     }


// }

// });
      }
      ]);

    app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

      $stateProvider.state('index', {
        url : '/',
        templateUrl : 'index.html',
        controller : 'IndexCtrl'
      });
    
      $urlRouterProvider.otherwise("/");
            $httpProvider.interceptors.push('xmlHttpInterceptor')
    });
    
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
      $scope.onSlideMove = function(data){
        //alert("You have selected " + data.index + " tab");
      };  
        }
        ])

        var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova'])
    .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
          function($q, $http, $rootScope, $location, $window, $timeout){
      
          $rootScope.$on("$locationChangeStart", function(event, next, current){
              $rootScope.error = null;
              console.log("Route change!!!", $location.path());
              var path = $location.path();
              
              
              console.log("App Loaded!!!");
          });
      }
      ]);
    
    app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('index', {
        url : '/',
        templateUrl : 'index.html',
        controller : 'IndexCtrl'
      });

      $urlRouterProvider.otherwise("/");
    });
    
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){


 
 

      $scope.onSlideMove = function(data){
                    
                      
      };  
        }
        ])
app.controller("Livetabs", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaToast) {
  $scope.imageApi = 'https://agaramnews.herokuapp.com/static/categoryimages';
$scope.languages = [{ name: 'english'}, {name:  'tamil' }];

$scope.selectLanguage= (d)=> {
  
}


$scope.viewlistnews=function(link)
{
  
cordova.ThemeableBrowser.open(link, '_blank', {
    statusbar: {
        color: '#ffffffff'
    },
    toolbar: {
        height: 44,
        color: '#f0f0f0ff'
    },
    title: {
        color: '#003264ff',
        showPageTitle: true
    },
    // backButton: {
    //     wwwImage: 'img/back.png',
    //     imagePressed: 'back_pressed',
    //     align: 'left',
    //     event: 'backPressed'
    // },
    closeButton: {
        wwwImage: 'img/back.png',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    // alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    // alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    // $scope.sharenews(e);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});

} 
$scope.liveApi = 'https://agaramnews.herokuapp.com/livetabs?language='+language
  $scope.loadLive = (dataId) => {

              if(window.localStorage.getItem('liveTabs') !== undefined) {
                     $scope.liveTabs = JSON.parse(window.localStorage.getItem('liveTabs'));
              
              }
              fetch($scope.liveApi).then((res)=> res.json()).then((result) =>{
                 
                 $scope.$apply( () => {
                    $scope.liveTabs=result; 

                 })
                 if($scope.liveTabs) {

                      window.localStorage.setItem('liveTabs', JSON.stringify($scope.liveTabs));
              
                 }
              })                   
            }
  $scope.loadLive()
})
app.controller("FeedController", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaAdMob, $cordovaToast, $timeout) {

$scope.languages = [{ name: 'english'}, {name:  'tamil' }];
$scope.selectLanguage = (lan) => {
    language = lan;
    // alert(lan);
    // $scope.loadLive
}

$scope.currentTab = 0;
$scope.showToast = function (message) {
    $cordovaToast
    .show(message, 'long', 'center')
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });

}  
var backbutton=0;
$ionicPlatform.registerBackButtonAction(function () {
        // $scope.showToast('Slide to Change the page');
        if(backbutton == 0 ) {
            backbutton += 1;
            $scope.showToast('Slide to change the Page');
            $scope.currentTab -= 1;   
            $timeout(function(){backbutton=0;},3000);
        } else {
        
          navigator.app.exitApp();
        }
        

    
}, 100);

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}



$ionicPlatform.ready(function() {

    if( ionic.Platform.isAndroid() )  { 

   admobid = { // for Android
      banner: 'ca-app-pub-5179473842241588/5965784880' // Change this to your Ad Unit Id for banner...
   };



   if(AdMob) {

    // var admob = window.plugins.AdMob;

         AdMob.createBanner( {
         adId:admobid.banner, 
         position:AdMob.AD_POSITION.BOTTOM_CENTER, 
         autoShow:true
      } );
    }

}

});

 // $scope.checkStatus = (currentIndex) => {
 //  return $scope.count <= currentIndex
 // }
  $scope.colors = [
    '#1B2631',
    '#512E5F',
    '#500b0b',
    '#145A32',
    '#922B21',
    '#6E2C00',
    '#512E5F',
    '#1B2631',
    '#154360',
    '#145A32',
    '#7D6608',
    '#1B2631',
    '#FF5733',
    '#145A32',
    '#922B21',
    '#6E2C00',
    '#512E5F',
    '#1B2631',
    '#154360',
    '#145A32',
    '#7D6608',
    '#1B2631',
    '#154360',
    '#145A32',
    '#7D6608',
    '#1B2631',
    '#FF5733',
    '#145A32',
    '#922B21',
    '#6E2C00',
    '#512E5F',
    '#1B2631',
    '#154360',
    '#145A32',
    '#7D6608',
    '#1B2631',    
    '#145A32',
    '#7D6608',
    '#1B2631',
    '#FF5733',
    '#145A32',
    '#922B21',
    '#6E2C00',
    '#512E5F',
    '#1B2631',
    '#154360',
    '#145A32',
    '#7D6608',
    '#1B2631',    
  ] 
  // let parser = new RSSParser();
  $scope.entries = [];
  $scope.api = 'https://agaramnews.herokuapp.com?url=';
  $scope.imageApi = 'https://agaramnews.herokuapp.com/static/categoryimages';
  // $scope.api = 'http://localhost:3000?url=';
  // $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs';
  $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs?language=' +language;
  // $scope.tabsApi = 'http://localhost:3000/tabs';
  $scope.pagination = '&page=0count=20';
  $scope.apiKey = '&api_key=hpi0ghvdfyy5xbbiwuruga2i6p49cnf0jilgt3dg';
  $scope.count = '&count=100';
  $scope.corsProxy = "https://api.rss2json.com/v1/api.json?rss_url=";
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  $scope.currentIndex = 1;
  $scope.currentItems = [];
  let tabs = [
       {
        name: 'Add Channels',
        url: 'https://tamil.samayam.com/',
        icon: '',
        color: 'green',
        channelImage: 'https://tamil.samayam.com/photo/66586409.cms',
        text: 'white',
        type: 'menu' ,
        channel: 'News18',
        language:'tamil',
        category: 'lifestyle',
        id: 1001
      },
      {
        name: 'News Paper',
        url: 'https://tamil.samayam.com/',
        icon: '',
        color: 'green',
        channelImage: 'https://tamil.samayam.com/photo/66586409.cms',
        text: 'white',
        type: 'menu' ,
        channel: 'News18',
        language:'tamil',
        category: 'lifestyle',
        id: 1000
      }

  ];

  $scope.previousSlide = -1;  
            $scope.loadData = (dataId) => {

              if(window.localStorage.getItem(dataId.index) !== null ) {
                  $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id] = JSON.parse(window.localStorage.getItem($scope.tabs.filter(item => item.id === dataId.index)[0].id));                             
              }  
              fetch($scope.api + $scope.tabs.filter(item => item.id === dataId.index)[0].url).then((res)=> res.json()).then((result) =>{
                 var data = [];
                 let items  = result;
                 try {
                   items.forEach(function( entry, i) {
                  // console.log(entry.title + ':' + entry.link);
                       entry.img = getImage(entry.description._cdata = entry.description._cdata);
                       data.push(entry);
                          
                  
                   })
                 } catch(e) {
                     // fetch($scope.tabs[dataId.index].url,
                     //  {headers : { 
                     //        'Content-Type': 'application/json',
                     //        'Accept': 'application/xml'
                     //  }}).then(res=> res.json()).then((response)=>     {
                     //      console.log(response);  
                     // })


                 }
                 $scope.$apply( () => {
                    $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id]=data; 

                 })
                 if($scope.data[dataId.index]) {

                      window.localStorage.setItem($scope.tabs.filter(item => item.id === dataId.index)[0].id, JSON.stringify($scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id]));
              
                 }
              })                   
            }
  
  $scope.removeByKey = (array, params)=> {
    array.some((item, index)=> {
      return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
    });
    return array;
  }


   $scope.toggleItems = (id, status, item) => {
        if(!status) {
          $scope.showToast('Channel ' + item.name + ' Added ...');
          $scope.tabs.splice(2,0,item);


          // $scope.tabs.insert(2,item); 

              window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
              $scope.currentTab = 2;
            // alert(window.localStorage.getItem('appRated'));
          
              if(!window.localStorage.getItem('appRated'))  {
                if($scope.tabs.length > 4) {
                 $scope.appRate();  
               }
              }

          

        } else {
           // $scope.showToast('Channel ' + item.name + ' Removed');
           window.localStorage.setItem(id, JSON.stringify([]));                      
           $scope.tabs = $scope.removeByKey($scope.tabs, { key: 'id', value: id })
           window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
           // $scope.currentIndex += 0;
        }
        // $scope.tabs = $scope.removeByKey($scope.tabs, { key: 'id', value: id })
   }
   $scope.closePopup = () => {
        $scope.myPopup.hide();
   }


    $scope.showPopup = function() {
      // $scope.data = {}
        fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
          console.log(response)
              $scope.$apply( () => {
                              $scope.tabListing = response;
                              // window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
             })   
        })
      // Custom popup
//       $scope.myPopup = $ionicPopup.show({
//          template: `<ion-view> 
//          <ion-content overflow-scroll="true" has-bouncing="true" class="top-space"> 
//                        <i class="icon ion-android-close close-new" ng-click="closePopup()"></i> 
                       
//                         <div class="list-news">
// <ion-list>                          
//   <div ng-repeat="t in tabListing" class="item item-avatar text-left" ng-click="toggleItems(t.id, isPresent(t.id), t)"> 
//     <img ng-src="{{t.channelImage}}">
//     <h2>{{t.name}}</h2>
//     <h3>{{t.channel}} <i ng-if="isPresent(t.id)" class ="icon ion-checkmark green"></i><i ng-if="!isPresent(t.id)" class ="icon ion-checkmark"></i></h3>
     

// </div>
// </ion-list>
//                         </ion-content>
//                        </ion-view>
//                         `,
//          title: 'Add New Channels',
//          subTitle: 'Add your favourite channels stay updated',
//          scope: $scope,
//       });

//       $scope.myPopup.then(function(res) {
//          console.log('Tapped!', res);
//       });    
      };
      $scope.showPopup(); 
      // $scope.closePopup =() => {
      //   window.location.reload();
        
      //   $scope.myPopup.close();
      // }
   $scope.loadTabs = () => {

      if(window.localStorage.getItem('tabs') === null) {
          $scope.tabs = tabs;
          window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
          $scope.currentTab = 0;
          // fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
          //   $scope.$apply( () => {
          //     // $scope.tabs = response;
          //     response.map((data, index)=> {
          //         $scope.tabs.push(data);    
          //     });
          //     window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
          //     // $scope.loadData({ index: $scope.tabs[0].id });  
          //   }) 
          // }) 
      } else {
        // alert(1)
             $scope.tabs = JSON.parse(window.localStorage.getItem('tabs'));

             $scope.currentTab = $scope.tabs.length > 2 ? 2 : 0;
             // $scope.loadData({ index: $scope.tabs[0].id });
      }  
            $scope.currentColor = $scope.colors[0];
    }  
    
    $scope.loadTabs();

    $scope.pageCount = 1;
    $scope.loadMore = () => {
        $scope.pageCount = Number($scope.pageCount) + 1;
    } 
    $scope.isPresent = (id) => {
      return $scope.tabs.filter((item) => item.id === id).length > 0 
    }  

            $scope.onSlideMove = (dataNew) => {

                    try {
                          $scope.currentColor = $scope.colors[dataNew.index];
                        let dataId = {
                              index: $scope.tabs[dataNew.index].id 
                        }     
                          $scope.$apply( () => {

                        $scope.pageCount = 1;
                        $scope.currentIndex = dataId.index;
                        $scope.loadData(dataId);  

                    }) 

                } catch(e) {
                        fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
                              $scope.$apply( () => {
                              $scope.tabListing = response;
                              // window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
                          }) 
                      })  
                }
 
                // alert($scope.tabs[dataId.index].id);

                $ionicSlideBoxDelegate.update();                 
                  //count = 0;
                 // if($scope.tabs[dataNew.index].id === undefined) {
                 
                 
                 // } else {
                  
                 // }

                 
            };


try {

   $scope.data = [];
} catch(e) {

}





$scope.sharenews=function(message,subject,image = '', link){

 $ionicLoading.show({template: 'Loading ...'}); 
 $cordovaSocialSharing
    .share(message, subject, image, link) // Share via native share sheet
    .then(function(result) {
      $ionicLoading.hide();
      // Success!
    }, function(err) {
      $ionicLoading.hide();
      // An error occured. Show a message to the user
    });

  setTimeout(()=> {
    $ionicLoading.hide();
  }, 3000);  
}








$scope.shareWhatsapp = (message, image, link) => {
   $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
}
$scope.shareFacebook = (message, image, link) => {
    $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
}

$scope.viewnews=function(link)
{
  // $ionicLoading.show({ template: 'Loading ...'});
  // setTimeout(()=> {
  //   $ionicLoading.hide();

  //   $cordovaInAppBrowser.open(link[Object.keys(link)[0]], '_blank')
  //     .then(function(event) {
  //         // success
  //     })
  //     .catch(function(event) {
    
  //       // error
  // });
  // }, 1000)  
  
cordova.ThemeableBrowser.open(link[Object.keys(link)[0]], '_blank', {
    statusbar: {
        color: '#ffffffff'
    },
    toolbar: {
        height: 44,
        color: '#f0f0f0ff'
    },
    title: {
        color: '#003264ff',
        showPageTitle: true
    },
    closeButton: {
        wwwImage: 'img/back.png',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    backButtonCanClose: true
}).addEventListener('backPressed', function(e) {
    // alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    // alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
    // $scope.sharenews(e);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});

}


  $scope.appRate = () => {
    var myPopup = $ionicPopup.show({
    template: '',
    title: 'Do you like News App Inc',
    subTitle: 'Help us to improve with your ratings.',
    scope: $scope,
    buttons: [
      {
        text: '<b>No </b>',
        type: 'button-positive',
        onTap: function(e) {
          myPopup.close();
           // window.open('https://play.google.com/store/apps/details?id=com.classic.news');
        }
      },
      {
        text: '<b>Yes , Rate App</b>',
        type: 'button-balanced',
        onTap: function(e) {
           window.localStorage.setItem('appRated', true); 
           window.open('https://play.google.com/store/apps/details?id=com.classic.news');
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  }
  // $scope.appRate();



});

app.directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
    }
});
