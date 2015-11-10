///// THIS IS PSEUDOCODE
$(document).ready(function(){
    
/// Basic program outline

// Use drop down to rate the food you're looking in the picture

// After rating, move to the next picutre
// If you skip, mark it a zero dude


// PseudoCode

// list of foods = file locations as strings
var foods = ['images/food1.jpg', 'images/food2.jpg'];

// list of scores (this helps us know what they've scored)
var scores = [];

// start at first image (position 0)
var position = 0;

// if they hit skip, put a 0 in our scores array
$(skip).click(function(){
    // update scores[position] = 0;
// change the image
img.src = foods[position+1];
// move to the next image
position = position + 1;
});

// If they change the dropdown, put whatever value they chose in the scores array
$(select thing).change(function(){
    // update scores[position] with the .val() they chose
// change the image
img.src = foods[position+1];
// move to the next image
position = position + 1;
});

});
```
Channel Info
About This Channel
1 Pinned Item
14/25 Members
