

function calculateadd() {
    var a = document.getElementById("text_a").value;
    var b = document.getElementById("text_b").value;
    var c = parseInt(a) + parseInt(b);
    document.getElementById("result1").value = c;
}

function calculatesub() {
    var x = document.getElementById("text_x").value;
    var y = document.getElementById("text_y").value;
    var z = parseInt(x) - parseInt(y);
    document.getElementById("result2").value = z;
}

function calculatemul() {
    var a1 = document.getElementById("text_k").value;
    var b1 = document.getElementById("text_l").value;
    var c1 = parseInt(a1) * parseInt(b1);
    document.getElementById("result3").value = c1;
}

function calculatediv() {
    var x1 = document.getElementById("text_e").value;
    var y1 = document.getElementById("text_f").value;
    var z1 = parseInt(x1) / parseInt(y1);
    document.getElementById("result4").value = z1;
}


function calculateall() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;


    var a11 = parseInt(value1) + parseInt(value2);
    document.getElementById("resultofadd").value = a11;
    var b11 = parseInt(value1) - parseInt(value2);
    document.getElementById("resultofsub").value = b11;
    var c11 = parseInt(value1) * parseInt(value2);
    document.getElementById("resultofmul").value = c11;
    var d11 = parseInt(value1) / parseInt(value2);
    document.getElementById("resultofdiv").value = d11;
}

