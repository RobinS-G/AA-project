// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Nombre: 100,
    Random_Seed: 0,
    Rotation: 0,
    Red:255,
    Green: 255,
    Blue:255,
    Transparency: 0,
    Download_Image: () => save(),
}
gui.add(params, "Nombre", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Rotation", 0, 180, 1)
gui.add(params, "Red", 0, 255, 1)
gui.add(params, "Green", 0, 255, 1)
gui.add(params, "Blue", 0, 255, 1)
gui.add(params, "Transparency", 0, 255, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background("white")
    translate(width/2, height/2)

    fill(params.Red, params.Green, params.Blue, params.Transparency)
    rotate(params.Rotation)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Nombre) {
        let k=random(10,240)
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