
function leftArrow(elem) {
  var canvas = document.getElementById(elem);
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(120,25);
    ctx.quadraticCurveTo(125,100,175,125);
    ctx.lineTo(172, 110);
    ctx.moveTo(175, 125);
    ctx.lineTo(160, 128);
    ctx.strokeStyle = '#262261';
    ctx.stroke();
  }
}

function rightArrow(elem) {
  var canvas = document.getElementById(elem);
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(175,25);
    ctx.quadraticCurveTo(160,100,120,125);
    ctx.lineTo(123, 110);
    ctx.moveTo(120, 125);
    ctx.lineTo(135, 128);
    ctx.strokeStyle = '#262261';
    ctx.stroke();
  }
}

leftArrow('left-arrow-1');
leftArrow('left-arrow-2');
rightArrow('right-arrow-1');
