
var language = 'english';
var newsUrl = 'https://agaramnews.herokuapp.com/axios-scrape?url=';
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

var imageLoader = (items) => {
      items.map((item)=> {
          var img = new Image();
          img.src = item.channelImage; 
      })
}



var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova', 'xml', 'rss-parser', 'ngSanitize'])
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

       var index = {
        url : '/aa',
        templateUrl : 'index.html',
        controller : 'IndexCtrl'
      }; 
      var aboutState = {
        name: 'about',
        url: '/about',
        controller: 'IndexCtrl'
      };


      $stateProvider.state(index)
      $stateProvider.state(index)
  

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
      $stateProvider.state('news', {
        url : '/news',
        templateUrl : 'templates/live.html',
        controller: 'fullnewsCtrl'
        // template : '<h1>Hellow</h1>'
      });

      $urlRouterProvider.otherwise("/");
    });
    
        app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){


 
 

      $scope.onSlideMove = function(data){
                    
                      
      };  
        }
        ])

app.controller("fullnewsCtrl", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaToast, $rootScope, $ionicHistory) {
 
 $scope.back = function() {
  $ionicHistory.goBack();
 }
  // $scope.shareViaFacebook = function(news)   {
  //    $cordovaSocialSharing
  //   .shareViaFacebook(message, image, link)
  //   .then(function(result) {
  //     // Success!
  //   }, function(err) {
  //     // An error occurred. Show a message to the user
  //   });
  // }
  $scope.viewfullnews = function(link) {
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
    forwardButton: {
        wwwImage: 'img/forward',
        imagegePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'img/back.png',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            wwwImage: 'img/share.png',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    // menu: {
    //     wwwImage: 'img/menu.png',
    //     imagePressed: 'menu_pressed',
    //     title: 'Test',
    //     cancel: 'Cancel',
    //     align: 'right',
    //     items: [
    //         {
    //             event: 'helloPressed',
    //             label: 'Hello World!'
    //         },
    //         {
    //             event: 'testPressed',
    //             label: 'Test!'
    //         }
    //     ]
    // },
    backButtonCanClose: true,

}).addEventListener('backPressed', function(e) {
    // alert('back pressed');
}).addEventListener('helloPressed', function(e) {
    // alert('hello pressed');
}).addEventListener('sharePressed', function(e) {
  $scope.sharenews($scope.currentNews);
    // $scope.sharenews(e);
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    console.error(e.message);
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    console.log(e.message);
});

  }  
  $scope.data = {
    linkData: {}
  }; 
  $rootScope.$on("$locationChangeSuccess", function (data,prev, next) {  
    

      // if(prev !== next && prev.includes('news')) {        
      //     $scope.prevUrl = window.location.href;    
      //     $scope.newsData = $rootScope.currentNews;
          
      //     $scope.newsList = {};
      //     // $http({
      //     //   method: 'GET',
      //     //   url: newsUrl+$rootScope.currentNews.link[Object.keys($rootScope.currentNews.link)]
      //     // }).then(function successCallback(response) {
      //     //   $scope.newsList = response.data.meta;
      //     //   console.log($scope.newsList);
      //     //   $scope.newsList.map((item,index)=>{
      //     //     if(JSON.stringify(item).length < 99) {
      //     //       $scope.newsList.splice(index, 1);
      //     //     }
      //     //   })
      //     //   // this callback will be called asynchronously
      //     //   // when the response is available
      //     // }, function errorCallback(response) {
      //     //   // called asynchronously if an error occurs
      //     //   // or server returns response with an error status.
      //     // });

      //    $http.get(newsUrl+$rootScope.currentNews.link[Object.keys($rootScope.currentNews.link)], {
      //     responseType: "arraybuffer"
      //   })
      //   .success(function(data) {
      //     var anchor = angular.element('<a/>');
      //     var blob = new Blob([data]);
      //     anchor.attr({
      //       href: window.URL.createObjectURL(blob),
      //       target: '_blank',
      //       download: 'fileName.png'
      //     })[0].click();
      //   })
      // } else {
      //   $scope.prevUrl = window.location.href;    
      // }
  });
  // $scope.call = ()=> {
    
  // }

})        
app.controller("Livetabs", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaToast,$location) {
  $scope.imageApi = 'https://agaramnews.herokuapp.com/static/categoryimages';
$scope.languages = [{
        label: 'English',
        value: 'english',
        id: 'english'
    },{
        label: 'Tamil',
        value: 'tamil',
        id: 'tamil'
    },{
        label: 'All',
        value: 'all',
        id: 'all'
    }];
 $scope.liveStreams = [];
 $scope.selectedLanguage = language;
$scope.selectLanguage = (lan) => {

  $scope.selectedLanguage = lan.id;
  $scope.loadLive();
  
  
}
$scope.selectLiveStream = (lan) => {

  $scope.selectedLanguage = lan.id;
  $scope.loadLiveStream();
  
  
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
    // backButton: {
    //     image: 'back',
    //     imagePressed: 'back_pressed',
    //     align: 'left',
    //     event: 'backPressed'
    // },
    forwardButton: {
        wwwImage: 'img/forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'img/back.png',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },
    customButtons: [
        {
            wwwImage: 'img/menu',
            imagePressed: 'share_pressed',
            align: 'right',
            event: 'sharePressed'
        }
    ],
    menu: {
        image: 'menu',
        imagePressed: 'menu_pressed',
        title: 'Test',
        cancel: 'Cancel',
        align: 'right',
        items: [
            {
                event: 'helloPressed',
                label: 'Hello World!'
            },
            {
                event: 'testPressed',
                label: 'Test!'
            }
        ]
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

  $scope.loadLive = (dataId) => {

$scope.liveApi = 'https://agaramnews.herokuapp.com/livetabs?language='+$scope.selectedLanguage
              if(window.localStorage.getItem('liveTabs') !== undefined) {
                    try {
                     $scope.liveTabs = JSON.parse(window.localStorage.getItem('liveTabs'));
                     $scope.languages = $scope.liveTabs[0].languages;                 
                   } catch (e) {

                   }
                     
              }
              fetch($scope.liveApi).then((res)=> res.json()).then((result) =>{
                 
                 $scope.$apply( () => {
                    $scope.liveTabs=result; 
                    $scope.languages = $scope.liveTabs[0].languages;
                 })
                 if($scope.liveTabs) {

                      window.localStorage.setItem('liveTabs', JSON.stringify($scope.liveTabs));
              
                 }
              })                   
            }
  $scope.loadLive();

  $scope.loadLiveStream = (dataId) => {

$scope.liveStreamApi = 'https://agaramnews.herokuapp.com/live-stream?language='+$scope.selectedLanguage
              if(window.localStorage.getItem('liveStreams') !== undefined) {
                    try {
                     $scope.liveStreams = JSON.parse(window.localStorage.getItem('liveStreams'));
                     $scope.languages = scope.liveStreams[0].languages;                 
                   } catch (e) {

                   }
                     
              }
              fetch($scope.liveStreamApi).then((res)=> res.json()).then((result) =>{
                 
                 $scope.$apply( () => {
                    $scope.liveStreams=result; 
                    $scope.languages = $scope.liveTabs[0].languages;
                 })
                 if($scope.liveTabs) {

                      window.localStorage.setItem('liveStreams', JSON.stringify($scope.liveStream));
              
                 }
              })                   
            }
  $scope.loadLiveStream()
})
app.controller("FeedController", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaAdMob, $cordovaToast, $timeout, $sce,$ionicScrollDelegate, $rootScope, $location) {

$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/lrX6ktLg8WQ");
$scope.loadStream = function(stream) {

    $scope.videoSource = $sce.trustAsResourceUrl(stream);
    $ionicScrollDelegate.scrollTop();
}

$scope.languages = [{
        label: 'English',
        value: 'english',
        id: 'english'
    },{
        label: 'தமிழ்',
        value: 'tamil',
        id: 'tamil'
    },{
        label: 'മലയാള',
        value: 'മലയാള',
        id: 'മലയാള'
    },{
        label: 'हिंदी',
        value: 'hindi',
        id: 'hindi'
    },{
        label: 'All',
        value: 'all',
        id: 'all'
    }];
$scope.selectedLanguage = language;
$scope.selectLanguage = (lan) => {
  // $scope.selectedLanguage = lan;
  $scope.selectedLanguage = lan.id;
  $scope.showPopup();
  // $scope.loadLive();
  $scope.showToast('Loading ... ' + lan.label);
  
  
}

$scope.download = function(url) {
      $http.get(url, {
          responseType: "arraybuffer"
        })
        .success(function(data) {
          var anchor = angular.element('<a/>');
          var blob = new Blob([data]);
          anchor.attr({
            href: window.URL.createObjectURL(blob),
            target: '_blank',
            download: 'fileName.png'
          })[0].click();
        })
    }
$scope.currentNews = {};
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

  $scope.currentTitle = '';
  $scope.api = 'https://agaramnews.herokuapp.com?url=';
  $scope.imageApi = 'https://agaramnews.herokuapp.com/static/categoryimages';
  // $scope.api = 'http://localhost:3000?url=';
  // $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs';
  $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs?language=';
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
        name: 'News Live',
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
          
          $scope.tabs.splice(2,0,item);
          window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
          $scope.currentTab = 2;
            
        let count = Number(window.localStorage.getItem('totoalAdded'));  
        if(!window.localStorage.getItem('appRated') && count > 3)  {
            window.localStorage.setItem('totoalAdded', 0);
            $scope.appRate();  
                 
        } else {
            window.localStorage.setItem('totoalAdded', count + 1);
            $scope.showToast('Channel ' + item.name + ' Loading...');                        
            // alert(count)
        }

                    // $scope.showToast('Channel ' + item.name + ' Loading...');
            // let count = Number(window.localStorage.getItem('totoalAdded'));
            // window.localStorage.setItem('totoalAdded', count + 1);
            // alert(count)

          

        } else {
           $scope.showToast('Channel ' + item.name + ' Removed');
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
        fetch($scope.tabsApi  + $scope.selectedLanguage).then((res)=> res.json()).then((response)=> {
          console.log(response)
              $scope.$apply( () => {
                              imageLoader(response);
                              $scope.tabListing = response;
                              $scope.languages = $scope.tabListing[0].languages; 
                              // alert($scope.languages.length);
                              // window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
             })   
        })
     
      };
      $scope.showPopup(); 
     
   $scope.loadTabs = () => {

      if(window.localStorage.getItem('tabs') === null) {
          $scope.tabs = tabs;
          window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
          $scope.currentTab = 0;
     
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
                        
                    $scope.currentTitle = $scope.tabs[dataNew.index].name;          

                } catch(e) {
                  // alert()
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





$scope.sharenews=function(entry){
 let description = entry.description[Object.keys(entry.description)[0]]; 
 let message = entry.title[Object.keys(entry.title)[0]] 
 let link = entry.link[Object.keys(entry.link)[0]] 
 let image = "";
 if(entry.img != "") {
   image = entry.img; 
 } else if(entry.enclosure._attributes.url){
   image = entry.enclosure._attributes.url; 
 } else if(entry.image._text){
   image = entry.image._text; 
 }
 // image = entry.title[Object.keys(message.title)[0]]; 
 $ionicLoading.show({template: 'Loading ...'}); 
 $cordovaSocialSharing
    .share('Daily News', message, image, link) // Share via native share sheet
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

$scope.viewnews=function(link, news)
{

$rootScope.currentNews = { link, news };
  
$scope.currentNews = news;
$location.path('/news');
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
  
// cordova.ThemeableBrowser.open(link[Object.keys(link)[0]], '_blank', {
//     statusbar: {
//         color: '#ffffffff'
//     },
//     toolbar: {
//         height: 44,
//         color: '#f0f0f0ff'
//     },
//     title: {
//         color: '#003264ff',
//         showPageTitle: true
//     },
//     forwardButton: {
//         wwwImage: 'img/forward',
//         imagegePressed: 'forward_pressed',
//         align: 'left',
//         event: 'forwardPressed'
//     },
//     closeButton: {
//         wwwImage: 'img/back.png',
//         imagePressed: 'close_pressed',
//         align: 'left',
//         event: 'closePressed'
//     },
//     customButtons: [
//         {
//             wwwImage: 'img/share.png',
//             imagePressed: 'share_pressed',
//             align: 'right',
//             event: 'sharePressed'
//         }
//     ],
//     // menu: {
//     //     wwwImage: 'img/menu.png',
//     //     imagePressed: 'menu_pressed',
//     //     title: 'Test',
//     //     cancel: 'Cancel',
//     //     align: 'right',
//     //     items: [
//     //         {
//     //             event: 'helloPressed',
//     //             label: 'Hello World!'
//     //         },
//     //         {
//     //             event: 'testPressed',
//     //             label: 'Test!'
//     //         }
//     //     ]
//     // },
//     backButtonCanClose: true,

// }).addEventListener('backPressed', function(e) {
//     // alert('back pressed');
// }).addEventListener('helloPressed', function(e) {
//     // alert('hello pressed');
// }).addEventListener('sharePressed', function(e) {
//   $scope.sharenews($scope.currentNews);
//     // $scope.sharenews(e);
// }).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
//     console.error(e.message);
// }).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
//     console.log(e.message);
// });

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
app.directive('mySelect', function($window) {
    function main(scope, element, attrs) {
        console.log('mySelect directive');

        // Selecting model value
        for (var idx in scope.ops) {
            if (scope.ops[idx].value == scope.selection) {
                scope.selectedOpt = scope.ops[idx];
            }
        }

        // Is a mobile device
        var isMobile = false;
        if (/ipad|iphone|android/gi.test($window.navigator.userAgent)) {
            isMobile = true;
        }

        // Select an option
        scope.selectOpt = function(opt) {
            scope.selection = opt.value;
            //scope.selectedOpt = opt;
            optionsDom.removeClass('active');
            backdrop.removeClass('active');
        };

        scope.$watch('selection', function(newVal) {
            for (var idx in scope.ops) {
                if (scope.ops[idx].value == newVal) {
                    scope.selectedOpt = scope.ops[idx];
                }
            }
        });

        // DOM References
        var labelDom = element.find('.my-select-label');
        var optionsDom = element.find('.my-select-ops');
        var backdrop = element.find('.my-select-backdrop');
        var mobileSelect = element.find('select');

        // DOM Event Listeners
        labelDom.on('click', function() {
            rePositionOps();
            optionsDom.toggleClass('active');
            backdrop.toggleClass('active');
        });
        backdrop.on('click', function() {
            optionsDom.removeClass('active');
            backdrop.removeClass('active');
        });
        element.on('keydown', function(ev) {
            switch (ev.which) {
                case 37: // left arrow
                case 38: // top arrow
                    preSelectPrev();
                    break;
                case 39: // right arrow
                case 40: // down arrow
                    preSelectNext();
                    break;
                case 13: // enter key
                    preSelectPush();
            }
        });

        // Initialization
        rePositionOps();
        $($window).on('resize', function() {
            rePositionOps();
        });
        if (isMobile) {
            mobileSelect.addClass('active');
        }

        // Positioning options
        function rePositionOps() {
            optionsDom.width(labelDom.width());
            optionsDom.css({
                top: labelDom.offset().top + labelDom.outerHeight(),
                left: labelDom.offset().left
            });
            // Mobile ops
            mobileSelect.width(labelDom.outerWidth());
            mobileSelect.height(labelDom.outerHeight());
            mobileSelect.css({
                top: labelDom.offset().top,
                left: labelDom.offset().left
            });
        }

        // PreSelection logic:
        //  This controls option selecting and highlighting by pressing the arrow
        //  keys.
        var preSelected = 0;

        function updatePreSelection() {
            optionsDom.children().filter('.preselected').removeClass('preselected');
            optionsDom.find('div').eq(preSelected).addClass('preselected');
            console.log(preSelected);
        }
        updatePreSelection();

        function preSelectNext() {
            console.log(scope.ops.length);
            preSelected = (preSelected + 1) % scope.ops.length;
            updatePreSelection();
        }

        function preSelectPrev() {
            console.log(scope.ops.length);
            preSelected = (preSelected - 1) % scope.ops.length;
            updatePreSelection();
        }

        function preSelectPush() {
            scope.selectOpt(scope.ops[preSelected]);
            scope.$apply();
        }
    }

    return {
        link: main,
        scope: {
            ops: '=mySelect',
            selection: '=selection'
        },
        template: '<div class="my-select-label" tabindex="0" title="{{selectedOpt.label}}"><span class="my-select-label-text">{{selectedOpt.label}}</span><span class="my-select-caret"><svg viewBox="0 0 100 60"><polyline points="10,10 50,50 90,10" style="fill:none;stroke:white;stroke-width:8;stroke-linecap:round;"/></svg></span></div><div class="my-select-backdrop"></div><div class="my-select-ops"><div ng-repeat="o in ops" ng-click="selectOpt(o)">{{o.label}}</div></div><select ng-options="opt.value as opt.label for opt in ops" ng-model="selection"></select>'
    };
})
;
