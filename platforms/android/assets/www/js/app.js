
var language = 'english';
var newsUrl = 'https://agaramnews.herokuapp.com/axios-scrape?url=';
var playStoreLink = 'https://play.google.com/store/apps/details?id=com.classic.news';


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
              
              var path = $location.path();
              
              
          });
          

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
      
      };  
        }
        ])

        var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova'])
    .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
          function($q, $http, $rootScope, $location, $window, $timeout){
      
          $rootScope.$on("$locationChangeStart", function(event, next, current){
              $rootScope.error = null;
              
              var path = $location.path();
              
              
              
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
        templateUrl : 'templates/view.html',
        controller: 'fullnewsCtrl'
        
      });

      $urlRouterProvider.otherwise("/");
    });
    
app.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){


 
 

      $scope.onSlideMove = function(data){
                    
                      
      };  
        }
        ])

app.controller("fullnewsCtrl", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaToast, $rootScope, $ionicHistory, $ionicSlideBoxDelegate) {


  $scope.stars = [1,2,3,4,5];  
  $scope.language = language;    
  $rootScope.addCount = 0;     
  $scope.appRated = false;  
  if(!window.localStorage.getItem('appRated'))  {
            $scope.appRated = false;
                 
        } else {
           $scope.appRated = true;                         
  }

  $scope.rateApp = function (star) {
    if(star > 3) {
       window.localStorage.setItem('appRated', true);    
       window.open(playStoreLink);          
       $scope.appRated = true;  
    } else {
       $scope.appRated = true;  
       window.localStorage.setItem('appRated', true);    
    }   
  }

  try {
    $rootScope.isSwifeSeen = JSON.parse(window.localStorage['seen']);   
    
  }catch(e) {

  }
 
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
  ];
 $scope.seen = function() {
  window.localStorage['seen'] = true;
  $rootScope.isSwifeSeen = true;
 }
 $ionicPlatform.registerBackButtonAction(function () {
    $ionicHistory.goBack();            
}, 100);

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){

  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  $scope.seen();

  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});

$scope.slideChanged = function (){
    $scope.seen();
    $rootScope.addCount += 1;
    if($rootScope.addCount > 6) {
      $scope.showAdd();
    }
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

 $ionicLoading.show({template: 'Loading ...'}); 
 $cordovaSocialSharing
    .share('News Street' , message, image, playStoreLink) // Share via native share sheet
    .then(function(result) {
      $ionicLoading.hide();
      
    }, function(err) {
      $ionicLoading.hide();
      
    });

  setTimeout(()=> {
    $ionicLoading.hide();
  }, 3000);  
}
 $scope.back = function() {
  $ionicHistory.goBack();
 }
 
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
   
    backButtonCanClose: true,

}).addEventListener('backPressed', function(e) {
    
}).addEventListener('helloPressed', function(e) {
    
}).addEventListener('sharePressed', function(e) {
  $scope.sharenews($scope.currentNews);
    
}).addEventListener(cordova.ThemeableBrowser.EVT_ERR, function(e) {
    
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    
});

  }  
  $scope.data = {
    linkData: {}
  }; 
  $rootScope.$on("$locationChangeSuccess", function (data,prev, next) {  
    

      
  });

  $scope.showAdd = function ()   {  
    $rootScope.addCount = 0;
     $ionicPlatform.ready(function() {

    if( ionic.Platform.isAndroid() )  { 

   admobid = { // for Android
      banner: 'ca-app-pub-5179473842241588/5519262986' // Change this to your Ad Unit Id for banner...
   };



   if(AdMob) {

    // var admob = window.plugins.AdMob;

      //    AdMob.createBanner( {
      //    adId:admobid.banner, 
      //    // position:AdMob.AD_POSITION.BOTTOM_CENTER, 
      //    autoShow:true, 
      //    isTesting: true
      // } );
      AdMob.prepareInterstitial(
        {
          adId: admobid.banner, 
          adSize: 'FULL_BANNER'
          

        })
      .then(() => {         
        AdMob.showInterstitial(); 
      });
    }

    }

});   
  }
    
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
    
    
}).addEventListener(cordova.ThemeableBrowser.EVT_WRN, function(e) {
    
    
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
app.controller("FeedController", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate, $ionicPopup, $cordovaInAppBrowser, $ionicLoading, $cordovaAdMob, $cordovaToast, $timeout, $sce,$ionicScrollDelegate, $rootScope, $location, $filter,  $ionicSlideBoxDelegate) {

try {
    $rootScope.isSwifeSeenHome = JSON.parse(window.localStorage['seenHome']);   
  }catch(e) {

  }
$scope.seenHome = function() {

  window.localStorage['seenHome'] = true;
  $rootScope.isSwifeSeenHome = true;
 
}
$scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
 
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});
$scope.getCorrectDate = (date ) => {
  let date1 = date;
  return $filter('date')(date1, "dd/MM/yyyy", "UTC");
};
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
  
  $scope.selectedLanguage = lan.id;
  $scope.showPopup();
  
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
  try {


    $cordovaToast
    .show(message, 'long', 'center')
    .then(function(success) {
      
    }, function (error) {
      
    });
} catch(e) {

}
}  
var backbutton=0;
$ionicPlatform.registerBackButtonAction(function () {
        
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
  try {
    window.open = cordova.InAppBrowser.open;
  } catch(e) {
    
  }
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
  $rootScope.currentGlance = [];
  $rootScope.clickedIndex = 0;
  $scope.currentTitle = '';
  $scope.api = 'https://agaramnews.herokuapp.com?url=';
  // $scope.api = 'http://localhost:3000?url=';
  $scope.imageApi = 'https://agaramnews.herokuapp.com/static/categoryimages';
  
  $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs?language=';
  // $scope.tabsApi = 'http://localhost:3000/tabs?language=';
  
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
              $ionicSlideBoxDelegate.update()
              if(window.localStorage.getItem(dataId.index) !== null ) {
                  $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id] = JSON.parse(window.localStorage.getItem($scope.tabs.filter(item => item.id === dataId.index)[0].id));                             

                  $rootScope.currentGlance = $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id] = JSON.parse(window.localStorage.getItem($scope.tabs.filter(item => item.id === dataId.index)[0].id));                             
                  
                  $ionicSlideBoxDelegate.update()
              }  
              fetch($scope.api + $scope.tabs.filter(item => item.id === dataId.index)[0].url).then((res)=> res.json()).then((result) =>{
                 var data = [];
                 let items  = result;
                 try {
                   items.forEach(function( entry, i) {
                  
                       entry.img = getImage(entry.description._cdata = entry.description._cdata);
                       data.push(entry);
                          
                  
                   })
                 } catch(e) {
                     


                 }
                 $scope.$apply( () => {
                    $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id]=data; 
                    $rootScope.currentGlance = $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id]=data; 
                    $ionicSlideBoxDelegate.update()

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


          

        } else {
           $scope.showToast('Channel ' + item.name + ' Removed');
           window.localStorage.setItem(id, JSON.stringify([]));                      
           $scope.tabs = $scope.removeByKey($scope.tabs, { key: 'id', value: id })
           window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
           
        }
   
   }
   $scope.closePopup = () => {
        $scope.myPopup.hide();
   }


    $scope.showPopup = function() {
      
        fetch($scope.tabsApi  + $scope.selectedLanguage).then((res)=> res.json()).then((response)=> {
          
              $scope.$apply( () => {
                              imageLoader(response);
                              $scope.tabListing = response;
                              $scope.languages = $scope.tabListing[0].languages; 
                              
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
        
             $scope.tabs = JSON.parse(window.localStorage.getItem('tabs'));

             $scope.currentTab = $scope.tabs.length > 2 ? 2 : 0;
        
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

                    $scope.seenHome();
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
                  
                        fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
                              $scope.$apply( () => {
                              $scope.tabListing = response;
                              
                          }) 
                      })  
                }
 
                

                $ionicSlideBoxDelegate.update();                 
                

                 
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
 
 $ionicLoading.show({template: 'Loading ...'}); 
 $cordovaSocialSharing
    .share('Daily News', message, image, link) // Share via native share sheet
    .then(function(result) {
      $ionicLoading.hide();
      
    }, function(err) {
      $ionicLoading.hide();
      
    });

  setTimeout(()=> {
    $ionicLoading.hide();
  }, 3000);  
}








$scope.shareWhatsapp = (message, image, link) => {
   $cordovaSocialSharing
    .shareViaWhatsApp(message, image, link)
    .then(function(result) {
      
    }, function(err) {
      
    });
}
$scope.shareFacebook = (message, image, link) => {
    $cordovaSocialSharing
    .shareViaFacebook(message, image, link)
    .then(function(result) {
      
    }, function(err) {
      
    });
}

$scope.viewnews=function(link, news, index)
{



    $ionicPlatform.ready(function() {

    if( ionic.Platform.isAndroid() )  { 

   admobid = { // for Android
      banner: 'ca-app-pub-5179473842241588/5519262986' // Change this to your Ad Unit Id for banner...
   };



   if(AdMob) {
    AdMob.removeBanner();
   
    }

    }

});
$rootScope.clickedIndex = index;
$rootScope.currentNews = { link, news };

$scope.currentNews = news;
setTimeout(()=> {
  $ionicSlideBoxDelegate.update()
  
}, 2000)
$location.path('/news');
  

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
          
        }
      },
      {
        text: '<b>Yes , Rate App</b>',
        type: 'button-balanced',
        onTap: function(e) {
           window.localStorage.setItem('appRated', true); 
           window.open(playStoreLink);
        }
      }
    ]
  });

  myPopup.then(function(res) {
    
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
            
        }
        updatePreSelection();

        function preSelectNext() {
            
            preSelected = (preSelected + 1) % scope.ops.length;
            updatePreSelection();
        }

        function preSelectPrev() {
            
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
