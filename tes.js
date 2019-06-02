(function () {
    var video = document.getElementById("video"),
        vendorUrl = window.url || window.webkitUrl;
        
    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
                         
    //Menangkap Video
    navigator.getMedia({
        video: true,
        audia: false
    }, function(stream) {
        video.src = vendorUrl.createObjectURL(stream);
        video.play();
    }, function(error) {
        //An error occured
        //error.code
    });
})();
