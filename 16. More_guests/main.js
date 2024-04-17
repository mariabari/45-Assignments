// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guestlist = ['kamran tessori', 'daniyal nagori', 'zia khan'];
var absentguest = 'kamran tessori';
var newguest = 'ameen alam';
guestlist[0] = newguest;
console.log('good news ! we have arranged a big table so we are inviting 3 more guests.');
guestlist.unshift('zuckerburg');
guestlist.splice(2, 0, 'elon musk');
guestlist.push('sam altman');
for (var i = 0; i < guestlist.length; i++) {
    console.log('dear mr. ' + guestlist[i] + ',it is our pleasure to invite you in our party.thank you!');
}
