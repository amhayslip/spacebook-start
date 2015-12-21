angular.module('spacebook')
  .controller('PostsCtrl', [
    '$scope',
    'postStorage', 
    function($scope, postStorage){
      $scope.posts = postStorage.posts;

      $scope.addPost = function (post) {
        var newPost = {
          text: $scope.text,
          user: $scope.user,
          comments: []
        }

        if (!newPost.text) {
          return;
        }

        postStorage.insertPost(newPost);

        // postStorage.createPost(post);

        $scope.text = '';
        $scope.user = '';
      };

      $scope.removePost = function (post) {
        postStorage.delete(post);
      };
  }])
