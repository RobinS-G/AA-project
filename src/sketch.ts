// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number: 100,
    Random_Seed: 0,
    Rotation: 0,
    Background: "#FFFFFF",
    Plain_Gradient: 0,
    Color1: "#FFFFFF",
    Transparency1: 0,
    Color2: "#FFFFFF",
    Transparency2: 0,

    Download_Image: () => save(),
}
gui.add(params, "Number", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Rotation", 0, 180, 1)
gui.addColor(params, "Background")
gui.add(params, "Plain_Gradient", 0, 1, 1)
gui.addColor(params, "Color1")
gui.add(params, "Transparency1", 0, 255, 1)
gui.addColor(params, "Color2")
gui.add(params, "Transparency2", 0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function hexToRGBA(hex, alpha) {
    hex = hex.replace('#', ''); //we get rid of the #

    let x = parseInt(hex, 16); //we convert hex to an integer

    let r = (x >> 16) & 255;
    let g = (x >> 8) & 255;
    let b = x & 255;

    return color(r, g, b, alpha);
}

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background(params.Background)
    translate(width/2, height/2)
    if(params.Plain_Gradient==0){
        fill(hexToRGBA(params.Color1, params.Transparency1))
    }
    let t=0
    rotate(params.Rotation)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Number) {
        let k=random(10,240)
        if (params.Plain_Gradient==1){
            fill(lerpColor(hexToRGBA(params.Color1, params.Transparency1),hexToRGBA(params.Color2, params.Transparency2),t))
            t+=1/params.Number
        }
        const f = k / 240
        const min_w = lerp(1, 15, f)
        const max_w = lerp(15, 90, f)
        const min_h = lerp(1, 3, f)
        const max_h = lerp(5, 20, f)
        push()
            rotate(angle)
            rect(k, 0, random(min_w, max_w), random(min_h, max_h))
        pop()
    }
}   

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}