const app = angular.module('snippetApp', []);

app.controller('SnippetController', ['$scope', function($scope) {
  // Initialize scope variables
  $scope.snippets = [];
  $scope.selectedSnippet = null;
  $scope.newSnippet = {};

  // Function to add or update a snippet
  $scope.addSnippet = function() {
    if ($scope.selectedSnippet) {
      // Update existing snippet
      Object.assign($scope.selectedSnippet, $scope.newSnippet);
    } else {
      // Add new snippet
      $scope.snippets.push(angular.copy($scope.newSnippet));
    }
    // Reset newSnippet and selectedSnippet
    $scope.newSnippet = {};
    $scope.selectedSnippet = null;
  };

  // Function to select a snippet for editing
  $scope.selectSnippet = function(snippet) {
    $scope.selectedSnippet = snippet;
    $scope.newSnippet = angular.copy(snippet);
  };

  // Function to delete a snippet
  $scope.deleteSnippet = function(snippet) {
    const index = $scope.snippets.indexOf(snippet);
    if (index > -1) {
      $scope.snippets.splice(index, 1);
    }
    // Reset selectedSnippet and newSnippet
    $scope.selectedSnippet = null;
    $scope.newSnippet = {};
  };
}]);
