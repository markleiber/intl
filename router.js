I18NConf.configure({
  defaultLanguage: 'en',
  languages: [Meteor.settings.public.i18nLanguageCode],
  autoConfLanguage: true
});

Router.configure({
  layoutTemplate: 'layout',
  i18n: {
    compulsoryLangCode: false,
    langCodeForDefaultLanguage: false,
    addLangCode: function(url){
      return url;
    },
    langCodeAction: function(path){
      /* by default Router.setLanguage would be called and we do not want that */
    }
  }
});

Router.route('/', function() {
  this.render('home');
}, {
  name: 'home'
});

Router.route('settings', function() {
  this.render('settings');
}, {
  i18n: {
    languages: {
      es: { path: '/ajustes' },
      fr: { path: '/parametres'}
    }
  }
});

