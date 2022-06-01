(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva */ "./node_modules/.pnpm/dva@2.4.1_react-dom@16.14.0+react@16.14.0/node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Loading */ "./src/layouts/Loading.js");


 // import { Spin, Alert } from 'antd';



var App = WrappedComponent => {
  var _dec, _class;

  var Apps = (_dec = Object(dva__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
    global: state.global // status: state.status,

  })), _dec(_class = class Apps extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
    componentDidMount() {
      if (localStorage.getItem('token') && this.props.global.menuses.length === 0) {
        this.props.dispatch({
          type: 'global/query'
        });
        this.props.dispatch({
          type: 'options/fetch'
        });
      } else {
        this.props.dispatch({
          type: 'global/redirect' // payload: this.props.global.status,

        });
      }
    }

    render() {
      var menus = this.props.menus;
      return menus.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], this.props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
        menus: menus
      }));
    }

  }) || _class);
  return Apps;
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/GlobalHeader/RightContent.js":
/*!*****************************************************!*\
  !*** ./src/components/GlobalHeader/RightContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalHeaderRight; });
/* harmony import */ var antd_es_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/spin/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/spin/style/index.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/spin */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/spin/index.js");
/* harmony import */ var antd_es_dropdown_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/dropdown/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/dropdown/style/index.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/dropdown/index.js");
/* harmony import */ var antd_es_avatar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/avatar/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/avatar/style/index.js");
/* harmony import */ var antd_es_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/avatar */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/avatar/index.js");
/* harmony import */ var antd_es_menu_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/menu/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/menu/style/index.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_tag_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/tag/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/tag/style/index.js");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/es/tag */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/tag/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! umi/locale */ "./node_modules/.pnpm/umi-plugin-locale@2.11.6_react@16.14.0/node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/.pnpm/moment@2.29.3/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/groupBy */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/groupBy.js");
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.less */ "./src/components/GlobalHeader/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_17__);
















 // import NoticeIcon from '../NoticeIcon';
// import HeaderSearch from '../HeaderSearch';


class GlobalHeaderRight extends react__WEBPACK_IMPORTED_MODULE_13__["PureComponent"] {
  constructor() {
    super(...arguments);

    this.changLang = () => {
      var locale = Object(umi_locale__WEBPACK_IMPORTED_MODULE_14__["getLocale"])();

      if (!locale || locale === 'zh-CN') {
        Object(umi_locale__WEBPACK_IMPORTED_MODULE_14__["setLocale"])('en-US');
      } else {
        Object(umi_locale__WEBPACK_IMPORTED_MODULE_14__["setLocale"])('zh-CN');
      }
    };
  }

  getNoticeData() {
    var _this$props$notices = this.props.notices,
        notices = _this$props$notices === void 0 ? [] : _this$props$notices;

    if (notices.length === 0) {
      return {};
    }

    var newNotices = notices.map(notice => {
      var newNotice = _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_12___default()({}, notice);

      if (newNotice.datetime) {
        newNotice.datetime = moment__WEBPACK_IMPORTED_MODULE_15___default()(notice.datetime).fromNow();
      }

      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }

      if (newNotice.extra && newNotice.status) {
        var color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold'
        }[newNotice.status];
        newNotice.extra = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_11__["default"], {
          color: color,
          style: {
            marginRight: 0
          }
        }, newNotice.extra);
      }

      return newNotice;
    });
    return lodash_groupBy__WEBPACK_IMPORTED_MODULE_16___default()(newNotices, 'type');
  }

  render() {
    var _this$props = this.props,
        currentUser = _this$props.currentUser,
        onMenuClick = _this$props.onMenuClick,
        theme = _this$props.theme;
    var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _index_less__WEBPACK_IMPORTED_MODULE_17___default.a.menu,
      selectedKeys: [],
      onClick: onMenuClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
      key: "logout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "logout"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(umi_locale__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
      id: "menu.account.logout",
      defaultMessage: "logout"
    })));
    var className = _index_less__WEBPACK_IMPORTED_MODULE_17___default.a.right;

    if (theme === 'dark') {
      className = "".concat(_index_less__WEBPACK_IMPORTED_MODULE_17___default.a.right, "  ").concat(_index_less__WEBPACK_IMPORTED_MODULE_17___default.a.dark);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
      className: className
    }, currentUser.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      overlay: menu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_17___default.a.action, " ").concat(_index_less__WEBPACK_IMPORTED_MODULE_17___default.a.account)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "small",
      className: _index_less__WEBPACK_IMPORTED_MODULE_17___default.a.avatar,
      src: currentUser.avatar,
      alt: "avatar"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_17___default.a.name
    }, currentUser.name))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "small",
      style: {
        marginLeft: 8,
        marginRight: 8
      }
    }));
  }

}

/***/ }),

/***/ "./src/components/GlobalHeader/index.js":
/*!**********************************************!*\
  !*** ./src/components/GlobalHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalHeader; });
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! umi/link */ "./node_modules/.pnpm/umi@2.13.17_react@16.14.0/node_modules/umi/link.js");
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(umi_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_decorators_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-decorators/debounce */ "./node_modules/.pnpm/lodash-decorators@6.0.1_lodash@4.17.21/node_modules/lodash-decorators/debounce.js");
/* harmony import */ var lodash_decorators_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_decorators_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/GlobalHeader/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _RightContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RightContent */ "./src/components/GlobalHeader/RightContent.js");




var _dec, _class;





 // const Option = Select.Option;

var GlobalHeader = (_dec = lodash_decorators_debounce__WEBPACK_IMPORTED_MODULE_5___default()(600), (_class = class GlobalHeader extends react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"] {
  constructor() {
    super(...arguments);

    this.toggle = () => {
      var _this$props = this.props,
          collapsed = _this$props.collapsed,
          onCollapse = _this$props.onCollapse;
      onCollapse(!collapsed);
      this.triggerResizeEvent();
    };

    this.handleChange = e => {
      this.props.dispatch({
        type: 'global/changeRegion',
        payload: {
          region: e
        }
      });
    };
  }

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/


  triggerResizeEvent() {
    // eslint-disable-line
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  render() {
    var _this$props2 = this.props,
        collapsed = _this$props2.collapsed,
        isMobile = _this$props2.isMobile,
        logo = _this$props2.logo;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.header
    }, isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(umi_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      to: "/",
      className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.logo,
      key: "logo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: logo,
      alt: "logo",
      width: "32"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.trigger,
      type: collapsed ? 'menu-unfold' : 'menu-fold',
      onClick: this.toggle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_RightContent__WEBPACK_IMPORTED_MODULE_7__["default"], this.props));
  }

}, (_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(_class.prototype, "triggerResizeEvent", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "triggerResizeEvent"), _class.prototype)), _class));


/***/ }),

/***/ "./src/components/GlobalHeader/index.less":
/*!************************************************!*\
  !*** ./src/components/GlobalHeader/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"antd-pro-components-global-header-index-header","logo":"antd-pro-components-global-header-index-logo","menu":"antd-pro-components-global-header-index-menu","trigger":"antd-pro-components-global-header-index-trigger","right":"antd-pro-components-global-header-index-right","action":"antd-pro-components-global-header-index-action","search":"antd-pro-components-global-header-index-search","account":"antd-pro-components-global-header-index-account","avatar":"antd-pro-components-global-header-index-avatar","dark":"antd-pro-components-global-header-index-dark","name":"antd-pro-components-global-header-index-name"};
    if(true) {
      // 1652778144747
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/components/SiderMenu/BaseMenu.js":
/*!**********************************************!*\
  !*** ./src/components/SiderMenu/BaseMenu.js ***!
  \**********************************************/
/*! exports provided: getMenuMatches, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuMatches", function() { return getMenuMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseMenu; });
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_menu_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/menu/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/menu/style/index.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/menu/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umi/link */ "./node_modules/.pnpm/umi@2.13.17_react@16.14.0/node_modules/umi/link.js");
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(umi_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/.pnpm/path-to-regexp@1.7.0/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_pathTools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_utils/pathTools */ "./src/components/_utils/pathTools.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./src/components/SiderMenu/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_9__);






 // import { formatMessage } from 'umi/locale';




var SubMenu = antd_es_menu__WEBPACK_IMPORTED_MODULE_4__["default"].SubMenu; // Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,

var getIcon = icon => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
      src: icon,
      alt: "icon",
      className: _index_less__WEBPACK_IMPORTED_MODULE_9___default.a.icon
    });
  }

  if (typeof icon === 'string') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: icon
    });
  }

  return icon;
};

var getMenuMatches = (flatMenuKeys, path) => flatMenuKeys.filter(item => item && path_to_regexp__WEBPACK_IMPORTED_MODULE_7___default()(item).test(path));
class BaseMenu extends react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"] {
  constructor(props) {
    super(props);

    this.getNavMenuItems = (menusData, parent) => {
      if (!menusData) {
        return [];
      }

      return menusData.filter(item => item.name && !item.hideInMenu).map(item => {
        // make dom
        var ItemDom = this.getSubMenuOrItem(item, parent);
        return this.checkPermissionItem(item.authority, ItemDom);
      }).filter(item => item);
    };

    this.getSelectedMenuKeys = () => {
      var pathname = this.props.location.pathname;
      return Object(_utils_pathTools__WEBPACK_IMPORTED_MODULE_8__["urlToList"])(pathname).map(itemPath => getMenuMatches(this.flatMenuKeys, itemPath).pop());
    };

    this.getSubMenuOrItem = item => {
      // doc: add hideChildrenInMenu
      if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
        var name = item.name; // formatMessage({ id: item.locale });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubMenu, {
          title: item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, getIcon(item.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, name)) : name,
          key: item.path
        }, this.getNavMenuItems(item.children));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
        key: item.path
      }, this.getMenuItemPath(item));
    };

    this.getMenuItemPath = item => {
      var name = item.name; // formatMessage({ id: item.locale });

      var itemPath = this.conversionPath(item.path);
      var icon = getIcon(item.icon);
      var target = item.target; // Is it a http link

      if (/^https?:\/\//.test(itemPath)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: itemPath,
          target: target
        }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, name));
      }

      var _this$props = this.props,
          location = _this$props.location,
          isMobile = _this$props.isMobile,
          onCollapse = _this$props.onCollapse;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(umi_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        to: itemPath,
        target: target,
        replace: itemPath === location.pathname,
        onClick: isMobile ? () => {
          onCollapse(true);
        } : undefined
      }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, name));
    };

    this.checkPermissionItem = (authority, ItemDom) => {
      var Authorized = this.props.Authorized;

      if (Authorized && Authorized.check) {
        var check = Authorized.check;
        return check(authority, ItemDom);
      }

      return ItemDom;
    };

    this.conversionPath = path => {
      if (path && path.indexOf('http') === 0) {
        return path;
      }

      return "/".concat(path || '').replace(/\/+/g, '/');
    };

    this.flatMenuKeys = this.getFlatMenuKeys(props.menuData);
  }
  /**
   * Recursively flatten the data
   * [{path:string},{path:string}] => {path,path2}
   * @param  menus
   */


  getFlatMenuKeys(menus) {
    var keys = [];
    menus.forEach(item => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }

      keys.push(item.path);
    });
    return keys;
  }
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */


  render() {
    var _this$props2 = this.props,
        openKeys = _this$props2.openKeys,
        theme = _this$props2.theme,
        mode = _this$props2.mode; // if pathname can't match, use the nearest parent's key

    var selectedKeys = this.getSelectedMenuKeys();

    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }

    var props = {};

    if (openKeys) {
      props = {
        openKeys
      };
    } // console.log(selectedKeys, 'open', openKeys);


    var _this$props3 = this.props,
        handleOpenChange = _this$props3.handleOpenChange,
        style = _this$props3.style,
        menuData = _this$props3.menuData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_4__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: "Menu",
      mode: mode,
      theme: theme,
      onOpenChange: handleOpenChange,
      selectedKeys: selectedKeys //   openKeys={openKeys}
      ,
      style: style,
      className: mode === 'horizontal' ? 'top-nav-menu' : ''
    }, props), this.getNavMenuItems(menuData));
  }

}

/***/ }),

/***/ "./src/components/SiderMenu/SiderMenu.js":
/*!***********************************************!*\
  !*** ./src/components/SiderMenu/SiderMenu.js ***!
  \***********************************************/
/*! exports provided: getFlatMenuKeys, getMenuMatchKeys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlatMenuKeys", function() { return getFlatMenuKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuMatchKeys", function() { return getMenuMatchKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiderMenu; });
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/layout/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/style/index.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/.pnpm/path-to-regexp@1.7.0/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/components/SiderMenu/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BaseMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseMenu */ "./src/components/SiderMenu/BaseMenu.js");
/* harmony import */ var _utils_pathTools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_utils/pathTools */ "./src/components/_utils/pathTools.js");









var Sider = antd_es_layout__WEBPACK_IMPORTED_MODULE_2__["default"].Sider;
/**
 * 获得菜单子节点
 * @memberof SiderMenu
 */

var getDefaultCollapsedSubMenus = props => {
  var pathname = props.location.pathname,
      flatMenuKeys = props.flatMenuKeys;
  return Object(_utils_pathTools__WEBPACK_IMPORTED_MODULE_8__["urlToList"])(pathname).map(item => Object(_BaseMenu__WEBPACK_IMPORTED_MODULE_7__["getMenuMatches"])(flatMenuKeys, item)[0]).filter(item => item);
};
/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menu
 */


var getFlatMenuKeys = menu => menu.reduce((keys, item) => {
  keys.push(item.path);

  if (item.children) {
    return keys.concat(getFlatMenuKeys(item.children));
  }

  return keys;
}, []);
/**
 * Find all matched menu keys based on paths
 * @param  flatMenuKeys: [/abc, /abc/:id, /abc/:id/info]
 * @param  paths: [/abc, /abc/11, /abc/11/info]
 */

var getMenuMatchKeys = (flatMenuKeys, paths) => paths.reduce((matchKeys, path) => matchKeys.concat(flatMenuKeys.filter(item => path_to_regexp__WEBPACK_IMPORTED_MODULE_4___default()(item).test(path))), []);
class SiderMenu extends react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"] {
  constructor(props) {
    super(props);

    this.isMainMenu = key => {
      var menuData = this.props.menuData;
      return menuData.some(item => {
        if (key) {
          return item.key === key || item.path === key;
        }

        return false;
      });
    };

    this.handleOpenChange = openKeys => {
      var moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
      this.setState({
        openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys]
      });
    };

    this.flatMenuKeys = getFlatMenuKeys(props.menuData);
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props)
    };
  }

  static getDerivedStateFromProps(props, state) {
    var pathname = state.pathname;

    if (props.location.pathname !== pathname) {
      return {
        pathname: props.location.pathname,
        openKeys: getDefaultCollapsedSubMenus(props)
      };
    }

    return null;
  }

  render() {
    var _this$props = this.props,
        collapsed = _this$props.collapsed,
        onCollapse = _this$props.onCollapse,
        fixSiderbar = _this$props.fixSiderbar,
        theme = _this$props.theme;
    var openKeys = this.state.openKeys;
    var defaultProps = collapsed ? {} : {
      openKeys
    };
    var siderClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(_index_less__WEBPACK_IMPORTED_MODULE_6___default.a.sider, {
      [_index_less__WEBPACK_IMPORTED_MODULE_6___default.a.fixSiderbar]: fixSiderbar,
      [_index_less__WEBPACK_IMPORTED_MODULE_6___default.a.light]: theme === 'light'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Sider, {
      trigger: null,
      collapsible: true,
      collapsed: collapsed,
      breakpoint: "lg",
      onCollapse: onCollapse,
      width: 256,
      theme: theme,
      className: siderClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_6___default.a.logo,
      id: "logo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      target: "_self",
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: "https://hapcdn.hapyun.com/static/hapyun/hapyun/hapyun_logo.png",
      alt: "logo"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_BaseMenu__WEBPACK_IMPORTED_MODULE_7__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
      mode: "inline",
      handleOpenChange: this.handleOpenChange,
      onOpenChange: this.handleOpenChange,
      style: {
        padding: '16px 0',
        width: '100%'
      }
    }, defaultProps)));
  }

}

/***/ }),

/***/ "./src/components/SiderMenu/index.js":
/*!*******************************************!*\
  !*** ./src/components/SiderMenu/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/drawer/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/drawer/style/index.js");
/* harmony import */ var antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/drawer */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/drawer/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SiderMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SiderMenu */ "./src/components/SiderMenu/SiderMenu.js");





/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menus
 */

var getFlatMenuKeys = menuData => {
  var keys = [];
  menuData.forEach(item => {
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }

    keys.push(item.path);
  });
  return keys;
};

var SiderMenuWrapper = props => {
  var isMobile = props.isMobile,
      menuData = props.menuData,
      collapsed = props.collapsed,
      onCollapse = props.onCollapse; // console.log(collapsed, isMobile);

  return isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    visible: !collapsed,
    placement: "left",
    onClose: () => onCollapse(true),
    style: {
      padding: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SiderMenu__WEBPACK_IMPORTED_MODULE_4__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    flatMenuKeys: getFlatMenuKeys(menuData),
    collapsed: isMobile ? false : collapsed
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SiderMenu__WEBPACK_IMPORTED_MODULE_4__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    flatMenuKeys: getFlatMenuKeys(menuData)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SiderMenuWrapper);

/***/ }),

/***/ "./src/components/SiderMenu/index.less":
/*!*********************************************!*\
  !*** ./src/components/SiderMenu/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logo":"antd-pro-components-sider-menu-index-logo","sider":"antd-pro-components-sider-menu-index-sider","fixSiderbar":"antd-pro-components-sider-menu-index-fixSiderbar","light":"antd-pro-components-sider-menu-index-light","icon":"antd-pro-components-sider-menu-index-icon"};
    if(true) {
      // 1652778144804
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/components/TopNavHeader/index.js":
/*!**********************************************!*\
  !*** ./src/components/TopNavHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopNavHeader; });
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! umi/link */ "./node_modules/.pnpm/umi@2.13.17_react@16.14.0/node_modules/umi/link.js");
/* harmony import */ var umi_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(umi_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlobalHeader_RightContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GlobalHeader/RightContent */ "./src/components/GlobalHeader/RightContent.js");
/* harmony import */ var _SiderMenu_BaseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SiderMenu/BaseMenu */ "./src/components/SiderMenu/BaseMenu.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/components/TopNavHeader/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






class TopNavHeader extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      maxWidth: (props.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 330 - 165 - 4 - 36
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      maxWidth: (props.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 330 - 165 - 4 - 36
    };
  }

  render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        contentWidth = _this$props.contentWidth,
        logo = _this$props.logo;
    var maxWidth = this.state.maxWidth;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_5___default.a.head, " ").concat(theme === 'light' ? _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.light : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: _ref => {
        this.maim = _ref;
      },
      className: "".concat(_index_less__WEBPACK_IMPORTED_MODULE_5___default.a.main, " ").concat(contentWidth === 'Fixed' ? _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.wide : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.left
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _index_less__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
      key: "logo",
      id: "logo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(umi_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: logo,
      alt: "logo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Ant Design Pro"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        maxWidth
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SiderMenu_BaseMenu__WEBPACK_IMPORTED_MODULE_4__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {
      style: {
        border: 'none',
        height: 64
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GlobalHeader_RightContent__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)));
  }

}

/***/ }),

/***/ "./src/components/TopNavHeader/index.less":
/*!************************************************!*\
  !*** ./src/components/TopNavHeader/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"head":"antd-pro-components-top-nav-header-index-head","light":"antd-pro-components-top-nav-header-index-light","main":"antd-pro-components-top-nav-header-index-main","wide":"antd-pro-components-top-nav-header-index-wide","left":"antd-pro-components-top-nav-header-index-left","right":"antd-pro-components-top-nav-header-index-right","logo":"antd-pro-components-top-nav-header-index-logo"};
    if(true) {
      // 1652778144755
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/layouts/BasicLayout.js":
/*!************************************!*\
  !*** ./src/layouts/BasicLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_alert_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/alert/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/alert/style/index.js");
/* harmony import */ var antd_es_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/alert */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/alert/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/layout/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/style/index.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-document-title */ "./node_modules/.pnpm/react-document-title@2.0.3_react@16.14.0/node_modules/react-document-title/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! memoize-one */ "./node_modules/.pnpm/memoize-one@4.0.3/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dva */ "./node_modules/.pnpm/dva@2.4.1_react-dom@16.14.0+react@16.14.0/node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_container_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-container-query */ "./node_modules/.pnpm/react-container-query@0.11.3_react-dom@16.14.0+react@16.14.0/node_modules/react-container-query/lib/index.js");
/* harmony import */ var react_container_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_container_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/.pnpm/path-to-regexp@1.7.0/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! enquire-js */ "./node_modules/.pnpm/enquire-js@0.2.1/node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SiderMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/SiderMenu */ "./src/components/SiderMenu/index.js");
/* harmony import */ var _utils_Authorized__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/Authorized */ "./src/utils/Authorized.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Footer */ "./src/layouts/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Header */ "./src/layouts/Header.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MenuContext */ "./src/layouts/MenuContext.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/App */ "./src/components/App.js");
/* harmony import */ var _pages_Authorized__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/pages/Authorized */ "./src/pages/Authorized.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! moment */ "./node_modules/.pnpm/moment@2.29.3/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_24__);







var _class;




















var Content = antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"].Content; // Conversion router to menu.

function formatter(data) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parentAuthority = arguments.length > 2 ? arguments[2] : undefined;
  var parentName = arguments.length > 3 ? arguments[3] : undefined;
  return data.map(item => {
    // let locale = 'menu';
    // if (parentName && item.name) {
    //   locale = `${parentName}.${item.name}`;
    // } else if (item.name) {
    //   locale = `menu.${item.name}`;
    // } else if (parentName) {
    //   locale = parentName;
    // }
    var result = _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, item);

    if (item.routes) {
      var children = formatter(item.routes, "".concat(parentPath).concat(item.path, "/"), item.authority, 'menu'); // Reduce memory usage

      result.children = children;
    }

    delete result.routes;
    return result;
  });
}

var query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
};

var BasicLayout = Object(_components_App__WEBPACK_IMPORTED_MODULE_21__["default"])(_class = class BasicLayout extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent {
  constructor(props) {
    var _this;

    super(props);
    _this = this;
    this.state = {
      rendering: true,
      isMobile: false,
      timeOut: false
    };

    this.handleOverTime = () => {
      var timeOut = this.state.timeOut;
      var timeToken = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["getSession"])('timeToken');

      if (!timeToken && !timeOut) {
        // setSession('timeToken', moment().format('YYYY-MM-DD HH:mm:ss'));
        var url = "/ncov/version.json?time=".concat(new Date().valueOf());
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.send(null); // eslint-disable-next-line func-names

        request.onload = () => {
          /* XHR对象获取到返回信息后执行 */
          if (request.status === 200) {
            var json = JSON.parse(request.responseText); // console.log(json);

            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["setSession"])('timeToken', moment__WEBPACK_IMPORTED_MODULE_24___default()().format('YYYY-MM-DD HH:mm:ss'));

            if (!(json.version === window.currentVersion)) {
              this.setState({
                timeOut: true
              });
            }
          }
        };

        return;
      }

      var timeMoment = moment__WEBPACK_IMPORTED_MODULE_24___default()(timeToken || undefined); // console.log(moment().diff(timeToken, 'hours'));

      if (moment__WEBPACK_IMPORTED_MODULE_24___default()().diff(timeMoment, 'minutes') > 14 && !timeOut) {
        var _url = "/ncov/version.json?time=".concat(new Date().valueOf());

        var _request = new XMLHttpRequest();

        _request.open('get', _url);

        _request.send(null); // eslint-disable-next-line func-names


        _request.onload = () => {
          /* XHR对象获取到返回信息后执行 */
          if (_request.status === 200) {
            var json = JSON.parse(_request.responseText);

            if (!(json.version === window.currentVersion)) {
              this.setState({
                timeOut: true
              });
            }

            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["setSession"])('timeToken', moment__WEBPACK_IMPORTED_MODULE_24___default()().format('YYYY-MM-DD HH:mm:ss'));
          }
        };
      }
    };

    this.matchParamsPath = pathname => {
      var pathKey = Object.keys(this.breadcrumbNameMap).find(key => path_to_regexp__WEBPACK_IMPORTED_MODULE_13___default()(key).test(pathname));
      return this.breadcrumbNameMap[pathKey];
    };

    this.getPageTitle = function () {
      var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var menus = _this.props.menus;
      var title = '';
      var operation = '';
      var params = pathname.split('/'); // console.log(params);

      if (menus.length !== 0 && params.length > 1) {
        for (var i = 0; i < menus.length; i++) {
          var _menus$i, _menus$i$path;

          if (((_menus$i = menus[i]) === null || _menus$i === void 0 ? void 0 : (_menus$i$path = _menus$i.path) === null || _menus$i$path === void 0 ? void 0 : _menus$i$path.indexOf(params[1])) >= 0) {
            if (menus[i].routes && menus[i].routes.length !== 0) {
              menus[i].routes.forEach(item => {
                if (item.path.split('/').includes(params[3])) {
                  title = item.name;
                }

                if (params[3]) {
                  switch (params[3]) {
                    case 'create':
                      operation = '创建';
                      break;

                    case 'update':
                      operation = '更新';
                      break;

                    case 'detail':
                      operation = '查看';
                      break;

                    default:
                      operation = '';
                  }
                }
              });
            }
          }
        }
      }

      if (title) {
        if (operation) {
          return "".concat(operation).concat(title, "-\u65B0\u51A0\u68C0\u6D4B");
        }

        return "".concat(title, "-\u65B0\u51A0\u68C0\u6D4B");
      }

      if (pathname.includes('/ncov/area/user/list')) {
        return "\u533A\u57DF\u4EBA\u5458-\u65B0\u51A0\u68C0\u6D4B";
      }

      return '新冠检测';
    };

    this.getLayoutStyle = () => {
      var isMobile = this.state.isMobile;
      var _this$props = this.props,
          fixSiderbar = _this$props.fixSiderbar,
          collapsed = _this$props.collapsed,
          layout = _this$props.layout;

      if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
        return {
          paddingLeft: collapsed ? '80px' : '256px'
        };
      }

      return null;
    };

    this.getContentStyle = () => {
      var fixedHeader = this.props.fixedHeader;
      return {
        margin: '24px 24px 0',
        paddingTop: fixedHeader ? 64 : 0
      };
    };

    this.handleMenuCollapse = collapsed => {
      var dispatch = this.props.dispatch;
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: collapsed
      });
    };

    this.getPageTitle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.getPageTitle);
    this.getBreadcrumbNameMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.getBreadcrumbNameMap, lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default.a);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    this.matchParamsPath = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.matchParamsPath, lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default.a);
  }

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'user/fetchCurrent',
    // });
    // dispatch({
    //   type: 'setting/getSetting',
    // // });
    // document.getElementById('root').scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('click', this.handleOverTime, true);
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false
      });
    });
    this.enquireHandler = Object(enquire_js__WEBPACK_IMPORTED_MODULE_14__["enquireScreen"])(mobile => {
      var isMobile = this.state.isMobile;

      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile
        });
      }
    });
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    var isMobile = this.state.isMobile;
    var _this$props2 = this.props,
        collapsed = _this$props2.collapsed,
        dispatch = _this$props2.dispatch,
        userStatus = _this$props2.userStatus;

    if (userStatus) {
      dispatch({
        type: 'user/fetchCurrent'
      });
    } // if (optionsStatus) {
    //   dispatch({
    //     type: 'options/fetch',
    //   });
    // }


    if (isMobile && !preProps.isMobile && !collapsed) {
      this.handleMenuCollapse(false);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
    Object(enquire_js__WEBPACK_IMPORTED_MODULE_14__["unenquireScreen"])(this.enquireHandler);
    window.removeEventListener('click', this.handleOverTime, true);
  }

  getContext() {
    var location = this.props.location;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap
    };
  }

  getMenuData() {
    var _user$roles, _user$roles2, _user$roles3, _user$roles8;

    var _this$props3 = this.props,
        menus = _this$props3.menus,
        user = _this$props3.user;
    var menuAdmin = [];
    menuAdmin.push(menus[0]); // console.log(user?.roles?.includes('develop'));
    // if (user?.roles?.includes('develop')) {
    //   menuAdmin = menus;
    // } else {

    if ((user === null || user === void 0 ? void 0 : (_user$roles = user.roles) === null || _user$roles === void 0 ? void 0 : _user$roles.split(',').includes('ncov-laboratory')) || (user === null || user === void 0 ? void 0 : (_user$roles2 = user.roles) === null || _user$roles2 === void 0 ? void 0 : _user$roles2.split(',').includes('experiment')) || (user === null || user === void 0 ? void 0 : (_user$roles3 = user.roles) === null || _user$roles3 === void 0 ? void 0 : _user$roles3.split(',').includes('sample_receiver'))) {
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].name == '样本实验处理') {
          menuAdmin.push(menus[i]);
          break;
        }
      }
    }

    for (var _i = 0; _i < menus.length; _i++) {
      if (menus[_i].name == '新冠检测') {
        var _user$roles4, _user$roles7;

        if (user === null || user === void 0 ? void 0 : (_user$roles4 = user.roles) === null || _user$roles4 === void 0 ? void 0 : _user$roles4.split(',').includes('jx_sum_data')) {
          var _user$roles5;

          if (user === null || user === void 0 ? void 0 : (_user$roles5 = user.roles) === null || _user$roles5 === void 0 ? void 0 : _user$roles5.split(',').includes('jx_check')) {
            menuAdmin.push(menus[_i]);
          } else {
            var newMenus = menus[_i].routes.filter(item => !(item.path === '/ncov/detection/sr-sample-sum' || item.path === '/ncov/detection/sr-receive-sample'));

            menuAdmin.push(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, menus[_i], {
              routes: newMenus
            }));
          }
        } else {
          var _user$roles6;

          if (user === null || user === void 0 ? void 0 : (_user$roles6 = user.roles) === null || _user$roles6 === void 0 ? void 0 : _user$roles6.split(',').includes('jx_check')) {
            var _newMenus = menus[_i].routes.filter(item => item.path !== '/ncov/detection/hospital-sum');

            menuAdmin.push(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, menus[_i], {
              routes: _newMenus
            }));
          } else {
            var _newMenus2 = menus[_i].routes.filter(item => !(item.path === '/ncov/detection/sr-sample-sum' || item.path === '/ncov/detection/sr-receive-sample' || item.path === '/ncov/detection/hospital-sum'));

            menuAdmin.push(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, menus[_i], {
              routes: _newMenus2
            }));
          }
        }

        if (!(user === null || user === void 0 ? void 0 : (_user$roles7 = user.roles) === null || _user$roles7 === void 0 ? void 0 : _user$roles7.split(',').includes('area_ctx_sample'))) {
          var _menuAdmin, _menuAdmin$routes;

          var changeMenus = (_menuAdmin = menuAdmin[menuAdmin.length - 1]) === null || _menuAdmin === void 0 ? void 0 : (_menuAdmin$routes = _menuAdmin.routes) === null || _menuAdmin$routes === void 0 ? void 0 : _menuAdmin$routes.filter(item => item.path !== '/ncov/detection/area-sample-pipes'); // console.log(menuAdmin[menuAdmin.length - 1]);

          menuAdmin[menuAdmin.length - 1].routes = changeMenus;
        }

        break;
      }
    }

    if (user === null || user === void 0 ? void 0 : (_user$roles8 = user.roles) === null || _user$roles8 === void 0 ? void 0 : _user$roles8.split(',').includes('transport_manager')) {
      for (var _i2 = 0; _i2 < menus.length; _i2++) {
        if (menus[_i2].name == '样本转运') {
          menuAdmin.push(menus[_i2]);
          break;
        }
      }
    }

    for (var _i3 = 0; _i3 < menus.length; _i3++) {
      if (menus[_i3].name == '账号权限管理') {
        menuAdmin.push(menus[_i3]);
        break;
      }
    } // }


    return formatter(menuAdmin);
  }
  /**
   * 获取面包屑映射
   * @param {Object} menuData 菜单配置
   */


  getBreadcrumbNameMap() {
    var routerMap = {};

    var mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        } // Reduce memory usage


        routerMap[menuItem.path] = menuItem;
      });
    };

    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  render() {
    var _this$props4 = this.props,
        navTheme = _this$props4.navTheme,
        children = _this$props4.children,
        pathname = _this$props4.location.pathname;
    var _this$state = this.state,
        isMobile = _this$state.isMobile,
        timeOut = _this$state.timeOut;
    var menuData = this.getMenuData();
    var layout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SiderMenu__WEBPACK_IMPORTED_MODULE_15__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      logo: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      Authorized: _utils_Authorized__WEBPACK_IMPORTED_MODULE_16__["default"],
      theme: navTheme,
      onCollapse: this.handleMenuCollapse,
      menuData: menuData,
      isMobile: isMobile
    }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, this.getLayoutStyle(), {
        minHeight: '100vh'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_19__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      menuData: menuData,
      handleMenuCollapse: this.handleMenuCollapse,
      logo: 'https://hapcdn.hapyun.com/static/hapyun/hapyun/hapyun_logo.png',
      isMobile: isMobile
    }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, {
      style: this.getContentStyle()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_pages_Authorized__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      style: {
        height: 0,
        position: 'absolute',
        top: 12,
        right: 110
      }
    }, timeOut && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "warning" // style={{ width: 300 }}
      ,
      message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, "\u53D1\u73B0\u7CFB\u7EDF\u6709\u65B0\u7248\u672C\u4E0A\u7EBF", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        style: {
          marginLeft: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        onClick: () => {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_23__["setSession"])('timeToken', moment__WEBPACK_IMPORTED_MODULE_24___default()().format('YYYY-MM-DD HH:mm:ss'));
          setTimeout(() => window.location.reload(), 500);
        }
      }, "\u7ACB\u5373\u66F4\u65B0"))),
      showIcon: true
    })), children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], null)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_7___default.a, {
      title: this.getPageTitle(pathname)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_container_query__WEBPACK_IMPORTED_MODULE_11__["ContainerQuery"], {
      query: query
    }, params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MenuContext__WEBPACK_IMPORTED_MODULE_20__["default"].Provider, {
      value: this.getContext()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(params)
    }, layout)))));
  }

}) || _class;

/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_10__["connect"])(_ref => {
  var global = _ref.global,
      user = _ref.user,
      options = _ref.options,
      setting = _ref.setting;
  return _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({
    optionsStatus: options.status,
    menus: global.menuses || [],
    collapsed: global.collapsed,
    userStatus: user.status,
    user: user.currentUser,
    layout: setting.layout
  }, setting);
})(BasicLayout));

/***/ }),

/***/ "./src/layouts/Footer.js":
/*!*******************************!*\
  !*** ./src/layouts/Footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/icon/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/style/index.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/layout/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/style/index.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/.pnpm/moment@2.29.3/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_GlobalFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/GlobalFooter */ "./src/components/GlobalFooter/index.js");







var Footer = antd_es_layout__WEBPACK_IMPORTED_MODULE_3__["default"].Footer;

var FooterView = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Footer, {
  style: {
    padding: 0
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_GlobalFooter__WEBPACK_IMPORTED_MODULE_6__["default"] // links={[
//   {
//     key: 'Pro 首页',
//     title: 'Pro 首页',
//     href: 'https://pro.ant.design',
//     blankTarget: true,
//   },
//   {
//     key: 'github',
//     title: <Icon type="github" />,
//     href: 'https://github.com/ant-design/ant-design-pro',
//     blankTarget: true,
//   },
//   {
//     key: 'Ant Design',
//     title: 'Ant Design',
//     href: 'https://ant.design',
//     blankTarget: true,
//   },
// ]}
, {
  copyright: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, "Copyright ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "copyright"
  }), " 2014 - ", moment__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY'), " \u6DF1\u5733\u5E02\u6D77\u666E\u6D1B\u65AF\u751F\u7269\u79D1\u6280\u6709\u9650\u516C\u53F8")
}));

/* harmony default export */ __webpack_exports__["default"] = (FooterView);

/***/ }),

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/message */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/message/index.js");
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/layout/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/style/index.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! umi/locale */ "./node_modules/.pnpm/umi-plugin-locale@2.11.6_react@16.14.0/node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-animate */ "./node_modules/.pnpm/rc-animate@2.11.1/node_modules/rc-animate/es/Animate.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dva */ "./node_modules/.pnpm/dva@2.4.1_react-dom@16.14.0+react@16.14.0/node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! umi/router */ "./node_modules/.pnpm/umi@2.13.17_react@16.14.0/node_modules/umi/router.js");
/* harmony import */ var umi_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(umi_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_GlobalHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/GlobalHeader */ "./src/components/GlobalHeader/index.js");
/* harmony import */ var _components_TopNavHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/TopNavHeader */ "./src/components/TopNavHeader/index.js");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.less */ "./src/layouts/Header.less");
/* harmony import */ var _Header_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Header_less__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_Authorized__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/Authorized */ "./src/utils/Authorized.js");














var Header = antd_es_layout__WEBPACK_IMPORTED_MODULE_4__["default"].Header;

class HeaderView extends react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"] {
  constructor() {
    super(...arguments);
    this.state = {
      visible: true
    };

    this.getHeadWidth = () => {
      var _this$props = this.props,
          isMobile = _this$props.isMobile,
          collapsed = _this$props.collapsed,
          setting = _this$props.setting;
      var fixedHeader = setting.fixedHeader,
          layout = setting.layout;

      if (isMobile || !fixedHeader || layout === 'topmenu') {
        return '100%';
      }

      return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)';
    };

    this.handleNoticeClear = type => {
      antd_es_message__WEBPACK_IMPORTED_MODULE_2__["default"].success("".concat(Object(umi_locale__WEBPACK_IMPORTED_MODULE_6__["formatMessage"])({
        id: 'component.noticeIcon.cleared'
      }), " ").concat(type));

      var dispatch = this.props.dispatch;
      dispatch({
        type: 'global/clearNotices',
        payload: type
      });
    };

    this.handleMenuClick = _ref => {
      var key = _ref.key;
      var dispatch = this.props.dispatch;

      if (key === 'userCenter') {
        window.location.replace('/account/center/base');
      }

      if (key === 'triggerError') {
        umi_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/exception/trigger');
        return;
      }

      if (key === 'userinfo') {
        umi_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/account/settings/base');
        return;
      }

      if (key === 'logout') {
        dispatch({
          type: 'login/logout'
        });
      }
    };

    this.handleNoticeVisibleChange = visible => {
      if (visible) {
        var dispatch = this.props.dispatch;
        dispatch({
          type: 'global/fetchNotices'
        });
      }
    };

    this.handScroll = () => {
      var autoHideHeader = this.props.autoHideHeader;
      var visible = this.state.visible;

      if (!autoHideHeader) {
        return;
      }

      var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;

      if (!this.ticking) {
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.setState({
              visible: true
            });
            this.scrollTop = scrollTop;
            return;
          }

          if (scrollTop > 300 && visible) {
            this.setState({
              visible: false
            });
          }

          if (scrollTop < 300 && !visible) {
            this.setState({
              visible: true
            });
          }

          this.oldScrollTop = scrollTop;
          this.ticking = false;
        });
      }

      this.ticking = false;
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true
      };
    }

    return null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, {
      passive: true
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll);
  }

  render() {
    var _this$props2 = this.props,
        isMobile = _this$props2.isMobile,
        handleMenuCollapse = _this$props2.handleMenuCollapse,
        setting = _this$props2.setting;
    var navTheme = setting.navTheme,
        layout = setting.layout,
        fixedHeader = setting.fixedHeader;
    var visible = this.state.visible;
    var isTop = layout === 'topmenu';
    var width = this.getHeadWidth();
    var HeaderDom = visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header, {
      style: {
        padding: 0,
        width
      },
      className: fixedHeader ? _Header_less__WEBPACK_IMPORTED_MODULE_12___default.a.fixedHeader : ''
    }, isTop && !isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TopNavHeader__WEBPACK_IMPORTED_MODULE_11__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      theme: navTheme,
      mode: "horizontal",
      Authorized: _utils_Authorized__WEBPACK_IMPORTED_MODULE_13__["default"],
      onCollapse: handleMenuCollapse,
      onNoticeClear: this.handleNoticeClear,
      onMenuClick: this.handleMenuClick,
      onNoticeVisibleChange: this.handleNoticeVisibleChange
    }, this.props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_GlobalHeader__WEBPACK_IMPORTED_MODULE_10__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      onCollapse: handleMenuCollapse,
      onNoticeClear: this.handleNoticeClear,
      onMenuClick: this.handleMenuClick,
      onNoticeVisibleChange: this.handleNoticeVisibleChange
    }, this.props))) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: "",
      transitionName: "fade"
    }, HeaderDom);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_8__["connect"])(_ref2 => {
  var user = _ref2.user,
      global = _ref2.global,
      setting = _ref2.setting,
      loading = _ref2.loading;
  return {
    currentUser: user.currentUser,
    collapsed: global.collapsed,
    fetchingNotices: loading.effects['global/fetchNotices'],
    notices: global.notices,
    setting
  };
})(HeaderView));

/***/ }),

/***/ "./src/layouts/Header.less":
/*!*********************************!*\
  !*** ./src/layouts/Header.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fixedHeader":"antd-pro-layouts-header-fixedHeader"};
    if(true) {
      // 1652778144304
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@0.7.0_webpack@4.41.1/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"publicPath":"/","hmr":true,"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/layouts/Loading.js":
/*!********************************!*\
  !*** ./src/layouts/Loading.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/spin/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/spin/style/index.js");
/* harmony import */ var antd_es_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/spin */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/spin/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/extends */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/layout/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/style/index.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-document-title */ "./node_modules/.pnpm/react-document-title@2.0.3_react@16.14.0/node_modules/react-document-title/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! memoize-one */ "./node_modules/.pnpm/memoize-one@4.0.3/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dva */ "./node_modules/.pnpm/dva@2.4.1_react-dom@16.14.0+react@16.14.0/node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_container_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-container-query */ "./node_modules/.pnpm/react-container-query@0.11.3_react-dom@16.14.0+react@16.14.0/node_modules/react-container-query/lib/index.js");
/* harmony import */ var react_container_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_container_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/.pnpm/path-to-regexp@1.7.0/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! enquire-js */ "./node_modules/.pnpm/enquire-js@0.2.1/node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! umi/locale */ "./node_modules/.pnpm/umi-plugin-locale@2.11.6_react@16.14.0/node_modules/umi-plugin-locale/lib/locale.js");
/* harmony import */ var umi_locale__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(umi_locale__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_SiderMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/SiderMenu */ "./src/components/SiderMenu/index.js");
/* harmony import */ var _utils_Authorized__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/Authorized */ "./src/utils/Authorized.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Footer */ "./src/layouts/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Header */ "./src/layouts/Header.js");
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MenuContext */ "./src/layouts/MenuContext.js");
/* harmony import */ var _pages_Exception_403__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/Exception/403 */ "./src/pages/Exception/403.js");

















 // import SettingDrawer from '@/components/SettingDrawer';






var Content = antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"].Content; // Conversion router to menu.

function formatter(data) {
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var parentAuthority = arguments.length > 2 ? arguments[2] : undefined;
  var parentName = arguments.length > 3 ? arguments[3] : undefined;
  return data.map(item => {
    var locale = 'menu';

    if (parentName && item.name) {
      locale = "".concat(parentName, ".").concat(item.name);
    } else if (item.name) {
      locale = "menu.".concat(item.name);
    } else if (parentName) {
      locale = parentName;
    }

    var result = _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, item, {
      locale // authority: item.authority || parentAuthority,

    });

    if (item.routes) {
      var children = formatter(item.routes, "".concat(parentPath).concat(item.path, "/"), item.authority, locale); // Reduce memory usage

      result.children = children;
    }

    delete result.routes;
    return result;
  });
}

var query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
};

class BasicLayout extends react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rendering: true,
      isMobile: false
    };

    this.matchParamsPath = pathname => {
      var pathKey = Object.keys(this.breadcrumbNameMap).find(key => path_to_regexp__WEBPACK_IMPORTED_MODULE_13___default()(key).test(pathname));
      return this.breadcrumbNameMap[pathKey];
    };

    this.getPageTitle = pathname => {
      var currRouterData = this.matchParamsPath(pathname);

      if (!currRouterData) {
        return '新冠检测';
      } // const message = currRouterData.name;


      return "\u65B0\u51A0\u68C0\u6D4B";
    };

    this.getLayoutStyle = () => {
      var isMobile = this.state.isMobile;
      var _this$props = this.props,
          fixSiderbar = _this$props.fixSiderbar,
          collapsed = _this$props.collapsed,
          layout = _this$props.layout;

      if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
        return {
          paddingLeft: collapsed ? '80px' : '256px'
        };
      }

      return null;
    };

    this.getContentStyle = () => {
      var fixedHeader = this.props.fixedHeader;
      return {
        margin: '24px 24px 0',
        paddingTop: fixedHeader ? 64 : 0
      };
    };

    this.handleMenuCollapse = collapsed => {
      var dispatch = this.props.dispatch;
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: collapsed
      });
    };

    this.getPageTitle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.getPageTitle);
    this.getBreadcrumbNameMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.getBreadcrumbNameMap, lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default.a);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    this.matchParamsPath = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(this.matchParamsPath, lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default.a);
  }

  componentDidMount() {
    var dispatch = this.props.dispatch;
    dispatch({
      type: 'user/fetchCurrent'
    });
    dispatch({
      type: 'setting/getSetting'
    }); // dispatch({
    //   type: 'global/query',
    // });

    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false
      });
    });
    this.enquireHandler = Object(enquire_js__WEBPACK_IMPORTED_MODULE_14__["enquireScreen"])(mobile => {
      var isMobile = this.state.isMobile;

      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile
        });
      }
    });
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    var isMobile = this.state.isMobile;
    var collapsed = this.props.collapsed;

    if (isMobile && !preProps.isMobile && !collapsed) {
      this.handleMenuCollapse(false);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.renderRef);
    Object(enquire_js__WEBPACK_IMPORTED_MODULE_14__["unenquireScreen"])(this.enquireHandler);
  }

  getContext() {
    var location = this.props.location;
    return {
      location,
      breadcrumbNameMap: this.breadcrumbNameMap
    };
  }

  getMenuData() {
    var routes = this.props.route.routes;
    return formatter(routes);
  }
  /**
   * 获取面包屑映射
   * @param {Object} menuData 菜单配置
   */


  getBreadcrumbNameMap() {
    var routerMap = {};

    var mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        } // Reduce memory usage


        routerMap[menuItem.path] = menuItem;
      });
    };

    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  render() {
    var _this$props2 = this.props,
        navTheme = _this$props2.navTheme,
        PropsLayout = _this$props2.layout,
        children = _this$props2.children,
        pathname = _this$props2.location.pathname;
    var isMobile = this.state.isMobile;
    var isTop = PropsLayout === 'topmenu';
    var menuData = this.getMenuData();
    var routerConfig = this.matchParamsPath(pathname);
    var layout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SiderMenu__WEBPACK_IMPORTED_MODULE_16__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      logo: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
      Authorized: _utils_Authorized__WEBPACK_IMPORTED_MODULE_17__["default"],
      theme: navTheme,
      onCollapse: this.handleMenuCollapse // menuData={menuData}
      ,
      menuData: [],
      isMobile: isMobile
    }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, this.getLayoutStyle(), {
        minHeight: '100vh'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_20__["default"], _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
      menuData: menuData,
      handleMenuCollapse: this.handleMenuCollapse,
      logo: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
      isMobile: isMobile
    }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, {
      style: this.getContentStyle()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_spin__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "large"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_19__["default"], null)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_7___default.a, {
      title: this.getPageTitle(pathname)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_container_query__WEBPACK_IMPORTED_MODULE_11__["ContainerQuery"], {
      query: query
    }, params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_MenuContext__WEBPACK_IMPORTED_MODULE_21__["default"].Provider, {
      value: this.getContext()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(params)
    }, layout)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_10__["connect"])(_ref => {
  var global = _ref.global,
      setting = _ref.setting;
  return _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({
    meunses: global.menuses || [],
    collapsed: global.collapsed,
    layout: setting.layout
  }, setting);
})(BasicLayout));

/***/ })

}]);
//# sourceMappingURL=18.async.js.map