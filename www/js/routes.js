app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/search',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.media', {
    url: '/media',
    views: {
      'tab3': {
        templateUrl: 'templates/media.html',
        controller: 'mediaCtrl'
      }
    }
  })

  .state('tabsController.activity', {
    url: '/activity',
    views: {
      'activity': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/chat',
    views: {
      'chat': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })



  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    abstract:true
  })

  .state('profile.viewProfile', {
    url: '/view_profile',
    views: {
      'profilePages': {
        templateUrl: 'templates/viewProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('profile.editProfile', {
    url: '/edit_profile',
    views: {
      'profilePages': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('profile.changePassword', {
    url: '/change_password',
    views: {
      'profilePages': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      }
    }
  })

  .state('profile.settings', {
    url: '/settings',
    views: {
      'profilePages': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })


  .state('posts', {
    url: '/posts',
    templateUrl: 'templates/post.html',
    controller: 'postCtrl'
  })



$urlRouterProvider.otherwise('/tabs/home')



});
