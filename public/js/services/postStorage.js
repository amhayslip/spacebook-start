angular.module('spacebook')
  .factory('postStorage', ['$http', function ($http) {
    var STORAGE_ID = 'spacebook';

    var store = {
      posts: [], 

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (posts) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
      },

      get: function () {
        return angular.copy(store._getFromLocalStorage(), store.posts);
      },

      createPost: function (post) {
        return $http.post('/posts', post)
        .success(function(data){
          store.posts.push(data);
        });
      },

      // insertPost: function (post) {
      //   store.posts.push(post);

      //   store._saveToLocalStorage(store.posts);
      // },

      insertComment: function (comment, postId) {
        store.posts[postId].comments.push(comment);

        store._saveToLocalStorage(store.posts);
      },

      delete: function (post) {
        store.posts.splice(store.posts.indexOf(post), 1);

        store._saveToLocalStorage(store.posts);
      }
    };

    return store;
  }]);
