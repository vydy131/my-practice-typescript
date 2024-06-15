function area(fig) {
    if (fig.kind === "circle") {
        return (Math.pow(fig.radius, 2)) * 3.14;
    }
    else {
        return fig.length * fig.width;
    }
}
var fig = { kind: "circle", radius: 5 };
console.log(area(fig));
fig = { kind: 'rectangle', length: 10, width: 5 };
console.log(area(fig));
fig = { kind: "circle", radius: 5 };
console.log(area(fig));
