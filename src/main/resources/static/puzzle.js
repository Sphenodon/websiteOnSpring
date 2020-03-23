var PUZZLE_DIFFICULTY = 3;
const PUZZLE_HOVER_TINT = '#000000';
var ctx, canvas, img, pieces, mainWidth, mainHeight, pieceWidth, pieceHeight, currentPiece, currentDroppedPiece, mouse;
var count = 0, maxCount = 0, gamesCount = 0;

let puzzle = {
    init: function init() {
        img = new Image();
        img.src = "/img/cordylidae.jpg";
        img.addEventListener('load',onImage,false);
    },
    setImage: function setImage(puzzle_href, puzzle_difficult) {
        img = new Image();
        let idSetImage = document.getElementById('setImage').value;
        let idDifficult = document.getElementById('difficult').value;
        if (puzzle_href) {
            img.src = puzzle_href;
        }else if (idSetImage !== '') {
            img.src = idSetImage;
        } else img.src = "/img/cordylidae.jpg";
        if (puzzle_difficult) {
            PUZZLE_DIFFICULTY = puzzle_difficult;
        }else if (idDifficult<1 || idDifficult>20) {
            document.getElementById('parent').hidden = true;
        } else PUZZLE_DIFFICULTY = idDifficult;
        document.getElementById('parent').hidden = false;
        img.addEventListener('load', onImage, false);
    }
};

function closeParent() {
    document.getElementById('parent').hidden = true;
}
function openParent() {
    document.getElementById('parent').hidden = false;
}

function onImage (e) {
    pieceWidth = Math.floor (img.width / PUZZLE_DIFFICULTY)
    pieceHeight = Math.floor (img.height / PUZZLE_DIFFICULTY)
    mainWidth = pieceWidth * PUZZLE_DIFFICULTY;
    mainHeight = pieceHeight * PUZZLE_DIFFICULTY;
    setCanvas ();
    initPuzzle ();
}

function setCanvas(){
    count = 0;
    maxCount = 0;
    gamesCount = 0;
    document.getElementById('MessageAfterGame').value = '';
    document.getElementById('TagAfterGame').value = '';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = mainWidth;
    canvas.height = mainHeight;
    canvas.style.border = "1px solid black";
    let block = document.getElementById('block');
    let parent = document.getElementById('parent');
    parent.style.height = parent.clientHeight + "px";
    let centerOfHeight = parent.clientHeight/2-mainHeight/2;
    let centerOfWidth = parent.clientWidth/2-mainWidth/2;
    block.style.left = centerOfWidth + "px";
    block.style.top = centerOfHeight + "px";
    if (mainWidth > parent.clientWidth || mainHeight > parent.clientHeight-56) {
        document.getElementById('sorryImageShouldBeSmaller').setAttribute('class', 'alert alert-info');
        document.getElementById('sorryImageShouldBeSmaller').innerText = 'Прости, но изображение дожно быть меньше, попробуй другую картинку';
        document.getElementById('parent').hidden = true;
        setTimeout(reload,3000);
    }
}

function reload() {
    location.reload();
}

function initPuzzle(){
    pieces = [];
    mouse = {x:0,y:0};
    currentPiece = null;
    currentDroppedPiece = null;
    ctx.drawImage(img, 0, 0, mainWidth, mainHeight, 0, 0, mainWidth, mainHeight);
    if (!gamesCount) createTitle("Нажми, чтобы начать");
    buildPieces();
}

function createTitle (msg) {
    ctx.fillStyle = "#000000";
    ctx.globalAlpha = .5;
    ctx.fillRect (0,mainHeight - 40,mainWidth ,40);
    ctx.fillStyle = "#FFFFFF";
    ctx.globalAlpha = 1;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "20px Arial";
    ctx.fillText(msg,mainWidth / 2,mainHeight - 20);
}

function buildPieces(){
    var i, piece, xPos = 0, yPos = 0;
    for (i = 0;i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;i++) {
        piece = {}; piece.sx = xPos; piece.sy = yPos; pieces.push(piece);
        xPos += pieceWidth;
        if (xPos >= mainWidth) {
            xPos = 0; yPos += pieceHeight;
        }
    }
    document.onmousedown = shufflePuzzle;
}

function shufflePuzzle() {
    let parent = document.getElementById('parent');
    let centerOfHeight = parent.clientHeight/2-mainHeight/2;
    let centerOfWidth = parent.clientWidth/2-mainWidth/2;
    pieces = shuffleArray(pieces);
    ctx.clearRect(0,0,mainWidth,mainHeight);
    var i, piece, xPos = centerOfWidth, yPos = centerOfHeight, xPosO = 0, yPosO = 0;
    for (i = 0;i < pieces.length;i++) {
        piece = pieces[i]; piece.xPos = xPos; piece.yPos = yPos;
        piece.xPosO = xPosO; piece.yPosO = yPosO;
        ctx.drawImage (img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPosO, yPosO, pieceWidth, pieceHeight);
        ctx.strokeRect (xPosO, yPosO, pieceWidth, pieceHeight);
        xPos += pieceWidth;
        if (xPos >= centerOfWidth + mainWidth){
            xPos = centerOfWidth; yPos += pieceHeight;
        }
        xPosO += pieceWidth;
        if (xPosO >= mainWidth){
            xPosO = 0; yPosO += pieceHeight;
        }
    }
    document.onmousedown = onPuzzleClick;
}

function onPuzzleClick(elem){
    let parent = document.getElementById('parent');
    let centerOfHeight = parent.clientHeight/2-mainHeight/2;
    let centerOfWidth = parent.clientWidth/2-mainWidth/2;
    mouse.x = elem.pageX;
    mouse.y = elem.pageY;
    currentPiece = checkPieceClicked();
    if (currentPiece != null) {
        ctx.clearRect (currentPiece.xPos,currentPiece.yPos,pieceWidth,pieceHeight);
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.drawImage (img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight,
            mouse.x - centerOfWidth - (pieceWidth / 2), mouse.y - centerOfHeight - (pieceHeight / 2), pieceWidth, pieceHeight);
        ctx.restore();
        document.onmousemove = updatePuzzle;
        document.onmouseup = pieceDropped;
    }
}

function checkPieceClicked() {
    var i, piece;
    for (i = 0;i < pieces.length;i++) {
        piece = pieces[i];
        if (mouse.x < piece.xPos || mouse.x > (piece.xPos + pieceWidth) ||
            mouse.y < piece.yPos || mouse.y > (piece.yPos + pieceHeight)) {
        }
        else return piece;
    }
    return null;
}

function updatePuzzle (elem) {
    let parent = document.getElementById('parent');
    let centerOfHeight = parent.clientHeight/2-mainHeight/2;
    let centerOfWidth = parent.clientWidth/2-mainWidth/2;
    currentDroppedPiece = null;
    mouse.x = elem.pageX;
    mouse.y = elem.pageY;
    ctx.clearRect (0,0,mainWidth,mainHeight);
    var i, piece;
    for (i = 0;i < pieces.length;i++) {
        piece = pieces[i];
        if (piece === currentPiece) continue;
        ctx.drawImage (img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPosO, piece.yPosO, pieceWidth, pieceHeight);
        ctx.strokeRect (piece.xPosO, piece.yPosO, pieceWidth,pieceHeight);
        if (currentDroppedPiece == null){
            if (mouse.x < piece.xPos || mouse.x > (piece.xPos + pieceWidth) ||
                mouse.y < piece.yPos || mouse.y > (piece.yPos + pieceHeight)) {
            }
            else {
                currentDroppedPiece = piece;
                ctx.save();
                ctx.globalAlpha = .33;
                ctx.fillStyle = PUZZLE_HOVER_TINT;
                ctx.fillRect(currentDroppedPiece.xPosO,currentDroppedPiece.yPosO,pieceWidth, pieceHeight);
                ctx.restore();
            }
        }
    }
    ctx.save();
    ctx.globalAlpha = .66;
    ctx.drawImage(img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight,
        mouse.x - centerOfWidth - (pieceWidth / 2), mouse.y - centerOfHeight - (pieceHeight / 2), pieceWidth, pieceHeight);
    ctx.restore();
    ctx.strokeRect( mouse.x - centerOfWidth - (pieceWidth / 2), mouse.y - centerOfHeight - (pieceHeight / 2), pieceWidth,pieceHeight);
}

function pieceDropped (e) {
    document.onmousemove = null;
    document.onmouseup = null;
    if (currentDroppedPiece != null) {
        var tmp = {xPos:currentPiece.xPosO,yPos:currentPiece.yPosO};
        currentPiece.xPosO = currentDroppedPiece.xPosO;
        currentPiece.yPosO = currentDroppedPiece.yPosO;
        currentDroppedPiece.xPosO = tmp.xPos;
        currentDroppedPiece.yPosO = tmp.yPos;
        var tmp = {xPos:currentPiece.xPos,yPos:currentPiece.yPos};
        currentPiece.xPos = currentDroppedPiece.xPos;
        currentPiece.yPos = currentDroppedPiece.yPos;
        currentDroppedPiece.xPos = tmp.xPos;
        currentDroppedPiece.yPos = tmp.yPos;
        count++;
    }
    resetPuzzleAndCheckWin();
}

function resetPuzzleAndCheckWin() {
    ctx.clearRect (0,0,mainWidth,mainHeight);
    var gameWin = true;
    var i, piece;
    for (i = 0;i < pieces.length;i++) {
        piece = pieces[i];
        ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPosO, piece.yPosO, pieceWidth, pieceHeight);
        ctx.strokeRect(piece.xPosO, piece.yPosO, pieceWidth,pieceHeight);
        if (piece.xPosO != piece.sx || piece.yPosO != piece.sy) {
            gameWin = false;
        }
    }
    if (gameWin) {
        setTimeout(gameOver,330);
    }
}

function gameOver(){
    document.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null;
    gamesCount++;
    initPuzzle();
    if (maxCount == 0) maxCount = count;
    createTitle ('Ты собрал за ' + count + ' перемещение, ' + (count <= maxCount ? 'это новый рекорд' : 'рекорд ' + maxCount) + '... Повторим?');
    if (count < maxCount) maxCount = count;
    count = 0;
    document.getElementById('MessageAfterGame').value = 'Я смог собрать пазл за ' + maxCount + ' перемещение, сможешь лучше?';
    document.getElementById('TagAfterGame').value = 'Пазл ' + img.src  + ' сложность: ' + PUZZLE_DIFFICULTY;
    document.getElementById('puzzleHref').value = img.src;
    document.getElementById('puzzleDifficult').value = PUZZLE_DIFFICULTY;
}

function shuffleArray (o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}