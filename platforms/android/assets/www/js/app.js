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
  

        $scope.pageCount = 1;
        $scope.loadMore = () => {
            $scope.pageCount = Number($scope.pageCount) + 1;
        } 

 // $scope.checkStatus = (currentIndex) => {
 //  return $scope.count <= currentIndex
 // }
  let parser = new RSSParser();
  $scope.entries = [];
  $scope.api = 'https://agaramnews.herokuapp.com?url=';
  $scope.pagination = '&page=0count=20';
  $scope.apiKey = '&api_key=hpi0ghvdfyy5xbbiwuruga2i6p49cnf0jilgt3dg';
  $scope.count = '&count=100';
  $scope.corsProxy = "https://api.rss2json.com/v1/api.json?rss_url=";
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  $scope.currentIndex = 1;
  $scope.currentItems = [];
  $scope.tabs = [
    {
        name: 'India',
        url: 'https://www.news18.com/rss/india.xml',
        icon: '',
        color: 'purple',
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
        name: 'BBC Music',
        url: 'http://www.bbc.co.uk/music/genres/classical/reviews.rss',
        icon: '',
        color: '#581845',
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
        url: 'https://www.huffpost.com/section/business/feed',
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
        name: '',
        url: 'https://www.news18.com/rss/movies.xml',
        icon: '',
        color: 'grey',
        text: 'white'
    }
  ];
          
            $scope.onSlideMove = (dataId) => {
                  //count = 0;
                  $scope.pageCount = 1;
                  $scope.loadData(dataId);  
            };


            $scope.loadData = (dataId) => {
                            $scope.currentIndex = dataId.index;
              if(window.localStorage.getItem(dataId.index) !== null ) {
                         // window.localStorage[dataId.index] = JSON.stringify($scope.data[dataId.index]);
                             $scope.data[dataId.index] = JSON.parse(window.localStorage.getItem(dataId.index));                             
                          // $scope.data.map((data, i) => {
                          //    if( i == dataId.index) {
                          //       $scope.$apply( () => {
                          //          $scope.data[dataId.index] = JSON.parse(window.localStorage.getItem(dataId.index));        
                          //       });
                          //    } else {
                          //       $scope.data[i] = [];
                          //    }
                          // })
              }


  
              fetch($scope.api + $scope.tabs[dataId.index].url + $scope.pagination).then((res)=> res.json()).then((result) =>{
                 
              


                 //console.log(feed.title);
                 var data = [];
                 let items  = result.rss.channel.item;
                 items.forEach(function( entry, i) {
                // console.log(entry.title + ':' + entry.link);
                     entry.img = getImage(entry.description._cdata = entry.description._cdata);
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
try {

   $scope.data = [];
} catch(e) {

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










$scope.viewnews=function(link)
{
    window.open(link, '_blank', 'location=no','hardwareback=no','clearcache=yes');
}
// $scope.init();







});
app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                
            });
        }
    };
});
