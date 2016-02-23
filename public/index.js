var app = angular.module("ben", ['ngAnimate']);

app.controller("MyController", function($scope) {
  $scope.posts = [];

  $scope.togglePostForm = function() {
    $scope.showPostForm = !$scope.showPostForm;
  }

  $scope.addPost = function() {
    var post = {
      title: $scope.title,
      author: $scope.author,
      image: $scope.image,
      description: $scope.description,
      // timestamp: moment().calendar(),
      timestamp: new Date,
      comments: [],
      rating: 0,
      showComments: false,
      showCommentForm: false
    }

    $scope.posts.push(post);
    $scope.showPostForm = !$scope.showPostForm;

    $scope.title = null;
    $scope.author = null;
    $scope.image = null;
    $scope.description = null
  }

  $scope.toggleComments = function(post) {
    post.showComments = !post.showComments;
  }

  $scope.toggleCommentForm = function(post) {
    post.showCommentForm = !post.showCommentForm;
  }

  $scope.addComment = function(post, form) {
    var comment = {
      author: post.commentAuthor,
      comment: post.commentText
    };

    post.comments.push(comment);
    post.showCommentForm = !post.showCommentForm;

    post.commentAuthor = "";
    post.commentText = "";
    form.$setPristine();
  }

  $scope.voteUp = function(post) {
    post.rating++;
  }

  $scope.voteDown = function(post) {
    post.rating--;
  }

  $scope.sampleData = function() {
    var firstPost = {
      title: "This is the first post",
      author: "Ben",
      image: "http://rack.1.mshcdn.com/media/ZgkyMDE0LzA5LzE3LzIwL2J1bm55Ljk0MTYxLmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/2986208c/caf/bunny.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      // timestamp: moment().calendar(),
      timestamp: new Date,
      comments: [],
      rating: 2,
      showComments: false,
      showCommentForm: false
    }
    $scope.posts.push(firstPost);

    var secondPost = {
      title: "This is the second post",
      author: "Ben",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ramphastos_toco_-Birdworld,_Farnham,_Surrey,_England-8a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      // timestamp: moment().calendar(),
      timestamp: new Date,
      comments: [],
      rating: 5,
      showComments: false,
      showCommentForm: false
    }
    $scope.posts.push(secondPost);

    var thirdPost = {
      title: "This is the third post",
      author: "Ben",
      image: "http://weknowyourdreamz.com/images/monkey/monkey-02.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      // timestamp: moment().calendar(),
      timestamp: new Date,
      comments: [],
      rating: -3,
      showComments: false,
      showCommentForm: false
    }
    $scope.posts.push(thirdPost);

    $scope.posts[0]["comments"].push({author: "Ben", comment: "Here is the first comment."});
    $scope.posts[0]["comments"].push({author: "Ben", comment: "Here is the second comment."});
    $scope.posts[0]["comments"].push({author: "Ben", comment: "Here is the third comment."});
    $scope.posts[0]["comments"].push({author: "Ben", comment: "Here is the fourth comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the first comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the second comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the third comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the fourth comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the fifth comment."});
    $scope.posts[1]["comments"].push({author: "Ben", comment: "Here is the sixth comment."});
    $scope.posts[2]["comments"].push({author: "Ben", comment: "Here is the first comment."});
    $scope.posts[2]["comments"].push({author: "Ben", comment: "Here is the second comment."});
  }
});
