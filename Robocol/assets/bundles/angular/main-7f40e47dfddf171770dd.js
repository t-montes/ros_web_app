(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+IxG":
/*!*********************************************************!*\
  !*** ./src/app/submarino/estadosub/estadosub.module.ts ***!
  \*********************************************************/
/*! exports provided: EstadosubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosubModule", function() { return EstadosubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _estadosub_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estadosub.component */ "bEce");




class EstadosubModule {
}
EstadosubModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EstadosubModule });
EstadosubModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EstadosubModule_Factory(t) { return new (t || EstadosubModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EstadosubModule, { declarations: [_estadosub_component__WEBPACK_IMPORTED_MODULE_2__["EstadosubComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadosubModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_estadosub_component__WEBPACK_IMPORTED_MODULE_2__["EstadosubComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/+XW":
/*!****************************************************************!*\
  !*** ./src/app/rover/sensorica/analysis/analysis.component.ts ***!
  \****************************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AnalysisComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalysisComponent.ɵfac = function AnalysisComponent_Factory(t) { return new (t || AnalysisComponent)(); };
AnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisComponent, selectors: [["app-analysis"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "categories"]], template: function AnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\tTropical or megathermal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PH:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\tAlkaline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\tVolcanic gases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Humidity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\tPerhumid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Graphs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["label[_ngcontent-%COMP%]\n{\n\tfont-family: Helvetica;\n}\n\n#sensors_info[_ngcontent-%COMP%]\n{\n\t\n\t\n\twidth: calc(30vw - 4% - 50px);\n\tposition: absolute;\n\tpadding:5%;\n\tbottom: 0;\n\tborder-radius: 20px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n\tbackground: #00000020;\n}\n.sensors_title[_ngcontent-%COMP%]\n{\n\t\n\t\n\ttext-align: center\n}\n.categories[_ngcontent-%COMP%]\n{\n\tcolor: white;\n\t\n\t\n\t\n}\npre[_ngcontent-%COMP%]\n{\n\tcolor: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL2FuYWx5c2lzL2FuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsc0JBQXNCO0FBQ3ZCO0FBQ0EsaUNBQWlDO0FBQ2pDOztDQUVDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztDQUNULG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUMscUJBQXFCO0FBQ3RCO0FBQ0E7O0NBRUMsd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZDtBQUNEO0FBQ0E7O0NBRUMsWUFBWTtDQUNaLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7O0NBRUMsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL2FuYWx5c2lzL2FuYWx5c2lzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbFxue1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuLyogU2Vuc29yIGRhdGFiYXNlIGluZm9ybWF0aW9uLiAqL1xuI3NlbnNvcnNfaW5mb1xue1xuXHQvKiB6LWluZGV4OiAyOyAqL1xuXHQvKiBoZWlnaHQ6IDQ3MHB4OyAqL1xuXHR3aWR0aDogY2FsYygzMHZ3IC0gNCUgLSA1MHB4KTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwYWRkaW5nOjUlO1xuXHRib3R0b206IDA7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwMjA7XG59XG4uc2Vuc29yc190aXRsZVxue1xuXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG5cdC8qIHRvcDogMHB4OyAqL1xuXHR0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbi5jYXRlZ29yaWVzXG57XG5cdGNvbG9yOiB3aGl0ZTtcblx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuXHQvKiB0b3A6IDUwcHg7ICovXG5cdC8qIHJpZ2h0OiAxMHB4ICovXG59XG5cbnByZVxue1xuXHRjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analysis',
                templateUrl: './analysis.component.html',
                styleUrls: ['./analysis.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/franz/catkin_ws/src/ros_web_app_2/Robocol/testapp/src/main.ts */"zUnb");


/***/ }),

/***/ "0gCJ":
/*!*********************************************************!*\
  !*** ./src/app/lunabot/estadoluna/estadoluna.module.ts ***!
  \*********************************************************/
/*! exports provided: EstadolunaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadolunaModule", function() { return EstadolunaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _estadoluna_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estadoluna.component */ "W+Sn");




class EstadolunaModule {
}
EstadolunaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EstadolunaModule });
EstadolunaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EstadolunaModule_Factory(t) { return new (t || EstadolunaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EstadolunaModule, { declarations: [_estadoluna_component__WEBPACK_IMPORTED_MODULE_2__["EstadolunaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadolunaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_estadoluna_component__WEBPACK_IMPORTED_MODULE_2__["EstadolunaComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2JCF":
/*!**********************************************!*\
  !*** ./src/app/rover/brazo/brazo.service.ts ***!
  \**********************************************/
/*! exports provided: BrazoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoService", function() { return BrazoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "RH9n");



class BrazoService {
    constructor(socket) {
        this.socket = socket;
        //Define the variables that will be listening to the messages comming from the Socket Server  
        this.joint_1_value = this.socket.fromEvent('joint_1_value');
        this.joint_2_value = this.socket.fromEvent('joint_2_value');
        this.joint_3_value = this.socket.fromEvent('joint_3_value');
        this.joint_4_value = this.socket.fromEvent('joint_4_value');
        this.joint_5_value = this.socket.fromEvent('joint_5_value');
        this.joint_6_value = this.socket.fromEvent('joint_6_value');
        this.joint_7_value = this.socket.fromEvent('joint_7_value');
        this.gripper_value = this.socket.fromEvent('gripper_value');
    }
    //Create the function that will emit a message to the Socket Server, asking for a joint's value or the gripper's value
    //{object (is the name of the attribute): object (it could be ¨joint_ + a number¨ or the word ¨gripper¨)}
    get_value(object) {
        this.socket.emit('get_value', { object: object });
    }
    //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed
    change_value(object, action) {
        console.log('Gripper change.');
        this.socket.emit('change_value', { object: object, action: action });
    }
    //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed
    stop_changing_value() {
        this.socket.emit('stop_changing_value', { 'mensaje': 'HOLA' });
    }
}
BrazoService.ɵfac = function BrazoService_Factory(t) { return new (t || BrazoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
BrazoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrazoService, factory: BrazoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "4jOQ":
/*!******************************************************!*\
  !*** ./src/app/rover/traccion/traccion.component.ts ***!
  \******************************************************/
/*! exports provided: TraccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraccionComponent", function() { return TraccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _telemetry_telemetry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry/telemetry.component */ "SBGc");
/* harmony import */ var _joystick_joystick_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joystick/joystick.component */ "EObr");




class TraccionComponent {
    constructor() { }
    ngOnInit() {
    }
}
TraccionComponent.ɵfac = function TraccionComponent_Factory(t) { return new (t || TraccionComponent)(); };
TraccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraccionComponent, selectors: [["app-traccion"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"]], template: function TraccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tracci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-telemetry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-joystick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_telemetry_telemetry_component__WEBPACK_IMPORTED_MODULE_1__["TelemetryComponent"], _joystick_joystick_component__WEBPACK_IMPORTED_MODULE_2__["JoystickComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3RyYWNjaW9uL3RyYWNjaW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-traccion',
                templateUrl: './traccion.component.html',
                styleUrls: ['./traccion.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8aCB":
/*!***************************************************!*\
  !*** ./src/app/rover/traccion/traccion.module.ts ***!
  \***************************************************/
/*! exports provided: TraccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraccionModule", function() { return TraccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _traccion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traccion.component */ "4jOQ");
/* harmony import */ var _joystick_joystick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joystick/joystick.component */ "EObr");
/* harmony import */ var _telemetry_telemetry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./telemetry/telemetry.component */ "SBGc");






class TraccionModule {
}
TraccionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TraccionModule });
TraccionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TraccionModule_Factory(t) { return new (t || TraccionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TraccionModule, { declarations: [_traccion_component__WEBPACK_IMPORTED_MODULE_2__["TraccionComponent"],
        _joystick_joystick_component__WEBPACK_IMPORTED_MODULE_3__["JoystickComponent"],
        _telemetry_telemetry_component__WEBPACK_IMPORTED_MODULE_4__["TelemetryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraccionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _traccion_component__WEBPACK_IMPORTED_MODULE_2__["TraccionComponent"],
                    _joystick_joystick_component__WEBPACK_IMPORTED_MODULE_3__["JoystickComponent"],
                    _telemetry_telemetry_component__WEBPACK_IMPORTED_MODULE_4__["TelemetryComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "8mUX":
/*!************************************************************************!*\
  !*** ./src/app/rover/sensorica/measurements/measurements.component.ts ***!
  \************************************************************************/
/*! exports provided: MeasurementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementsComponent", function() { return MeasurementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sensorica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sensorica.service */ "mHCH");



class MeasurementsComponent {
    // Constructor
    constructor(sensoricaService) {
        this.sensoricaService = sensoricaService;
    }
    // On Init
    ngOnInit() {
        // Define initial values for the variables
        this.measurements_value = -1;
        // Make the subscribers subscribe to their correspondent SensoricaService variable
        // this._temperature_Sub = this.sensoricaService.temperature_value.subscribe(value_received => this.temperature_value = value_received);
        this._temperature_Sub = this.sensoricaService.measurements_value.subscribe(value_received => this.measurements_value = value_received);
        // console.log('Num');
        // data => this.temperature_value = data
        // console.log(this.sensoricaService.measurements_value);
        // We ask for the values of the joints to start the labels
        this.change_value('Measurements', 'get');
    }
    // On Destroy
    ngOnDestroy() {
        // When this component is destroyed, the subscribers must unsubscribe
        this._temperature_Sub.unsubscribe();
    }
    // This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
    get_value(object) {
        this.sensoricaService.get_value(object);
    }
    // This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
    change_value(object, action) {
        this.sensoricaService.change_value(object, action);
        // value_received => this.temperature_value = this.sensoricaService.temperature_value
        // this.temperature_value = this.sensoricaService.temperature_value;
    }
    // This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
    stop_changing_value() {
        this.sensoricaService.stop_changing_value();
    }
}
MeasurementsComponent.ɵfac = function MeasurementsComponent_Factory(t) { return new (t || MeasurementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sensorica_service__WEBPACK_IMPORTED_MODULE_1__["SensoricaService"])); };
MeasurementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeasurementsComponent, selectors: [["app-measurements"]], decls: 47, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "table-responsive"], [1, "table", "table-borderless", "table-sm"], ["id", "EVA_1_1", "scope", "row"], ["disabled", "", "id", "temperature", "name", "field1", 3, "value"], ["id", "EVA_1_1"], ["disabled", "", "id", "ph", "name", "field2", 3, "value"], ["disabled", "", "id", "humidity", "name", "field1", 3, "value"], ["disabled", "", "id", "air_quality", "name", "field2", 3, "value"], ["disabled", "", "id", "co", "name", "field1", 3, "value"], ["disabled", "", "id", "co2", "name", "field2", 3, "value"], ["disabled", "", "id", "methane", "name", "field1", 3, "value"], ["disabled", "", "id", "hydrogen", "name", "field2", 3, "value"], ["type", "button", 1, "btn", "btn-warning", 3, "mousedown", "mouseup"], ["src", "../../../assets/Sensors/graph.gif", "alt", "Rocks", 1, "card-img-top"]], template: function MeasurementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Temperature: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " PH: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Humidity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Air Quality: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " CO: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " CO2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Methane Concentration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Hydrogen Concentration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MeasurementsComponent_Template_button_mousedown_41_listener() { return ctx.change_value("Measurements", "get"); })("mouseup", function MeasurementsComponent_Template_button_mouseup_41_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Get! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Graph ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["temp"], " \u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.measurements_value["ph"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["humidity"], " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.measurements_value["air_quality"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["co"], " ppm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["co2"], " ppm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["methane"], " ppm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.measurements_value["hydrogen"], " ppm");
    } }, styles: [".card-horizontal[_ngcontent-%COMP%]\n{\n    display: flex;\n    flex: 1 1 auto;\n}\n\nlabel[_ngcontent-%COMP%]\n{\n\tfont-family: Helvetica;\n}\n\nth[_ngcontent-%COMP%]\n{\n    \n\t\tfont-family: Helvetica;\n    color: white;\n}\n\n\n\n#sensors_measurements[_ngcontent-%COMP%]\n{\n\t\n\theight: 470px;\n\t\n\t\n\tpadding:2%;\n\ttop: 0px;\n\t\n\t\n\tborder-radius: 20px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n\tbackground: #00000020\n}\n\n.sensors_measurements_title[_ngcontent-%COMP%]\n{\n\tposition: relative;\n\ttop: 0px;\n\ttext-align: center\n}\n\n.sensors_measurements_box[_ngcontent-%COMP%]\n{\n\ttext-align: center;\n\tmargin-top: 10px;\n}\n\n.sensors_measurements_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\tdisplay: block;\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\twidth: 49%;\n\tpadding: 3px;\n\tfont-size: 16px;\n\tfont-family: Helvetica;\n\tborder-radius: 6px;\n\t-webkit-border-radius:6px;\n\t-moz-border-radius:6px;\n\tborder: 2px solid #fff;\n\tbox-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n}\n\n.sensors_measurements_box_2[_ngcontent-%COMP%]\n{\n\ttext-align: center;\n}\n\n.sensors_measurements_box_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\tdisplay: block;\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\twidth: 49%;\n\tpadding: 3px;\n\tfont-size: 16px;\n\tfont-family: Helvetica;\n\tborder-radius: 6px;\n\t-webkit-border-radius:6px;\n\t-moz-border-radius:6px;\n\tborder: 2px solid #fff;\n\tbox-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n}\n\n.sensors_measurements_box_title[_ngcontent-%COMP%]\n{\n\tdisplay: inline-block;\n\tmargin-right: 10%;\n\ttext-align: left;\n}\n\n#temperature[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#ph[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#humidity[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#air_quality[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#co[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#co2[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#methane[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n\n#hydrogen[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL21lYXN1cmVtZW50cy9tZWFzdXJlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBQ0E7O0lBRUksNEJBQTRCO0VBQzlCLHNCQUFzQjtJQUNwQixZQUFZO0FBQ2hCOztBQUNBLHlCQUF5Qjs7QUFDekI7O0NBRUMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLFVBQVU7Q0FDVixRQUFRO0NBQ1IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNENBQTRDO0NBQzVDO0FBQ0Q7O0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUjtBQUNEOztBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsY0FBYztDQUNkLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLFVBQVU7Q0FDVixZQUFZO0NBQ1osZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsaURBQWlEO0NBQ2pELHNEQUFzRDtDQUN0RCx5REFBeUQ7QUFDMUQ7O0FBQ0E7O0NBRUMsa0JBQWtCO0FBQ25COztBQUNBOztDQUVDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGlEQUFpRDtDQUNqRCxzREFBc0Q7Q0FDdEQseURBQXlEO0FBQzFEOztBQUNBOztDQUVDLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUNBOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7O0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCOztBQUNBOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7O0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCOztBQUNBOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLHFCQUFxQjtBQUN0Qjs7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yb3Zlci9zZW5zb3JpY2EvbWVhc3VyZW1lbnRzL21lYXN1cmVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaG9yaXpvbnRhbFxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbmxhYmVsXG57XG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG50aFxue1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG5cdFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4vKiBTZW5zb3IgbWVhc3VyZW1lbnRzLiAqL1xuI3NlbnNvcnNfbWVhc3VyZW1lbnRzXG57XG5cdC8qIHotaW5kZXg6IDQ7ICovXG5cdGhlaWdodDogNDcwcHg7XG5cdC8qIHdpZHRoOiBjYWxjKDQwdncgLSA0JSAtIDBweCk7ICovXG5cdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cblx0cGFkZGluZzoyJTtcblx0dG9wOiAwcHg7XG5cdC8qIGJvdHRvbTogMDsgKi9cblx0LyogbGVmdDogNTBweDsgKi9cblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG5cdGJhY2tncm91bmQ6ICMwMDAwMDAyMFxufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX3RpdGxlXG57XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlclxufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX2JveFxue1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2Vuc29yc19tZWFzdXJlbWVudHNfYm94IGlucHV0XG57XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0d2lkdGg6IDQ5JTtcblx0cGFkZGluZzogM3B4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjZweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOjZweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG4uc2Vuc29yc19tZWFzdXJlbWVudHNfYm94XzJcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX2JveF8yIGlucHV0XG57XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0d2lkdGg6IDQ5JTtcblx0cGFkZGluZzogM3B4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG5cdGJvcmRlci1yYWRpdXM6IDZweDtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjZweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOjZweDtcblx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcblx0LW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG4uc2Vuc29yc19tZWFzdXJlbWVudHNfYm94X3RpdGxlXG57XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLXJpZ2h0OiAxMCU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4jdGVtcGVyYXR1cmVcbntcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOmJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3BoXG57XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjpibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNodW1pZGl0eVxue1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6YmxhY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jYWlyX3F1YWxpdHlcbntcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOmJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2NvXG57XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjpibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNjbzJcbntcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOmJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI21ldGhhbmVcbntcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOmJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2h5ZHJvZ2VuXG57XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjpibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeasurementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-measurements',
                templateUrl: './measurements.component.html',
                styleUrls: ['./measurements.component.css']
            }]
    }], function () { return [{ type: _sensorica_service__WEBPACK_IMPORTED_MODULE_1__["SensoricaService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D25w":
/*!************************************************!*\
  !*** ./src/app/rover/estado/estado.service.ts ***!
  \************************************************/
/*! exports provided: EstadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoService", function() { return EstadoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "RH9n");



class EstadoService {
    constructor(socket) {
        this.socket = socket;
        //Variables que serán escuchadas
        //pestaña ROS
        this.rostopic_list_value = this.socket.fromEvent('rostopic_list_value'); //rostopic_list_value
        this.joint_1_value = this.socket.fromEvent('joint_1_value'); //topico echo
        this.joint_2_value = this.socket.fromEvent('joint_2_value'); //Data
        this.joint_3_value = this.socket.fromEvent('joint_3_value'); //Type
        this.joint_4_value = this.socket.fromEvent('joint_4_value'); //publishers
        this.joint_5_value = this.socket.fromEvent('joint_5_value'); //Subscribers
        //pestaña bateries
        this.voltaje1_value = this.socket.fromEvent("volatje1_value");
        this.voltaje2_value = this.socket.fromEvent("volatje2_value");
        this.voltaje3_value = this.socket.fromEvent("volatje3_value");
    }
    get_value(object) {
        this.socket.emit('get_value', { object: object });
    }
    //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed
    change_value(object, action) {
        console.log('Gripper change.');
        this.socket.emit('change_value', { object: object, action: action });
    }
    //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed
    stop_changing_value() {
        this.socket.emit('stop_changing_value', { mensaje: 'Prueba' });
    }
}
EstadoService.ɵfac = function EstadoService_Factory(t) { return new (t || EstadoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
EstadoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EstadoService, factory: EstadoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "DaPl":
/*!**************************************************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-cinematica-inversa-vertical/brazo-cinematica-inversa-vertical.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BrazoCinematicaInversaVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoCinematicaInversaVerticalComponent", function() { return BrazoCinematicaInversaVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BrazoCinematicaInversaVerticalComponent {
    constructor() {
        this.imageButtons = [
            { src: '../../../../assets/Brazo/Cinematica Inversa/Vertical/VERTICAL inicial.png', name: 'VERTICAL inicial' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Vertical/U activado.png', name: 'U activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Vertical/D activado.png', name: 'D activado' }
        ];
    }
    ngOnInit() {
        this.imageSrc = this.imageButtons[0].src;
    }
    changeImage(imageNameObject) {
        this.imageSrc = imageNameObject.src;
    }
}
BrazoCinematicaInversaVerticalComponent.ɵfac = function BrazoCinematicaInversaVerticalComponent_Factory(t) { return new (t || BrazoCinematicaInversaVerticalComponent)(); };
BrazoCinematicaInversaVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoCinematicaInversaVerticalComponent, selectors: [["app-brazo-cinematica-inversa-vertical"]], decls: 17, vars: 1, consts: [[1, "table", "table-borderless", 2, "height", "100%", "background-color", "transparent"], [1, "justify-content-center", "text-center", "align-middle"], [1, "justify-content-center", "text-center", "align-middle", 2, "padding", "4vh"], [1, "img-wrapper"], [1, "img-responsive", 3, "src"], [1, "img-overlay"], [1, "td", "justify-content-center", "text-center", "align-middle"], [1, "btn", "btn-default", "btn-block", 3, "mousedown", "mouseup"]], template: function BrazoCinematicaInversaVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaVerticalComponent_Template_button_mousedown_11_listener() { return ctx.changeImage(ctx.imageButtons[1]); })("mouseup", function BrazoCinematicaInversaVerticalComponent_Template_button_mouseup_11_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaVerticalComponent_Template_button_mousedown_15_listener() { return ctx.changeImage(ctx.imageButtons[2]); })("mouseup", function BrazoCinematicaInversaVerticalComponent_Template_button_mouseup_15_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n }\n\n.img-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.img-overlay[_ngcontent-%COMP%]:before {\n  content: ' ';\n  display: block;\n  \n  height: 0%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  opacity: 0;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\n  padding: 0vh;\n}\n\ntable[_ngcontent-%COMP%] { \n  border-collapse: collapse;\n  margin-bottom: 0vh;\n  margin-top: 0vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLXZlcnRpY2FsL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS12ZXJ0aWNhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCwyREFBMkQ7RUFDM0QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLXZlcnRpY2FsL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS12ZXJ0aWNhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZy1vdmVybGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIGFkanVzdCAnaGVpZ2h0JyB0byBwb3NpdGlvbiBvdmVybGF5IGNvbnRlbnQgdmVydGljYWxseSAqL1xuICBoZWlnaHQ6IDAlO1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbnRkLCB0aHtcbiAgcGFkZGluZzogMHZoO1xufVxuXG50YWJsZSB7IFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAwdmg7XG4gIG1hcmdpbi10b3A6IDB2aDtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoCinematicaInversaVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-cinematica-inversa-vertical',
                templateUrl: './brazo-cinematica-inversa-vertical.component.html',
                styleUrls: ['./brazo-cinematica-inversa-vertical.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EObr":
/*!***************************************************************!*\
  !*** ./src/app/rover/traccion/joystick/joystick.component.ts ***!
  \***************************************************************/
/*! exports provided: JoystickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoystickComponent", function() { return JoystickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class JoystickComponent {
    constructor() { }
    ngOnInit() {
    }
}
JoystickComponent.ɵfac = function JoystickComponent_Factory(t) { return new (t || JoystickComponent)(); };
JoystickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoystickComponent, selectors: [["app-joystick"]], decls: 15, vars: 0, consts: [[1, "card"], [1, "card-body"], ["name", "select"], ["value", "topic1", "selected", ""], ["value", "topic2"], ["value", "topic3"], ["id", "joystick_circle"], ["src", "../../../../assets/Negro.png", 1, "rounded-circle", "responsive"]], template: function JoystickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select Topic to Publish to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Topic 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Topic 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Topic 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".responsive[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvdHJhY2Npb24vam95c3RpY2svam95c3RpY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb3Zlci90cmFjY2lvbi9qb3lzdGljay9qb3lzdGljay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoystickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-joystick',
                templateUrl: './joystick.component.html',
                styleUrls: ['./joystick.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EiwR":
/*!***************************************************************************!*\
  !*** ./src/app/rover/estado/estado-pestania/estado-pestania.component.ts ***!
  \***************************************************************************/
/*! exports provided: EstadoPestaniaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoPestaniaComponent", function() { return EstadoPestaniaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _estado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../estado.service */ "D25w");



class EstadoPestaniaComponent {
    constructor(estadoService) {
        this.estadoService = estadoService;
    }
    ngOnInit() {
        //Define initial values for the variables
        this.voltaje1_value = 12;
        this.voltaje2_value = 13;
        this.voltaje3_value = 14;
        //Make the subscribers subscribe to their correspondent estadoService variable
        this._voltaje1_value = this.estadoService.voltaje1_value.subscribe((value_received) => (this.voltaje1_value = value_received)); //topico echo
        this._voltaje2_value = this.estadoService.voltaje2_value.subscribe((value_received) => (this.voltaje2_value = value_received)); //Data
        this._voltaje3_value = this.estadoService.voltaje3_value.subscribe((value_received) => (this.voltaje3_value = value_received)); //Type
        //We ask for the values of the joints to start the labels
        this.get_value('volate1'); //topico echo
        this.get_value('volate2'); //Data
        this.get_value('volate3'); //Type
    }
    ngOnDestroy() {
        this._voltaje1_value.unsubscribe(); //topico echo
        this._voltaje2_value.unsubscribe(); //Data
        this._voltaje3_value.unsubscribe(); //Type
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
    get_value(object) {
        this.estadoService.get_value(object);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
    change_value(object, action) {
        this.estadoService.change_value(object, action);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
    stop_changing_value() {
        this.estadoService.stop_changing_value();
        console.log('joint_2');
    }
}
EstadoPestaniaComponent.ɵfac = function EstadoPestaniaComponent_Factory(t) { return new (t || EstadoPestaniaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_estado_service__WEBPACK_IMPORTED_MODULE_1__["EstadoService"])); };
EstadoPestaniaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadoPestaniaComponent, selectors: [["app-estado-pestania"]], decls: 124, vars: 0, consts: [["scroll", "no"], ["id", "stateTests", 1, "card", "border-warning", "bg-transparent", "text-center"], ["src", "../../../assets/Rover_icon_status.png", 2, "position", "absolute", "left", "0", "right", "0", "top", "0", "bottom", "0", "margin", "auto", "width", "auto", "height", "80%"], ["id", "temperature", 2, "position", "absolute", "left", "0", "right", "0", "top", "165px", "bottom", "0", "margin", "auto", "display", "block", "text-align", "center"], ["id", "state_tests", 1, "contenedorPeque"], ["id", "L0_speed"], ["id", "L0_current"], ["id", "B2", 1, "button_enabled_motors"], ["id", "state_tests1", 1, "contenedorPeque"], ["id", "L1_speed"], ["id", "L1_current"], ["id", "B1", 1, "button_enabled_motors"], ["id", "state_tests2", 1, "contenedorPeque"], ["id", "L2_speed"], ["id", "L2_current"], ["id", "B0", 1, "button_enabled_motors"], ["id", "state_tests3", 1, "contenedorPeque"], ["id", "R0_speed"], ["id", "R0_current"], ["id", "B5", 1, "button_enabled_motors"], ["id", "state_tests4", 1, "contenedorPeque"], ["id", "R1_speed"], ["id", "R1_current"], ["id", "B4", 1, "button_enabled_motors"], ["id", "state_tests5", 1, "contenedorPeque"], ["id", "R2_speed"], ["id", "R2_current"], ["id", "B3", 1, "button_enabled_motors"], ["id", "state_tests6", 1, "contenedorPeque"], ["id", "B6", 1, "button_enabled_motors", 2, "margin", "4.5px 0"], ["id", "batteries", 1, "card", "border-warning", "bg-transparent", "text-center"], [1, "row"], [1, "col-sm"], [1, "bateria"], [1, "puntaBateria"], [1, "contenedorBateria", "card", "border-warning", "bg-transparent"], [1, "carga"]], template: function EstadoPestaniaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "0 &degC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Speed: 0 RPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Current: 0 A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Enable All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n\tmargin: 0;\n\t\n\tbackground: #161616 !important;   \n\tpadding:0.25em;\n}\n.card[_ngcontent-%COMP%] {\n\tpadding: 29px;\n\tborder-radius: 20px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n\n\t\n}\n#stateTests[_ngcontent-%COMP%] {\n\theight: 65vh;\n\t\t\n\tbackground-repeat: no-repeat;\n\tbackground-position-x: center;\n}\n#batteries[_ngcontent-%COMP%] {\n\theight: 30vh;\n}\n.button_enabled_motors[_ngcontent-%COMP%] {\n\tbackground: #449850;\n\tborder: 0;\n\t\n\twidth: 100%;\n\tdisplay: block;\n\tcursor: pointer;\n\tborder-radius: 0.25em;\n\t\n}\n.button_enabled_motors[_ngcontent-%COMP%]:active {\n\tbackground-color: #1d4e25;\n}\n.contenedorPeque[_ngcontent-%COMP%] {\n\tz-index: 4;\n\theight: 85px;\n\twidth: 150px;\n\tposition: absolute;\n\tpadding: 0 9px;\n\tborder-radius: 0.25em;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.41);\n\tmargin: auto;\n}\n.contenedorPeque[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n\tmargin: 0 auto;\n\ttext-align: center;\n\tdisplay: block;\n}\n#state_tests[_ngcontent-%COMP%] {\n\ttop: 15%;\n\t\n}\n#state_tests1[_ngcontent-%COMP%] {\n\ttop: 45%;\n\t\n}\n#state_tests2[_ngcontent-%COMP%] {\n\ttop: 70%;\n\t\n}\n#state_tests3[_ngcontent-%COMP%] {\n\ttop: 15%;\n\tright: 25px;\n}\n#state_tests4[_ngcontent-%COMP%] {\n\ttop: 45%;\n\tright: 25px;\n}\n#state_tests5[_ngcontent-%COMP%] {\n\tfloat: right;\n\ttop: 70%;\n\tright: 25px;\n}\n#state_tests6[_ngcontent-%COMP%] {\n\ttop: 80%;\n\tright: 278px;\n\theight: 42px;\n}\n.carga[_ngcontent-%COMP%] {\n\twidth: auto;\n\theight: 10%;\n\tbox-shadow: 0px 0px 2px rgba(0, 0, 0, 0.41);\n\t\n}\n.row[_ngcontent-%COMP%]   .contenedorBateria[_ngcontent-%COMP%] {\n\tborder-width: thick;\n\tpadding: 0;\n\theight: 95%;\n\tbackground: rgb(33, 37, 41);\n\tbackground: linear-gradient(\n\t\t0deg,\n\t\trgba(33, 37, 41, 1) 0%,\n\t\trgba(228, 181, 3, 1) 100%\n\t);\n}\n.puntaBateria[_ngcontent-%COMP%] {\n\tmargin: auto;\n\tjustify-content: space-evenly;\n\twidth: 35px;\n\tbackground: #e4b503;\n\theight: 5%;\n\tpadding: 0;\n}\n.row[_ngcontent-%COMP%] {\n\theight: 100%;\n}\n.bateria[_ngcontent-%COMP%] {\n\theight: 100%;\n\twidth: 50%;\n}\n.card[_ngcontent-%COMP%]{\n\tborder-radius: 8px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvZXN0YWRvL2VzdGFkby1wZXN0YW5pYS9lc3RhZG8tcGVzdGFuaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsOEJBQThCO0NBQzlCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw0Q0FBNEM7O0NBRTVDLDZIQUE2SDtBQUM5SDtBQUNBO0NBQ0MsWUFBWTtDQUNaO3VDQUNzQztDQUN0Qyw0QkFBNEI7Q0FDNUIsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsY0FBYztDQUNkLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQjtpQkFDZ0I7QUFDakI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsNENBQTRDO0NBQzVDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFFBQVE7Q0FDUixjQUFjO0FBQ2Y7QUFDQTtDQUNDLFFBQVE7Q0FDUixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFFBQVE7Q0FDUixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFFBQVE7Q0FDUixXQUFXO0FBQ1o7QUFDQTtDQUNDLFFBQVE7Q0FDUixXQUFXO0FBQ1o7QUFDQTtDQUNDLFlBQVk7Q0FDWixRQUFRO0NBQ1IsV0FBVztBQUNaO0FBQ0E7Q0FDQyxRQUFRO0NBQ1IsWUFBWTtDQUNaLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCwyQ0FBMkM7Q0FDM0Msa0NBQWtDO0FBQ25DO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0I7Ozs7RUFJQztBQUNGO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFVBQVU7QUFDWDtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtBQUNYO0FBQ0E7Q0FDQztBQUNEIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvZXN0YWRvL2VzdGFkby1wZXN0YW5pYS9lc3RhZG8tcGVzdGFuaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuXHRtYXJnaW46IDA7XG5cdC8qaGVpZ2h0OiA4MHZoOyovXG5cdGJhY2tncm91bmQ6ICMxNjE2MTYgIWltcG9ydGFudDsgICBcblx0cGFkZGluZzowLjI1ZW07XG59XG4uY2FyZCB7XG5cdHBhZGRpbmc6IDI5cHg7XG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuXG5cdC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2VsZWN0cmljYXllbGVjdHJvbmljYS51bmlhbmRlcy5lZHUuY28vc2l0ZXMvZGVmYXVsdC9maWxlcy9lc3R1ZGlhbnRlcy9Sb2JvdC1Sb2JvY29sLmpwZWcpOyAqL1xufVxuI3N0YXRlVGVzdHMge1xuXHRoZWlnaHQ6IDY1dmg7XG5cdC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL1xuXHRcdC4vLi8uL2Fzc2V0cy9Sb3Zlcl9pY29uX3N0YXR1cy5wbmcpOyovXHRcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG59XG4jYmF0dGVyaWVzIHtcblx0aGVpZ2h0OiAzMHZoO1xufVxuXG4uYnV0dG9uX2VuYWJsZWRfbW90b3JzIHtcblx0YmFja2dyb3VuZDogIzQ0OTg1MDtcblx0Ym9yZGVyOiAwO1xuXHQvKmNvbG9yOiNmZmY7Ki9cblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcblx0LyptYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzozcHg7Ki9cbn1cbi5idXR0b25fZW5hYmxlZF9tb3RvcnM6YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzFkNGUyNTtcbn1cbi5jb250ZW5lZG9yUGVxdWUge1xuXHR6LWluZGV4OiA0O1xuXHRoZWlnaHQ6IDg1cHg7XG5cdHdpZHRoOiAxNTBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwYWRkaW5nOiAwIDlweDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNWVtO1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQxKTtcblx0bWFyZ2luOiBhdXRvO1xufVxuLmNvbnRlbmVkb3JQZXF1ZSBsYWJlbCB7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuI3N0YXRlX3Rlc3RzIHtcblx0dG9wOiAxNSU7XG5cdC8qIGxlZnQ6IDUlOyAqL1xufVxuI3N0YXRlX3Rlc3RzMSB7XG5cdHRvcDogNDUlO1xuXHQvKiBsZWZ0OiAyNXB4OyAqL1xufVxuI3N0YXRlX3Rlc3RzMiB7XG5cdHRvcDogNzAlO1xuXHQvKiBsZWZ0OiAyNXB4OyAqL1xufVxuI3N0YXRlX3Rlc3RzMyB7XG5cdHRvcDogMTUlO1xuXHRyaWdodDogMjVweDtcbn1cbiNzdGF0ZV90ZXN0czQge1xuXHR0b3A6IDQ1JTtcblx0cmlnaHQ6IDI1cHg7XG59XG4jc3RhdGVfdGVzdHM1IHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHR0b3A6IDcwJTtcblx0cmlnaHQ6IDI1cHg7XG59XG4jc3RhdGVfdGVzdHM2IHtcblx0dG9wOiA4MCU7XG5cdHJpZ2h0OiAyNzhweDtcblx0aGVpZ2h0OiA0MnB4O1xufVxuLmNhcmdhIHtcblx0d2lkdGg6IGF1dG87XG5cdGhlaWdodDogMTAlO1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xuXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xufVxuLnJvdyAuY29udGVuZWRvckJhdGVyaWEge1xuXHRib3JkZXItd2lkdGg6IHRoaWNrO1xuXHRwYWRkaW5nOiAwO1xuXHRoZWlnaHQ6IDk1JTtcblx0YmFja2dyb3VuZDogcmdiKDMzLCAzNywgNDEpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0MGRlZyxcblx0XHRyZ2JhKDMzLCAzNywgNDEsIDEpIDAlLFxuXHRcdHJnYmEoMjI4LCAxODEsIDMsIDEpIDEwMCVcblx0KTtcbn1cbi5wdW50YUJhdGVyaWEge1xuXHRtYXJnaW46IGF1dG87XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHR3aWR0aDogMzVweDtcblx0YmFja2dyb3VuZDogI2U0YjUwMztcblx0aGVpZ2h0OiA1JTtcblx0cGFkZGluZzogMDtcbn1cbi5yb3cge1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4uYmF0ZXJpYSB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDUwJTtcbn1cbi5jYXJke1xuXHRib3JkZXItcmFkaXVzOiA4cHhcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoPestaniaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estado-pestania',
                templateUrl: './estado-pestania.component.html',
                styleUrls: ['./estado-pestania.component.css']
            }]
    }], function () { return [{ type: _estado_service__WEBPACK_IMPORTED_MODULE_1__["EstadoService"] }]; }, null); })();
function refreshLevel(level, bat) {
    level = level + 2.6;
    document.getElementById("level" + bat).style.setProperty('--acid-height', (level * document.getElementById("battery").clientHeight) + "px");
    level = level - 2.6;
    if (level < 0.25) {
        //document.body.style.setProperty('--background-color', "#c0392b");
        let color = 'rgba(192, 57, 43';
        $("#ola1_" + bat).css({ 'fill': color + ', 0.3)' });
        $("#ola2_" + bat).css({ 'fill': color + ', 0.5)' });
        $("#ola3_" + bat).css({ 'fill': color + ')' });
        $("#level" + bat).css({ 'background': color + ')' });
    }
    else if (level < 0.5) {
        //document.body.style.setProperty('--background-color', "#f39c12");
        let color = 'rgba(243, 156, 18';
        $("#ola1_" + bat).css({ 'fill': color + ', 0.3)' });
        $("#ola2_" + bat).css({ 'fill': color + ', 0.5)' });
        $("#ola3_" + bat).css({ 'fill': color + ')' });
        $("#level" + bat).css({ 'background': color + ')' });
    }
    else {
        //document.body.style.setProperty('--background-color', "#27ae60");
        let color = 'rgba(39, 174, 96';
        $("#ola1_" + bat).css({ 'fill': color + ', 0.3)' });
        $("#ola2_" + bat).css({ 'fill': color + ', 0.5)' });
        $("#ola3_" + bat).css({ 'fill': color + ')' });
        $("#level" + bat).css({ 'background': color + ')' });
    }
}
//refreshLevel(0.9,0)
//refreshLevel(0.4,1)
//refreshLevel(0.2,2)
function changeButtonStatus(nBut, state) {
    if (state == false) {
        $("#B" + nBut).attr('class', 'button_disabled_motors');
        $("#B" + nBut).html("Disabled");
        $("#B" + nBut).attr('onclick', 'enviarToggle(this.id, true)');
    }
    else {
        $("#B" + nBut).attr('class', 'button_enabled_motors');
        $("#B" + nBut).html("Enabled");
        $("#B" + nBut).attr('onclick', 'enviarToggle(this.id, false)');
    }
}
//*************************
const TOGGLE_MOT_STATUS = 0;
const CURRENT_TH = 10;
const TEMP_TH = 50;


/***/ }),

/***/ "F+pO":
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
  \*********************************************************/
/*! exports provided: AuthLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginComponent", function() { return AuthLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "bOuM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "qXBG");







class AuthLoginComponent {
    constructor(formBuilder, toastrService, authService) {
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.authService = authService;
    }
    login(user) {
        this.authService.login(user);
        // this.toastrService.success('Successfully login')
    }
    ngOnInit() {
        this.userForm = this.formBuilder.group({
            //name: ['', [Validators.required]],
            //password: ['', [Validators.required]],
            role: ['ROVER', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.user = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.roles = ['ROVER', 'SUBMARINO', 'LUNABOT'];
    }
}
AuthLoginComponent.ɵfac = function AuthLoginComponent_Factory(t) { return new (t || AuthLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLoginComponent, selectors: [["app-auth-login"]], decls: 37, vars: 0, consts: [["id", "projects_container", 1, "container-fluid"], [1, "card-group", "mb-3"], ["id", "rover_card", 1, "card", "border-warning"], ["src", "/assets/Home/Rover.png", "id", "imgRover", "alt", "Rover", 1, "card-img-top"], [1, "card-body", "text-center"], [1, "card-title", "text-light"], [1, "card-text"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "click"], [1, "card-footer"], ["id", "active", 1, "text-light"], ["id", "submarine_card", 1, "card", "border-warning"], ["src", "/assets/Home/Submarino.png", "id", "imgSubmarino", "alt", "Submarino", 1, "card-img-top"], ["id", "active", 1, "text-muted"], ["id", "lunabot_card", 1, "card", "border-warning"], ["src", "/assets/LUNABOT.png", "id", "imgLunabot", "alt", "Lunabot", 1, "card-img-top"]], template: function AuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ROVERA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthLoginComponent_Template_button_click_10_listener() { return ctx.login("ROVER"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Active now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SUBMARINE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthLoginComponent_Template_button_click_21_listener() { return ctx.login("SUBMARINO"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active 2 hours ago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "LUNABOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthLoginComponent_Template_button_click_32_listener() { return ctx.login("LUNABOT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enter here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Active 3 minutes ago.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#rover_card[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  \n  \n  \n  \n  \n}\n\n#submarine_card[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  \n  \n  \n  \n}\n\n#lunabot_card[_ngcontent-%COMP%]\n{\n  background-color: transparent;\n  \n  \n  \n  \n  \n}\n\n#active[_ngcontent-%COMP%]\n{\n  font-family: Helvetica;\n}\n\n\n\n.card[_ngcontent-%COMP%]\n{\n  border: 6px solid yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLWxvZ2luL2F1dGgtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsK0JBQStCO0VBQy9CLGdEQUFnRDtBQUNsRDs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDs7RUFFRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGgtbG9naW4vYXV0aC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdmVyX2NhcmRcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMSk7ICovXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDEpOyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMik7ICovXG4gIC8qIHRleHQtZW1waGFzaXMtY29sb3I6IGdyZXk7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC41KTsgKi9cbn1cblxuI3N1Ym1hcmluZV9jYXJkXG57XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEpOyAqL1xuICAvKiBmaWx0ZXI6IGludmVydCgxKTsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OyAqL1xuICAvKiB3aWR0aDogMTAxJTsgKi9cbn1cblxuI2x1bmFib3RfY2FyZFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogLXdlYmtpdC1maWx0ZXI6IGludmVydCgxKTsgKi9cbiAgLyogZmlsdGVyOiBpbnZlcnQoMSk7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICBsaWdodGdyZXk7ICovXG4gIC8qIGhlaWdodDogNTAlOyAqL1xuICAvKiB3aWR0aDogODAlOyAqL1xufVxuXG4jYWN0aXZlXG57XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbi8qICNwcm9qZWN0c19jb250YWluZXJcbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmZpbGxcbntcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0gKi9cblxuLmNhcmRcbntcbiAgYm9yZGVyOiA2cHggc29saWQgeWVsbG93O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-login',
                templateUrl: './auth-login.component.html',
                styleUrls: ['./auth-login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Fii3":
/*!**************************************************************!*\
  !*** ./src/app/submarino/navegacion/navegacion.component.ts ***!
  \**************************************************************/
/*! exports provided: NavegacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegacionComponent", function() { return NavegacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class NavegacionComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavegacionComponent.ɵfac = function NavegacionComponent_Factory(t) { return new (t || NavegacionComponent)(); };
NavegacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavegacionComponent, selectors: [["app-navegacion"]], decls: 2, vars: 0, template: function NavegacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " navegacion works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1hcmluby9uYXZlZ2FjaW9uL25hdmVnYWNpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavegacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navegacion',
                templateUrl: './navegacion.component.html',
                styleUrls: ['./navegacion.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Gm9s":
/*!********************************************************************************!*\
  !*** ./src/app/rover/brazo/analisis-operacion/analisis-operacion.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnalisisOperacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisOperacionComponent", function() { return AnalisisOperacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AnalisisOperacionComponent {
    constructor() {
        this.min_value = 0;
        this.max_value = 100;
        this.plan_value = 70;
        this.actual_value = 35;
    }
    ngOnInit() {
    }
}
AnalisisOperacionComponent.ɵfac = function AnalisisOperacionComponent_Factory(t) { return new (t || AnalisisOperacionComponent)(); };
AnalisisOperacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalisisOperacionComponent, selectors: [["app-analisis-operacion"]], decls: 16, vars: 12, consts: [[1, "table", "table-borderless"], ["scope", "row"], [1, "text-center", "col-6", 2, "margin-left", "0px", "margin-right", "0px", "padding-left", "0px", "padding-right", "0px"], [1, "progress"], ["id", "bar-plan", "role", "progressbar", 1, "progress-bar"], ["id", "bar-actual", "role", "progressbar", 1, "progress-bar"]], template: function AnalisisOperacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actual: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "35%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.plan_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.plan_value)("aria-valuemin", ctx.min_value)("aria-valuemax", ctx.max_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.actual_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.actual_value)("aria-valuemin", ctx.min_value)("aria-valuemax", ctx.max_value);
    } }, styles: ["#bar-plan[_ngcontent-%COMP%] {\n    background-color: green;\n}\n\n#bar-actual[_ngcontent-%COMP%] {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYW5hbGlzaXMtb3BlcmFjaW9uL2FuYWxpc2lzLW9wZXJhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvYnJhem8vYW5hbGlzaXMtb3BlcmFjaW9uL2FuYWxpc2lzLW9wZXJhY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jhci1wbGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuI2Jhci1hY3R1YWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalisisOperacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analisis-operacion',
                templateUrl: './analisis-operacion.component.html',
                styleUrls: ['./analisis-operacion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I3GE":
/*!*********************************************!*\
  !*** ./src/app/rover/brazo/brazo.module.ts ***!
  \*********************************************/
/*! exports provided: BrazoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoModule", function() { return BrazoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brazo-pestania/brazo-pestania.component */ "tMnQ");
/* harmony import */ var _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brazo-cinematica-directa/brazo-cinematica-directa.component */ "npJB");
/* harmony import */ var _brazo_coordenadas_brazo_coordenadas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brazo-coordenadas/brazo-coordenadas.component */ "i9k9");
/* harmony import */ var _live_live_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live/live.component */ "cd5F");
/* harmony import */ var _sensor_presion_sensor_presion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensor-presion/sensor-presion.component */ "TUiQ");
/* harmony import */ var _analisis_operacion_analisis_operacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analisis-operacion/analisis-operacion.component */ "Gm9s");
/* harmony import */ var _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on-off/on-off.component */ "UFom");
/* harmony import */ var _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brazo-cinematica-inversa-horizontal/brazo-cinematica-inversa-horizontal.component */ "eWDS");
/* harmony import */ var _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brazo-cinematica-inversa-vertical/brazo-cinematica-inversa-vertical.component */ "DaPl");
/* harmony import */ var _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brazo-cinematica-inversa-rotacion/brazo-cinematica-inversa-rotacion.component */ "po/w");













class BrazoModule {
}
BrazoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BrazoModule });
BrazoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BrazoModule_Factory(t) { return new (t || BrazoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrazoModule, { declarations: [_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"], _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_3__["BrazoCinematicaDirectaComponent"], _brazo_coordenadas_brazo_coordenadas_component__WEBPACK_IMPORTED_MODULE_4__["BrazoCoordenadasComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"], _sensor_presion_sensor_presion_component__WEBPACK_IMPORTED_MODULE_6__["SensorPresionComponent"], _analisis_operacion_analisis_operacion_component__WEBPACK_IMPORTED_MODULE_7__["AnalisisOperacionComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_8__["OnOffComponent"], _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BrazoCinematicaInversaHorizontalComponent"], _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BrazoCinematicaInversaVerticalComponent"], _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_11__["BrazoCinematicaInversaRotacionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"], _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_3__["BrazoCinematicaDirectaComponent"], _brazo_coordenadas_brazo_coordenadas_component__WEBPACK_IMPORTED_MODULE_4__["BrazoCoordenadasComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"], _sensor_presion_sensor_presion_component__WEBPACK_IMPORTED_MODULE_6__["SensorPresionComponent"], _analisis_operacion_analisis_operacion_component__WEBPACK_IMPORTED_MODULE_7__["AnalisisOperacionComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_8__["OnOffComponent"], _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BrazoCinematicaInversaHorizontalComponent"], _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BrazoCinematicaInversaVerticalComponent"], _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_11__["BrazoCinematicaInversaRotacionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"], _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_3__["BrazoCinematicaDirectaComponent"], _brazo_coordenadas_brazo_coordenadas_component__WEBPACK_IMPORTED_MODULE_4__["BrazoCoordenadasComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"], _sensor_presion_sensor_presion_component__WEBPACK_IMPORTED_MODULE_6__["SensorPresionComponent"], _analisis_operacion_analisis_operacion_component__WEBPACK_IMPORTED_MODULE_7__["AnalisisOperacionComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_8__["OnOffComponent"], _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BrazoCinematicaInversaHorizontalComponent"], _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BrazoCinematicaInversaVerticalComponent"], _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_11__["BrazoCinematicaInversaRotacionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"], _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_3__["BrazoCinematicaDirectaComponent"], _brazo_coordenadas_brazo_coordenadas_component__WEBPACK_IMPORTED_MODULE_4__["BrazoCoordenadasComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"], _sensor_presion_sensor_presion_component__WEBPACK_IMPORTED_MODULE_6__["SensorPresionComponent"], _analisis_operacion_analisis_operacion_component__WEBPACK_IMPORTED_MODULE_7__["AnalisisOperacionComponent"], _on_off_on_off_component__WEBPACK_IMPORTED_MODULE_8__["OnOffComponent"], _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BrazoCinematicaInversaHorizontalComponent"], _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BrazoCinematicaInversaVerticalComponent"], _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_11__["BrazoCinematicaInversaRotacionComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-login/auth-login.component */ "F+pO");



class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 1, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-auth-login");
    } }, directives: [_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_1__["AuthLoginComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]\n{\n    height: 100%;\n}\n.fill-height[_ngcontent-%COMP%]\n{\n    min-height: 100%;\n    height:auto !important; \n    height: 100%; \n}\n#container[_ngcontent-%COMP%]\n{\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixzQkFBc0IsRUFBRSxrQkFBa0I7SUFDMUMsWUFBWSxFQUFFLGtCQUFrQjtBQUNwQztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkkiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZmlsbC1oZWlnaHRcbntcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDphdXRvICFpbXBvcnRhbnQ7IC8qIGNyb3NzLWJyb3dzZXIgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIGNyb3NzLWJyb3dzZXIgKi9cbn1cblxuI2NvbnRhaW5lclxue1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qICRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTgwMDogIzM0M2E0MDtcblxuJHJlZDogI2RjMzU0NTtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMwMDY2MDA7XG4kY3lhbjogIzE3YTJiODtcblxuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkZ3JlZW4sXG4gIHNlY29uZGFyeTogJGdyYXktNjAwLFxuICBzdWNjZXNzOiAkZ3JlZW4sXG4gIGluZm86ICRjeWFuLFxuICB3YXJuaW5nOiAkY3lhbixcbiAgZGFuZ2VyOiAkcmVkLFxuICBsaWdodDogJGdyYXktMTAwLFxuICBkYXJrOiAkZ3JheS04MDBcbik7ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M2sP":
/*!**************************************************************!*\
  !*** ./src/app/rover/sensorica/station/station.component.ts ***!
  \**************************************************************/
/*! exports provided: StationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationComponent", function() { return StationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class StationComponent {
    constructor() { }
    ngOnInit() {
    }
}
StationComponent.ɵfac = function StationComponent_Factory(t) { return new (t || StationComponent)(); };
StationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StationComponent, selectors: [["app-station"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "EVA_table"], ["id", "EVA_1_1"], ["disabled", "", "id", "amb_temp", "name", "field1"], ["disabled", "", "id", "amb_hum", "name", "field2"], ["disabled", "", "id", "wind_vel", "name", "field1"], ["disabled", "", "id", "wind_dir", "name", "field1"], ["src", "../../../assets/Sensors/anemometer.gif", "alt", "Anemometer img", "width", "10px", 1, "card-img-top"]], template: function StationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Ambient Temperature: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ambiente Moisture: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Wind Velocity: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Wind Direction: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["label[_ngcontent-%COMP%]\n{\n\tfont-family: Helvetica;\n}\n\n#sensors_measurements[_ngcontent-%COMP%]\n{\n\t\n\theight: 470px;\n\t\n\t\n\tpadding:2%;\n\ttop: 0px;\n\t\n\t\n\tborder-radius: 20px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n\tbackground: #00000020\n}\n.sensors_measurements_title[_ngcontent-%COMP%]\n{\n\tposition: relative;\n\ttop: 0px;\n\ttext-align: center\n}\n.sensors_measurements_box[_ngcontent-%COMP%]\n{\n\ttext-align: center;\n\tmargin-top: 10px;\n}\n.sensors_measurements_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\tdisplay: block;\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\twidth: 49%;\n\tpadding: 3px;\n\tfont-size: 16px;\n\tfont-family: Helvetica;\n\tborder-radius: 6px;\n\t-webkit-border-radius:6px;\n\t-moz-border-radius:6px;\n\tborder: 2px solid #fff;\n\tbox-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n}\n.sensors_measurements_box_2[_ngcontent-%COMP%]\n{\n\ttext-align: center;\n}\n.sensors_measurements_box_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\tdisplay: block;\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\twidth: 49%;\n\tpadding: 3px;\n\tfont-size: 16px;\n\tfont-family: Helvetica;\n\tborder-radius: 6px;\n\t-webkit-border-radius:6px;\n\t-moz-border-radius:6px;\n\tborder: 2px solid #fff;\n\tbox-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n\t-webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);\n}\n.sensors_measurements_box_title[_ngcontent-%COMP%]\n{\n\tdisplay: inline-block;\n\tmargin-right: 10%;\n\ttext-align: left;\n}\n#amb_temp[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n#amb_hum[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n#wind_vel[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n#wind_dir[_ngcontent-%COMP%]\n{\n\tbackground: white;\n\tcolor:black;\n\twidth: 100%;\n\tdisplay: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL3N0YXRpb24vc3RhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLHNCQUFzQjtBQUN2QjtBQUNBLHlCQUF5QjtBQUN6Qjs7Q0FFQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyx3QkFBd0I7Q0FDeEIsVUFBVTtDQUNWLFFBQVE7Q0FDUixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUM7QUFDRDtBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1I7QUFDRDtBQUNBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLFlBQVk7Q0FDWixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixpREFBaUQ7Q0FDakQsc0RBQXNEO0NBQ3RELHlEQUF5RDtBQUMxRDtBQUNBOztDQUVDLGtCQUFrQjtBQUNuQjtBQUNBOztDQUVDLGNBQWM7Q0FDZCxzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGlEQUFpRDtDQUNqRCxzREFBc0Q7Q0FDdEQseURBQXlEO0FBQzFEO0FBQ0E7O0NBRUMscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yb3Zlci9zZW5zb3JpY2Evc3RhdGlvbi9zdGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbFxue1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuLyogU2Vuc29yIG1lYXN1cmVtZW50cy4gKi9cbiNzZW5zb3JzX21lYXN1cmVtZW50c1xue1xuXHQvKiB6LWluZGV4OiA0OyAqL1xuXHRoZWlnaHQ6IDQ3MHB4O1xuXHQvKiB3aWR0aDogY2FsYyg0MHZ3IC0gNCUgLSAwcHgpOyAqL1xuXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG5cdHBhZGRpbmc6MiU7XG5cdHRvcDogMHB4O1xuXHQvKiBib3R0b206IDA7ICovXG5cdC8qIGxlZnQ6IDUwcHg7ICovXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwMjBcbn1cbi5zZW5zb3JzX21lYXN1cmVtZW50c190aXRsZVxue1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbi5zZW5zb3JzX21lYXN1cmVtZW50c19ib3hcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX2JveCBpbnB1dFxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHdpZHRoOiA0OSU7XG5cdHBhZGRpbmc6IDNweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czo2cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czo2cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX2JveF8yXG57XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZW5zb3JzX21lYXN1cmVtZW50c19ib3hfMiBpbnB1dFxue1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHdpZHRoOiA0OSU7XG5cdHBhZGRpbmc6IDNweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czo2cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czo2cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG5cdC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xufVxuLnNlbnNvcnNfbWVhc3VyZW1lbnRzX2JveF90aXRsZVxue1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1yaWdodDogMTAlO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuI2FtYl90ZW1wXG57XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjpibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNhbWJfaHVtXG57XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRjb2xvcjpibGFjaztcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiN3aW5kX3ZlbFxue1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6YmxhY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jd2luZF9kaXJcbntcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOmJsYWNrO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-station',
                templateUrl: './station.component.html',
                styleUrls: ['./station.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MzDT":
/*!*************************************************!*\
  !*** ./src/app/lunabot/prueba/prueba.module.ts ***!
  \*************************************************/
/*! exports provided: PruebaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaModule", function() { return PruebaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _prueba_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prueba.component */ "ohSQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");





class PruebaModule {
}
PruebaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PruebaModule });
PruebaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PruebaModule_Factory(t) { return new (t || PruebaModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PruebaModule, { declarations: [_prueba_component__WEBPACK_IMPORTED_MODULE_2__["PruebaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_prueba_component__WEBPACK_IMPORTED_MODULE_2__["PruebaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_prueba_component__WEBPACK_IMPORTED_MODULE_2__["PruebaComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_prueba_component__WEBPACK_IMPORTED_MODULE_2__["PruebaComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HomeViewComponent {
}
HomeViewComponent.ɵfac = function HomeViewComponent_Factory(t) { return new (t || HomeViewComponent)(); };
HomeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeViewComponent, selectors: [["home"]], decls: 0, vars: 0, template: function HomeViewComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "SBGc":
/*!*****************************************************************!*\
  !*** ./src/app/rover/traccion/telemetry/telemetry.component.ts ***!
  \*****************************************************************/
/*! exports provided: TelemetryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelemetryComponent", function() { return TelemetryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class TelemetryComponent {
    constructor() { }
    ngOnInit() {
    }
}
TelemetryComponent.ɵfac = function TelemetryComponent_Factory(t) { return new (t || TelemetryComponent)(); };
TelemetryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TelemetryComponent, selectors: [["app-telemetry"]], decls: 54, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col"], ["disabled", "", "id", "dist_x", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "dist_y", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "azimuth_gui", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "l_speed_gui", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "PWM_I", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "PWM_D", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "teering_gui", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"], ["disabled", "", "id", "sensibilidad_jk_fisico", "name", "field1", 2, "background", "white", "color", "black", "width", "100%", "display", "inline-block"]], template: function TelemetryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Telemetry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Odometry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Distance 'x' from point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Distance 'y' from point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " IMU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " IMU Azimuth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lineal Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PMW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Left PWM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Right PWM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Steering Speed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Physical Joystick Sensibility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Sensibilidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3RyYWNjaW9uL3RlbGVtZXRyeS90ZWxlbWV0cnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TelemetryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-telemetry',
                templateUrl: './telemetry.component.html',
                styleUrls: ['./telemetry.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "zGRK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TRACTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ROS INFO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SENSORS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NAVIGATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TESTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ROVER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUBMARINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LUNABOT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["ROVER"]; };
const _c1 = function () { return ["SUBMARINO"]; };
const _c2 = function () { return ["LUNABOT"]; };
class AppComponent {
    constructor() {
        this.title = 'testapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 31, vars: 26, consts: [["id", "background"], ["id", "top-bar", 1, "navbar", "navbar-dark", "navbar-expand-sm", "navbar-fixed-top"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/robocol-BLANCO.png", 2, "height", "48px", "padding", "2px 10px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fas", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["class", "nav-item", 4, "ngxPermissionsOnly"], [1, "collapse", "navbar-collapse", "flex-grow-1", "text-right"], [1, "navbar-nav", "ml-auto"], [1, "navbar-text"], ["class", "badge badge-warning", 4, "ngxPermissionsOnly"], ["type", "button", "id", "logIn", 1, "btn", "btn-outline-warning"], ["role", "main", 1, "container-fluid", "bg-dark", "pt-2"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/brazo", 1, "nav-link"], [1, "sr-only"], ["routerLinkActive", "active", "routerLink", "/traccion", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/estado", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/estadoTopicos", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/sensorica", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/navegacion", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/pinza", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/estadoSub", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/prueba", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/estadoLuna", 1, "nav-link"], [1, "badge", "badge-warning"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_li_11_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_li_14_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_li_15_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_li_16_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_li_17_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_li_18_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_li_19_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_span_23_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_span_24_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_span_25_Template, 2, 0, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "main", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["#top-bar[_ngcontent-%COMP%]\n{\n  background-color: black;\n  \n  \n}\n.nav-link[_ngcontent-%COMP%]\n{\n  color: goldenrod;\n}\n#page[_ngcontent-%COMP%]\n{\n  width: 100vw;\n  font-family: \"Morris\";\n}\n#background[_ngcontent-%COMP%]\n{\n  background-color: #161616;\n  border: 0px;\n  width:100vw;\n  height:100vh;\n  font-family: \"Morris\";\n}\n#logIn[_ngcontent-%COMP%]\n{\n  font-family: Helvetica;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUVBO0dBQ0c7QUFDSCxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0dBQ0c7QUFHSDs7Ozs7OztHQU9HO0FBRUg7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3AtYmFyXG57XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBmb250LWZhbWlseTogXCJNb3JyaXNcIjsgKi9cbiAgLyogd2lkdGg6IDEwMCU7ICovXG59XG4ubmF2LWxpbmtcbntcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuI3BhZ2VcbntcbiAgd2lkdGg6IDEwMHZ3O1xuICBmb250LWZhbWlseTogXCJNb3JyaXNcIjtcbn1cblxuI2JhY2tncm91bmRcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcbiAgYm9yZGVyOiAwcHg7XG4gIHdpZHRoOjEwMHZ3O1xuICBoZWlnaHQ6MTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vcnJpc1wiO1xufVxuXG4jbG9nSW5cbntcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cblxuLyogLm5hdmJhci10b2dnbGVyXG57ICovXG4vKiB3aWR0aDogNDdweDsgKi9cbi8qIGhlaWdodDogMzRweDsgKi9cbi8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59ICovXG5cblxuLyogLm5hdmJhci10b2dnbGVyIC5saW5lXG57XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn0gKi9cblxuLyogLmN1c3RvbS10b2dnbGVyLm5hdmJhci10b2dnbGVyIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JlZW47XG59ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TUiQ":
/*!************************************************************************!*\
  !*** ./src/app/rover/brazo/sensor-presion/sensor-presion.component.ts ***!
  \************************************************************************/
/*! exports provided: SensorPresionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorPresionComponent", function() { return SensorPresionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class SensorPresionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SensorPresionComponent.ɵfac = function SensorPresionComponent_Factory(t) { return new (t || SensorPresionComponent)(); };
SensorPresionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SensorPresionComponent, selectors: [["app-sensor-presion"]], decls: 2, vars: 0, template: function SensorPresionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sensor-presion works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL3NlbnNvci1wcmVzaW9uL3NlbnNvci1wcmVzaW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensorPresionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sensor-presion',
                templateUrl: './sensor-presion.component.html',
                styleUrls: ['./sensor-presion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TcNi":
/*!***********************************************************!*\
  !*** ./src/app/submarino/navegacion/navegacion.module.ts ***!
  \***********************************************************/
/*! exports provided: NavegacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegacionModule", function() { return NavegacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _navegacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navegacion.component */ "Fii3");




class NavegacionModule {
}
NavegacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavegacionModule });
NavegacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavegacionModule_Factory(t) { return new (t || NavegacionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavegacionModule, { declarations: [_navegacion_component__WEBPACK_IMPORTED_MODULE_2__["NavegacionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavegacionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_navegacion_component__WEBPACK_IMPORTED_MODULE_2__["NavegacionComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UFom":
/*!********************************************************!*\
  !*** ./src/app/rover/brazo/on-off/on-off.component.ts ***!
  \********************************************************/
/*! exports provided: OnOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnOffComponent", function() { return OnOffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class OnOffComponent {
    constructor() { }
    ngOnInit() {
    }
}
OnOffComponent.ɵfac = function OnOffComponent_Factory(t) { return new (t || OnOffComponent)(); };
OnOffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnOffComponent, selectors: [["app-on-off"]], decls: 0, vars: 0, template: function OnOffComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL29uLW9mZi9vbi1vZmYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnOffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-on-off',
                templateUrl: './on-off.component.html',
                styleUrls: ['./on-off.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "W+Sn":
/*!************************************************************!*\
  !*** ./src/app/lunabot/estadoluna/estadoluna.component.ts ***!
  \************************************************************/
/*! exports provided: EstadolunaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadolunaComponent", function() { return EstadolunaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EstadolunaComponent {
    constructor() { }
    ngOnInit() {
    }
}
EstadolunaComponent.ɵfac = function EstadolunaComponent_Factory(t) { return new (t || EstadolunaComponent)(); };
EstadolunaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadolunaComponent, selectors: [["app-estadoluna"]], decls: 2, vars: 0, template: function EstadolunaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " estadoluna works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmFib3QvZXN0YWRvbHVuYS9lc3RhZG9sdW5hLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadolunaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estadoluna',
                templateUrl: './estadoluna.component.html',
                styleUrls: ['./estadoluna.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "LS6v");
/* harmony import */ var _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-login/auth-login.component */ "F+pO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_3__["AuthLoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                declarations: [
                    _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
                    _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_3__["AuthLoginComponent"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _rover_brazo_brazo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rover/brazo/brazo.module */ "I3GE");
/* harmony import */ var _rover_traccion_traccion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rover/traccion/traccion.module */ "8aCB");
/* harmony import */ var _rover_sensorica_sensorica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rover/sensorica/sensorica.module */ "lhf4");
/* harmony import */ var _submarino_estadosub_estadosub_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submarino/estadosub/estadosub.module */ "+IxG");
/* harmony import */ var _submarino_navegacion_navegacion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submarino/navegacion/navegacion.module */ "TcNi");
/* harmony import */ var _submarino_pinza_pinza_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submarino/pinza/pinza.module */ "cEeW");
/* harmony import */ var _lunabot_estadoluna_estadoluna_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lunabot/estadoluna/estadoluna.module */ "0gCJ");
/* harmony import */ var _lunabot_prueba_prueba_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lunabot/prueba/prueba.module */ "MzDT");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "RH9n");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-permissions */ "zGRK");
/* harmony import */ var ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap-slider */ "bKAn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "SVse");




//ROVER



//SUBMARINO



//LUNABOT








//Para los roles

//Para slider






const config = { url: 'http://localhost:4444', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["APP_BASE_HREF"], useValue: '/' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            //ROVER
            _rover_brazo_brazo_module__WEBPACK_IMPORTED_MODULE_4__["BrazoModule"],
            _rover_traccion_traccion_module__WEBPACK_IMPORTED_MODULE_5__["TraccionModule"],
            _rover_sensorica_sensorica_module__WEBPACK_IMPORTED_MODULE_6__["SensoricaModule"],
            //SUBMARINO
            _submarino_estadosub_estadosub_module__WEBPACK_IMPORTED_MODULE_7__["EstadosubModule"],
            _submarino_navegacion_navegacion_module__WEBPACK_IMPORTED_MODULE_8__["NavegacionModule"],
            _submarino_pinza_pinza_module__WEBPACK_IMPORTED_MODULE_9__["PinzaModule"],
            //LUNABOT
            _lunabot_estadoluna_estadoluna_module__WEBPACK_IMPORTED_MODULE_10__["EstadolunaModule"],
            _lunabot_prueba_prueba_module__WEBPACK_IMPORTED_MODULE_11__["PruebaModule"],
            ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_19__["NgxBootstrapSliderModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"].forRoot(config),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        //ROVER
        _rover_brazo_brazo_module__WEBPACK_IMPORTED_MODULE_4__["BrazoModule"],
        _rover_traccion_traccion_module__WEBPACK_IMPORTED_MODULE_5__["TraccionModule"],
        _rover_sensorica_sensorica_module__WEBPACK_IMPORTED_MODULE_6__["SensoricaModule"],
        //SUBMARINO
        _submarino_estadosub_estadosub_module__WEBPACK_IMPORTED_MODULE_7__["EstadosubModule"],
        _submarino_navegacion_navegacion_module__WEBPACK_IMPORTED_MODULE_8__["NavegacionModule"],
        _submarino_pinza_pinza_module__WEBPACK_IMPORTED_MODULE_9__["PinzaModule"],
        //LUNABOT
        _lunabot_estadoluna_estadoluna_module__WEBPACK_IMPORTED_MODULE_10__["EstadolunaModule"],
        _lunabot_prueba_prueba_module__WEBPACK_IMPORTED_MODULE_11__["PruebaModule"],
        ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_19__["NgxBootstrapSliderModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                    _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    //ROVER
                    _rover_brazo_brazo_module__WEBPACK_IMPORTED_MODULE_4__["BrazoModule"],
                    _rover_traccion_traccion_module__WEBPACK_IMPORTED_MODULE_5__["TraccionModule"],
                    _rover_sensorica_sensorica_module__WEBPACK_IMPORTED_MODULE_6__["SensoricaModule"],
                    //SUBMARINO
                    _submarino_estadosub_estadosub_module__WEBPACK_IMPORTED_MODULE_7__["EstadosubModule"],
                    _submarino_navegacion_navegacion_module__WEBPACK_IMPORTED_MODULE_8__["NavegacionModule"],
                    _submarino_pinza_pinza_module__WEBPACK_IMPORTED_MODULE_9__["PinzaModule"],
                    //LUNABOT
                    _lunabot_estadoluna_estadoluna_module__WEBPACK_IMPORTED_MODULE_10__["EstadolunaModule"],
                    _lunabot_prueba_prueba_module__WEBPACK_IMPORTED_MODULE_11__["PruebaModule"],
                    ngx_bootstrap_slider__WEBPACK_IMPORTED_MODULE_19__["NgxBootstrapSliderModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"].forRoot(config),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_18__["NgxPermissionsModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
                        timeOut: 10000,
                        positionClass: 'toast-bottom-right',
                        preventDuplicates: true,
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["APP_BASE_HREF"], useValue: '/' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bEce":
/*!************************************************************!*\
  !*** ./src/app/submarino/estadosub/estadosub.component.ts ***!
  \************************************************************/
/*! exports provided: EstadosubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosubComponent", function() { return EstadosubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EstadosubComponent {
    constructor() { }
    ngOnInit() {
    }
}
EstadosubComponent.ɵfac = function EstadosubComponent_Factory(t) { return new (t || EstadosubComponent)(); };
EstadosubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadosubComponent, selectors: [["app-estadosub"]], decls: 2, vars: 0, template: function EstadosubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " estadosub works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1hcmluby9lc3RhZG9zdWIvZXN0YWRvc3ViLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadosubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estadosub',
                templateUrl: './estadosub.component.html',
                styleUrls: ['./estadosub.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bOuM":
/*!******************************!*\
  !*** ./src/app/auth/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "c6RP":
/*!******************************************************!*\
  !*** ./src/app/rover/sensorica/eva/eva.component.ts ***!
  \******************************************************/
/*! exports provided: EvaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaComponent", function() { return EvaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");



class EvaComponent {
    constructor() {
        this.isCollapsedSample1 = true;
        this.isCollapsedSample1_1 = true;
        this.isCollapsedSample1_2 = true;
        this.isCollapsedSample1_3 = true;
        this.isCollapsedSample1_4 = true;
        this.isCollapsedSample1_5 = true;
        this.isCollapsedSample1_6 = true;
        this.isCollapsedSample2 = true;
        this.isCollapsedSample2_1 = true;
        this.isCollapsedSample2_2 = true;
        this.isCollapsedSample2_3 = true;
        this.isCollapsedSample2_4 = true;
        this.isCollapsedSample2_5 = true;
        this.isCollapsedSample2_6 = true;
        this.isCollapsedSample3 = true;
        this.isCollapsedSample3_1 = true;
        this.isCollapsedSample3_2 = true;
        this.isCollapsedSample3_3 = true;
        this.isCollapsedSample3_4 = true;
        this.isCollapsedSample3_5 = true;
        this.isCollapsedSample3_6 = true;
    }
    ngOnInit() {
    }
}
EvaComponent.ɵfac = function EvaComponent_Factory(t) { return new (t || EvaComponent)(); };
EvaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaComponent, selectors: [["app-eva"]], decls: 173, vars: 42, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "card-transparent"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "aria-controls", "collapseSample1", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseOne", 3, "ngbCollapse"], [1, "card-body"], ["id", "Sample 1"], ["type", "button", "aria-controls", "collapseSample1_1", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_1", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample1_2", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_2", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample1_3", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_3", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample1_4", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_4", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample1_5", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_5", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample1_6", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse1_6", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "Sample 2"], ["type", "button", "aria-controls", "collapseSample2_1", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_1", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2_2", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_2", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2_3", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_3", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2_4", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_4", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2_5", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_5", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample2_6", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse2_6", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "Sample 3"], ["type", "button", "aria-controls", "collapseSample3_1", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_1", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3_2", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_2", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3_3", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_3", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3_4", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_4", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3_5", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_5", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseSample3_6", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapse3_6", 3, "ngbCollapse"]], template: function EvaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_6_listener() { return ctx.isCollapsedSample1 = !ctx.isCollapsedSample1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sample 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_14_listener() { return ctx.isCollapsedSample1_1 = !ctx.isCollapsedSample1_1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sample 1.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Info 1.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_22_listener() { return ctx.isCollapsedSample1_2 = !ctx.isCollapsedSample1_2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sample 1.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Info 1.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_30_listener() { return ctx.isCollapsedSample1_3 = !ctx.isCollapsedSample1_3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Sample 1.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Info 1.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_38_listener() { return ctx.isCollapsedSample1_4 = !ctx.isCollapsedSample1_4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Sample 1.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Info 1.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_46_listener() { return ctx.isCollapsedSample1_5 = !ctx.isCollapsedSample1_5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Sample 1.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Info 1.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_54_listener() { return ctx.isCollapsedSample1_6 = !ctx.isCollapsedSample1_6; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Sample 1.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Info 1.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_63_listener() { return ctx.isCollapsedSample2 = !ctx.isCollapsedSample2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Sample 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_71_listener() { return ctx.isCollapsedSample2_1 = !ctx.isCollapsedSample2_1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Sample 2.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Info 2.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_79_listener() { return ctx.isCollapsedSample2_2 = !ctx.isCollapsedSample2_2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Sample 2.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Info 2.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_87_listener() { return ctx.isCollapsedSample2_3 = !ctx.isCollapsedSample2_3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Sample 2.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Info 2.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_95_listener() { return ctx.isCollapsedSample2_4 = !ctx.isCollapsedSample2_4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Sample 2.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Info 2.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_103_listener() { return ctx.isCollapsedSample2_5 = !ctx.isCollapsedSample2_5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Sample 2.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Info 2.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_111_listener() { return ctx.isCollapsedSample2_6 = !ctx.isCollapsedSample2_6; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Sample 2.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Info 2.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_120_listener() { return ctx.isCollapsedSample3 = !ctx.isCollapsedSample3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Sample 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_128_listener() { return ctx.isCollapsedSample3_1 = !ctx.isCollapsedSample3_1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Sample 3.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Info 3.1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_136_listener() { return ctx.isCollapsedSample3_2 = !ctx.isCollapsedSample3_2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Sample 3.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Info 3.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_144_listener() { return ctx.isCollapsedSample3_3 = !ctx.isCollapsedSample3_3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Sample 3.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Info 3.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_152_listener() { return ctx.isCollapsedSample3_4 = !ctx.isCollapsedSample3_4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Sample 3.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Info 3.4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_160_listener() { return ctx.isCollapsedSample3_5 = !ctx.isCollapsedSample3_5; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Sample 3.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Info 3.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaComponent_Template_button_click_168_listener() { return ctx.isCollapsedSample3_6 = !ctx.isCollapsedSample3_6; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Sample 3.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Info 3.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample1_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample1_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample2_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample2_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedSample3_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedSample3_6);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]], styles: ["label[_ngcontent-%COMP%]\n{\n\tfont-family: Helvetica;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]\n{\n\tborder: 1px solid black;\n\ttext-align: center;\n\tfont-size: 14px;\n\t\n}\ninput[_ngcontent-%COMP%]\n{\n\tpadding: 0;\n\tborder: none;\n\tbackground: none;\n}\n\n#EVA_info[_ngcontent-%COMP%]\n{\n\t\n\t\n\twidth: calc(100vw - 4% - 50px);\n\tposition: absolute;\n\tpadding:1%;\n\t\n\t\n\tleft: 50px;\n\tborder-radius: 20px;\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);\n\tbackground: #00000020;\n\tmargin: auto;\n}\n\n\n#EVA_1_1[_ngcontent-%COMP%]\n{\n\tbackground:indianred;\n}\n#EVA_1_2[_ngcontent-%COMP%]\n{\n\tbackground:lightgreen;\n}\n#EVA_1_3[_ngcontent-%COMP%]\n{\n\tbackground:lightgreen;\n}\n#EVA_1_4[_ngcontent-%COMP%]\n{\n\tbackground:lightgreen;\n}\n#EVA_1_5[_ngcontent-%COMP%]\n{\n\tbackground:lightgreen;\n}\n#EVA_1_6[_ngcontent-%COMP%]\n{\n\tbackground:lightgreen;\n}\n\n#EVA_2_1[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_2_2[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_2_3[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_2_4[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_2_5[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_2_6[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n\n#EVA_3_1[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_3_2[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_3_3[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_3_4[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_3_5[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_3_6[_ngcontent-%COMP%]\n{\n\tbackground:lightblue;\n}\n#EVA_pos[_ngcontent-%COMP%]\n{\n\tbackground:lightyellow;\n}\n\n#EVA_1_1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_1_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_1_3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_1_4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_1_5[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_1_6[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n\n#EVA_2_1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_2_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_2_3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_2_4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_2_5[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_2_6[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n\n#EVA_3_1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_3_2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_3_3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_3_4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_3_5[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_3_6[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n#EVA_pos[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\n\twidth:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL2V2YS9ldmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxzQkFBc0I7QUFDdkI7QUFDQTs7Q0FFQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZix3QkFBd0I7QUFDekI7QUFDQTs7Q0FFQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUVBLE1BQU07QUFDTjs7Q0FFQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQiw0Q0FBNEM7Q0FDNUMscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjtBQUNBOzs7OztHQUtHO0FBRUgsV0FBVztBQUNYOztDQUVDLG9CQUFvQjtBQUNyQjtBQUNBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBOztDQUVDLHFCQUFxQjtBQUN0QjtBQUNBLFdBQVc7QUFDWDs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQTs7Q0FFQyxvQkFBb0I7QUFDckI7QUFDQSxXQUFXO0FBQ1g7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7O0NBRUMsc0JBQXNCO0FBQ3ZCO0FBSUEsV0FBVztBQUNYOztDQUVDLFVBQVU7QUFDWDtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBOztDQUVDLFVBQVU7QUFDWDtBQUNBLFdBQVc7QUFDWDs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBQ0E7O0NBRUMsVUFBVTtBQUNYO0FBRUEsTUFBTTtBQUNOOzs7Ozs7O0dBT0c7QUFHSCx3RUFBd0U7QUFDeEU7OztHQUdHO0FBRUgsOEJBQThCO0FBQzlCOzs7R0FHRztBQUVILHVFQUF1RTtBQUN2RTs7Ozs7Ozs7Ozs7OztHQWFHO0FBRUg7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9yb3Zlci9zZW5zb3JpY2EvZXZhL2V2YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWxcbntcblx0Zm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cbnRhYmxlLCB0aCwgdGRcbntcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHQvKiBsaW5lLWhlaWdodDogMTUwcHg7ICovXG59XG5pbnB1dFxue1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qRVZBKi9cbiNFVkFfaW5mb1xue1xuXHQvKiB6LWluZGV4OiAxOyAqL1xuXHQvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuXHR3aWR0aDogY2FsYygxMDB2dyAtIDQlIC0gNTBweCk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cGFkZGluZzoxJTtcblx0LyogdG9wOiA2MDBweDsgKi9cblx0LyogYm90dG9tOiAwOyAqL1xuXHRsZWZ0OiA1MHB4O1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDIwO1xuXHRtYXJnaW46IGF1dG87XG59XG4vKiAjRVZBX3RhYmxlXG57XG5cdHdpZHRoOjEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOi0yMHB4XG59ICovXG5cbi8qU2FtcGxlIDEqL1xuI0VWQV8xXzFcbntcblx0YmFja2dyb3VuZDppbmRpYW5yZWQ7XG59XG4jRVZBXzFfMlxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XG59XG4jRVZBXzFfM1xue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XG59XG4jRVZBXzFfNFxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XG59XG4jRVZBXzFfNVxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XG59XG4jRVZBXzFfNlxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Z3JlZW47XG59XG4vKlNhbXBsZSAyKi9cbiNFVkFfMl8xXG57XG5cdGJhY2tncm91bmQ6bGlnaHRibHVlO1xufVxuI0VWQV8yXzJcbntcblx0YmFja2dyb3VuZDpsaWdodGJsdWU7XG59XG4jRVZBXzJfM1xue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTtcbn1cbiNFVkFfMl80XG57XG5cdGJhY2tncm91bmQ6bGlnaHRibHVlO1xufVxuI0VWQV8yXzVcbntcblx0YmFja2dyb3VuZDpsaWdodGJsdWU7XG59XG4jRVZBXzJfNlxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTtcbn1cbi8qU2FtcGxlIDMqL1xuI0VWQV8zXzFcbntcblx0YmFja2dyb3VuZDpsaWdodGJsdWU7XG59XG4jRVZBXzNfMlxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTtcbn1cbiNFVkFfM18zXG57XG5cdGJhY2tncm91bmQ6bGlnaHRibHVlO1xufVxuI0VWQV8zXzRcbntcblx0YmFja2dyb3VuZDpsaWdodGJsdWU7XG59XG4jRVZBXzNfNVxue1xuXHRiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTtcbn1cbiNFVkFfM182XG57XG5cdGJhY2tncm91bmQ6bGlnaHRibHVlO1xufVxuI0VWQV9wb3Ncbntcblx0YmFja2dyb3VuZDpsaWdodHllbGxvdztcbn1cblxuXG5cbi8qU2FtcGxlIDEqL1xuI0VWQV8xXzEgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfMV8yIGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4jRVZBXzFfMyBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuI0VWQV8xXzQgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfMV81IGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4jRVZBXzFfNiBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuLypTYW1wbGUgMiovXG4jRVZBXzJfMSBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuI0VWQV8yXzIgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfMl8zIGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4jRVZBXzJfNCBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuI0VWQV8yXzUgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfMl82IGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4vKlNhbXBsZSAzKi9cbiNFVkFfM18xIGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4jRVZBXzNfMiBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuI0VWQV8zXzMgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfM180IGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG4jRVZBXzNfNSBpbnB1dFxue1xuXHR3aWR0aDoxMDAlO1xufVxuI0VWQV8zXzYgaW5wdXRcbntcblx0d2lkdGg6MTAwJTtcbn1cbiNFVkFfcG9zIGlucHV0XG57XG5cdHdpZHRoOjEwMCU7XG59XG5cbi8qaW1nKi9cbi8qICNzYW1wbGVfaW1nXG57XG5cdHotaW5kZXg6IDQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cGFkZGluZzoyJTtcblx0dG9wOiA4MHB4O1xuXHRyaWdodDogNTBweDtcbn0gKi9cblxuXG4vKiBDb250YWluZXIgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBidXR0b24uIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkICovXG4vKiAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xufSAqL1xuXG4vKiBNYWtlIHRoZSBpbWFnZSByZXNwb25zaXZlICovXG4vKiAuY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59ICovXG5cbi8qIFN0eWxlIHRoZSBidXR0b24gYW5kIHBsYWNlIGl0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGNvbnRhaW5lci9pbWFnZSAqL1xuLyogLmNvbnRhaW5lciAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDdweDtcbiAgcGFkZGluZzogMHB4IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn0gKi9cblxuLyogLmNvbnRhaW5lciAuYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eva',
                templateUrl: './eva.component.html',
                styleUrls: ['./eva.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cEeW":
/*!*************************************************!*\
  !*** ./src/app/submarino/pinza/pinza.module.ts ***!
  \*************************************************/
/*! exports provided: PinzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinzaModule", function() { return PinzaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _pinza_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pinza.component */ "fmkQ");




class PinzaModule {
}
PinzaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PinzaModule });
PinzaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PinzaModule_Factory(t) { return new (t || PinzaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PinzaModule, { declarations: [_pinza_component__WEBPACK_IMPORTED_MODULE_2__["PinzaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinzaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_pinza_component__WEBPACK_IMPORTED_MODULE_2__["PinzaComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cd5F":
/*!****************************************************!*\
  !*** ./src/app/rover/brazo/live/live.component.ts ***!
  \****************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class LiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiveComponent.ɵfac = function LiveComponent_Factory(t) { return new (t || LiveComponent)(); };
LiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveComponent, selectors: [["app-live"]], decls: 19, vars: 0, consts: [[1, "row"], [1, "col", "justify-content-center", "text-center"], ["src", "../../../assets/countdown.gif", "alt", "Rocks", "width", "250px", 1, "card-img-top", "bg-black"], [1, "row", "justify-content-center", "text-center"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-danger"]], template: function LiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Photo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Photo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL2xpdmUvbGl2ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live',
                templateUrl: './live.component.html',
                styleUrls: ['./live.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eWDS":
/*!******************************************************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-cinematica-inversa-horizontal/brazo-cinematica-inversa-horizontal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BrazoCinematicaInversaHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoCinematicaInversaHorizontalComponent", function() { return BrazoCinematicaInversaHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BrazoCinematicaInversaHorizontalComponent {
    constructor() {
        this.imageButtons = [
            { src: '../../../../assets/Brazo/Cinematica Inversa/Horizontal/HORIZONTAL inicial.png', name: 'HORIZONTAL inicial' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Horizontal/B activado.png', name: 'B activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Horizontal/F activado.png', name: 'F activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Horizontal/L activado.png', name: 'L activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Horizontal/R activado.png', name: 'R activado' }
        ];
    }
    ngOnInit() {
        this.imageSrc = this.imageButtons[0].src;
    }
    changeImage(imageNameObject) {
        this.imageSrc = imageNameObject.src;
    }
}
BrazoCinematicaInversaHorizontalComponent.ɵfac = function BrazoCinematicaInversaHorizontalComponent_Factory(t) { return new (t || BrazoCinematicaInversaHorizontalComponent)(); };
BrazoCinematicaInversaHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoCinematicaInversaHorizontalComponent, selectors: [["app-brazo-cinematica-inversa-horizontal"]], decls: 29, vars: 1, consts: [[1, "table", "table-borderless", 2, "height", "100%", "background-color", "transparent"], [1, "justify-content-center", "text-center", "align-middle"], [1, "justify-content-center", "text-center", "align-middle", 2, "padding", "0px"], [1, "img-wrapper"], [1, "img-responsive", 3, "src"], [1, "img-overlay"], [1, "td"], [1, "td", "justify-content-center", "text-center", "align-middle"], [1, "btn", "btn-default", "btn-block", 3, "mousedown", "mouseup"]], template: function BrazoCinematicaInversaHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaHorizontalComponent_Template_button_mousedown_12_listener() { return ctx.changeImage(ctx.imageButtons[2]); })("mouseup", function BrazoCinematicaInversaHorizontalComponent_Template_button_mouseup_12_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FRONT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaHorizontalComponent_Template_button_mousedown_17_listener() { return ctx.changeImage(ctx.imageButtons[3]); })("mouseup", function BrazoCinematicaInversaHorizontalComponent_Template_button_mouseup_17_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaHorizontalComponent_Template_button_mousedown_21_listener() { return ctx.changeImage(ctx.imageButtons[4]); })("mouseup", function BrazoCinematicaInversaHorizontalComponent_Template_button_mouseup_21_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaHorizontalComponent_Template_button_mousedown_26_listener() { return ctx.changeImage(ctx.imageButtons[1]); })("mouseup", function BrazoCinematicaInversaHorizontalComponent_Template_button_mouseup_26_listener() { return ctx.changeImage(ctx.imageButtons[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n }\n\n.img-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.img-overlay[_ngcontent-%COMP%]:before {\n  content: ' ';\n  display: block;\n  \n  height: 0%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  opacity: 0;\n}\n\n.td[_ngcontent-%COMP%]{\n  padding: 0px;\n}\n\ntable[_ngcontent-%COMP%] { \n  border-collapse: collapse;\n  margin-bottom: 0vh;\n  margin-top: 0vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLWhvcml6b250YWwvYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLWhvcml6b250YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkRBQTJEO0VBQzNELFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS1ob3Jpem9udGFsL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS1ob3Jpem9udGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gfVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLW92ZXJsYXk6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogYWRqdXN0ICdoZWlnaHQnIHRvIHBvc2l0aW9uIG92ZXJsYXkgY29udGVudCB2ZXJ0aWNhbGx5ICovXG4gIGhlaWdodDogMCU7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50ZHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG50YWJsZSB7IFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAwdmg7XG4gIG1hcmdpbi10b3A6IDB2aDtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoCinematicaInversaHorizontalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-cinematica-inversa-horizontal',
                templateUrl: './brazo-cinematica-inversa-horizontal.component.html',
                styleUrls: ['./brazo-cinematica-inversa-horizontal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fmkQ":
/*!****************************************************!*\
  !*** ./src/app/submarino/pinza/pinza.component.ts ***!
  \****************************************************/
/*! exports provided: PinzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinzaComponent", function() { return PinzaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PinzaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PinzaComponent.ɵfac = function PinzaComponent_Factory(t) { return new (t || PinzaComponent)(); };
PinzaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinzaComponent, selectors: [["app-pinza"]], decls: 2, vars: 0, template: function PinzaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " pinza works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Ym1hcmluby9waW56YS9waW56YS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinzaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pinza',
                templateUrl: './pinza.component.html',
                styleUrls: ['./pinza.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i9k9":
/*!******************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-coordenadas/brazo-coordenadas.component.ts ***!
  \******************************************************************************/
/*! exports provided: BrazoCoordenadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoCoordenadasComponent", function() { return BrazoCoordenadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BrazoCoordenadasComponent {
    constructor() { }
    ngOnInit() {
    }
}
BrazoCoordenadasComponent.ɵfac = function BrazoCoordenadasComponent_Factory(t) { return new (t || BrazoCoordenadasComponent)(); };
BrazoCoordenadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoCoordenadasComponent, selectors: [["app-brazo-coordenadas"]], decls: 49, vars: 0, consts: [[1, "row"], [1, "col"], [2, "margin-bottom", "15px"], [1, "row", "justify-content-center", "text-center"], [2, "margin-right", "15px"], ["disabled", "", "name", "", "value", "25 m", "id", "xDeseada", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], ["disabled", "", "name", "", "value", "25 m", "id", "yDeseada", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], ["disabled", "", "name", "", "value", "25 m", "id", "zDeseada", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], ["disabled", "", "name", "", "value", "ROS ;)", "id", "rosText", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "100%", "height", "100%"], ["disabled", "", "name", "", "value", "25 m", "id", "xActual", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], ["disabled", "", "name", "", "value", "25 m", "id", "yActual", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], ["disabled", "", "name", "", "value", "25 m", "id", "zActual", 1, "justify-content-center", "text-center", 2, "color", "black", "font-size", "15px", "width", "70px", "height", "30px"], [1, "row", 2, "margin-top", "15px"], [2, "width", "80px"], [2, "margin-bottom", "7px", "width", "80px"]], template: function BrazoCoordenadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Coordenadas deseadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Z: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Coordenadas actuales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "X: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Z: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Plan & execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL2JyYXpvLWNvb3JkZW5hZGFzL2JyYXpvLWNvb3JkZW5hZGFzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoCoordenadasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-coordenadas',
                templateUrl: './brazo-coordenadas.component.html',
                styleUrls: ['./brazo-coordenadas.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iUTK":
/*!**************************************************!*\
  !*** ./src/app/lunabot/prueba/prueba.service.ts ***!
  \**************************************************/
/*! exports provided: PruebaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaService", function() { return PruebaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "RH9n");



class PruebaService {
    constructor(socket) {
        this.socket = socket;
        this.currentMensaje = this.socket.fromEvent('mensaje');
    }
    getMensaje() {
        this.socket.emit('getMensaje');
    }
}
PruebaService.ɵfac = function PruebaService_Factory(t) { return new (t || PruebaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
PruebaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PruebaService, factory: PruebaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "kdfX":
/*!****************************************************************!*\
  !*** ./src/app/rover/sensorica/drilling/drilling.component.ts ***!
  \****************************************************************/
/*! exports provided: DrillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrillingComponent", function() { return DrillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sensorica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sensorica.service */ "mHCH");



class DrillingComponent {
    //Define the variables that will contain the joint's current value, which will be display in the html's labels
    // joint_1_value: number;
    // joint_2_value: number;
    // joint_3_value: number;
    // joint_4_value: number;
    // joint_5_value: number;
    // joint_6_value: number;
    // joint_7_value: number;
    // gripper_value: number;
    //Define the variables for the maximum and minimun values of the joints
    // min_value_joint:number = -150;
    // max_value_joint:number = 150;
    //Define the variables for the maximum and minimun values of the gripper
    // min_value_gripper:number = 0;
    // max_value_gripper:number = 100;
    //Define the variables that will play as Subscribers to the BrazoService's variables, so that when they (BrazoService variables) change, these variables (Component) will change too
    // private _joint_1_Sub: Subscription;
    // private _joint_2_Sub: Subscription;
    // private _joint_3_Sub: Subscription;
    // private _joint_4_Sub: Subscription;
    // private _joint_5_Sub: Subscription;
    // private _joint_6_Sub: Subscription;
    // private _joint_7_Sub: Subscription;
    // private _gripper_Sub: Subscription;
    constructor(sensoricaService) {
        this.sensoricaService = sensoricaService;
    }
    ngOnInit() {
        //Define initial values for the variables
        // this.joint_1_value = 0;
        // this.joint_2_value = 0;
        // this.joint_3_value = 0;
        // this.joint_4_value = 0;
        // this.joint_5_value = 0;
        // this.joint_6_value = 0;
        // this.joint_7_value = 0;
        // this.gripper_value = 0;
        //Make the subscribers subscribe to their correspondent BrazoService variable
        // this._joint_1_Sub = this.sensoricaService.joint_1_value.subscribe(value_received => this.joint_1_value = value_received);
        // this._joint_2_Sub = this.sensoricaService.joint_2_value.subscribe(value_received => this.joint_2_value = value_received);
        // this._joint_3_Sub = this.sensoricaService.joint_3_value.subscribe(value_received => this.joint_3_value = value_received);
        // this._joint_4_Sub = this.sensoricaService.joint_4_value.subscribe(value_received => this.joint_4_value = value_received);
        // this._joint_5_Sub = this.sensoricaService.joint_5_value.subscribe(value_received => this.joint_5_value = value_received);
        // this._joint_6_Sub = this.sensoricaService.joint_6_value.subscribe(value_received => this.joint_6_value = value_received);
        // this._joint_7_Sub = this.sensoricaService.joint_7_value.subscribe(value_received => this.joint_7_value = value_received);
        // this._gripper_Sub = this.sensoricaService.gripper_value.subscribe(value_received => this.gripper_value = value_received);
        //We ask for the values of the joints to start the labels
        // this.get_value('joint_1');
        // this.get_value('joint_2');
        // this.get_value('joint_3');
        // this.get_value('joint_4');
        // this.get_value('joint_5');
        // this.get_value('joint_6');
        // this.get_value('joint_7');
        // this.get_value('gripper');
    }
    ngOnDestroy() {
        //When this component is destroyed, the subscribers must unsubscribe
        // this._joint_1_Sub.unsubscribe();
        // this._joint_2_Sub.unsubscribe();
        // this._joint_3_Sub.unsubscribe();
        // this._joint_4_Sub.unsubscribe();
        // this._joint_5_Sub.unsubscribe();
        // this._joint_6_Sub.unsubscribe();
        // this._joint_7_Sub.unsubscribe();
        // this._gripper_Sub.unsubscribe();
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
    get_value(object) {
        this.sensoricaService.get_value(object);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
    change_value(object, action) {
        this.sensoricaService.change_value(object, action);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
    stop_changing_value() {
        this.sensoricaService.stop_changing_value();
    }
}
DrillingComponent.ɵfac = function DrillingComponent_Factory(t) { return new (t || DrillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sensorica_service__WEBPACK_IMPORTED_MODULE_1__["SensoricaService"])); };
DrillingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrillingComponent, selectors: [["app-drilling"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon3", 1, "input-group-text"], ["disabled", "", "type", "text", "id", "basic-url-1", "aria-describedby", "basic-addon3", 1, "form-control"], ["disabled", "", "type", "text", "id", "basic-url-2", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "mousedown", "mouseup"], ["type", "button", 1, "btn", "btn-danger"]], template: function DrillingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Depth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DrillingComponent_Template_button_mousedown_15_listener() { return ctx.change_value("joint_1", "decrease"); })("mouseup", function DrillingComponent_Template_button_mouseup_15_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Drill!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3NlbnNvcmljYS9kcmlsbGluZy9kcmlsbGluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrillingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drilling',
                templateUrl: './drilling.component.html',
                styleUrls: ['./drilling.component.css']
            }]
    }], function () { return [{ type: _sensorica_service__WEBPACK_IMPORTED_MODULE_1__["SensoricaService"] }]; }, null); })();


/***/ }),

/***/ "kmwU":
/*!********************************************************!*\
  !*** ./src/app/rover/sensorica/sensorica.component.ts ***!
  \********************************************************/
/*! exports provided: SensoricaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoricaComponent", function() { return SensoricaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tabs.component */ "siXR");



class SensoricaComponent {
    // public isCollapsedEVA = true;
    // public isCollapsedMeas = false;
    // public isCollapsedAnalysis = true;
    // public isCollapsedDrill = true;
    // public isCollapsedLive = false;
    // public isCollapsedStation = true;
    constructor() { }
    ngOnInit() { }
}
SensoricaComponent.ɵfac = function SensoricaComponent_Factory(t) { return new (t || SensoricaComponent)(); };
SensoricaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SensoricaComponent, selectors: [["app-sensorica"]], decls: 5, vars: 0, consts: [[1, "container-fluider", "px-lg-5"], [1, "row", "mx-lg-n4", "align-items-center"], [1, "col", "py-1", "px-xl-1", "align-self-start"]], template: function SensoricaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]], styles: [".no-gutters[_ngcontent-%COMP%]\n{\n  margin-right: 0;\n  margin-left: 0;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n\n\n\n\n\n\n#button_rotate[_ngcontent-%COMP%]\n{\n  vertical-align:top;\n\ttransform:rotate(7deg);\n  -ms-transform:rotate(-90deg); \n  -moz-transform:rotate(-90deg); \n  -webkit-transform:rotate(-90deg); \n  -o-transform:rotate(-90deg); \n}\n\n#vert[_ngcontent-%COMP%]{\n\theight: auto;\n\tmin-width: auto;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\n\tdisplay: inline-flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\talign-self: center;\n\n  cursor:pointer;\n  height:50px;\n\tmin-width: 100px;\n  position:relative;\n\n\tborder: 1px solid #333;\n\tborder-radius: 5px;\n  padding: 0 10px;\n\n\tfont-size: 20px;\n}\n\ninput[_ngcontent-%COMP%]:hover{box-shadow:0px 0px 4px #fff;}\n\ninput[_ngcontent-%COMP%]:active{top:1px;}\n\nbody[_ngcontent-%COMP%]{background-color:#222;}\n\n.button-container[_ngcontent-%COMP%] {\n\tdisplay: grid;\n\tgrid-gap: 40px;\n\tgrid-template-columns: repeat(3,1fr);\n\tjustify-items: center;\n\twidth: 400px;\n\tpadding: 40px 0;\n\tmargin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL3NlbnNvcmljYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7RUFDZixjQUFjOztFQUVkOztJQUVFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7O0FBR0g7OztHQUdHOztBQUNIOzs7O0dBSUc7O0FBRUg7O0VBRUUsa0JBQWtCO0NBQ25CLHNCQUFzQjtFQUNyQiw0QkFBNEIsRUFBRSxTQUFTO0VBQ3ZDLDZCQUE2QixFQUFFLFlBQVk7RUFDM0MsZ0NBQWdDLEVBQUUsc0JBQXNCO0VBQ3hELDJCQUEyQixFQUFFLFVBQVU7QUFDekM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCOztFQUVqQixjQUFjO0VBQ2QsV0FBVztDQUNaLGdCQUFnQjtFQUNmLGlCQUFpQjs7Q0FFbEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtFQUNqQixlQUFlOztDQUVoQixlQUFlO0FBQ2hCOztBQUVBLFlBQVksMkJBQTJCLENBQUM7O0FBQ3hDLGFBQWEsT0FBTyxDQUFDOztBQUVyQixLQUFLLHFCQUFxQixDQUFDOztBQUUzQjtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsb0NBQW9DO0NBQ3BDLHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osZUFBZTtDQUNmLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3NlbnNvcmljYS9zZW5zb3JpY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ndXR0ZXJzXG57XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgPiAuY29sLFxuICA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuXG4vKiBsYWJlbFxue1xuXHRmb250LWZhbWlseTogSGVsdmV0aWNhO1xufVxuLnNlbnNvcnNcbntcblx0bWFyZ2luLXRvcDogMTVweDtcblx0YmFja2dyb3VuZDogI2RkZGRkZDIwO1xufVxuXG4jbGVmdF9zaWRlXG57XG5cdHdpZHRoOiA1MHZ3O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI3JpZ2h0X3NpZGVcbntcblx0d2lkdGg6IDQ5dnc7XG59ICovXG5cblxuLyogYnV0dG9uXG57XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59ICovXG4vKiBidXR0b24gc3Bhblxue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufSAqL1xuXG4jYnV0dG9uX3JvdGF0ZVxue1xuICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRyYW5zZm9ybTpyb3RhdGUoN2RlZyk7XG4gIC1tcy10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7IC8qIElFIDkgKi9cbiAgLW1vei10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7IC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIC1vLXRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTsgLyogT3BlcmEgKi9cbn1cblxuI3ZlcnR7XG5cdGhlaWdodDogYXV0bztcblx0bWluLXdpZHRoOiBhdXRvO1xufVxuXG5idXR0b24sXG5pbnB1dHtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGhlaWdodDo1MHB4O1xuXHRtaW4td2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuXHRib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcblxuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbmlucHV0OmhvdmVye2JveC1zaGFkb3c6MHB4IDBweCA0cHggI2ZmZjt9XG5pbnB1dDphY3RpdmV7dG9wOjFweDt9XG5cbmJvZHl7YmFja2dyb3VuZC1jb2xvcjojMjIyO31cblxuLmJ1dHRvbi1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLWdhcDogNDBweDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiA0MDBweDtcblx0cGFkZGluZzogNDBweCAwO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensoricaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sensorica',
                templateUrl: './sensorica.component.html',
                styleUrls: ['./sensorica.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lhf4":
/*!*****************************************************!*\
  !*** ./src/app/rover/sensorica/sensorica.module.ts ***!
  \*****************************************************/
/*! exports provided: SensoricaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoricaModule", function() { return SensoricaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _sensorica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensorica.component */ "kmwU");
/* harmony import */ var _eva_eva_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eva/eva.component */ "c6RP");
/* harmony import */ var _measurements_measurements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./measurements/measurements.component */ "8mUX");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analysis/analysis.component */ "/+XW");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station/station.component */ "M2sP");
/* harmony import */ var _live_live_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live/live.component */ "nmw6");
/* harmony import */ var _drilling_drilling_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drilling/drilling.component */ "kdfX");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ "siXR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");













class SensoricaModule {
}
SensoricaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SensoricaModule, bootstrap: [_sensorica_component__WEBPACK_IMPORTED_MODULE_2__["SensoricaComponent"]] });
SensoricaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SensoricaModule_Factory(t) { return new (t || SensoricaModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SensoricaModule, { declarations: [_sensorica_component__WEBPACK_IMPORTED_MODULE_2__["SensoricaComponent"],
        _eva_eva_component__WEBPACK_IMPORTED_MODULE_3__["EvaComponent"],
        _measurements_measurements_component__WEBPACK_IMPORTED_MODULE_4__["MeasurementsComponent"],
        _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisComponent"],
        _station_station_component__WEBPACK_IMPORTED_MODULE_6__["StationComponent"],
        _live_live_component__WEBPACK_IMPORTED_MODULE_7__["LiveComponent"],
        _drilling_drilling_component__WEBPACK_IMPORTED_MODULE_8__["DrillingComponent"],
        _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensoricaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
                ],
                declarations: [
                    _sensorica_component__WEBPACK_IMPORTED_MODULE_2__["SensoricaComponent"],
                    _eva_eva_component__WEBPACK_IMPORTED_MODULE_3__["EvaComponent"],
                    _measurements_measurements_component__WEBPACK_IMPORTED_MODULE_4__["MeasurementsComponent"],
                    _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisComponent"],
                    _station_station_component__WEBPACK_IMPORTED_MODULE_6__["StationComponent"],
                    _live_live_component__WEBPACK_IMPORTED_MODULE_7__["LiveComponent"],
                    _drilling_drilling_component__WEBPACK_IMPORTED_MODULE_8__["DrillingComponent"],
                    _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"]
                ],
                providers: [],
                bootstrap: [_sensorica_component__WEBPACK_IMPORTED_MODULE_2__["SensoricaComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mHCH":
/*!******************************************************!*\
  !*** ./src/app/rover/sensorica/sensorica.service.ts ***!
  \******************************************************/
/*! exports provided: SensoricaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensoricaService", function() { return SensoricaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "RH9n");



class SensoricaService {
    constructor(socket) {
        this.socket = socket;
        //Define the variables that will be listening to the messages comming from the Socket Server
        this.measurements_value = this.socket.fromEvent('measurements');
    }
    //Create the function that will emit a message to the Socket Server, asking for a joint's value or the gripper's value
    get_value(object) {
        this.socket.emit('get_value_sensors', { object: object });
    }
    //Create the function that will tell the Socket Server to start increasing or decreasing a joint's value or the gripper's value, it means a button is pressed
    change_value(object, action) {
        // console.log('Data change.');
        // console.log(' Object: '+object);
        // console.log(' Action: '+action);
        this.socket.emit('sensors_change_value', { object: object, action: action });
        // this.socket.on('measurements', (data: string) => {
        // this.temperature_value.value = data['temp'];
        // console.log(this.temperature_value);
        // console.log("TEMP");
        // console.log(data['temp']);
        // console.log("TEMP VALUE");
        // console.log(this.temperature_value);
        // });
    }
    //Create the function that will tell the Socket Server to stop changing the value of the object that was changing, it means all of the buttons are unpressed
    stop_changing_value() {
        this.socket.emit('stop_changing_value');
    }
}
SensoricaService.ɵfac = function SensoricaService_Factory(t) { return new (t || SensoricaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
SensoricaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SensoricaService, factory: SensoricaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SensoricaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ }),

/***/ "nmw6":
/*!********************************************************!*\
  !*** ./src/app/rover/sensorica/live/live.component.ts ***!
  \********************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const _c0 = ["video"];
const _c1 = ["video2"];
const _c2 = ["canvas"];
class LiveComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.constraints = {
            video: {
                facingMode: "environment",
                width: { ideal: 4096 },
                height: { ideal: 2160 }
            }
        };
        this.constraints2 = {
            video: {
                facingMode: "environment",
                width: { ideal: 4096 },
                height: { ideal: 2160 }
            }
        };
    }
    ngOnInit() {
        this.startCamera();
        this.startCamera2();
    }
    startCamera() {
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
        }
        else {
            alert('Sorry, camera not available.');
        }
    }
    startCamera2() {
        if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            navigator.mediaDevices.getUserMedia(this.constraints2).then(this.attachVideo2.bind(this)).catch(this.handleError2);
        }
        else {
            alert('Sorry, camera not available.');
        }
    }
    handleError(error) {
        console.log('Error: ', error);
    }
    handleError2(error) {
        console.log('Error: ', error);
    }
    attachVideo(stream) {
        this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    }
    attachVideo2(stream) {
        this.renderer.setProperty(this.videoElement2.nativeElement, 'srcObject', stream);
    }
}
LiveComponent.ɵfac = function LiveComponent_Factory(t) { return new (t || LiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveComponent, selectors: [["app-live"]], viewQuery: function LiveComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoElement2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, decls: 15, vars: 0, consts: [[1, "card", "border-warning", "bg-transparent", "text-center", "ml-1", "mr-1"], [1, "card-body", "bg-black", "mt-2", "pt-0"], [1, "container-fluid", "px-lg-0"], [1, "row", "mx-lg-n4"], [1, "col"], [1, "d-flex", "flex-column", "align-items-center"], [1, "p-1"], ["autoplay", "", 1, "vid"], ["video", ""], ["video2", ""]], template: function LiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "video", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "video", 7, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".no-gutters[_ngcontent-%COMP%]\n{\n  margin-right: 0;\n  margin-left: 0;\n\n  > .col,\n  > [class*=\"col-\"] {\n    padding-right: 10;\n    padding-left: 10;\n    padding-right: 10;\n    padding-left: 10;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvc2Vuc29yaWNhL2xpdmUvbGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7OztHQVNHOztBQUVILE1BQU07O0FBQ047Ozs7Ozs7R0FPRzs7QUFHSDs7RUFFRSxlQUFlO0VBQ2YsY0FBYzs7RUFFZDs7SUFFRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3NlbnNvcmljYS9saXZlL2xpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi8qIGgyXG57XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gKi9cblxuLyogbGFiZWxcbntcblx0Zm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cbmlucHV0XG57XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZDogbm9uZTtcbn0gKi9cblxuLyppbWcqL1xuLyogI3NhbXBsZV9pbWdcbntcblx0ei1pbmRleDogNDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwYWRkaW5nOjIlO1xuXHR0b3A6IDgwcHg7XG5cdHJpZ2h0OiA1MHB4O1xufSAqL1xuXG5cbi5uby1ndXR0ZXJzXG57XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgPiAuY29sLFxuICA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwO1xuICAgIHBhZGRpbmctbGVmdDogMTA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live',
                templateUrl: './live.component.html',
                styleUrls: ['./live.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { videoElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }], videoElement2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video2', { static: true }]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "npJB":
/*!********************************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-cinematica-directa/brazo-cinematica-directa.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BrazoCinematicaDirectaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoCinematicaDirectaComponent", function() { return BrazoCinematicaDirectaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _brazo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brazo.service */ "2JCF");



class BrazoCinematicaDirectaComponent {
    constructor(brazoService) {
        this.brazoService = brazoService;
        //Define the variables for the maximum and minimun values of the joints
        this.min_value_joint = -150;
        this.max_value_joint = 150;
        //Define the variables for the maximum and minimun values of the gripper
        this.min_value_gripper = 0;
        this.max_value_gripper = 100;
    }
    ngOnInit() {
        //Define initial values for the variables
        this.joint_1_value = 50;
        this.joint_2_value = 30;
        this.joint_3_value = 70;
        this.joint_4_value = 80;
        this.joint_5_value = 10;
        this.joint_6_value = 19;
        this.joint_7_value = 35;
        this.gripper_value = 67;
        //Make the subscribers subscribe to their correspondent BrazoService variable
        this._joint_1_Sub = this.brazoService.joint_1_value.subscribe(value_received => this.joint_1_value = value_received);
        this._joint_2_Sub = this.brazoService.joint_2_value.subscribe(value_received => this.joint_2_value = value_received);
        this._joint_3_Sub = this.brazoService.joint_3_value.subscribe(value_received => this.joint_3_value = value_received);
        this._joint_4_Sub = this.brazoService.joint_4_value.subscribe(value_received => this.joint_4_value = value_received);
        this._joint_5_Sub = this.brazoService.joint_5_value.subscribe(value_received => this.joint_5_value = value_received);
        this._joint_6_Sub = this.brazoService.joint_6_value.subscribe(value_received => this.joint_6_value = value_received);
        this._joint_7_Sub = this.brazoService.joint_7_value.subscribe(value_received => this.joint_7_value = value_received);
        this._gripper_Sub = this.brazoService.gripper_value.subscribe(value_received => this.gripper_value = value_received);
        //We ask for the values of the joints to start the labels
        this.get_value('joint_1');
        this.get_value('joint_2');
        this.get_value('joint_3');
        this.get_value('joint_4');
        this.get_value('joint_5');
        this.get_value('joint_6');
        this.get_value('joint_7');
        this.get_value('gripper');
    }
    ngOnDestroy() {
        //When this component is destroyed, the subscribers must unsubscribe
        this._joint_1_Sub.unsubscribe();
        this._joint_2_Sub.unsubscribe();
        this._joint_3_Sub.unsubscribe();
        this._joint_4_Sub.unsubscribe();
        this._joint_5_Sub.unsubscribe();
        this._joint_6_Sub.unsubscribe();
        this._joint_7_Sub.unsubscribe();
        this._gripper_Sub.unsubscribe();
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
    get_value(object) {
        this.brazoService.get_value(object);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
    change_value(object, action) {
        this.brazoService.change_value(object, action);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
    stop_changing_value() {
        this.brazoService.stop_changing_value();
        console.log('joint_6');
    }
}
BrazoCinematicaDirectaComponent.ɵfac = function BrazoCinematicaDirectaComponent_Factory(t) { return new (t || BrazoCinematicaDirectaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_brazo_service__WEBPACK_IMPORTED_MODULE_1__["BrazoService"])); };
BrazoCinematicaDirectaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoCinematicaDirectaComponent, selectors: [["app-brazo-cinematica-directa"]], decls: 114, vars: 56, consts: [[1, "table", "table-borderless", 2, "width", "100%"], [1, "align-middle"], ["scope", "row", 1, "align-middle"], ["id", "1_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], [1, "fas", "fa-angle-left", "fa-2x"], [1, "text-center", "col-6", "align-middle", 2, "margin-left", "0px", "margin-right", "0px", "padding-left", "0px", "padding-right", "0px"], [1, "progress"], ["role", "progressbar", 1, "progress-bar"], ["id", "1_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], [1, "fas", "fa-angle-right", "fa-2x"], ["disabled", "", "name", "", "id", "joint1", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "2_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], [1, "text-center", "align-middle", 2, "margin-left", "0px", "margin-right", "0px", "padding-left", "0px", "padding-right", "0px"], ["id", "2_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint2", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "3_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "3_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint3", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "4_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "4_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint4", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "5_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "5_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint5", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "6_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "6_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint6", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "7_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "7_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "joint7", 2, "color", "black", "font-size", "15px", 3, "value"], ["id", "gripper_ATRAS", "type", "button", 1, "btn", "btn-secondary", "button_left", 3, "mousedown", "mouseup"], ["id", "gripper_ADELANTE", "type", "button", 1, "btn", "btn-secondary", "button_right", 3, "mousedown", "mouseup"], ["disabled", "", "name", "", "id", "gripper", 2, "color", "black", "font-size", "15px", 3, "value"]], template: function BrazoCinematicaDirectaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "J1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_6_listener() { return ctx.change_value("joint_1", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_6_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_12_listener() { return ctx.change_value("joint_1", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_12_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "J2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_20_listener() { return ctx.change_value("joint_2", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_20_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_26_listener() { return ctx.change_value("joint_2", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_26_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "J3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_34_listener() { return ctx.change_value("joint_3", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_34_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_40_listener() { return ctx.change_value("joint_3", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_40_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "J4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_48_listener() { return ctx.change_value("joint_4", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_48_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_54_listener() { return ctx.change_value("joint_4", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_54_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "J5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_62_listener() { return ctx.change_value("joint_5", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_62_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_68_listener() { return ctx.change_value("joint_5", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_68_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "J6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_76_listener() { return ctx.change_value("joint_6", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_76_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_82_listener() { return ctx.change_value("joint_6", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_82_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "J7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_90_listener() { return ctx.change_value("joint_7", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_90_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_96_listener() { return ctx.change_value("joint_7", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_96_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "GR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_104_listener() { return ctx.change_value("gripper", "decrease"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_104_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaDirectaComponent_Template_button_mousedown_110_listener() { return ctx.change_value("gripper", "increase"); })("mouseup", function BrazoCinematicaDirectaComponent_Template_button_mouseup_110_listener() { return ctx.stop_changing_value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_1_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_1_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_1_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_2_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_2_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_2_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_3_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_3_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_3_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_4_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_4_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_4_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_5_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_5_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_5_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_6_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_6_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_6_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.joint_7_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.joint_7_value)("aria-valuemin", ctx.min_value_joint)("aria-valuemax", ctx.max_value_joint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.joint_7_value, "\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx.gripper_value, "%; margin-left: 0px; margin-right: 0px;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.gripper_value)("aria-valuemin", ctx.min_value_gripper)("aria-valuemax", ctx.max_value_gripper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "", ctx.gripper_value, "\u00B0");
    } }, styles: ["button[_ngcontent-%COMP%]{\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-right: 6px;\n\tpadding-left: 6px;\n\tmargin-left: 3px;\n\tbackground-color: transparent;\n\tborder-color: transparent;\n}\n\n.button_left[_ngcontent-%COMP%]{\n\tmargin-right: 3px;\n}\n\n.button_right[_ngcontent-%COMP%]{\n\tmargin-left: 3px;\n}\n\ntable[_ngcontent-%COMP%] { \n  border-collapse: collapse;\n  margin-bottom: 0vh;\n  margin-top: 0vh;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\n\tpadding: 0px;\n}\n\n#joint1[_ngcontent-%COMP%], #joint2[_ngcontent-%COMP%], #joint3[_ngcontent-%COMP%], #joint4[_ngcontent-%COMP%], #joint5[_ngcontent-%COMP%], #joint6[_ngcontent-%COMP%], #joint7[_ngcontent-%COMP%], #gripper[_ngcontent-%COMP%]{\n\twidth: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1kaXJlY3RhL2JyYXpvLWNpbmVtYXRpY2EtZGlyZWN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1kaXJlY3RhL2JyYXpvLWNpbmVtYXRpY2EtZGlyZWN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRwYWRkaW5nLWJvdHRvbTogM3B4O1xuXHRwYWRkaW5nLXJpZ2h0OiA2cHg7XG5cdHBhZGRpbmctbGVmdDogNnB4O1xuXHRtYXJnaW4tbGVmdDogM3B4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ1dHRvbl9sZWZ0e1xuXHRtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmJ1dHRvbl9yaWdodHtcblx0bWFyZ2luLWxlZnQ6IDNweDtcbn1cblxudGFibGUgeyBcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMHZoO1xuICBtYXJnaW4tdG9wOiAwdmg7XG59IFxuXG50ZCwgdGh7XG5cdHBhZGRpbmc6IDBweDtcbn1cblxuI2pvaW50MSwgI2pvaW50MiwgI2pvaW50MywgI2pvaW50NCwgI2pvaW50NSwgI2pvaW50NiwgI2pvaW50NywgI2dyaXBwZXJ7XG5cdHdpZHRoOiA1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoCinematicaDirectaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-cinematica-directa',
                templateUrl: './brazo-cinematica-directa.component.html',
                styleUrls: ['./brazo-cinematica-directa.component.css']
            }]
    }], function () { return [{ type: _brazo_service__WEBPACK_IMPORTED_MODULE_1__["BrazoService"] }]; }, null); })();


/***/ }),

/***/ "ohSQ":
/*!****************************************************!*\
  !*** ./src/app/lunabot/prueba/prueba.component.ts ***!
  \****************************************************/
/*! exports provided: PruebaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaComponent", function() { return PruebaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _prueba_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prueba.service */ "iUTK");



class PruebaComponent {
    constructor(pruebaService) {
        this.pruebaService = pruebaService;
    }
    ngOnInit() {
        this.elMensaje = 'Este es el primer mensaje, no he recibido nada del socket';
        this._mensajeSub = this.pruebaService.currentMensaje.subscribe(mensaje => this.elMensaje = mensaje);
    }
    ngOnDestroy() {
        this._mensajeSub.unsubscribe();
    }
    newMensaje() {
        this.pruebaService.getMensaje();
    }
}
PruebaComponent.ɵfac = function PruebaComponent_Factory(t) { return new (t || PruebaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_prueba_service__WEBPACK_IMPORTED_MODULE_1__["PruebaService"])); };
PruebaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebaComponent, selectors: [["app-prueba"]], decls: 5, vars: 1, consts: [[1, "sidenav"], [3, "click"]], template: function PruebaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PruebaComponent_Template_span_click_1_listener() { return ctx.newMensaje(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.elMensaje);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmFib3QvcHJ1ZWJhL3BydWViYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PruebaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prueba',
                templateUrl: './prueba.component.html',
                styleUrls: ['./prueba.component.css']
            }]
    }], function () { return [{ type: _prueba_service__WEBPACK_IMPORTED_MODULE_1__["PruebaService"] }]; }, null); })();


/***/ }),

/***/ "po/w":
/*!**************************************************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-cinematica-inversa-rotacion/brazo-cinematica-inversa-rotacion.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BrazoCinematicaInversaRotacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoCinematicaInversaRotacionComponent", function() { return BrazoCinematicaInversaRotacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BrazoCinematicaInversaRotacionComponent {
    constructor() {
        this.imageButtonsPitch = [
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/PITCH inicial.png', name: 'PITCH inicial' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/PITCHCW activado.png', name: 'PITCHCW activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/PITCHCCW activado.png', name: 'PITCHCW activado' }
        ];
        this.imageButtonsRoll = [
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/ROLL inicial.png', name: 'ROLL inicial' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/ROLLCW activado.png', name: 'ROLLCW activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/ROLLCCW activado.png', name: 'ROLLCW activado' }
        ];
        this.imageButtonsYaw = [
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/YAW inicial.png', name: 'YAW inicial' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/YAWCW activado.png', name: 'YAWCW activado' },
            { src: '../../../../assets/Brazo/Cinematica Inversa/Rotacion/YAWCCW activado.png', name: 'YAWCW activado' }
        ];
    }
    ngOnInit() {
        this.imageSrcPitch = this.imageButtonsPitch[0].src;
        this.imageSrcRoll = this.imageButtonsRoll[0].src;
        this.imageSrcYaw = this.imageButtonsYaw[0].src;
    }
    changeImagePitch(index) {
        this.imageSrcPitch = this.imageButtonsPitch[index].src;
    }
    changeImageRoll(index) {
        this.imageSrcRoll = this.imageButtonsRoll[index].src;
    }
    changeImageYaw(index) {
        this.imageSrcYaw = this.imageButtonsYaw[index].src;
    }
}
BrazoCinematicaInversaRotacionComponent.ɵfac = function BrazoCinematicaInversaRotacionComponent_Factory(t) { return new (t || BrazoCinematicaInversaRotacionComponent)(); };
BrazoCinematicaInversaRotacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoCinematicaInversaRotacionComponent, selectors: [["app-brazo-cinematica-inversa-rotacion"]], decls: 39, vars: 3, consts: [[1, "table", "table-borderless", 2, "height", "100%", "background-color", "transparent"], [1, "justify-content-center", "text-center", "align-middle"], [1, "img-wrapper"], [1, "img-responsive", 3, "src"], [1, "img-overlay"], [1, "td", "justify-content-center", "text-center", "align-middle"], [1, "btn", "btn-default", "btn-block", 3, "mousedown", "mouseup"]], template: function BrazoCinematicaInversaRotacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_11_listener() { return ctx.changeImageRoll(1); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_11_listener() { return ctx.changeImageRoll(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_14_listener() { return ctx.changeImageRoll(2); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_14_listener() { return ctx.changeImageRoll(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_23_listener() { return ctx.changeImageYaw(1); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_23_listener() { return ctx.changeImageYaw(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_26_listener() { return ctx.changeImageYaw(2); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_26_listener() { return ctx.changeImageYaw(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_35_listener() { return ctx.changeImagePitch(1); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_35_listener() { return ctx.changeImagePitch(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function BrazoCinematicaInversaRotacionComponent_Template_button_mousedown_38_listener() { return ctx.changeImagePitch(2); })("mouseup", function BrazoCinematicaInversaRotacionComponent_Template_button_mouseup_38_listener() { return ctx.changeImagePitch(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrcRoll, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrcYaw, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageSrcPitch, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n }\n\n.img-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.img-overlay[_ngcontent-%COMP%]:before {\n  content: ' ';\n  display: block;\n  \n  height: 0%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  opacity: 0;\n}\n\n.td[_ngcontent-%COMP%]{\n  padding: 0px;\n}\n\ntable[_ngcontent-%COMP%] { \n  border-collapse: collapse;\n  margin-bottom: 0vh;\n  margin-top: 0vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLXJvdGFjaW9uL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS1yb3RhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCwyREFBMkQ7RUFDM0QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tY2luZW1hdGljYS1pbnZlcnNhLXJvdGFjaW9uL2JyYXpvLWNpbmVtYXRpY2EtaW52ZXJzYS1yb3RhY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuIH1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZy1vdmVybGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIGFkanVzdCAnaGVpZ2h0JyB0byBwb3NpdGlvbiBvdmVybGF5IGNvbnRlbnQgdmVydGljYWxseSAqL1xuICBoZWlnaHQ6IDAlO1xufVxuXG4uYnRuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGR7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxudGFibGUgeyBcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMHZoO1xuICBtYXJnaW4tdG9wOiAwdmg7XG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoCinematicaInversaRotacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-cinematica-inversa-rotacion',
                templateUrl: './brazo-cinematica-inversa-rotacion.component.html',
                styleUrls: ['./brazo-cinematica-inversa-rotacion.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "zGRK");




/**
 * The service provider for everything related to authentication
 */
class AuthService {
    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor(router, roleService, permissionsService) {
        this.router = router;
        this.roleService = roleService;
        this.permissionsService = permissionsService;
    }
    start() {
        this.roleService.flushRoles();
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        }
        else if (role === 'ROVER') {
            this.setRoverRole();
        }
        else if (role === 'SUBMARINO') {
            this.setSubmarinoRole();
        }
        else if (role === 'LUNABOT') {
            this.setLunabotRole();
        }
    }
    setGuestRole() {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }
    setRoverRole() {
        this.roleService.flushRoles();
        this.roleService.addRole('ROVER', ['']);
        localStorage.setItem('role', 'ROVER');
    }
    setSubmarinoRole() {
        this.roleService.flushRoles();
        this.roleService.addRole('SUBMARINO', ['']);
        localStorage.setItem('role', 'SUBMARINO');
    }
    setLunabotRole() {
        this.roleService.flushRoles();
        this.roleService.addRole('LUNABOT', ['']);
        localStorage.setItem('role', 'LUNABOT');
    }
    printRole() {
        console.log(this.roleService.getRoles());
    }
    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login(role) {
        if (role === 'ROVER') {
            this.setRoverRole();
        }
        else if (role === 'SUBMARINO') {
            this.setSubmarinoRole();
        }
        else if (role === 'LUNABOTICS') {
            this.setLunabotRole();
        }
    }
    /**
     * Logs the user out
     */
    logout() {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxRolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxRolesService"] }, { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"] }]; }, null); })();


/***/ }),

/***/ "ruxc":
/*!*************************************************************************!*\
  !*** ./src/app/rover/estado/estado-topicos/estado-topicos.component.ts ***!
  \*************************************************************************/
/*! exports provided: EstadoTopicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoTopicosComponent", function() { return EstadoTopicosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _estado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../estado.service */ "D25w");



class EstadoTopicosComponent {
    constructor(estadoService) {
        this.estadoService = estadoService;
    }
    ngOnInit() {
        //Define initial values for the variables
        this.rostopic_list_value = 'Prueba 1'; //rostopic_list_value
        this.joint_1_value = 'Prueba 2'; //topico echo
        this.joint_2_value = 'Prueba 3'; //Data
        this.joint_3_value = 'Prueba 4'; //Type
        this.joint_4_value = 'Prueba 5'; //publishers
        this.joint_5_value = 'Prueba 6'; //subscribers
        //Make the subscribers subscribe to their correspondent estadoService variable
        this._rostopic_list_value = this.estadoService.rostopic_list_value.subscribe((value_received) => (this.rostopic_list_value = value_received)); //rostopic_list_value
        this._joint_1_value = this.estadoService.joint_1_value.subscribe((value_received) => (this.joint_1_value = value_received)); //topico echo
        this._joint_2_value = this.estadoService.joint_2_value.subscribe((value_received) => (this.joint_2_value = value_received)); //Data
        this._joint_3_value = this.estadoService.joint_3_value.subscribe((value_received) => (this.joint_3_value = value_received)); //Type
        this._joint_4_value = this.estadoService.joint_4_value.subscribe((value_received) => (this.joint_4_value = value_received)); //publishers
        this._joint_5_value = this.estadoService.joint_5_value.subscribe((value_received) => (this.joint_5_value = value_received));
        //We ask for the values of the joints to start the labels
        this.get_value('rostopic_list'); //rostopic_list_value
        this.get_value('joint_1'); //topico echo
        this.get_value('joint_2'); //Data
        this.get_value('joint_3'); //Type
        this.get_value('joint_4'); //publishers
        this.get_value('joint_5'); //subscribers
    }
    ngOnDestroy() {
        this._rostopic_list_value.unsubscribe(); //rostopic_list_value
        this._joint_1_value.unsubscribe(); //topico echo
        this._joint_2_value.unsubscribe(); //Data
        this._joint_3_value.unsubscribe(); //Type
        this._joint_4_value.unsubscribe(); //publishers
        this._joint_5_value.unsubscribe();
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to send the current value of the object
    get_value(object) {
        this.estadoService.get_value(object);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to start increasing or decreasing the current value of the object
    change_value(object, action) {
        this.estadoService.change_value(object, action);
    }
    //This function will call the BrazoService function, so the Socket Server will be asked to stop increasing or decreasing the current value of the object
    stop_changing_value() {
        this.estadoService.stop_changing_value();
        console.log('joint_2');
    }
}
EstadoTopicosComponent.ɵfac = function EstadoTopicosComponent_Factory(t) { return new (t || EstadoTopicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_estado_service__WEBPACK_IMPORTED_MODULE_1__["EstadoService"])); };
EstadoTopicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstadoTopicosComponent, selectors: [["app-estado-topicos"]], decls: 45, vars: 0, consts: [["http-equiv", "Content-Type", "content", "text/html; charset=iso-8859-1"], ["rel", "stylesheet"], [1, "row"], [1, "col", 2, "height", "107vh"], [1, "columnasContenido", "col-card", "card-header", "border-warning", "bg-transparent"], [1, "card-header", "text-warning", "text-center", "border-warning", "bg-transparent", 2, "color", "#e4b503 !important"], ["id", "label1", 1, "label1"], ["id", "lista", 1, "barraBrazo"], [1, "col", 2, "height", "65vh"], [1, "columnasContenido", "col-card", "border-warning", "bg-transparent", 2, "padding", "10px"], ["id", "echo1", 1, "labelTopEcho"], ["type", "text", "name", "type", 1, "TopicoEcho"], ["id", "data", 1, "labelData", 2, "text-align", "center"], ["type", "text", "name", "type", 1, "inputData"], ["id", "typeTopic", 1, "labelTopEcho"], ["id", "publishers", 1, "labelTopEcho"], ["id", "subscribers", 1, "labelTopEcho"]], template: function EstadoTopicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Untitled Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rostopic List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "topics will be here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "T\u00F3pico echo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Publishers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Subscribers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n\tbackground-color: #161616;\n}\n\n\n.columnasContenido[_ngcontent-%COMP%] {\n\tmargin: 18px;\n\tbackground-color: #161616;\n\tborder: #e4b503 !important;\n}\n#lista[_ngcontent-%COMP%] {\n\theight: 100%;\n\toverflow: auto;\n\tfont-size: large;\n\tpadding: 3%;\n}\n.inputData[_ngcontent-%COMP%] {\n\twidth: -webkit-fill-available;\n\theight: 310px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvZXN0YWRvL2VzdGFkby10b3BpY29zL2VzdGFkby10b3BpY29zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO2dCQUNnQjtBQUNoQjs7Ozs7Ozs7Ozs7Z0JBV2dCO0FBQ2hCOztlQUVlO0FBQ2Y7OztnQkFHZ0I7QUFBRTs7Ozs7O0dBTWY7QUFDSDt1QkFDdUI7QUFDdkI7Ozs7Ozs7R0FPRztBQUVIO2lCQUNpQjtBQUFFOzs7O0dBSWhCO0FBQ0g7Ozs7dUJBSXVCO0FBQ3ZCOzs7Ozs7R0FNRztBQUNIOzs7Ozs7Ozs7O0dBVUc7QUFDSDs7Ozs7O2tDQU1rQztBQUNsQyxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0NBY0M7QUFBQztDQUNELHlCQUF5QjtBQUMxQjtBQUFDOzs7Ozs7R0FNRTtBQUNILFlBQVk7QUFDWjtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb3Zlci9lc3RhZG8vZXN0YWRvLXRvcGljb3MvZXN0YWRvLXRvcGljb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5jb250ZW5lZG9yMSB7ICovXG4vKnotaW5kZXg6IDQ7XG5cdGhlaWdodDogNjc5cHg7Ki9cbi8qIHdpZHRoOiA5MyU7XG5cdHBhZGRpbmc6IDUwcHg7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDIwO1xuXHRtYXJnaW46IDA7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW5lZG9yMiB7ICovXG4vKnotaW5kZXg6IDM7XG5cdGhlaWdodDogNjc5cHg7XG5cdHdpZHRoOiA3MTBweDsqL1xuLyogcGFkZGluZzogNTBweDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdC8qbGVmdDogNzUwcHg7Ki8gLypcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG5cdGJhY2tncm91bmQ6ICMwMDAwMDAyMDtcblx0bWFyZ2luOiAwO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59ICovXG4vKiAubGFiZWwxIHtcblx0Lypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qXG5cdGJvdHRvbTogMDtcblx0bWFyZ2luOiBhdXRvO1xuXHRkaXNwbGF5OiBibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMzBweDtcbn0gKi9cblxuLyogLmJhcnJhQnJhem8ge1xuXHQvKndpZHRoOjUwMHB4OyAqLyAvKlxuXHRoZWlnaHQ6IDUwMHB4O1xuXHRvdmVyZmxvdzogYXV0bztcblx0Zm9udC1zaXplOiBsYXJnZTtcbn0gKi9cbi8qIC5ib3h0b3BpYyB7XG5cdHotaW5kZXg6IDQ7XG5cdGhlaWdodDogNTIycHg7XG5cdHdpZHRoOiA1MTBweDtcblx0Lypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cbi8qcGFkZGluZzogMjlweDtcblxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDIwO1xuXHRtYXJnaW46IDA7XG59ICovXG4vKiBcbi5sYWJlbFRvcEVjaG8ge1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogaW5saW5lO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcblx0cGFkZGluZy1yaWdodDogNzVweDtcblx0d2lkdGg6IDQzMHB4O1xufSAqL1xuLyogLlRvcGljb0VjaG8ge1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogaW5saW5lO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0Y29sb3I6IGJsYWNrO1xuXHQvKndpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyovXG4vKn0gKi9cbi8qIC5sYWJlbERhdGEge1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogaW5saW5lO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IHgtbGFyZ2U7XG5cdHBhZGRpbmctcmlnaHQ6IDc1cHg7XG5cdHdpZHRoOiA2MzBweDtcbn1cbi5pbnB1dERhdGEge1xuXHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcblx0aGVpZ2h0OiAzMTBweDtcbn1cbiovYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG59Lypcbi5jb2wtY2FyZCB7XG5cdGJvcmRlcjogI2U0YjUwMztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG59ICovXG4vKiBkZmtqa2ZqICovXG4uY29sdW1uYXNDb250ZW5pZG8ge1xuXHRtYXJnaW46IDE4cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG5cdGJvcmRlcjogI2U0YjUwMyAhaW1wb3J0YW50O1xufVxuI2xpc3RhIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvdmVyZmxvdzogYXV0bztcblx0Zm9udC1zaXplOiBsYXJnZTtcblx0cGFkZGluZzogMyU7XG59XG4uaW5wdXREYXRhIHtcblx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG5cdGhlaWdodDogMzEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoTopicosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-estado-topicos',
                templateUrl: './estado-topicos.component.html',
                styleUrls: ['./estado-topicos.component.css'],
            }]
    }], function () { return [{ type: _estado_service__WEBPACK_IMPORTED_MODULE_1__["EstadoService"] }]; }, null); })();


/***/ }),

/***/ "siXR":
/*!********************************************************!*\
  !*** ./src/app/rover/sensorica/tabs/tabs.component.ts ***!
  \********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _eva_eva_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eva/eva.component */ "c6RP");
/* harmony import */ var _measurements_measurements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../measurements/measurements.component */ "8mUX");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../analysis/analysis.component */ "/+XW");
/* harmony import */ var _drilling_drilling_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drilling/drilling.component */ "kdfX");
/* harmony import */ var _station_station_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../station/station.component */ "M2sP");








class TabsComponent {
    constructor() {
        this.isCollapsedEVA = true;
        this.isCollapsedMeas = false;
        this.isCollapsedAnalysis = true;
        this.isCollapsedDrill = true;
        this.isCollapsedLive = false;
        this.isCollapsedStation = true;
    }
    ngOnInit() {
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 55, vars: 10, consts: [[1, "card", "border-warning", "bg-transparent", "text-center"], [1, "card-body", "bg-black", "mt-0", "pt-0", "px-2", "mx-2"], [1, "table-responsive-sm"], [1, "table", "table-dark", "bg-transparent"], ["scope", "col"], ["scope", "row"], ["type", "button", "id", "vert", "aria-controls", "collapseEVA", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseEVA", 3, "ngbCollapse"], [1, "row"], [1, "col"], [1, "card-transparent"], [1, "card-body"], ["type", "button", "id", "vert", "aria-controls", "collapseMeas", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseMeas", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseAnalysis", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseAnalysis", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseDrill", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseDrill", 3, "ngbCollapse"], ["type", "button", "aria-controls", "collapseStation", 1, "btn", "btn-outline-warning", 3, "click"], ["id", "collapseStation", 3, "ngbCollapse"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_11_listener() { return ctx.isCollapsedEVA = !ctx.isCollapsedEVA; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " EVA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-eva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_21_listener() { return ctx.isCollapsedMeas = !ctx.isCollapsedMeas; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Measurements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-measurements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_31_listener() { return ctx.isCollapsedAnalysis = !ctx.isCollapsedAnalysis; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_41_listener() { return ctx.isCollapsedDrill = !ctx.isCollapsedDrill; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Drilling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-drilling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_button_click_49_listener() { return ctx.isCollapsedStation = !ctx.isCollapsedStation; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Station ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-station");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedEVA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedEVA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedMeas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedMeas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedDrill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedDrill);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedStation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedStation);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _eva_eva_component__WEBPACK_IMPORTED_MODULE_2__["EvaComponent"], _measurements_measurements_component__WEBPACK_IMPORTED_MODULE_3__["MeasurementsComponent"], _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_4__["AnalysisComponent"], _drilling_drilling_component__WEBPACK_IMPORTED_MODULE_5__["DrillingComponent"], _station_station_component__WEBPACK_IMPORTED_MODULE_6__["StationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL3NlbnNvcmljYS90YWJzL3RhYnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs',
                templateUrl: './tabs.component.html',
                styleUrls: ['./tabs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tMnQ":
/*!************************************************************************!*\
  !*** ./src/app/rover/brazo/brazo-pestania/brazo-pestania.component.ts ***!
  \************************************************************************/
/*! exports provided: BrazoPestaniaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrazoPestaniaComponent", function() { return BrazoPestaniaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../brazo-cinematica-directa/brazo-cinematica-directa.component */ "npJB");
/* harmony import */ var _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../brazo-cinematica-inversa-rotacion/brazo-cinematica-inversa-rotacion.component */ "po/w");
/* harmony import */ var _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brazo-cinematica-inversa-vertical/brazo-cinematica-inversa-vertical.component */ "DaPl");
/* harmony import */ var _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brazo-cinematica-inversa-horizontal/brazo-cinematica-inversa-horizontal.component */ "eWDS");






class BrazoPestaniaComponent {
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
BrazoPestaniaComponent.ɵfac = function BrazoPestaniaComponent_Factory(t) { return new (t || BrazoPestaniaComponent)(); };
BrazoPestaniaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrazoPestaniaComponent, selectors: [["app-brazo-pestania"]], decls: 21, vars: 0, consts: [[1, "col", "justify-content-center", "text-center", 2, "margin-top", "15px", "height", "100%"], [1, "row", "justify-content-center", "align-middle", "text-center", 2, "height", "32vh", "margin-left", "0vh", "margin-right", "0vh"], [1, "col", 2, "padding-right", "0px", "padding-left", "0px"], [1, "card", "border-warning", "bg-transparent", "justify-content-center", "align-middle", "text-center", 2, "height", "100%"], [1, "card-body", "bg-black", "justify-content-center", "align-middle", "text-center", 2, "height", "100%"], ["src", "https://pa1.narvii.com/6929/4c88d838f2f8d187a01c4118fc6be1f760f642d0r1-306-158_00.gif"], [1, "card", "border-warning", "bg-transparent", 2, "height", "51vh"], [1, "card-body", "bg-black"], [1, "row", "align-middle"], [1, "col-3", "justify-content-center", "align-middle", "text-center"], [1, "col-5", "justify-content-center", "align-middle", "text-center"], [1, "col-2", "justify-content-center", "align-middle", "text-center"]], template: function BrazoPestaniaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-brazo-cinematica-directa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-brazo-cinematica-inversa-rotacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-brazo-cinematica-inversa-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-brazo-cinematica-inversa-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_brazo_cinematica_directa_brazo_cinematica_directa_component__WEBPACK_IMPORTED_MODULE_1__["BrazoCinematicaDirectaComponent"], _brazo_cinematica_inversa_rotacion_brazo_cinematica_inversa_rotacion_component__WEBPACK_IMPORTED_MODULE_2__["BrazoCinematicaInversaRotacionComponent"], _brazo_cinematica_inversa_vertical_brazo_cinematica_inversa_vertical_component__WEBPACK_IMPORTED_MODULE_3__["BrazoCinematicaInversaVerticalComponent"], _brazo_cinematica_inversa_horizontal_brazo_cinematica_inversa_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["BrazoCinematicaInversaHorizontalComponent"]], styles: [".card-body[_ngcontent-%COMP%]{\n\tpadding-left: 2vh;\n\tpadding-right: 2vh;\n\tpadding-top: 0vh;\n\tpadding-bottom: 0vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvYnJhem8vYnJhem8tcGVzdGFuaWEvYnJhem8tcGVzdGFuaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvdmVyL2JyYXpvL2JyYXpvLXBlc3RhbmlhL2JyYXpvLXBlc3RhbmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5e1xuXHRwYWRkaW5nLWxlZnQ6IDJ2aDtcblx0cGFkZGluZy1yaWdodDogMnZoO1xuXHRwYWRkaW5nLXRvcDogMHZoO1xuXHRwYWRkaW5nLWJvdHRvbTogMHZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrazoPestaniaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-brazo-pestania',
                templateUrl: './brazo-pestania.component.html',
                styleUrls: ['./brazo-pestania.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _rover_brazo_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rover/brazo/brazo-pestania/brazo-pestania.component */ "tMnQ");
/* harmony import */ var _rover_traccion_traccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rover/traccion/traccion.component */ "4jOQ");
/* harmony import */ var _rover_estado_estado_pestania_estado_pestania_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rover/estado/estado-pestania/estado-pestania.component */ "EiwR");
/* harmony import */ var _rover_sensorica_sensorica_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rover/sensorica/sensorica.component */ "kmwU");
/* harmony import */ var _rover_estado_estado_topicos_estado_topicos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rover/estado/estado-topicos/estado-topicos.component */ "ruxc");
/* harmony import */ var _submarino_estadosub_estadosub_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submarino/estadosub/estadosub.component */ "bEce");
/* harmony import */ var _submarino_navegacion_navegacion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submarino/navegacion/navegacion.component */ "Fii3");
/* harmony import */ var _submarino_pinza_pinza_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submarino/pinza/pinza.component */ "fmkQ");
/* harmony import */ var _lunabot_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lunabot/prueba/prueba.component */ "ohSQ");
/* harmony import */ var _lunabot_estadoluna_estadoluna_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lunabot/estadoluna/estadoluna.component */ "W+Sn");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-permissions */ "zGRK");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");


//ROVER





//SUBMARINO



//LUNABOT






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
                //Visible para todos
                { path: 'home', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"] },
                //Visible para ROVER
                {
                    path: 'brazo',
                    component: _rover_brazo_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['ROVER']
                        }
                    }
                },
                {
                    path: 'traccion',
                    component: _rover_traccion_traccion_component__WEBPACK_IMPORTED_MODULE_3__["TraccionComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['ROVER']
                        }
                    }
                },
                {
                    path: 'estado',
                    component: _rover_estado_estado_pestania_estado_pestania_component__WEBPACK_IMPORTED_MODULE_4__["EstadoPestaniaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['ROVER']
                        }
                    }
                },
                {
                    path: 'estadoTopicos',
                    component: _rover_estado_estado_topicos_estado_topicos_component__WEBPACK_IMPORTED_MODULE_6__["EstadoTopicosComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['ROVER']
                        }
                    }
                },
                {
                    path: 'sensorica',
                    component: _rover_sensorica_sensorica_component__WEBPACK_IMPORTED_MODULE_5__["SensoricaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['ROVER']
                        }
                    }
                },
                // Visible para SUBMARINO
                {
                    path: 'navegacion',
                    component: _submarino_navegacion_navegacion_component__WEBPACK_IMPORTED_MODULE_8__["NavegacionComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['SUBMARINO']
                        }
                    }
                },
                {
                    path: 'pinza',
                    component: _submarino_pinza_pinza_component__WEBPACK_IMPORTED_MODULE_9__["PinzaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['SUBMARINO']
                        }
                    }
                },
                {
                    path: 'estadoSub',
                    component: _submarino_estadosub_estadosub_component__WEBPACK_IMPORTED_MODULE_7__["EstadosubComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['SUBMARINO']
                        }
                    }
                },
                // Visible para LUNABOT
                {
                    path: 'estadoLuna',
                    component: _lunabot_estadoluna_estadoluna_component__WEBPACK_IMPORTED_MODULE_11__["EstadolunaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['LUNABOT']
                        }
                    }
                },
                {
                    path: 'prueba',
                    component: _lunabot_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_10__["PruebaComponent"],
                    canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                    data: {
                        permissions: {
                            only: ['LUNABOT']
                        }
                    }
                },
                // Rutas que no existen redirigir a home  
                { path: '**', redirectTo: 'home' },
                { path: ' ', redirectTo: 'home' }
            ])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot([
                        //Visible para todos
                        { path: 'home', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"] },
                        //Visible para ROVER
                        {
                            path: 'brazo',
                            component: _rover_brazo_brazo_pestania_brazo_pestania_component__WEBPACK_IMPORTED_MODULE_2__["BrazoPestaniaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['ROVER']
                                }
                            }
                        },
                        {
                            path: 'traccion',
                            component: _rover_traccion_traccion_component__WEBPACK_IMPORTED_MODULE_3__["TraccionComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['ROVER']
                                }
                            }
                        },
                        {
                            path: 'estado',
                            component: _rover_estado_estado_pestania_estado_pestania_component__WEBPACK_IMPORTED_MODULE_4__["EstadoPestaniaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['ROVER']
                                }
                            }
                        },
                        {
                            path: 'estadoTopicos',
                            component: _rover_estado_estado_topicos_estado_topicos_component__WEBPACK_IMPORTED_MODULE_6__["EstadoTopicosComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['ROVER']
                                }
                            }
                        },
                        {
                            path: 'sensorica',
                            component: _rover_sensorica_sensorica_component__WEBPACK_IMPORTED_MODULE_5__["SensoricaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['ROVER']
                                }
                            }
                        },
                        // Visible para SUBMARINO
                        {
                            path: 'navegacion',
                            component: _submarino_navegacion_navegacion_component__WEBPACK_IMPORTED_MODULE_8__["NavegacionComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['SUBMARINO']
                                }
                            }
                        },
                        {
                            path: 'pinza',
                            component: _submarino_pinza_pinza_component__WEBPACK_IMPORTED_MODULE_9__["PinzaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['SUBMARINO']
                                }
                            }
                        },
                        {
                            path: 'estadoSub',
                            component: _submarino_estadosub_estadosub_component__WEBPACK_IMPORTED_MODULE_7__["EstadosubComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['SUBMARINO']
                                }
                            }
                        },
                        // Visible para LUNABOT
                        {
                            path: 'estadoLuna',
                            component: _lunabot_estadoluna_estadoluna_component__WEBPACK_IMPORTED_MODULE_11__["EstadolunaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['LUNABOT']
                                }
                            }
                        },
                        {
                            path: 'prueba',
                            component: _lunabot_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_10__["PruebaComponent"],
                            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_12__["NgxPermissionsGuard"]],
                            data: {
                                permissions: {
                                    only: ['LUNABOT']
                                }
                            }
                        },
                        // Rutas que no existen redirigir a home  
                        { path: '**', redirectTo: 'home' },
                        { path: ' ', redirectTo: 'home' }
                    ])
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-7f40e47dfddf171770dd.js.map