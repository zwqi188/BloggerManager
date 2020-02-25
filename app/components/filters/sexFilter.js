module.exports = function () {
    return function (data) {
        var sex = "";
        switch (data) {
            case "1":sex = "男"; break;
            case "2":sex = "女"; break;
            case "0" :sex = "未知"; break;
        }
        return sex;
    }
};