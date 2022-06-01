webpackHotUpdate(93,{

/***/ "./src/pages/IndustryUser/Tabs/RosterModal.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/IndustryUser/Tabs/RosterModal.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/modal/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/modal/style/index.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/modal/index.js");
/* harmony import */ var antd_es_input_number_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input-number/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/input-number/style/index.js");
/* harmony import */ var antd_es_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input-number */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/input-number/index.js");
/* harmony import */ var antd_es_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/select/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/select/style/index.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/select */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/select/index.js");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/form/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/form/style/index.js");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/form */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/form/index.js");
/* harmony import */ var antd_es_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/input/style */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/input/style/index.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/input */ "./node_modules/.pnpm/antd@3.26.20_react-dom@16.14.0+react@16.14.0/node_modules/antd/es/input/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/objectSpread */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/.pnpm/babel-preset-umi@1.8.4/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/@babel+runtime@7.4.5/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_industry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/services/industry */ "./src/services/industry.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dva */ "./node_modules/.pnpm/dva@2.4.1_react-dom@16.14.0+react@16.14.0/node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);


















 // import { region } from '@/pages/CommonModelFunc/sortData';

var RosterModal = props => {
  var status = props.status,
      _props$item = props.item,
      item = _props$item === void 0 ? {} : _props$item,
      cancle = props.cancle,
      fetch = props.fetch,
      setRoster = props.setRoster,
      _props$form = props.form,
      getFieldDecorator = _props$form.getFieldDecorator,
      validateFields = _props$form.validateFields,
      resetFields = _props$form.resetFields,
      setFieldsValue = _props$form.setFieldsValue,
      dispatch = props.dispatch,
      loading = props.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState2 = _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default()(_useState, 2),
      listIndustry = _useState2[0],
      setListIndustry = _useState2[1];

  var onOk = () => {
    validateFields( /*#__PURE__*/function () {
      var _ref = _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee(err, fieldsValue) {
        return _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (!item.id) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return dispatch({
                  type: 'industryuser/update',
                  payload: _home_jianghao_hapyun_ncov_web_node_modules_pnpm_babel_preset_umi_1_8_4_node_modules_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_11___default()({}, fieldsValue, {
                    id: item.id
                  }),
                  callback: () => {
                    cancle();
                    setTimeout(() => {
                      setRoster();
                      fetch();
                      resetFields();
                    }, 300);
                  }
                });

              case 5:
                _context.next = 9;
                break;

              case 7:
                _context.next = 9;
                return dispatch({
                  type: 'industryuser/create',
                  payload: fieldsValue,
                  callback: () => {
                    cancle();
                    setTimeout(() => {
                      setRoster();
                      fetch();
                    }, 300);
                  }
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  var search = value => {
    if (!value) return;
    Object(_services_industry__WEBPACK_IMPORTED_MODULE_15__["list"])({
      name: value
    }).then(response => {
      if (!(response === null || response === void 0 ? void 0 : response.error)) {
        setListIndustry(response.data || []);
      }
    });
  };

  var searchIndustry = Object(lodash__WEBPACK_IMPORTED_MODULE_17__["debounce"])(search, 500);

  var changeIndustry = (_, options) => {
    if (options) {
      setFieldsValue({
        industry_id: Number(options.key).valueOf()
      });
    } else {
      setFieldsValue({
        industry_id: 0
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "".concat(item.id ? '编辑' : '创建', "\u91CD\u70B9\u884C\u4E1A\u4EBA\u5458"),
    visible: status,
    onCancel: () => cancle(),
    onOk: onOk,
    width: 700,
    confirmLoading: loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    wrapperCol: {
      span: 17
    },
    labelCol: {
      span: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    label: "\u59D3\u540D"
  }, getFieldDecorator('user_name', {
    initialValue: item.user_name,
    rules: [{
      required: true,
      message: '必填项'
    }]
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    label: "\u91CD\u70B9\u884C\u4E1A\u5355\u4F4D"
  }, getFieldDecorator('industry_name', {
    initialValue: item.industry_name
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "\u8BF7\u8F93\u5165",
    showSearch: true,
    onSearch: searchIndustry,
    filterOption: false,
    allowClear: true,
    onChange: changeIndustry
  }, listIndustry.map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    key: i.id,
    value: i.name
  }, i.name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    style: {
      display: 'none'
    }
  }, getFieldDecorator('industry_id', {
    initialValue: item.industry_id
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    label: "\u8BC1\u4EF6\u53F7\u7801"
  }, getFieldDecorator('card_no', {
    initialValue: item.r_card_no,
    rules: [{
      required: true,
      message: '必填项'
    }]
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    label: "\u624B\u673A\u53F7\u7801"
  }, getFieldDecorator('phone', {
    initialValue: item.r_phone
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
    label: "\u5907\u6CE8"
  }, getFieldDecorator('remark', {
    initialValue: item.remark
  })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_9__["default"].TextArea, {
    rows: 3
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_16__["connect"])(_ref2 => {
  var loading = _ref2.loading;
  return {
    loading: loading.effects['industry/create'] || loading.effects['industry/update']
  };
})(antd_es_form__WEBPACK_IMPORTED_MODULE_7__["default"].create()(RosterModal)));

/***/ })

})
//# sourceMappingURL=93.0395e21acee6caaf476b.hot-update.js.map