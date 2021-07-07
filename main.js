function preload() {}
function setup(){
 canvas = createCanvas(450, 340);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
}
function draw() {
    image(video, 0, 0, 450, 340);
}