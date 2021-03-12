# AA-project

http://dada.compart-bremen.de/item/artwork/1227

https://robins-g.github.io/AA-project/

Pseudo-code

```ts
function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    background("white")
    translate(width/2, height/2)
    for (let angle = 0; angle < TWO_PI; angle += TWO_PI / params.Nombre) {
            push()
              rotate(angle) //thanks to rotate I should be able to rotate the rectangles so it matches their position from the center
              rect(0, random(20,255) , random(10,75),  random(5,20))
            pop()
        }
}
```
