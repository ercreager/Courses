var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "Lassie", 
        review: "Good movie"
    }
];

fill(84, 140, 209);
textAlign(CENTER, CENTER);
for(var i = 0; i < movies.length; i ++) {
    textSize(20);
    text(movies[i].title, 200, 50 + i*60);
    textSize(10); 
    text(movies[i].review, 200, 70+ i*60); 
}
