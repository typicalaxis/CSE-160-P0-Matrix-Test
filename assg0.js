// DrawRectangle.js
function main() {
    // Retrieve <canvas> element 
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG 
    var ctx = canvas.getContext('2d');
     
    // Draw a black rectangle over entire canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
    v1 = new Vector3([2.25,2.25,0.0]);
    drawVector(v1, "red");
    
}
function drawVector(v, color) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var cord = v.elements

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.lineTo((canvas.width/2) + (cord[0]*20), (canvas.height/2) + (cord[1]*20));
    ctx.stroke();
}
function handleDrawEvent(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    // Draw a black rectangle over entire canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    var x1 = document.getElementById("v1x").value;
    var y1 = document.getElementById("v1y").value;
    var v1 = new Vector3([x1,y1,0]);

    var x2 = document.getElementById("v2x").value;
    var y2 = document.getElementById("v2y").value;
    var v2 = new Vector3([x2,y2,0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");
}
function handleDrawOperationEvent(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    // Draw a black rectangle over entire canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    var x1 = document.getElementById("v1x").value;
    var y1 = document.getElementById("v1y").value;
    var v1 = new Vector3([x1,y1,0]);

    var x2 = document.getElementById("v2x").value;
    var y2 = document.getElementById("v2y").value;
    var v2 = new Vector3([x2,y2,0]);

    drawVector(v1, "red");
    drawVector(v2, "blue");

    var op = document.getElementById("ops").value;
    if(op === "add"){
        var v3 = new Vector3([0,0,0]);
        v3.set(v1);
        v3.add(v2);
        drawVector(v3, "green");
    }
    else if(op === "sub"){
        var v3 = new Vector3([0,0,0]);
        v3.set(v1);
        v3.sub(v2);
        drawVector(v3, "green");
    }
    else if(op === "mul"){
        var s = document.getElementById("scalar").value;
        var v3 = new Vector3([0,0,0]);
        v3.set(v1);
        v3.mul(s);
        drawVector(v3, "green");
        var v4 = new Vector3([0,0,0]);
        v4.set(v2);
        v4.mul(s);
        drawVector(v4, "green");
    }
    else if(op === "div"){
        var s = document.getElementById("scalar").value;
        var v3 = new Vector3([0,0,0]);
        v3.set(v1);
        v3.div(s);
        drawVector(v3, "green");
        var v4 = new Vector3([0,0,0]);
        v4.set(v2);
        v4.div(s);
        drawVector(v4, "green");
    }
    else if(op === "norm"){
        v1.normalize();
        drawVector(v1, "green");
        v2.normalize();
        drawVector(v2, "green");
    }
    else if(op === "mag"){
        let m1 = v1.magnitude();
        let m2 = v2.magnitude();
        console.log("magnitude v1:"+ m1);
        console.log("magnitude v2:"+ m2);
    }
    else if(op === "dot"){
        this.angleBetween(v1,v2);
    }
    else if(op === "area"){
        this.areaTriangle(v1,v2);
    }

}
function angleBetween(v1, v2){
    var m1 = v1.magnitude();
    var m2 = v2.magnitude();
    var dot = Vector3.dot(v1,v2);
    let t = Math.acos(dot/(m1*m2));
    console.log("Angle between:"+t);
}
function areaTriangle(v1, v2){
    var v3 = Vector3.cross(v1,v2);
    var area = v3.magnitude();
    console.log("Area:"+area);
}