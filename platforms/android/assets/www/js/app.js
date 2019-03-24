 // var getImage = function (content)  {
 //    var regex = /<img.*?src='(.*?)'/;
 //    var src = regex.exec(content)[1]; 
 //    return src;
 // } 

 var getImage = function (string)  {

    var elem= document.createElement("div");
    elem.innerHTML = string;

    var images = elem.getElementsByTagName("img");
    try {
      return images[0].src;    
    } catch(e) {
       return '';
    }

 }





var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova', 'xml', 'rss-parser'])
    .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout', 
          function($q, $http, $rootScope, $location, $window, $timeout){
      
          $rootScope.$on("$locationChangeStart", function(event, next, current){
              $rootScope.error = null;
              console.log("Route change!!!", $location.path());
              var path = $location.path();
              
              
          });
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

app.controller("FeedController", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing,$ionicSlideBoxDelegate) {
  


 // $scope.checkStatus = (currentIndex) => {
 //  return $scope.count <= currentIndex
 // }

  let parser = new RSSParser();
  $scope.entries = [];
  $scope.api = 'https://agaramnews.herokuapp.com?url=';
  // $scope.api = 'http://localhost:3000?url=';
  // $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs';
  $scope.tabsApi = 'https://agaramnews.herokuapp.com/tabs';
  // $scope.tabsApi = 'http://localhost:3000/tabs';
  $scope.pagination = '&page=0count=20';
  $scope.apiKey = '&api_key=hpi0ghvdfyy5xbbiwuruga2i6p49cnf0jilgt3dg';
  $scope.count = '&count=100';
  $scope.corsProxy = "https://api.rss2json.com/v1/api.json?rss_url=";
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  $scope.currentIndex = 1;
  $scope.currentItems = [];

  $scope.removeByKey = (array, params)=> {
    array.some((item, index)=> {
      return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
    });
    return array;
  }


   $scope.toggleItems = (id, status, item) => {
        if(!status) {
          $scope.tabs.push(item); 
          window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
           // $scope.currentIndex -= 1;  
        } else {
           $scope.tabs = $scope.removeByKey($scope.tabs, { key: 'id', value: id })
           window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
           $scope.currentIndex += 0;
        }
        // $scope.tabs = $scope.removeByKey($scope.tabs, { key: 'id', value: id })
   }
   // $scope.closePopup = () => {
   //      $scope.myPopup.hide();
   // } 
    $scope.showPopup = function() {
      $scope.data = {}
        fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
                              $scope.$apply( () => {
                              $scope.tabListing = response;
                              // window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
             })   
                            })
      // Custom popup
      $scope.myPopup = $ionicPopup.show({
         template: `<ion-view> 
         <ion-content overflow-scroll="true" has-bouncing="true" class="top-space"> 
                       <i class="icon ion-android-close close-new" ng-click="closePopup()"></i> 
                       
                        <div class="list-news">
<ion-list>                          
  <div ng-repeat="t in tabListing" class="item item-avatar text-left" ng-click="toggleItems(t.id, isPresent(t.id), t)"> 
    <img ng-src="{{t.channelImage}}">
    <h2>{{t.name}}</h2>
    <h3>{{t.channel}} <i ng-if="isPresent(t.id)" class ="icon ion-checkmark green"></i><i ng-if="!isPresent(t.id)" class ="icon ion-checkmark"></i></h3>
     

</div>
</ion-list>
                        </ion-content>
                       </ion-view>
                        `,
         title: 'Add New Channels',
         subTitle: 'Add your favourite channels stay updated',
         scope: $scope,
      });

      $scope.myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
      }; 
      $scope.closePopup =() => {
        window.location.reload();
        
        $scope.myPopup.close();
      }
   $scope.loadTabs = () => {
      if(window.localStorage.getItem('tabs') === null) {
        
          fetch($scope.tabsApi).then((res)=> res.json()).then((response)=> {
            $scope.$apply( () => {
              $scope.tabs = response;
              window.localStorage.setItem('tabs', JSON.stringify($scope.tabs));
            }) 
          }) 
      } else {
        
             $scope.tabs = JSON.parse(window.localStorage.getItem('tabs'));
      }  
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


            $scope.loadData = (dataId) => {

              if(window.localStorage.getItem(dataId.index) !== null ) {
                  $scope.data[$scope.tabs.filter(item => item.id === dataId.index)[0].id] = JSON.parse(window.localStorage.getItem($scope.tabs.filter(item => item.id === dataId.index)[0].id));                             
              }  
              fetch($scope.api + $scope.tabs.filter(item => item.id === dataId.index)[0].url).then((res)=> res.json()).then((result) =>{
                 var data = [];
                 let items  = result.rss.channel.item;
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
try {

   $scope.data = [];
} catch(e) {

}





$scope.sharenews=function(play,subject,link){
 $cordovaSocialSharing
    .share(play,suject, link) // Share via native share sheet
    .then(function(result) {

      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
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

    window.open(link[Object.keys(link)[0]], '_blank', 'location=no','hardwareback=no','clearcache=yes');
}
// $scope.init();







});

app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            element.bind('load', () => {
                element.src = element.src;
            });
        }
    };
});
