const formatTime = date => {
    date = new Date(date);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatdate = date => {
    date = new Date(date);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('.');
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
/**
 * 根据key查找数据中对应的值
 */
const SearchData = (key, data) => {
    var value = '';
    var i = 0;
    while (i < data.length) {

        if (key == data[i].key) {
            value = data[i].title;
            break;
        } else {
            i++;
            continue;
        }
    }
    return value;
}

/**
 * 根据key查找数据中对应角标
 */
const SearchDataIndex = (key, data) => {
    var value = '';
    var i = 0;
    while (i < data.length) {

        if (key == data[i].key) {
            value = i;
            break;
        } else {
            i++;
            continue;
        }
    }
    return value;
}

module.exports = {
    formatTime,
    formatdate,
    SearchData,
    SearchDataIndex
}