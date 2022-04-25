noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
    document.getElementById("font").innerHTML= "Width and Height of the font will be = " + difference +"px";
    fill("#F90093");
    stroke("#F90093");
  text(noseX, noseY, difference);
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function sizeText(){
    text('word', 10, 30);
    fill(0, 102, 153, 51);
    text('word', 10, 90);
    innerWidth('word'+1)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWristX ="+ rightWristX + "difference ="+ difference);
    } 
}