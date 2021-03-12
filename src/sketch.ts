// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Nombre: 100,
    Random_Seed: 0,
    P: 0.7,
    Download_Image: () => save(),
}
gui.add(params, "Nombre", 0, 200, 1)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "P", 0, 1, 0.001)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background("white")
    translate(width/2, height/2)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Nombre) {
        let k=random(20,250)
        push()
            rotate(angle)
            if(k<50){
            rect(k, 0, random(1,25), random(1,5))
            }
            else rect(k, 0, random(15,50), random(5,20))
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
