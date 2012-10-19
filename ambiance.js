/* vim:set ts=2 sw=2 sts=2 expandtab */
/*jshint asi: true undef: true es5: true node: true browser: true devel: true
         forin: true latedef: false globalstrict: true */

"use strict";

var hub = require("plugin-hub/core")
var gcli = require("gcli-ambiance-plugin")
var codemirror = require("codemirror-ambiance-plugin")
var pluginManager = require("ambiance-plugin-manager")
var fs = require("fs-ambiance-plugin")
var commandManager = require("ambiance-command-manager")


var env = global.env = window.env = {}

hub.plug(env, hub)
hub.plug(env, gcli)
hub.plug(env, codemirror)
hub.plug(env, commandManager)
hub.plug(env, fs)
hub.plug(env, pluginManager)
