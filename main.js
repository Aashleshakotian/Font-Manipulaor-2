function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is initialised");
}
function draw()
{
    background('#FF69B4');
}
function gotPoses()
{
    if (results.length > 0) {
        console.log(results);
    }
}