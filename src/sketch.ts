// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Nombre: 100,
    Random_Seed: 0,
    Rotation: 0,
    Download_Image: () => save(),
}
gui.add(params, "Nombre", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Rotation", 0, 180, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background("white")
    translate(width/2, height/2)
    fill(255, 255, 255, 0)
    rotate(params.Rotation)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Nombre) {
        let k=random(10,240)
        push()
            rotate(angle)
            if(k<40){
            rect(k, 0, random(1,25), random(1,3))
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
