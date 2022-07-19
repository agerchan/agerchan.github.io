function choosePic() {
    var arr = ["blue.html", "orange.html", "pink.html"];
    arr = arr.concat("https://docs.google.com/document/d/1QgVxcNBhZoqCYD_LJ5PaclocXRSqLu-CCn2pJVTMRF0/edit?usp=sharing")

    for (var i = 0; i <= 10; i++) {
        arr = arr.concat("love_not_found.html");
    };
    var random = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("letter").href = random;
}