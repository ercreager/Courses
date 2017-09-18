draw = function() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);
    fill(148, 33, 33);

if(mouseIsPressed) {
    fill(204, 29, 204);
    text("Javascript", 39, 200); 
}
else{
    textSize(20);
    text("What programming language is this?", 39, 200);
}

};
