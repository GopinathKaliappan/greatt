 // var getImage = function (content)  {
 //    var regex = /<img.*?src='(.*?)'/;
 //    var src = regex.exec(content)[1]; 
 //    return src;
 // } 

 var getImage = function (string, img)  {

    var elem= document.createElement("div");
    elem.innerHTML = string;

    var images = elem.getElementsByTagName("img");
    try {
      return images[0].src;    
    } catch(e) {
       return img;
    }

 }





var app = angular.module('slidebox', ['ionic', 'tabSlideBox','ngCordova', 'xml', 'rss-parser'])
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

app.controller("FeedController", function($http, $scope,$timeout,$ionicPlatform,$cordovaSocialSharing) {
  
 
  let parser = new RSSParser();

  $scope.apiKey = '&api_key=hpi0ghvdfyy5xbbiwuruga2i6p49cnf0jilgt3dg';
  $scope.count = '&count=100';
  $scope.corsProxy = "https://api.rss2json.com/v1/api.json?rss_url=";
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  $scope.currentIndex = 1;
  $scope.data = [];

  $scope.tabs = [
    {
        name: 'India',
        url: 'https://www.news18.com/rss/india.xml',
        icon: '',
        color: '#FF5733',
        text: 'white'
    },
    {
        name: 'Word',
        url: 'https://www.news18.com/rss/world.xml',
        icon: '',
        color: '#C70039',
        text: 'white'
    },
    {
        name: 'Cricket',
        url: 'https://www.news18.com/rss/cricketnext.xml',
        icon: '',
        color: '#900C3F',
        text: 'white'
    },


    {
        name: 'Life Style',
        url: 'https://www.news18.com/rss/lifestyle.xml',
        icon: '',
        color: '#922B21',
        text: 'white'
    },
    {
        name: 'Fashion',
        url: 'https://www.thehindu.com/life-and-style/fashion/feeder/default.rss',
        icon: '',
        color: '#4A235A',
        text: 'white'
    },
    {
        name: 'Movies',
        url: 'https://www.news18.com/rss/movies.xml',
        icon: '',
        color: 'grey',
        text: 'white'
    },
        {
        name: 'Samayam Tamil',
        url: 'https://tamil.samayam.com/rssfeedstopstories.cms',
        icon: '',
        color: '#4A235A',
        text: 'white'
    }
  ];
  parser.parseURL(CORS_PROXY + 'https://www.news18.com/rss/south-cinema.xml', function(err, feed) {

  var data = [];
  feed.items.forEach(function(entry) {
    // console.log(entry.title + ':' + entry.link);
      entry.img = getImage(entry);
      data.push(entry);  

   })
  })
            $scope.onSlideMove = (dataId) => {
                let timer = setTimeout(()=> {
                    $scope.data = [];
                    $scope.loadData(dataId);
                }, 200); 
            };


            $scope.loadData = (dataId) => {
                            $scope.currentIndex = dataId.index;
              if(window.localStorage.getItem(dataId.index) !== null ) {
                         // window.localStorage[dataId.index] = JSON.stringify($scope.data[dataId.index]);
                                               
                          $scope.data.map((data, i) => {
                             if( i == dataId.index) {
                                $scope.$apply( () => {
                                         $scope.data[dataId.index] = JSON.parse(window.localStorage.getItem(dataId.index));        
                                });
                             } else {
                                $scope.data[i] = [];
                             }
                          })
              }
                
              fetch($scope.corsProxy + $scope.tabs[dataId.index].url + $scope.apiKey + $scope.count).then((res)=> res.json()).then((result) =>{
                 
              


                 //console.log(feed.title);
                 var data = [];
                 let { items = [] } = result;
                 items.forEach(function( entry, i) {
                // console.log(entry.title + ':' + entry.link);
                     entry.img = getImage(entry.content, result.feed.image);
                     data.push(entry);
                 
                
                 })
                 $scope.$apply( () => {
                    $scope.data[dataId.index]=data; 

                 })
                 if($scope.data[dataId.index]) {

                  window.localStorage.setItem(dataId.index, JSON.stringify($scope.data[dataId.index]));
              
                 }
                 //    setTimeout(()=> {
                 //   $scope.data[dataId.index]=data;
                 // }, 1500  )
                 // window.localStorage['india']=angular.toJson($scope.india);
               })                   
            }






$scope.sharenews=function(play,subject,link){
 $cordovaSocialSharing
    .share(play, 'mesage','https://lh3.googleusercontent.com/CLlK_q4Z2rcCFD6MtnEO8ufvl6SIvbGcfPkPb-gRfRNv9XInwYZgZLLXKZRgpF9fzw=w300-rw', link) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
}

    $scope.callAtTimeout = function() {
        
       
   
 $ionicPlatform.ready(function() {

    if( ionic.Platform.isAndroid() )  { 

   admobid = { // for Android
      banner: 'ca-app-pub-4160184650581064/7164351033' // Change this to your Ad Unit Id for banner...
   };



   if(window.admob) 
      AdMob.createBanner( {
         adId:admobid.banner, 
         position:AdMob.AD_POSITION.BOTTOM_CENTER, 
         autoShow:true
      } );
}

});
}


$timeout( function(){
    $scope.callAtTimeout(); 
}, 7000);



setTimeout(function(){

$scope.$apply(function(){

    

$scope.dclass='card-5';
})

},2000)





$scope.viewnews=function(link)
{
window.open(link, '_blank', 'location=no','hardwareback=no','clearcache=yes');
    }
    $scope.init = function() {


        try 
        {



$scope.data.india=angular.fromJson(window.localStorage['india']);           
           
$scope.data.hindunews=angular.fromJson(window.localStorage['hindunews']);

$('#yourElement').animateCss('rollIn');
        

        }

        catch(e)
        {

        }
        //$http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0","num":"40", "q": "http://feeds.feedburner.com/dinamalar/Front_page_news" } })


try
{

parser.parseURL(CORS_PROXY + 'https://www.news18.com/rss/south-cinema.xml', function(err, feed) {
  console.log(feed.title);
  var data = [];
  feed.items.forEach(function(entry) {
    // console.log(entry.title + ':' + entry.link);
      entry.img = getImage(entry);
      data.push(entry);  
    
  })
  $scope.data.india=data;
  window.localStorage['india']=angular.toJson($scope.india);
})

parser.parseURL(CORS_PROXY + 'http://cinema.dinamalar.com/rss.php', function(err, feed) {
  console.log(feed.title);
  var data = [];
  feed.items.forEach(function(entry) {
    // console.log(entry.title + ':' + entry.link);
      entry.img = getImage(entry);
      data.push(entry);  
    
  })
    $scope.data.tamil=data;
    window.localStorage['con']=angular.toJson($scope.con);
})

parser.parseURL(CORS_PROXY + 'http://feeds.feedburner.com/Vikatan_India_News', function(err, feed) {
  console.log(feed.title);
  var data = [];
  feed.items.forEach(function(entry) {
    // console.log(entry.title + ':' + entry.link);
      entry.img = getImage(entry);
      data.push(entry);  
    
  })
    $scope.data.hindunews=data;
    window.localStorage['hindunews']=angular.toJson($scope.con);
})


        }
        catch(e)
        {
            
        }


    }
// $scope.init();







});