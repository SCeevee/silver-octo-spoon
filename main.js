difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(500, 500);
    canvas.position(550, 125);
    poseNet=ml5.poseNet(VIDEO, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#6C91C2");
    textSize(difference);
    fill('#FFE787');
    text("Shreyan", 50, 400);
    stroke('#F90093');
   }

function modelLoaded(){
    console.log("PoseNet ready");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX); 
        
        
    }
}