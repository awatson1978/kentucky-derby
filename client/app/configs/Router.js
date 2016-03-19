
//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: 'pageNotFound',
  loadingTemplate: 'appLoading',
  yieldTemplates: {

    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'sidebar': {
      to: 'westPanel'
    }
  }
});
