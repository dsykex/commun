(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video class=\"bg-video\" #bgVid autoplay=true muted loop>\n    <source src=\"../assets/ink2.mp4\" type=\"video/mp4\">\n</video>\n<img class=\"bg-img\" src=\"../assets/downtown.jpg\"/>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"small-12 columns\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing/landing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"middle\">\n    <div class=\"row\">\n      <div class=\"columns medium-12 small-12 large-expand\">\n          <img src=\"../../assets/logo.png\" alt=\"\" class=\"logo animated fadeIn\" />\n        <h4 class=\"landing-msg text-center animated fadeIn\" *ngIf=\"hasUser\">Our <i>Creative Playground</i> initiative has proven to be a reliable way to not only promote the talent and passion of those who are amongst us in this journey of innovative campaigning, but has become a major key and showing others what it means to truly master your craft. Join us on our mission to a creating better and more artistic Columbus experience!</h4>\n        <h4 class=\"landing-msg text-center animated fadeIn\" *ngIf=\"!hasUser\">Join our creative cloud and share your ideas and interests you would love to see us put in action.</h4>\n       \n        <div *ngIf=\"!hasUser\">\n          <div *ngIf=\"signUpActive\" class=\"animated fadeIn\">\n            <div style=\"margin-top: 10px;\" *ngIf=\"!hasUser\">\n                <input type=\"text\" [(ngModel)]=\"user.first_name\" placeholder=\"First Name\" required>\n                <input type=\"text\" [(ngModel)]=\"user.last_name\" placeholder=\"Last Name\" required>\n                <input type=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n                \n                <input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n                <input type=\"password\" [(ngModel)]=\"user.conf_password\" placeholder=\"Confirm Password\" required>\n                <button class=\"large button\" class=\"yellow-button\" (click)=\"join()\" (ngSubmit)=\"join()\">JOIN</button>\n            </div>\n          </div>\n          <div *ngIf=\"loginActive\" class=\"animated fadeIn\">\n              <div style=\"margin-top: 10px;\" *ngIf=\"!hasUser\">\n                  <input type=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n                  <input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n                  <button class=\"large button\" class=\"yellow-button\" (click)=\"join()\" (ngSubmit)=\"join()\">LOGIN</button>\n              </div>\n          </div>\n          <div class=\"row reg-wrapper animated bounceInUp\">\n            \n            <div class=\"large-6 medium-6 small-12\">\n              <a class=\"reg-links\" (click)=\"showLogin()\">Have an account? Login.</a>\n            </div>\n            <div class=\"large-6 medium-6 small-12\">\n              <a class=\"reg-links\" (click)=\"showSignup()\">Need an account? Signup.</a>\n            </div>\n          </div>\n          <h5 class=\"text-center errorMsg\">{{errorMsg}}</h5>\n        </div>\n        <div class=\"large-12 medium-6 small-12 columns\" *ngIf=\"user.email\">\n            \n        </div>\n      \n      <!--<form *ngIf=\"!hasUser\" [formGroup]=\"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\" >\n          <input type=\"text\" class=\"fortextbox\" name=\"name\" placeholder=\"Name\" formControlName=\"name\">\n         \n          <input type=\"email\" class=\"fortextbox\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n   \n          <input type=\"password\" class=\"fortextbox\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n       \n          <input type=\"password\" class=\"fortextbox\" name=\"conf_password\" placeholder=\"Confirm Password\" formControlName=\"conf_password\">\n         \n          <input type=\"submit\" class=\"yellow-button button\" style=\"margin-top:20px; height:70x;\" [disabled] = \"!formdata.valid\" value=\"JOIN\">\n      </form>-->\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");






var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-video {\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  z-index: -5;\n  opacity: 0.5;\n}\n\n.bg-img {\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  z-index: -9;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYXJob2xNYWMvRG9jdW1lbnRzL1dXQ29tbXVuaXR5L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXZpZGVvXG57XG4gICAgbWluLXdpZHRoOjEwMCU7XG4gICAgbWluLWhlaWdodDoxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAtNTtcbiAgICBvcGFjaXR5OjAuNTtcbn1cblxuLmJnLWltZ1xue1xuICAgIG1pbi13aWR0aDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6MTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTk7XG4gICAgZmlsdGVyOmJsdXIoNXB4KTtcbn0iLCIuYmctdmlkZW8ge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmJnLWltZyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAtOTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WWCommunity';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bgVid', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "vid", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: fbConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbConfig", function() { return fbConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");












var fbConfig = {
    apiKey: "AIzaSyDdeEahrBiiFWcghRiZRxZWYcTSPCgdYo8",
    authDomain: "warhol-a1a0e.firebaseapp.com",
    databaseURL: "https://warhol-a1a0e.firebaseio.com",
    projectId: "warhol-a1a0e",
    storageBucket: "warhol-a1a0e.appspot.com",
    messagingSenderId: "379087008754",
    appId: "1:379087008754:web:07acab08d2a9c3d5"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(fbConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(fs, http, router) {
        this.fs = fs;
        this.http = http;
        this.router = router;
        this.user = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (authData) {
            console.log(authData);
            if (authData) {
                _this.hasUser = true;
            }
            else {
                _this.hasUser = false;
                _this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[^ @]*@[^ @]*")])),
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                    conf_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                });
            }
        });
    };
    HomeComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
    };
    HomeComponent.prototype.showSignup = function () {
        this.signUpActive = true;
        this.loginActive = false;
    };
    HomeComponent.prototype.showLogin = function () {
        this.loginActive = true;
        this.signUpActive = false;
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(this.user.email, this.user.password).then(function () {
            _this.router.navigateByUrl('');
        });
    };
    HomeComponent.prototype.join = function () {
        var _this = this;
        if (this.user.email && this.user.first_name && this.user.last_name && this.user.password && this.user.conf_password) {
            if (this.user.password == this.user.conf_password) {
                var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                var users_1 = db.collection('users');
                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
                    var newUser = {
                        first_name: _this.user.first_name,
                        last_name: _this.user.last_name,
                        email: _this.user.email,
                        password: _this.user.password,
                        createdAt: Date.now(),
                        rank: 'm'
                    };
                    users_1.doc(_this.user.email).set(newUser).then(function () {
                        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(_this.user.email, _this.user.password).then(function () {
                            _this.router.navigateByUrl('');
                        });
                    }).catch(function () { });
                }).catch(function () {
                    _this.errorMsg = 'An error occured processing your request. Either an an account exists under that email or a network issue occured. Please try again.';
                    setTimeout(function () {
                        _this.errorMsg = '';
                    }, 3000);
                });
            }
            else {
                this.errorMsg = 'Passwords must match.';
                setTimeout(function () {
                    _this.errorMsg = '';
                }, 3000);
            }
        }
        else {
            this.errorMsg = 'All fields are required.';
            setTimeout(function () {
                _this.errorMsg = '';
            }, 3000);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin: 0;\n  text-align: center;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.landing-msg {\n  font-size: 18px;\n  color: #fff;\n  text-shadow: 2px 1px 5px #000001;\n}\n\n.logo {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\ninput {\n  transition: all 0.3s ease-in-out;\n  opacity: 0.5;\n  border-radius: 20px;\n  padding: 10px;\n  height: 50px;\n}\n\n.reg-wrapper {\n  padding: 5px;\n  border-radius: 7px;\n  margin-top: 12px;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.reg-wrapper a {\n  color: #f9f100;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);\n}\n\ninput:hover {\n  opacity: 0.9;\n}\n\ninput:focus {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9XYXJob2xNYWMvRG9jdW1lbnRzL1dXQ29tbXVuaXR5L3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRko7O0FES0E7RUFFSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDSEo7O0FETUE7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFFSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDTEo7O0FEUUE7RUFDSSxjQTFDWTtFQTJDWiwyQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnlfY29sb3I6ICNmOWYxMDA7XG5cbi5taWRkbGVcbntcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6NTAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIG1hcmdpbjowO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZGluZy1tc2dcbntcbiAgICBmb250LXNpemU6MThweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIHRleHQtc2hhZG93OiAycHggMXB4IDVweCByZ2JhKDAsMCwwLjgpO1xufVxuXG4ubG9nb1xue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5pbnB1dHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OjAuNTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLnJlZy13cmFwcGVyXG57XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czo3cHg7XG4gICAgbWFyZ2luLXRvcDoxMnB4O1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjcpO1xufVxuXG4ucmVnLXdyYXBwZXIgYSB7XG4gICAgY29sb3I6JHByaW1hcnlfY29sb3I7IFxuICAgIHRleHQtc2hhZG93OjJweCAycHggM3B4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuaW5wdXQ6aG92ZXJ7XG4gICAgb3BhY2l0eTowLjk7XG59XG5cbmlucHV0OmZvY3Vze1xuICAgIG9wYWNpdHk6MC45O1xufSIsIi5taWRkbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxhbmRpbmctbXNnIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAxcHggNXB4ICMwMDAwMDE7XG59XG5cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5pbnB1dCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnJlZy13cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLnJlZy13cmFwcGVyIGEge1xuICBjb2xvcjogI2Y5ZjEwMDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuaW5wdXQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LandingComponent = /** @class */ (function () {
    function LandingComponent(fs, http, router) {
        this.fs = fs;
        this.http = http;
        this.router = router;
        this.user = {};
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (authData) {
            console.log(authData);
            if (authData) {
                _this.hasUser = true;
            }
            else {
                _this.hasUser = false;
                _this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[^ @]*@[^ @]*")])),
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                    conf_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                });
            }
        });
    };
    LandingComponent.prototype.onClickSubmit = function (data) {
        console.log(data);
    };
    LandingComponent.prototype.showSignup = function () {
        this.signUpActive = true;
        this.loginActive = false;
    };
    LandingComponent.prototype.showLogin = function () {
        this.loginActive = true;
        this.signUpActive = false;
    };
    LandingComponent.prototype.login = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(this.user.email, this.user.password).then(function () {
            _this.router.navigateByUrl('');
        });
    };
    LandingComponent.prototype.join = function () {
        var _this = this;
        if (this.user.email && this.user.first_name && this.user.last_name && this.user.password && this.user.conf_password) {
            if (this.user.password == this.user.conf_password) {
                var db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
                var users_1 = db.collection('users');
                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(this.user.email, this.user.password).then(function () {
                    var newUser = {
                        first_name: _this.user.first_name,
                        last_name: _this.user.last_name,
                        email: _this.user.email,
                        password: _this.user.password,
                        createdAt: Date.now(),
                        rank: 'm'
                    };
                    users_1.doc(_this.user.email).set(newUser).then(function () {
                        firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(_this.user.email, _this.user.password).then(function () {
                            _this.router.navigateByUrl('');
                        });
                    }).catch(function () { });
                }).catch(function () {
                    _this.errorMsg = 'An error occured processing your request. Either an an account exists under that email or a network issue occured. Please try again.';
                    setTimeout(function () {
                        _this.errorMsg = '';
                    }, 3000);
                });
            }
            else {
                this.errorMsg = 'Passwords must match.';
                setTimeout(function () {
                    _this.errorMsg = '';
                }, 3000);
            }
        }
        else {
            this.errorMsg = 'All fields are required.';
            setTimeout(function () {
                _this.errorMsg = '';
            }, 3000);
        }
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebase: {}
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/WarholMac/Documents/WWCommunity/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map