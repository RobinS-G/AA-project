var gui = new dat.GUI();
var params = {
    Number: 100,
    Random_Seed: 0,
    Rotation: 0,
    Plain_Gradient: 0,
    Red1: 255,
    Green1: 255,
    Blue1: 255,
    Transparency1: 0,
    Red2: 255,
    Green2: 255,
    Blue2: 255,
    Transparency2: 0,
    Download_Image: function () { return save(); },
};
gui.add(params, "Number", 0, 200, 1);
gui.add(params, "Random_Seed", 0, 100, 1);
gui.add(params, "Rotation", 0, 180, 1);
gui.add(params, "Plain_Gradient", 0, 1, 1);
gui.add(params, "Red1", 0, 255, 1);
gui.add(params, "Green1", 0, 255, 1);
gui.add(params, "Blue1", 0, 255, 1);
gui.add(params, "Transparency1", 0, 255, 1);
gui.add(params, "Red2", 0, 255, 1);
gui.add(params, "Green2", 0, 255, 1);
gui.add(params, "Blue2", 0, 255, 1);
gui.add(params, "Transparency2", 0, 255, 1);
gui.add(params, "Download_Image");
function draw() {
    randomSeed(params.Random_Seed);
    rectMode(CENTER);
    background("white");
    translate(width / 2, height / 2);
    if (params.Plain_Gradient == 0) {
        fill(params.Red1, params.Green1, params.Blue1, params.Transparency1);
    }
    var t = 0;
    rotate(params.Rotation);
    for (var angle = 0; angle < TWO_PI; angle += TWO_PI / params.Number) {
        var k = random(10, 240);
        if (params.Plain_Gradient == 1) {
            var color1 = color(params.Red1, params.Green1, params.Blue1, params.Transparency1);
            var color2 = color(params.Red2, params.Green2, params.Blue2, params.Transparency2);
            fill(lerpColor(color1, color2, t));
            t += 1 / params.Number;
        }
        var f = k / 240;
        var min_w = lerp(1, 15, f);
        var max_w = lerp(15, 100, f);
        var min_h = lerp(1, 3, f);
        var max_h = lerp(5, 20, f);
        push();
        rotate(angle);
        rect(k, 0, random(min_w, max_w), random(min_h, max_h));
        pop();
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map