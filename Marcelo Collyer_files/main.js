webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_resume_data_service__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeListPage = /** @class */ (function () {
    function ResumeListPage(navCtrl, _resumeDataService) {
        this.navCtrl = navCtrl;
        this._resumeDataService = _resumeDataService;
        this.findAllResumes();
    }
    ResumeListPage.prototype.findAllResumes = function () {
        this._resumeDataService.findAll()
            .subscribe(function (data) {
            if (data && data.length > 0) {
                this.resume = data[0];
            }
        }.bind(this));
    };
    ResumeListPage.prototype.isValidEndDate = function (endDate) {
        var value;
        if (endDate) {
            if (endDate instanceof Date) {
                value = endDate;
            }
            else {
                value = new Date(endDate);
            }
        }
        var year = value.getFullYear();
        return year > 1;
    };
    ResumeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/pages/resume-list/resume-list.html"*/'<ion-content>\n<div class="wrapper" *ngIf="resume">\n  <div class="sidebar-wrapper">\n    <div class="profile-container">\n<img class="profile" src="{{resume.profile_img_url}}"\n  alt="" />\n      <h1 class="name">{{resume.name}}</h1>\n      <h3 [innerHTML]="resume.roles_desc" class="tagline"></h3>\n    </div>\n    <!--//profile-container-->\n\n    <div class="contact-container container-block">\n      <ul class="list-unstyled contact-list">\n        <li class="email">\n          <i class="fa fa-envelope"></i>\n          <a href="mailto: {{resume.email}}">{{resume.email}}</a>\n        </li>\n        <li class="phone">\n          <i class="fa fa-phone"></i>\n          <a href="tel:{{resume.phone}}">{{resume.phone}}</a>\n        </li>\n        <li class="phone">\n        <i class="fa fa-skype"></i>\n          <a>{{resume.skype}}</a>\n        </li>\n        <li *ngIf="resume.website" class="website">\n          <i class="fa fa-globe"></i>\n          <a href="http://{{resume.website}}" target="_blank">{{resume.website}}</a>\n        </li>\n        <li *ngIf="resume.linkedin" class="linkedin">\n          <i class="fa fa-linkedin"></i>\n          <a href="http://{{resume.linkedin}}" target="_blank">{{resume.linkedin}}</a>\n        </li>\n        <li *ngIf="resume.github" class="github">\n          <i class="fa fa-github"></i>\n          <a href="http://{{resume.github}}" target="_blank">{{resume.github}}</a>\n        </li>\n        <li *ngIf="resume.twitter" class=" twitter ">\n          <i class="fa fa-twitter"></i>\n          <a href="http://{{resume.twitter}}" target="_blank">{{resume.twitter}}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class="education-container container-block-secondary">\n      <h2 class="container-block-title">Education</h2>\n        <div class="item" *ngFor="let edu of resume.educations">\n        <h4 class="degree">{{edu.title}} in {{edu.course}}</h4>\n        <h5 class="meta">{{edu.location}}</h5>\n        <div class="time">{{edu.start_date | date:\'yyyy\'}} - {{edu.end_date | date:\'yyyy\'}}</div>\n      </div>\n    </div>\n\n    <div class="languages-container container-block-secondary">\n      <h2 class="container-block-title">Languages</h2>\n        <ul class="list-unstyled interests-list" *ngFor="let language of resume.languages">\n        <li>{{language.name}}\n          <span class="lang-desc">{{language.level}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="languages-container container-block-secondary">\n      <h2 class="container-block-title">Certifications</h2>\n      <ul class="list-unstyled interests-list" *ngFor="let cert of resume.certifications">\n        <li>{{cert.description}}\n          <span class="lang-desc">{{cert.company}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="interests-container container-block-secondary">\n      <h2 class="container-block-title">Interests</h2>\n      <ul class="list-unstyled interests-list" *ngFor="let interest of resume.interests">\n        <li>{{interest.description}}</li>\n      </ul>\n    </div>\n    <!--//interests-->\n\n  </div>\n  <!--//sidebar-wrapper-->\n\n  <div class="main-wrapper">\n\n    <section class="section summary-section">\n      <h2 class="section-title">\n        <i class="fa fa-user"></i>Career Profile</h2>\n      <div class="summary">\n        <p>{{resume.carrer_desc}}</p>\n      </div>\n    </section>\n    \n    <section class="section experiences-section">\n      <h2 class="section-title">\n        <i class="fa fa-briefcase"></i>Experiences</h2>\n\n      <div class="item" *ngFor="let xp of resume.experiences; let last = last">\n        <div class="meta">\n          <div class="upper-row">\n            <h3 class="job-title">{{xp.subtitle}}</h3>\n            <div class="time">{{xp.start_date | date:\'MMM yyyy\'}} - {{xp.end_date.month}}\n              <label class="date" *ngIf="isValidEndDate(xp.end_date)">{{xp.end_date | date:\'MMM yyyy\'}} </label>\n              <label class="date" *ngIf="!isValidEndDate(xp.end_date)">Present</label>\n            </div>\n          </div>\n          <!--//upper-row-->\n          <div class="company">{{xp.title}}, {{xp.location}}</div>\n        </div>\n        <!--//meta-->\n        <div class="details">\n          <div [innerHTML]="xp.description"></div>\n        </div>\n        <hr *ngIf="!last">\n        <!--//details-->\n      </div>\n      <!--//item-->\n\n    </section>\n    <!--//section-->\n\n    <section class="skills-section section">\n      <h2 class="section-title">\n      <i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>\n      <div class="skillset">\n          <div *ngFor="let skill of resume.skills">\n            \n            <div class="row, item" (click)="skill.expanded = !skill.expanded">\n              <h3 *ngIf="skill.description" class="level-title">\n                <i *ngIf="!skill.expanded && skill.children.length > 0" class="fa fa-angle-right"></i>\n                <i *ngIf="skill.expanded" class="fa fa-angle-down"></i>\n                <label> </label>\n                {{skill.description}}\n              </h3>\n              <div class="level-bar">\n                <div class="level-bar-inner" [ngStyle]="{\'width\': skill.level}" data-level="skill.level">\n                </div>\n              </div>\n            </div>\n            \n            <div *ngIf="skill.expanded">\n              <div class="item" style="margin-left: 24px;" *ngFor="let innerSkill of skill.children">\n                <h3 *ngIf="innerSkill.description" class="level-title">\n                &sdot; {{innerSkill.description}}\n                </h3>\n                <div class="level-bar">\n                <div class="level-bar-inner" [ngStyle]="{\'width\': innerSkill.level, \'background\': \'#abd4de\'}" data-level="innerSkill.level">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n      </div>\n    </section>\n\n  </div>\n  <!--//main-body-->\n</div>\n\n<footer class="footer">\n  <div class="text-center">\n    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you\'d like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\n    <small class="copyright">Designed with\n      <i class="fa fa-heart"></i> by\n      <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>\n  </div>\n  <!--//container-->\n</footer>\n<!--//footer-->\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/pages/resume-list/resume-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_resume_data_service__["a" /* ResumeDataService */]])
    ], ResumeListPage);
    return ResumeListPage;
});

//# sourceMappingURL=resume-list.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ResumeDataService = /** @class */ (function () {
    function ResumeDataService(_http) {
        this._http = _http;
        this.endpointUri = '/resumes';
        this._baseUrl = "http://" + window.location.hostname + ":8000";
    }
    ResumeDataService.prototype.findById = function (id) {
        var url = "" + this._baseUrl + this.endpointUri + "/" + id;
        return this._http.get(url, {})
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
        });
    };
    ResumeDataService.prototype.findAll = function () {
        var url = "" + this._baseUrl + this.endpointUri;
        return this._http.get(url, {})
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
        });
    };
    ResumeDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ResumeDataService);
    return ResumeDataService;
}());

//# sourceMappingURL=resume-data.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_resume_list_resume_list_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_resume_list_resume_list__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_resume_list_resume_list_module__["a" /* ResumeListModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_resume_list_resume_list_module__["a" /* ResumeListModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_resume_list_resume_list__["a" /* ResumeListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: Window, useValue: window },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_resume_list_resume_list__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_resume_list_resume_list__["a" /* ResumeListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_resume_data_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_list__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResumeListModule = /** @class */ (function () {
    function ResumeListModule() {
    }
    ResumeListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__resume_list__["a" /* ResumeListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__resume_list__["a" /* ResumeListPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__resume_list__["a" /* ResumeListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_services_resume_data_service__["a" /* ResumeDataService */]
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'resume-list',template:/*ion-inline-start:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/pages/resume-list/resume-list.html"*/'<ion-content>\n<div class="wrapper" *ngIf="resume">\n  <div class="sidebar-wrapper">\n    <div class="profile-container">\n<img class="profile" src="{{resume.profile_img_url}}"\n  alt="" />\n      <h1 class="name">{{resume.name}}</h1>\n      <h3 [innerHTML]="resume.roles_desc" class="tagline"></h3>\n    </div>\n    <!--//profile-container-->\n\n    <div class="contact-container container-block">\n      <ul class="list-unstyled contact-list">\n        <li class="email">\n          <i class="fa fa-envelope"></i>\n          <a href="mailto: {{resume.email}}">{{resume.email}}</a>\n        </li>\n        <li class="phone">\n          <i class="fa fa-phone"></i>\n          <a href="tel:{{resume.phone}}">{{resume.phone}}</a>\n        </li>\n        <li class="phone">\n        <i class="fa fa-skype"></i>\n          <a>{{resume.skype}}</a>\n        </li>\n        <li *ngIf="resume.website" class="website">\n          <i class="fa fa-globe"></i>\n          <a href="http://{{resume.website}}" target="_blank">{{resume.website}}</a>\n        </li>\n        <li *ngIf="resume.linkedin" class="linkedin">\n          <i class="fa fa-linkedin"></i>\n          <a href="http://{{resume.linkedin}}" target="_blank">{{resume.linkedin}}</a>\n        </li>\n        <li *ngIf="resume.github" class="github">\n          <i class="fa fa-github"></i>\n          <a href="http://{{resume.github}}" target="_blank">{{resume.github}}</a>\n        </li>\n        <li *ngIf="resume.twitter" class=" twitter ">\n          <i class="fa fa-twitter"></i>\n          <a href="http://{{resume.twitter}}" target="_blank">{{resume.twitter}}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class="education-container container-block-secondary">\n      <h2 class="container-block-title">Education</h2>\n        <div class="item" *ngFor="let edu of resume.educations">\n        <h4 class="degree">{{edu.title}} in {{edu.course}}</h4>\n        <h5 class="meta">{{edu.location}}</h5>\n        <div class="time">{{edu.start_date | date:\'yyyy\'}} - {{edu.end_date | date:\'yyyy\'}}</div>\n      </div>\n    </div>\n\n    <div class="languages-container container-block-secondary">\n      <h2 class="container-block-title">Languages</h2>\n        <ul class="list-unstyled interests-list" *ngFor="let language of resume.languages">\n        <li>{{language.name}}\n          <span class="lang-desc">{{language.level}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="languages-container container-block-secondary">\n      <h2 class="container-block-title">Certifications</h2>\n      <ul class="list-unstyled interests-list" *ngFor="let cert of resume.certifications">\n        <li>{{cert.description}}\n          <span class="lang-desc">{{cert.company}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="interests-container container-block-secondary">\n      <h2 class="container-block-title">Interests</h2>\n      <ul class="list-unstyled interests-list" *ngFor="let interest of resume.interests">\n        <li>{{interest.description}}</li>\n      </ul>\n    </div>\n    <!--//interests-->\n\n  </div>\n  <!--//sidebar-wrapper-->\n\n  <div class="main-wrapper">\n\n    <section class="section summary-section">\n      <h2 class="section-title">\n        <i class="fa fa-user"></i>Career Profile</h2>\n      <div class="summary">\n        <p>{{resume.carrer_desc}}</p>\n      </div>\n    </section>\n    \n    <section class="section experiences-section">\n      <h2 class="section-title">\n        <i class="fa fa-briefcase"></i>Experiences</h2>\n\n      <div class="item" *ngFor="let xp of resume.experiences; let last = last">\n        <div class="meta">\n          <div class="upper-row">\n            <h3 class="job-title">{{xp.subtitle}}</h3>\n            <div class="time">{{xp.start_date | date:\'MMM yyyy\'}} - {{xp.end_date.month}}\n              <label class="date" *ngIf="isValidEndDate(xp.end_date)">{{xp.end_date | date:\'MMM yyyy\'}} </label>\n              <label class="date" *ngIf="!isValidEndDate(xp.end_date)">Present</label>\n            </div>\n          </div>\n          <!--//upper-row-->\n          <div class="company">{{xp.title}}, {{xp.location}}</div>\n        </div>\n        <!--//meta-->\n        <div class="details">\n          <div [innerHTML]="xp.description"></div>\n        </div>\n        <hr *ngIf="!last">\n        <!--//details-->\n      </div>\n      <!--//item-->\n\n    </section>\n    <!--//section-->\n\n    <section class="skills-section section">\n      <h2 class="section-title">\n      <i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>\n      <div class="skillset">\n          <div *ngFor="let skill of resume.skills">\n            \n            <div class="row, item" (click)="skill.expanded = !skill.expanded">\n              <h3 *ngIf="skill.description" class="level-title">\n                <i *ngIf="!skill.expanded && skill.children.length > 0" class="fa fa-angle-right"></i>\n                <i *ngIf="skill.expanded" class="fa fa-angle-down"></i>\n                <label> </label>\n                {{skill.description}}\n              </h3>\n              <div class="level-bar">\n                <div class="level-bar-inner" [ngStyle]="{\'width\': skill.level}" data-level="skill.level">\n                </div>\n              </div>\n            </div>\n            \n            <div *ngIf="skill.expanded">\n              <div class="item" style="margin-left: 24px;" *ngFor="let innerSkill of skill.children">\n                <h3 *ngIf="innerSkill.description" class="level-title">\n                &sdot; {{innerSkill.description}}\n                </h3>\n                <div class="level-bar">\n                <div class="level-bar-inner" [ngStyle]="{\'width\': innerSkill.level, \'background\': \'#abd4de\'}" data-level="innerSkill.level">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n      </div>\n    </section>\n\n  </div>\n  <!--//main-body-->\n</div>\n\n<footer class="footer">\n  <div class="text-center">\n    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you\'d like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\n    <small class="copyright">Designed with\n      <i class="fa fa-heart"></i> by\n      <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>\n  </div>\n  <!--//container-->\n</footer>\n<!--//footer-->\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/marcelo/Documents/workspaces/resume_angular_app/src/pages/resume-list/resume-list.html"*/
        })
    ], ResumeListModule);
    return ResumeListModule;
}());

//# sourceMappingURL=resume-list.module.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map
