"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = void 0;

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

let _ = t => t,
    _t,
    _t2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModalWrapper = _styledComponents.default.div(_t || (_t = _`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0,0,0,0.75);
  text-align: center;
  :before{
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.05em;
  }
`));

const ModalContent = _styledComponents.default.div(_t2 || (_t2 = _`
  vertical-align: middle;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  max-width: 500px;
  box-sizing: border-box;
  width: 90%;
  background: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px #000;
  text-align: left;
  #closeIcon{
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: block;
    width: 30px;
    height: 30px;
    text-indent: -9999px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: white;
    border-radius: 100%;
  }
`));

const Modal = ({
                   app,
                   children,
                   open,
                   onClose
               }) => {
    if (!open) {
        app.setAttribute("aria-hidden", "false");
        document.body.style.overflow = 'scroll';
        return null;
    }

    if (open) {
        app.setAttribute("aria-hidden", "true");
        document.body.style.overflow = 'hidden';
    }

    document.onkeydown = e => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(ModalWrapper, {
        onClick: onClose
    }, /*#__PURE__*/_react.default.createElement(ModalContent, {
        onClick: e => e.stopPropagation(),
        id: 'modal'
    }, children, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCircleXmark,
        onClick: onClose,
        id: "closeIcon"
    }))), document.getElementById("portal"));
};

exports.Modal = Modal;