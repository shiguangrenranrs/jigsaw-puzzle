var items = $("#main>div");
var count = 0;
var countItem = $(".container p span");
countItem.text(count);

initLayout(items);

delete items[items.length - 1];
items.length--;

var inTextArr = uniqueValueArray();

appendText(items, inTextArr);

var sides = Math.round(items.width() + 2);
items.click(function () {
    var x = Math.round($(this).position().left);
    var y = Math.round($(this).position().top);
    var tx = Math.round($("#transparent").position().left);
    var ty = Math.round($("#transparent").position().top);
    if ((x == tx) || (y == ty)) {
        if ((x + sides == tx) || (x - sides == tx) || (y + sides == ty) || (y - sides == ty)) {
            $(this).css({
                "left": tx,
                "top": ty,
            });
            $("#transparent").css({
                "left": x,
                "top": y,
            });
            count++;
            countItem.text(count);
        } else if (x == tx) { //同列

            // if (y - ty > 0) {
            //     var aa = document.getElementById("main").getElementsByClassName("item");
            //     console.log(aa)
            //     for (var a = 0; a < items.length; a++) {}
            // } else if (y - ty < 0) {
            //     // +40
            // };
            // $("#transparent").css({
            //     "left": x,
            //     "top": y,
            // });
        } else if (y == ty) { //同行
            // if (x - tx > 0) {
            //     // -40
            // } else if (x - tx < 0) {
            //     // +40
            // };
            // $("#transparent").css({
            //     "left": x,
            //     "top": y,
            // });
        };
    };
});

/**
 * 
 * @param {HTMLElement[]} items 需要初始化布局的元素块数组
 * @param {number} grid_count 游戏中每行元素的个数
 * @param {number} item_width 每个元素的宽度
 */
function initLayout(items, grid_count = 4, item_width = 50) {
    let k = 0;
    for (let i = 0; i < grid_count; i++) {
        for (let j = 0; j < grid_count; j++) {
            items[grid_count * i + j].style
                = `top:${i * item_width}px;left:${j * item_width}px;`
        }
    }
}

/**
 * 
 * @param {number} length 要生成的唯一随机值数组的长度
 * @returns 生成的唯一随机值数组
 */
function uniqueValueArray(length = 15) {
    const set = new Set();
    while (set.size < length) {
        set.add(get_random(1, length));
    }
    return Array.from(set);
}

function appendText(elements, array) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = array[i];
    }
}
