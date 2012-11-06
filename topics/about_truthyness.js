// http://www.sitepoint.com/javascript-truthy-falsy/
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equals(oneIsTruthy, true, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equals(negativeOneIsTruthy, true, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equals(zeroIsTruthy, false, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equals(nullIsTruthy, false, 'is null truthy?');
});

test("truthyness of null against undefined", function () {
    ok(null == undefined, 'is null truthy against undefined?');
});

test("truthyness of undefined against undefined", function () {
    ok(undefined == undefined, 'is undefined truthy against undefined?');
});

test("truthyness of NaN against undefined", function () {
    ok(NaN != undefined, 'is NaN ever truthy');
});


