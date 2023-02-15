(
    function(){
        angular.module('App', []);
    })();
(function(){
    angular
        .module('App')
        .controller('mainController', mainController);
    function mainController(youtubeService){
        var vm = this;
        vm.videoListing = [];
        vm.message = "Youtube Data API with AJS";
        function showVideos(){
            youtubeService.getVideos().success(function(data){
                vm.videoListing = data.items;
            })
        }
        showVideos();
    }
})();
(function(){
    angular
        .module('App')
        .factory('youtubeService', youtubeService);
    function youtubeService($http){
        var apiKey = "AIzaSyCO_f4mE8n4Pw1R0XN3xUZO1tXUAXHuCHw",
            apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=UCWu91J5KWEj1bQhCBuGeJxw&type=video&maxResults=50&key=" + apiKey,
            youtubeFactory = {};
        youtubeFactory.getVideos = function (){
            return $http.get(apiURL)
        };
    }
})();
