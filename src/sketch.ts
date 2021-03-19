// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number: 100,
    Random_Seed: 0,
    Rotation: 0,
    Plain_Gradient: 0,
    Red1:255,
    Green1: 255,
    Blue1:255,
    Transparency1: 0,
    Red2:255,
    Green2: 255,
    Blue2:255,
    Transparency2: 0,

    Download_Image: () => save(),
}
gui.add(params, "Number", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Rotation", 0, 180, 1)
gui.add(params, "Plain_Gradient", 0, 1, 1)
gui.add(params, "Red1", 0, 255, 1)
gui.add(params, "Green1", 0, 255, 1)
gui.add(params, "Blue1", 0, 255, 1)
gui.add(params, "Transparency1", 0, 255, 1)
gui.add(params, "Red2", 0, 255, 1)
gui.add(params, "Green2", 0, 255, 1)
gui.add(params, "Blue2", 0, 255, 1)
gui.add(params, "Transparency2", 0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background("white")
    translate(width/2, height/2)
    if(params.Plain_Gradient==0){
        fill(params.Red1, params.Green1, params.Blue1, params.Transparency1)
    }
    let t=0
    rotate(params.Rotation)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Number) {
        let k=random(10,240)
        if (params.Plain_Gradient==1){
            let color1=color(params.Red1, params.Green1, params.Blue1, params.Transparency1)
            let color2=color(params.Red2, params.Green2, params.Blue2, params.Transparency2)
            fill(lerpColor(color1,color2,t))
            t+=1/params.Number
        }
        const f = k / 240
        const min_w = lerp(1, 15, f)
        const max_w = lerp(15, 100, f)
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