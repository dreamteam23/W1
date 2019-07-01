function.setup {
    let myCanvas = createCanvas(300,300);
    myCanvas.parent("right_block"); 
}


function draw() {
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);   
    
}