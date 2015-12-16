angular.module('spacebook')
  .factory('postStorage', function () {
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

      insertPost: function (post) {
        store.posts.push(post);

        store._saveToLocalStorage(store.posts);
      },

      delete: function (post) {
        store.posts.splice(store.posts.indexOf(post), 1);

        store._saveToLocalStorage(store.posts);
      }
    };

    return store;
  });
