Router.route( '/list/veterinarians/', {
  name: 'veterinariansListPage',
  template: 'practitionersListPage',
  data: function () {
    return Practitioners.find();
  }
});

Router.route( '/list/jockeys/', {
  name: 'jockeysListPage',
  template: 'relatedPersonsListPage',
  data: function () {
    return RelatedPersons.find();
  }
});

Router.route( '/list/owners/', {
  name: 'ownersListPage',
  template: 'relatedPersonsListPage',
  data: function () {
    return RelatedPersons.find();
  }
});

Router.route( '/list/horses/', {
  name: 'horsesListPage',
  template: 'patientsListPage',
  data: function () {
    return Patients.find();
  }
});
