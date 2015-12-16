angular.module('spacebook')
  .controller('PostsCtrl', [
    '$scope', 
    function($scope){
      $scope.posts = [];

      $scope.addPost = function (post) {
        var newPost = {
          text: $scope.text,
          user: $scope.user,
        }

        if (!newPost.text) {
          return;
        }

        $scope.posts.push(newPost);

        $scope.text = '';
        $scope.user = '';
      };
  }])