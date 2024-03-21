// Album: Write a function called make_album() that builds a object a music album. THe function should take in
// an artist name and an album title, and it should return a object containing these two pieces of
// information. use the function to make three dictionaries representing different album. print each
// return value to show that objects are storing the album information correctl. add an optional parameter
//to make_album() that allows you to store the number of tracks on an album. if the calling line includes a
// value for the number of tracks, add that value to the album's object. make at least one new function call
// that includes the number of tracks on an album.

function make_album(artist: string, title:string, tracks?:number) {
    const Album:{artist: string, title:string, tracks?:number} = {

    artist :  artist,
    title : title,
     
    }

    if(tracks !== undefined){
        Album.tracks = tracks;
    }

    return Album;
}

const album1 = make_album('Artist 1', 'Album Title 1');
console.log(album1);

const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);

const album3 = make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);
