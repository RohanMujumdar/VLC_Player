// alert("JS Added");

const speedUp=document.querySelector("#speedUp");
const speedDown=document.querySelector("#speedDown");
const volumeUp=document.querySelector("#volumeUp");
const volumeDown=document.querySelector("#volumeDown");
const videoBtn=document.querySelector("#videoBtn");
const videoInput=document.querySelector(".videoInput");
const videoPlayer=document.querySelector("#videoPlayer");
const toast=document.querySelector("#toast-btn");
const play=document.querySelector("#play");
const pause=document.querySelector("#pause");
const fullscreen=document.querySelector("#full-screen");


/************Menu-bar Functions****************/

const volumeUpHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        console.log("No Video Present");
        return;
    }
    else
    {
        if(videoElement.volume==1)
        {
            showToast("Max Volume Reached");
        }
        if(videoElement.volume<1)
        {
            videoElement.volume=videoElement.volume+0.1;
            const percentage=videoElement.volume*100+"%";
            showToast(percentage);
        }
        else
        {
            return;
        }
    }
}

const volumeDownHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        console.log("No Video Present");
        return;
    }
    else
    {
        if(videoElement.volume>0)
        {
            videoElement.volume=videoElement.volume-0.1;
            const percentage=videoElement.volume*100+"%";
            showToast(percentage);
        }
        else
        {
            return;
        }
    }
}

const speedUpHandler=()=>{
    // video -> Speed Increase
    // Where is the video element
    // how much you want to increase
    // which property you will need to increase

    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        console.log("No Video Present");
        return;
    }
    else
    {
        if(videoElement.playbackRate<1.5)
        {
            videoElement.playbackRate=videoElement.playbackRate+0.5;
            showToast(videoElement.playbackRate+"X");
        }
        else
        {
            return;
        }
    }
}

const speedDownHandler =()=>{
    // video -> Speed Increase
    // Where is the video element
    // how much you want to decrease
    // which property you will need to decrease
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        console.log("No Video Present");
        return;
    }
    else
    {
        if(videoElement.playbackRate>0)
        {
            videoElement.playbackRate=videoElement.playbackRate-0.5;
            showToast(videoElement.playbackRate+"X");
        }
        else
        {
            return;
        }
    }
}

const inputHandler=()=>{

    console.log("select file");
    videoInput.click();
}

/************Footer Functions****************/
const playInputHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        return;
    }
    else
    {
        videoElement.play();
    }
}

const pauseInputHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        return;
    }
    else
    {
        videoElement.pause();
    }
}

const fullscreenInputHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null)
    {
        return;
    }
    else
    {
        videoElement.requestFullscreen();
    }
}

//After input selection, browser returns and object array. We do not need the entire array but just the 
// files where our desired data is stores. Hence we use obj.target.files.
const acceptInputHandler = (obj) => {

    console.log("file selected");
    // to get file selected
    const selectedVideo=obj.target.files[0];

    console.log("obj "+selectedVideo);

    // converting object into Base64 
    const link=URL.createObjectURL(selectedVideo);
    const videoElement=document.createElement("video");
    videoElement.src=link;
    videoElement.setAttribute("class","video");
    videoElement.controls="true";
    videoElement.play();
    // check if there are any video already present
    if (videoPlayer.children.length > 0) {
        // if present -> remove it 
        videoPlayer.removeChild(videoPlayer.children[0]);
    }
    // now after the above check -> add the videoElement
    videoPlayer.appendChild(videoElement);
    // videoElement.addEventListener("loadedmetadata",functio(){
    //     //Your time will be here
    // })
}


function showToast(message)
{
    toast.style.display="block";
    toast.textContent=message;
    setTimeout(()=>{
        toast.style.display="none";
    },3000);
}
//For selecting the input
videoBtn.addEventListener("click",inputHandler);

//After the input is selected there is a change in the Event listener to notify that input has been selected
videoInput.addEventListener("change",acceptInputHandler)


/************Volume and Speed****************/
speedUp.addEventListener("click",speedUpHandler);

speedDown.addEventListener("click",speedDownHandler);

volumeUp.addEventListener("click",volumeUpHandler);

volumeDown.addEventListener("click",volumeDownHandler);


/************Footer Controls****************/
play.addEventListener("click",playInputHandler);
pause.addEventListener("click",pauseInputHandler);
fullscreen.addEventListener("click",fullscreenInputHandler);
