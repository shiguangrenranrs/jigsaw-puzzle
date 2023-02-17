// 图块
const itemElements = document.querySelectorAll('#main>div');
const transparentElement = document.querySelector('#transparent');

// 步数记录
const stepElement = document.querySelector('#step');
let stepCount = 0;
stepElement.innerText = stepCount;

// 初始化布局
initLayout(itemElements);

// 生成唯一的随机值数组
const array = uniqueValueArray();

// 去除对后一个透明元素，遍历数组值为DOM填入数值
const itemElementsArray = Array.from(itemElements);
itemElementsArray.pop();
appendText(itemElementsArray, array);

// 获取图块宽度
const sideWidth = itemElements[0].offsetWidth;

// 为图块绑定事件与透明图块进行位置交换
for (let i = 0; i < itemElements.length; i++) {
    itemElements[i].addEventListener('click', function () {
        const current = {
            x: this.offsetLeft,
            y: this.offsetTop
        };
        const transparent = {
            x: transparentElement.offsetLeft,
            y: transparentElement.offsetTop
        }
        if (current.x === transparent.x || current.y === transparent.y) {
            if (current.x + sideWidth === transparent.x ||
                current.x - sideWidth === transparent.x ||
                current.y + sideWidth === transparent.y ||
                current.y - sideWidth === transparent.y) {
                this.style = `top:${transparent.y}px;left:${transparent.x}px;`;
                transparentElement.style = `top:${current.y}px;left:${current.x}px;`;
                stepCount += 1;
                stepElement.innerText = stepCount;
            }
        }
    });
}

/**
 * 
 * @param {HTMLElement[]} items 需要初始化布局的元素块数组
 * @param {number} grid_count 游戏中每行元素的个数
 * @param {number} item_width 每个元素的宽度
 */
function initLayout(items, grid_count = 4, item_width = 50) {
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

/**
 * 
 * @param {HTMLElement[]} elements DOM元素数组
 * @param {number[]} array 唯一随机值数组
 */
function appendText(elements, array) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = array[i];
    }
}
