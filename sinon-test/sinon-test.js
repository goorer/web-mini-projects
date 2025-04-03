"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = require("sinon");
var fakeTimer = sinon_1.useFakeTimers(new Date('2024-03-03T12:00:00Z').getTime());
setTimeout(function () {
    console.log(new Date()); // 2025-04-01T12:00:00.000Z（固定）
}, 1000);
