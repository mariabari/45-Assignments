// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guestlist = ['kamran tessori', 'daniyal nagori', 'zia khan'];
var absentguest = 'kamran tessori';
var newguest = 'naeem alam';
guestlist[0] = newguest;
for (var i = 0; i < guestlist.length; i++) {
    console.log('Dear Mr.' + guestlist[i] + ',it is our pleasure to invite in our party.thank you!');
}
console.log("\n".concat(absentguest, " is not coming to party .\n"));
