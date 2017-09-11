angular.module('directivePractice').controller('lessonCtrl', function ($scope, lessonService){
$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
$scope.announceDay = function(lesson, day){
    console.log(lesson);
    if (!day){
        alert(lesson + ' is not currently on the schedule.');
        return;
    }
    alert(lesson + ' is active on ' + day + '.');
};
$scope.removeDay = function(lesson){
    console.log(lesson);
    $scope.lessons.splice($scope.lessons.indexOf(lesson), 1);
}
})