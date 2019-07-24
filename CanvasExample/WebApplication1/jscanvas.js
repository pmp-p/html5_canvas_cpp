﻿var canvas_dict = {};
var gradient_dict = {};
var imgdata_dict = {};

function add_canvas(name)
{
    var theCanvas = document.getElementById(name);
    var context = theCanvas.getContext("2d");

    canvas_dict[name] = context;
}

function get_canvas(name) {
    return canvas_dict[name];
}

function add_gradient(name, grad) {
    gradient_dict[name] = grad;
}

function get_gradient(name) {
    return gradient_dict[name];
}

function add_imgdata(name, imgdata) {
    imgdata_dict[name] = imgdata;
}

function get_imgdata(name) {
    return imgdata_dict[name];
}