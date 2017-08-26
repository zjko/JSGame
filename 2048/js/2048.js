
'use strict';
var map = document.getElementById('map');
var context = map.getContext('2d');
var rect = [];
var Score = 0;
GameInit();
//初始化游戏



function GameInit() {
    for (var i = 0; i < 4; i++) {
        rect[i] = [];
        for (var j = 0; j < 4; j++) {
            rect[i][j] = 0;
        }
    }
    creatNumber();
    creatNumber();
    Print();
    alert("游戏开始");
}

document.onkeydown = function (event) {
    //添加游戏键盘控制
    // alert("检测到输入");
    var e = event || window.event || arguments.callee.caller.arguments[0];


    switch (e && e.keyCode) {
        case 37: LeftInput(); break;
        case 38: UpInput(); break;
        case 39: RightInput(); break;
        case 40: DownInput(); break;
    }
    Print();
}




function creatNumber() {
    //在空处随机增加一个数字

    var list = [];
    var i = 0;
    Score = 0;
    for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
            Score += rect[j][k]
            if (rect[j][k] == 0) {
                list[i] = {
                    x: j,
                    y: k
                };
                i++;
            }
        }
    }
    if (i == 0) return true;
    var position = Math.floor(Math.random() * i);
    rect[list[position].x][list[position].y] = Math.round(Math.random()) * 2;
    return false;
}

function Print() {	//游戏样式控制
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            switch (rect[i][j]) {
                case 0: context.fillStyle = "#FFFAF0"; break;
                case 2: context.fillStyle = "#FFEC8B"; break;
                case 4: context.fillStyle = "#FFDAB9"; break;
                case 8: context.fillStyle = "#FFC125"; break;
                case 16: context.fillStyle = "#FF4040"; break;
                case 32: context.fillStyle = "#FF82AB"; break;
                case 64: context.fillStyle = "#FF3E96"; break;
                case 128: context.fillStyle = "#FF0000"; break;
                case 256: context.fillStyle = "#FA8072"; break;
                case 512: context.fillStyle = "#EEB422"; break;
                case 1024: context.fillStyle = "#E0FFFF"; break;
                case 2048: context.fillStyle = "#DB7093"; break;
                default:
                    if (rect == 4096) {
                        alert("YOU WIN");
                        return true;
                    } else {
                        alert("数据错误");
                    }
            }
            context.fillRect(10 + i * 90, 10 + j * 90, 80, 80);
        }
    }
    document.getElementById("Score").innerText=Score;
}

function GameOver() {

	alert("YOU DIE");
}


function LeftInput() {
    for (var k = 4; --k > 0;) {
        for (var y = 1; y < 4; y++) {
            for (var x = 0; x < 4; x++) {
                if (rect[y - 1][x] == rect[y][x] || rect[y - 1][x] == 0) {
                    rect[y - 1][x] += rect[y][x];
                    rect[y][x] = 0;
                }
            }
        }
    }
    if (creatNumber()) GameOver();
}

function RightInput() {
    for (var k = 4; --k > 0;) {
        for (var y = 2; y >= 0; y--) {
            for (var x = 0; x < 4; x++) {
                if (rect[y + 1][x] == rect[y][x] || rect[y + 1][x] == 0) {
                    rect[y + 1][x] += rect[y][x];
                    rect[y][x] = 0;
                }
            }
        }
    }
    if (creatNumber()) GameOver();
}
function DownInput() {
    
    for (var k = 4; --k > 0;) {
        for (var x = 2; x >= 0; x--) {
            for (var y = 0; y < 4; y++) {
                if (rect[y][x + 1] == rect[y][x] || rect[y][x + 1] == 0) {
                    rect[y][x + 1] += rect[y][x];
                    rect[y][x] = 0;
                }
            }
        }
    }
    if (creatNumber()) GameOver();
}
function UpInput() {
    for (var k = 4; --k > 0;) {
        for (var x = 1; x < 4; x++) {
            for (var y = 0; y < 4; y++) {
                if (rect[y][x - 1] == rect[y][x] || rect[y][x - 1] == 0) {
                    rect[y][x - 1] += rect[y][x];
                    rect[y][x] = 0;
                }
            }
        }
    }
    if (creatNumber()) GameOver();
}