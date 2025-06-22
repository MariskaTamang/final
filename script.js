(function () {
  var names = ["John", "Paul", "Jen", "Jason", "Frank", "Larry", "Joseph", "Paula", "George", "Jimmy"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var secondLetter = names[i].charAt(1).toLowerCase();

    if (firstLetter === 'j' && secondLetter === 's') {
      goodbyeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();