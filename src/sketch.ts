// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Nombre: 100,
    Random_Seed: 0,
    Rotation: 0,
    Uni_Dégradé: 0,
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
gui.add(params, "Nombre", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Rotation", 0, 180, 1)
gui.add(params, "Uni_Dégradé", 0, 1, 1)
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
    if(params.Uni_Dégradé==0){
        fill(params.Red1, params.Green1, params.Blue1, params.Transparency1)
    }
    let t=0
    rotate(params.Rotation)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Nombre) {
        let k=random(10,240)
        if (params.Uni_Dégradé==1){
            let color1=color(params.Red1, params.Green1, params.Blue1, params.Transparency1)
            let color2=color(params.Red2, params.Green2, params.Blue2, params.Transparency2)
            fill(lerpColor(color1,color2,t))
            t+=1/params.Nombre
        }
        push()
            rotate(angle)
            if(k<40){
            rect(k, 0, random(1,20), random(1,3))
            }
            else if(k<100){
                rect(k, 0, random(7,30), random(3,10))
            }
            else rect(k, 0, random(15,70), random(5,20))
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