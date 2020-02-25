/**
* 提供公共的工具方法
 **/

module.exports = function (CONSTANT) {
    'use strict';
    var util = {};
    /**
     * 验证字符串的长度是否大于限定的字节数（一个中文字符2个字节）
     *
     * @param str
     * @param length
     * @returns {boolean}
     */
    util.checkStringLength = function (str, length) {
        if (str === null) {
            return true;
        }
        //把双字节的字符都替换为两个单字节的'0'，如果直接使用angularjs自带的对文本框的字符长度校验，它会认为一个中文是一个字节
        if (length < str.replace(/[^\x00-\xFF]/g, "00").length) {
            return false;
        } else {
            return true;
        }
    };

    /**
     * 以给定的正则表达式去校验字符串是否符合要求
     *
     * @param str
     * @param Reg
     * @returns {*}
     */
    util.checkStringStyle = function (str, Reg) {
        if (typeof str === 'undefined' || typeof str === 'null') {
            return true;
        }
        return Reg.test(str);
    };

    util.checkNumber = function (str) {
        var reg = new RegExp('^[0-9]*$');
        return util.checkStringStyle(str, reg)
    }

    util.checkStr = function (str) {
        var reg = new RegExp('^.[A-Za-z0-9]+$');
        return util.checkStringStyle(str, reg)
    }


    /**
     * 去除字符串首尾的空白符
     *
     * @param str
     */
    util.trim = function (str) {
        str.replace(/(^\s*)|(\s*$)/g, "");
    };

    /**
     * 判断文件后缀名是否在给定格式中
     * @param fileName
     * @param suffixArray
     * @returns {boolean}
     */
    util.checkFileNameSuffix = function (fileName, suffixArray) {
        var suffix = fileName.slice(fileName.lastIndexOf('.') + 1, fileName.length);
        var i = suffixArray.length;
        while (i--) {
            if (suffixArray[i] === suffix) {
                return true;
            }
        }
        return false;
    };




    /**
     * 判断一个对象是不是空对象
     * @param object
     * @returns {boolean}
     */
    util.isBlankObject = function (object) {
        if (object instanceof Array) {
            return object.length == 0;
        } else if (typeof object === "object") {
            var hasProp = true;
            for (var prop in object) {
                hasProp = false;
                break;
            }
            return hasProp;
        }
        return false;
    };

    /**
     * 判断字符串是否为空
     * @param str
     */
    util.isBlankStr = function (str) {
        if (typeof str == 'undefined' || str == '') {
            return true;
        }
        return false;
    };

    /**
     * 判断数组中对应字段是否有重复
     */
    util.isDuplicate = function (array, key) {
        if (array instanceof Array) {
            var hasDup = false;
            var hash = {};
            for (var i in array) {
                if (hash[array[i][key]]) {
                    hasDup = true;
                    break;
                }
                hash[array[i][key]] = true;
            }
            return hasDup;
        }
        return false;
    };

    /**
     * 判断身份证号格式
     * @param identityNumber
     * @param type
     */

    util.identityValidator = function (input, type) {
        //身份证正则表达式
        var identity15Pattern = CONSTANT.IDENTITY_REG.REG_IDENTITY15;
        var identityHide15Pattern = CONSTANT.IDENTITY_REG.REG_IDENTITY_HIDE15;
        var identity18Pattern = CONSTANT.IDENTITY_REG.REG_IDENTITY18;
        var identityHide18Pattern = CONSTANT.IDENTITY_REG.REG_IDENTITY_HIDE18;

        var IDENTITY_CODE = '01';   //身份证号

        if(type === IDENTITY_CODE){
            return identity15Pattern.test(input) ||
                identityHide15Pattern.test(input) ||
                identity18Pattern.test(input) ||
                identityHide18Pattern.test(input);
        }else{
            return true;
        }
    };

    /**
     * 判断是否为空
     * @param value
     * @returns {boolean}
     */
    util.isEmpty = function (value) {
        if(value == "" || value == null) {
            return true;
        }
        return false;
    }

    return util;
};