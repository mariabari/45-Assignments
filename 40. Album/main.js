"use strict";
// maria bari
// Album
function make_album(artist_name, album_title) {
    let newAlbum = {
        name_Of_Artist: artist_name,
        title_Of_Album: album_title
    };
    return newAlbum;
}
let album1 = make_album("Beach Boys", "Pet Sounds");
let album2 = make_album("Beatles", "Revolver");
let album3 = make_album("The Smiths", "The Queen is Dead");
console.log(album1);
console.log(album2);
console.log(album3);
