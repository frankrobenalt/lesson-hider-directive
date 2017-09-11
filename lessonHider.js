angular.module('directivePractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
      removeDay: '&'
    },
    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();
        
    },
    link: function( scope, element, attributes ) {

      scope.getSchedule.then(function( response ) {

        
          console.log(response);
        scope.schedule = response.data;

        scope.schedule.forEach(function( scheduleDay ) {
            
          if (scheduleDay.lesson === scope.lesson) {
              scope.lessonDay = scheduleDay.weekday;
              scope.yes = true;
            element.css('text-decoration', 'line-through');
            return;
          }
        
        });
      });

        scope.click = function(){
            if (scope.yes === true){
                element.css('text-decoration', 'none');
                scope.yes = false;
            } else {
                element.css('text-decoration', 'line-through');
                scope.yes = true;
            }
        };

    }
  }

});