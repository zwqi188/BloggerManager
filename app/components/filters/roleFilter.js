module.exports = function () {
    return function (data) {
        var role = "";
        switch (data) {
            case "0": role = "超级管理员"; break;
            case "1": role = "审核员"; break;
            default: role = "普通用户"; break;
        }
        return role;
    }
};