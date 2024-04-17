// Question 17: Shrinking Guest List:
// Unfortunately, your new table won't arrive in time, and you can only invite two guests.
var guestlist = ['kamran tessori', 'daniyal nagori', 'zia khan'];
var absentguest = 'kamran tessori';
var newguest = 'naeem alam';
// replacing newguest with absent one
guestlist[0] = newguest;
// adding 3 more guests
guestlist.unshift('zuckerburg');
guestlist.splice(2, 0, 'elon musk');
guestlist.push('sam altman');
// removing guests that are extra from 2
console.log('sorry we can not arrange big table , so only two guests will be invited.');
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry mr. ".concat(removeguest, ", you are not invited for dinner."));
}
// still invited two guests
for (var i = 0; i < guestlist.length; i++) {
    console.log('\ndear mr. ' + guestlist[i] + ', you are still invited for dinner.thank you!\n');
}
// making guestlist empty
guestlist.splice(0, 2);
console.log(guestlist);
