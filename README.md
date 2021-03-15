# AA-project

http://dada.compart-bremen.de/item/artwork/1227

https://robins-g.github.io/AA-project/

Pseudo-code
We generate a chosen number n of rectangles on the horizontal axis on a white background that we rotate at an angle within a range from 0 to 2PI with constant steps of 2PI/n rad. Depending on the distance from the center, the rectangles get smaller or wider thanks to a condition. We also need to make the rectangles transparent so we could see their overlapping.

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
