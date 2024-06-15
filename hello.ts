interface Circle{
    kind : 'circle'
    radius : number
}

interface Rectangle {
    kind : 'rectangle'
    length : number
    width : number
}

type Figure = Circle | Rectangle

function area(fig : Figure) : number {
    if (fig.kind === "circle"){
        return (fig.radius ** 2) * 3.14
    }
    else {
        return fig.length * fig.width
    }
}

let fig : Figure = {kind : "circle", radius : 5}
console.log(area(fig))
fig = {kind : 'rectangle', length : 10, width : 5}
console.log(area(fig))

fig = {kind : "circle", radius : 5}
console.log(area(fig))