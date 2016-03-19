Meteor.publish("horses", function(recordId){
  if(recordId){
    return Patients.findOne({
      '_id': recordId,
      'animal.species': "Horse"
    });
  }else{
    return Patients.find({'animal.species': "Horse"})
  }
});
