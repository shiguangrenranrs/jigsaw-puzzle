/**
 * 
 * @param {number} min 随机数范围下界，包含该值
 * @param {number} max 随机数范围上界，包含该值
 * @returns 区间 [min,max] 的随机数
 */
function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};