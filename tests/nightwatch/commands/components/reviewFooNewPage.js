exports.command = function() {
  this
    .verify.elementPresent("#fooNewPage")
    .verify.elementPresent("#fooTitleInput")
    .verify.elementPresent("#fooDescriptionInput")
    .verify.elementPresent("#fooUrlInput")
    .verify.elementPresent("#newFooButton")
  return this;
};
