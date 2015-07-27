if (Meteor.isClient) {

  TAPi18n.setLanguage(Meteor.settings.public.i18nLanguageCode);

  Template.registerHelper("getCurrentLanguage", function(){
    return Meteor.settings.public.i18nLanguageCode;
  });

}

