/* @ds-bundle: {"format":4,"namespace":"DraFlaviaPousaDesignSystem_34e809","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"1ab6d0be5acd","components/brand/Logo.jsx":"a7b8ebdbca37","components/core/Badge.jsx":"1fed971ac308","components/core/Button.jsx":"3e51358b6afe","components/core/Card.jsx":"44cdacf626f3","components/core/Divider.jsx":"7b7eb80bd6e1","components/core/IconButton.jsx":"144d49ac6db4","components/core/Tag.jsx":"620a9a5a66db","components/feedback/Dialog.jsx":"1561bcacd6b4","components/feedback/Toast.jsx":"f09a7955a068","components/feedback/Tooltip.jsx":"23d51a2cfb5c","components/forms/Checkbox.jsx":"12a40e0da1c5","components/forms/Field.jsx":"f309f17edee6","components/forms/Input.jsx":"5efe1f0ea646","components/forms/Radio.jsx":"e84e3797734a","components/forms/Select.jsx":"34b13ee0ee01","components/forms/Switch.jsx":"e60c9c013b76","components/forms/Textarea.jsx":"f297cf0ec4ed","components/navigation/Tabs.jsx":"414b2b124420","ui_kits/site/BookingScreen.jsx":"68d728dc1129","ui_kits/site/ClinicScreen.jsx":"81ddc829453c","ui_kits/site/HomeScreen.jsx":"291f428fdd10","ui_kits/site/ServicesScreen.jsx":"a44cff75a3d8","ui_kits/site/Shell.jsx":"dae96f4e5bdd","ui_kits/social/Templates.jsx":"a4df0dd60279"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DraFlaviaPousaDesignSystem_34e809 = window.DraFlaviaPousaDesignSystem_34e809 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.454.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: color,
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  horizontal: 'logo-horizontal.png',
  vertical: 'logo-vertical.png',
  symbol: 'logo-symbol.png',
  mono: 'logo-symbol-mono.png'
};
const RATIO = {
  horizontal: 671 / 254,
  vertical: 353 / 570,
  symbol: 450 / 398,
  mono: 328 / 288
};
function Logo({
  variant = 'horizontal',
  height = 56,
  assetPath = '/assets',
  alt = 'Clínica Odontológica Dra. Flavia Pousa',
  style,
  ...rest
}) {
  const src = assetPath.replace(/\/$/, '') + '/' + SRC[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    width: Math.round(height * RATIO[variant]),
    height: height,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  wine: {
    background: 'var(--wine-700)',
    color: 'var(--blush-100)',
    border: '1px solid transparent'
  },
  gold: {
    background: 'var(--gradient-gold)',
    color: '#fff',
    border: '1px solid transparent'
  },
  blush: {
    background: 'var(--blush-200)',
    color: 'var(--wine-700)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-gold)',
    border: '1px solid var(--border-gold)'
  },
  success: {
    background: 'var(--status-success-bg)',
    color: 'var(--status-success)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--status-danger-bg)',
    color: 'var(--status-danger)',
    border: '1px solid transparent'
  }
};
function Badge({
  tone = 'blush',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '8px 18px',
    fontSize: 'var(--text-xs)',
    gap: 6
  },
  md: {
    padding: '12px 26px',
    fontSize: 'var(--text-sm)',
    gap: 8
  },
  lg: {
    padding: '16px 34px',
    fontSize: 'var(--text-base)',
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-wine)',
      border: '1px solid var(--action-primary)',
      boxShadow: 'var(--shadow-sm)'
    },
    hover: {
      background: 'var(--action-primary-hover)',
      borderColor: 'var(--action-primary-hover)',
      boxShadow: 'var(--shadow-md)',
      transform: 'translateY(-1px)'
    },
    active: {
      background: 'var(--action-primary-active)',
      transform: 'translateY(0)',
      boxShadow: 'var(--shadow-xs)'
    }
  },
  gold: {
    base: {
      background: 'var(--gradient-gold)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-gold)'
    },
    hover: {
      filter: 'brightness(1.06)',
      boxShadow: '0 12px 30px rgba(201,162,75,.30)',
      transform: 'translateY(-1px)'
    },
    active: {
      filter: 'brightness(.96)',
      transform: 'translateY(0)'
    }
  },
  outline: {
    base: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid var(--border-wine)',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--blush-50)',
      boxShadow: 'var(--shadow-sm)'
    },
    active: {
      background: 'var(--blush-100)'
    }
  },
  soft: {
    base: {
      background: 'var(--blush-200)',
      color: 'var(--text-on-blush)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--blush-300)'
    },
    active: {
      background: 'var(--blush-400)',
      color: '#fff'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    hover: {
      background: 'var(--blush-50)'
    },
    active: {
      background: 'var(--blush-100)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: SIZES[size].gap,
      padding: SIZES[size].padding,
      fontFamily: 'var(--font-sans)',
      fontSize: SIZES[size].fontSize,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-control)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      transition: 'var(--transition-control), filter var(--dur-fast) var(--ease-soft)',
      opacity: disabled ? 0.45 : 1,
      ...v.base,
      ...(hover && !disabled ? v.hover : null),
      ...(press && !disabled ? v.active : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const TONES = {
  plain: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-body)'
  },
  soft: {
    background: 'var(--surface-soft)',
    border: '1px solid var(--blush-100)',
    color: 'var(--text-body)'
  },
  blush: {
    background: 'var(--surface-blush)',
    border: '1px solid transparent',
    color: 'var(--text-on-blush)'
  },
  sand: {
    background: 'var(--surface-sand)',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-body)'
  },
  wine: {
    background: 'var(--gradient-wine)',
    border: '1px solid transparent',
    color: 'var(--text-on-wine)'
  }
};
const PADS = {
  none: 0,
  sm: 'var(--space-5)',
  md: 'var(--space-7)',
  lg: 'var(--space-8)'
};
function Card({
  tone = 'plain',
  padding = 'md',
  elevation = 'sm',
  goldEdge = false,
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-card)',
      padding: PADS[padding],
      boxShadow: hover ? 'var(--shadow-lg)' : shadow,
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      cursor: interactive ? 'pointer' : undefined,
      ...TONES[tone],
      ...style
    }
  }, rest), goldEdge && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      insetInlineStart: 0,
      insetBlock: 0,
      width: 3,
      background: 'var(--gradient-gold)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  ornament = false,
  tone = 'subtle',
  width = '100%',
  style,
  ...rest
}) {
  const line = {
    subtle: 'var(--border-subtle)',
    gold: 'var(--gold-300)',
    blush: 'var(--border-blush)'
  }[tone];
  if (!ornament) return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      width,
      border: 0,
      borderTop: '1px solid ' + line,
      margin: 0,
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'linear-gradient(90deg,transparent,' + line + ')'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      transform: 'rotate(45deg)',
      background: 'var(--gradient-gold)',
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'linear-gradient(270deg,transparent,' + line + ')'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const GLYPH = {
  sm: 15,
  md: 18,
  lg: 22
};
function IconButton({
  icon,
  label,
  variant = 'soft',
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const skin = {
    soft: {
      background: 'var(--blush-100)',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      hover: {
        background: 'var(--blush-200)'
      }
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid var(--border-subtle)',
      hover: {
        background: 'var(--blush-50)',
        borderColor: 'var(--border-blush)'
      }
    },
    solid: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-wine)',
      border: '1px solid var(--action-primary)',
      hover: {
        background: 'var(--action-primary-hover)'
      }
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent',
      hover: {
        background: 'var(--sand-50)',
        color: 'var(--text-accent)'
      }
    }
  }[variant];
  const {
    hover: hoverStyle,
    ...base
  } = skin;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZES[size],
      height: SIZES[size],
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(hover && !disabled ? hoverStyle : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: GLYPH[size]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-regular)',
      letterSpacing: 'var(--tracking-wide)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      background: selected ? 'var(--wine-700)' : hover && onClick ? 'var(--blush-100)' : 'var(--surface-card)',
      color: selected ? 'var(--blush-100)' : 'var(--text-body)',
      border: '1px solid ' + (selected ? 'var(--wine-700)' : 'var(--border-subtle)'),
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remover",
    style: {
      display: 'inline-flex',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.65
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  onClose,
  footer,
  children,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-8)',
      animation: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    icon: 'info',
    color: 'var(--text-accent)',
    background: 'var(--surface-card)',
    border: 'var(--border-subtle)'
  },
  success: {
    icon: 'check',
    color: 'var(--status-success)',
    background: 'var(--status-success-bg)',
    border: 'transparent'
  },
  warning: {
    icon: 'clock',
    color: 'var(--status-warning)',
    background: 'var(--status-warning-bg)',
    border: 'transparent'
  },
  danger: {
    icon: 'triangle-alert',
    color: 'var(--status-danger)',
    background: 'var(--status-danger-bg)',
    border: 'transparent'
  }
};
function Toast({
  tone = 'neutral',
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      padding: '16px 18px',
      minWidth: 300,
      maxWidth: 420,
      background: t.background,
      border: '1px solid ' + t.border,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      display: 'inline-flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dispensar",
    variant: "ghost",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 40,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      padding: '7px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--wine-800)',
      color: 'var(--blush-100)',
      font: 'var(--type-caption)',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-soft)',
      ...pos
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--wine-700)' : 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--wine-700)' : 'var(--border-strong)'),
      color: 'var(--blush-100)',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      width: '100%',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      marginInlineStart: 4
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  icon,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const shell = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    padding: '13px 16px',
    background: disabled ? 'var(--sand-50)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--gold-500)' : 'var(--border-subtle)'),
    borderRadius: 'var(--radius-field)',
    boxShadow: focused ? '0 0 0 4px var(--focus-ring-halo)' : 'none',
    transition: 'var(--transition-control)',
    opacity: disabled ? 0.6 : 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...shell,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: focused ? 'var(--gold-600)' : 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-strong)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--wine-700)' : 'var(--border-strong)'),
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: checked ? 'var(--wine-700)' : 'transparent',
      transition: 'var(--transition-control)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  options = [],
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '13px 44px 13px 16px',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-light)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--sand-50)' : 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--gold-500)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-field)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focused ? '0 0 0 4px var(--focus-ring-halo)' : 'none',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.6 : 1
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-faint)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--gradient-gold)' : 'var(--sand-200)',
      transition: 'background var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '13px 16px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-light)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--sand-50)' : 'var(--surface-card)',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--gold-500)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-field)',
      outline: 'none',
      boxShadow: focused ? '0 0 0 4px var(--focus-ring-halo)' : 'none',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const isPill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: isPill ? 4 : 'var(--space-7)',
      padding: isPill ? 4 : 0,
      background: isPill ? 'var(--sand-50)' : 'transparent',
      borderRadius: isPill ? 'var(--radius-pill)' : 0,
      borderBottom: isPill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(item => {
    const id = typeof item === 'string' ? item : item.value;
    const label = typeof item === 'string' ? item : item.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        position: 'relative',
        border: 0,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        padding: isPill ? '9px 20px' : '0 0 14px',
        background: isPill ? active ? 'var(--surface-card)' : 'transparent' : 'transparent',
        borderRadius: isPill ? 'var(--radius-pill)' : 0,
        boxShadow: isPill && active ? 'var(--shadow-xs)' : 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-light)',
        letterSpacing: 'var(--tracking-wide)',
        color: active ? 'var(--text-accent)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, label, !isPill && active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--gradient-gold)',
        borderRadius: 2
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/BookingScreen.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Button,
  Badge,
  Tag,
  Icon,
  Divider,
  Toast,
  Dialog
} = window.DraFlaviaPousaDesignSystem_34e809;
const SLOTS = {
  'Seg 12': ['09h', '10h30', '14h'],
  'Ter 13': ['09h', '11h', '15h30', '17h'],
  'Qua 14': ['10h', '14h30'],
  'Qui 15': ['09h30', '11h', '16h'],
  'Sex 16': ['09h', '10h30', '14h', '16h30']
};
function BookingScreen({
  go
}) {
  const {
    Photo,
    SectionHead,
    Section
  } = window;
  const [step, setStep] = React.useState(1);
  const [motivo, setMotivo] = React.useState('Ortodontia');
  const [dia, setDia] = React.useState('Ter 13');
  const [hora, setHora] = React.useState('11h');
  const [periodo, setPeriodo] = React.useState('manha');
  const [lembrete, setLembrete] = React.useState(true);
  const [wpp, setWpp] = React.useState(true);
  const [nome, setNome] = React.useState('');
  const [done, setDone] = React.useState(false);
  const stepLabel = ['O que te traz aqui', 'Escolha um horário', 'Seus dados'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "blush",
    style: {
      paddingBlock: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Agendamento",
    title: "Vamos marcar sua conversa",
    lead: "Tr\xEAs passos, dois minutos. Nada de formul\xE1rio longo \u2014 o resto a gente pergunta pessoalmente."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "lg",
    elevation: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-8)'
    }
  }, stepLabel.map((l, i) => {
    const n = i + 1;
    const active = step === n;
    const past = step > n;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: '50%',
        flex: '0 0 auto',
        background: past ? 'var(--gradient-gold)' : active ? 'var(--wine-700)' : 'var(--sand-100)',
        color: past || active ? '#fff' : 'var(--text-faint)',
        font: 'var(--type-caption)',
        fontWeight: 500
      }
    }, past ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13
    }) : n), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: active ? 'var(--text-accent)' : 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, l), i < 2 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-subtle)'
      }
    }));
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "O que voc\xEA procura?",
    hint: "Se ainda n\xE3o souber, sem problema \u2014 a gente descobre junto."
  }, /*#__PURE__*/React.createElement(Select, {
    value: motivo,
    onChange: e => setMotivo(e.target.value),
    options: ['Ortodontia', 'DTM e dor orofacial', 'Harmonização facial', 'Clínica geral', 'Ainda não sei']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Conta um pouco do que est\xE1 te incomodando"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Pode escrever do seu jeito. N\xE3o precisa de termo t\xE9cnico."
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, "Voc\xEA prefere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "p",
    checked: periodo === 'manha',
    onChange: () => setPeriodo('manha'),
    label: "Manh\xE3"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "p",
    checked: periodo === 'tarde',
    onChange: () => setPeriodo('tarde'),
    label: "Tarde"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "p",
    checked: periodo === 'tanto',
    onChange: () => setPeriodo('tanto'),
    label: "Tanto faz"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(2)
  }, "Continuar"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, "Dezembro \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, Object.keys(SLOTS).map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d,
    selected: dia === d,
    onClick: () => {
      setDia(d);
      setHora(SLOTS[d][0]);
    }
  }, d)))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, "Hor\xE1rios livres"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, SLOTS[dia].map(h => /*#__PURE__*/React.createElement(Tag, {
    key: h,
    selected: hora === h,
    onClick: () => setHora(h)
  }, h))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, "Reservamos 40 minutos. Se atrasar, avisa \u2014 a gente segura o hor\xE1rio o quanto der.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(3)
  }, "Continuar"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Como podemos te chamar?"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "user",
    placeholder: "Seu nome",
    value: nome,
    onChange: e => setNome(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefone",
    hint: "S\xF3 usamos para confirmar."
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    placeholder: "(21) 90000-0000"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    hint: "Enviamos o or\xE7amento por aqui, se voc\xEA quiser."
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "voce@email.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: wpp,
    onChange: e => setWpp(e.target.checked),
    label: "Pode me chamar no WhatsApp"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: lembrete,
    onChange: e => setLembrete(e.target.checked),
    label: "Lembrete 24h antes"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(2)
  }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: () => setDone(true)
  }, "Confirmar hor\xE1rio")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    padding: "md",
    goldEdge: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Seu resumo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 'var(--space-5)'
    }
  }, [['stethoscope', motivo], ['calendar-heart', dia + ' · ' + hora], ['clock', '40 minutos'], ['map-pin', 'Rua Exemplo, 000 — Rio de Janeiro']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      display: 'inline-flex',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  })), t))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "A avalia\xE7\xE3o custa R$ 250 e \xE9 abatida do tratamento se voc\xEA seguir com a gente.")), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wine-600)',
      display: 'inline-flex',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-strong)'
    }
  }, "Prefere resolver conversando?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      margin: '6px 0 14px'
    }
  }, "Responde uma pessoa, n\xE3o um rob\xF4."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Chamar no WhatsApp")))), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto \u2014 fachada",
    height: 180,
    tone: "blush",
    watermark: true
  })))), done && /*#__PURE__*/React.createElement(Dialog, {
    title: "Tudo certo!",
    description: 'Sua avaliação está reservada para ' + dia + ' às ' + hora + '. Enviamos os detalhes no WhatsApp.',
    onClose: () => setDone(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDone(false)
    }, "Ver resumo"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDone(false);
        go('home');
      }
    }, "Combinado"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-heart",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, motivo, " \xB7 ", dia, " \xB7 ", hora, " \xB7 40 minutos"))), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 26,
      bottom: 26,
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Hor\xE1rio reservado",
    message: "Voc\xEA recebe a confirma\xE7\xE3o em instantes.",
    onDismiss: () => {}
  })));
}
Object.assign(window, {
  BookingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ClinicScreen.jsx
try { (() => {
const {
  Card,
  Icon,
  Divider,
  Badge,
  Button
} = window.DraFlaviaPousaDesignSystem_34e809;
function ClinicScreen({
  go
}) {
  const {
    Photo,
    SectionHead,
    Section
  } = window;
  const values = [{
    icon: 'ear',
    title: 'Cada paciente é único',
    text: 'Escuta ativa e respeito antes de qualquer procedimento.'
  }, {
    icon: 'graduation-cap',
    title: 'Atualização constante',
    text: 'Tecnologia moderna quando ela realmente melhora o seu resultado.'
  }, {
    icon: 'shield-check',
    title: 'Integridade',
    text: 'Responsabilidade em todos os atendimentos, do simples ao complexo.'
  }, {
    icon: 'clock',
    title: 'Seu tempo vale',
    text: 'Agenda respeitada — a sua e a da equipe.'
  }, {
    icon: 'sparkles',
    title: 'Precisão com carinho',
    text: 'Cada etapa cuidada com técnica e com afeto. Os dois cabem.'
  }, {
    icon: 'receipt-text',
    title: 'Comunicação honesta',
    text: 'Diagnósticos e orçamentos claros, sempre por escrito.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "blush",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "A cl\xEDnica",
    title: "Cultura e hist\xF3ria",
    lead: "A hist\xF3ria da cl\xEDnica se confunde com a jornada da Dra. Flavia \u2014 e com a ideia de que o cuidado deve ser como o dedicado a algu\xE9m da fam\xEDlia."
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Retrato \u2014 Dra. Flavia Pousa",
    height: 460,
    tone: "sand"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "O sonho de ter a pr\xF3pria cl\xEDnica germinou num momento delicado: com a filha rec\xE9m-nascida, a Flavia se viu diante de uma situa\xE7\xE3o que a empurrou para a independ\xEAncia profissional."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '18px 0 0'
    }
  }, "Essa experi\xEAncia refor\xE7ou uma convic\xE7\xE3o: precisava de um espa\xE7o para exercer a odontologia com os pr\xF3prios valores \u2014 tratamento individualizado, ambiente acolhedor, conduta honesta."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '18px 0 0'
    }
  }, "Para ela, sucesso n\xE3o est\xE1 no n\xFAmero. Est\xE1 na paciente que sai daqui se sentindo bem cuidada e confia a ponto de indicar a cl\xEDnica para algu\xE9m que ama."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      padding: 'var(--space-7)',
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-lg)',
      borderInlineStart: '3px solid var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h3)',
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--text-2xl)',
      lineHeight: 1.4,
      color: 'var(--wine-700)',
      margin: 0
    }
  }, "\"O meu foco vai al\xE9m dos dentes. Eu me importo com a pessoa como um todo.\""), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      display: 'block',
      marginTop: 12
    }
  }, "Dra. Flavia Pousa"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Miss\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '16px 0 0'
    }
  }, "Promover sa\xFAde bucal com excel\xEAncia, acolhimento e \xE9tica, com tratamentos personalizados e experi\xEAncias \xFAnicas que transformam o sorriso e a autoestima.")), /*#__PURE__*/React.createElement(Card, {
    tone: "wine",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Vis\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-wine)',
      margin: '16px 0 0'
    }
  }, "Ser refer\xEAncia em odontologia humanizada na regi\xE3o, reconhecida pela confian\xE7a, pela inova\xE7\xE3o e por resultados duradouros.")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Valores",
    title: "Seis compromissos, escritos para serem cobrados"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    tone: "soft",
    padding: "md"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-xl)',
      margin: '14px 0 8px'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, v.text))))), /*#__PURE__*/React.createElement(Section, {
    tone: "blush"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "A equipe",
    title: "Quem vai te receber"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, [['Dra. Flavia Pousa', 'Ortodontia · DTM'], ['A definir', 'Clínica geral'], ['A definir', 'Recepção'], ['A definir', 'Auxiliar']].map(([n, r], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Foto",
    height: 200,
    radius: "var(--radius-lg)",
    tone: i % 2 ? 'sand' : 'blush'
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-lg)',
      margin: '16px 0 4px'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, r)))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: 'var(--space-7)'
    }
  }, "Retratos e nomes da equipe ainda n\xE3o foram fornecidos \u2014 placeholders declarados.")));
}
Object.assign(window, {
  ClinicScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ClinicScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Divider
} = window.DraFlaviaPousaDesignSystem_34e809;
function HomeScreen({
  go
}) {
  const {
    Photo,
    SectionHead,
    Section
  } = window;
  const pillars = [{
    icon: 'ear',
    title: 'Escuta ativa',
    text: 'A consulta começa por você falando. A gente só examina depois de entender.'
  }, {
    icon: 'receipt-text',
    title: 'Orçamento claro',
    text: 'Você sai sabendo quanto custa, quanto tempo leva e o que está incluso.'
  }, {
    icon: 'clock',
    title: 'Seu tempo importa',
    text: 'Agenda com folga real. Aqui ninguém espera 40 minutos na recepção.'
  }, {
    icon: 'heart-handshake',
    title: 'Cuidado de família',
    text: 'O mesmo cuidado que a gente daria a alguém da nossa casa.'
  }];
  const services = [{
    tag: 'Ortodontia',
    title: 'Alinhamento no seu tempo',
    text: 'Aparelho fixo ou alinhadores, com um plano que cabe na sua rotina e no seu bolso.'
  }, {
    tag: 'DTM',
    title: 'Quando a mandíbula dói',
    text: 'Dor de cabeça, estalo ao abrir a boca, ranger os dentes à noite. Isso tem tratamento.'
  }, {
    tag: 'Harmonização',
    title: 'O seu rosto, um pouco mais você',
    text: 'Nada de padrão. Estudamos a sua proporção e propomos só o que faz sentido.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "blush",
    style: {
      paddingBlock: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "Cl\xEDnica Odontol\xF3gica"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h1)',
      fontSize: 'var(--text-6xl)',
      color: 'var(--text-strong)',
      margin: '18px 0 0'
    }
  }, "Ir ao dentista pode ser", /*#__PURE__*/React.createElement("br", null), "uma conversa tranquila"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-body)',
      maxWidth: 480,
      margin: '24px 0 0'
    }
  }, "A gente sabe que sentar naquela cadeira nem sempre \xE9 f\xE1cil. Por isso o primeiro encontro \xE9 s\xF3 uma conversa \u2014 voc\xEA conta o que sente, a gente explica o que d\xE1 pra fazer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: () => go('agendar')
  }, "Agendar avalia\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('clinica')
  }, "Conhecer a cl\xEDnica")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), " 40 minutos"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15
  }), " Sem compromisso"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " Rio de Janeiro"))), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto \u2014 recep\xE7\xE3o da cl\xEDnica",
    height: 470,
    watermark: true
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    tone: "plain",
    padding: "md",
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 'var(--text-xl)',
      margin: '16px 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, p.text))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "O que fazemos",
    title: "Tr\xEAs frentes, um jeito s\xF3 de cuidar",
    lead: "Cada tratamento come\xE7a com um diagn\xF3stico explicado em portugu\xEAs \u2014 e um or\xE7amento sem letra mi\xFAda."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.tag,
    tone: "plain",
    padding: "none",
    elevation: "sm",
    interactive: true,
    goldEdge: i === 0,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Foto \u2014 tratamento",
    height: 190,
    radius: "0",
    tone: i === 1 ? 'sand' : 'blush'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, s.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      margin: '16px 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.text), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('servicos'),
    style: {
      marginTop: 'var(--space-6)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'var(--type-label)',
      color: 'var(--text-accent)'
    }
  }, "Ver detalhes ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Retrato \u2014 Dra. Flavia Pousa",
    height: 440,
    tone: "sand"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, "A fundadora"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      margin: '14px 0 0'
    }
  }, "Uma cl\xEDnica que nasceu de uma inquieta\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '20px 0 0'
    }
  }, "A Flavia quis trilhar o pr\xF3prio caminho porque n\xE3o se via oferecendo o atendimento de sempre \u2014 r\xE1pido, frio, t\xE9cnico demais. Queria um lugar onde a dedica\xE7\xE3o ao paciente fosse a regra, n\xE3o o detalhe."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '16px 0 0'
    }
  }, "A odontologia veio do pai, que tamb\xE9m batizou a cl\xEDnica. O resto veio da convic\xE7\xE3o de que d\xE1 pra fazer diferente."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-7) 0 0',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    ornament: true,
    tone: "gold"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-signature)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--wine-700)',
      margin: '18px 0 0'
    }
  }, "Dra. Flavia Pousa"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Fundadora \xB7 Ortodontia e DTM")))), /*#__PURE__*/React.createElement(Section, {
    tone: "wine"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol-mono.png",
    alt: "",
    style: {
      height: 56,
      margin: '0 auto',
      display: 'block',
      opacity: .5,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--blush-100)',
      margin: '26px 0 0'
    }
  }, "Vamos come\xE7ar por uma conversa?"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-wine-muted)',
      margin: '16px 0 0'
    }
  }, "Quarenta minutos, sem compromisso, sem jarg\xE3o. Voc\xEA sai sabendo exatamente onde est\xE1."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      justifyContent: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: () => go('agendar')
  }, "Agendar avalia\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18
  }), "Falar no WhatsApp")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ServicesScreen.jsx
try { (() => {
const {
  Tabs,
  Card,
  Badge,
  Button,
  Icon,
  Divider,
  Tag
} = window.DraFlaviaPousaDesignSystem_34e809;
const CATALOG = {
  'Ortodontia': {
    lead: 'Alinhar não é só estética: mordida torta desgasta dente, sobrecarrega a articulação e cansa a mastigação. A gente planeja o caminho e mostra o mapa inteiro antes de começar.',
    items: [{
      title: 'Aparelho fixo',
      time: '18 a 30 meses',
      price: 'a partir de R$ 180/mês',
      text: 'O clássico, bem executado. Manutenção mensal com hora marcada de verdade.'
    }, {
      title: 'Alinhadores transparentes',
      time: '12 a 24 meses',
      price: 'sob avaliação',
      text: 'Discreto e removível. Exige disciplina — a gente conta isso antes, não depois.'
    }, {
      title: 'Contenção e acompanhamento',
      time: 'contínuo',
      price: 'incluso no plano',
      text: 'O resultado só se mantém com contenção. Está no plano desde o primeiro dia.'
    }]
  },
  'DTM e dor orofacial': {
    lead: 'Dor de cabeça ao acordar, estalo ao abrir a boca, dente desgastado, mandíbula travada. Muita gente convive com isso achando que é normal. Não é — e tem tratamento.',
    items: [{
      title: 'Avaliação de DTM',
      time: '60 minutos',
      price: 'R$ 250',
      text: 'Exame funcional, história clínica e um plano explicado em português.'
    }, {
      title: 'Placa miorrelaxante',
      time: 'uso noturno',
      price: 'sob avaliação',
      text: 'Feita sob medida, ajustada em retornos até parar de incomodar.'
    }, {
      title: 'Acompanhamento de bruxismo',
      time: 'trimestral',
      price: 'incluso no plano',
      text: 'Controle do desgaste e ajustes conforme sua rotina muda.'
    }]
  },
  'Harmonização facial': {
    lead: 'Aqui não existe pacote padrão. A gente estuda a sua proporção, escuta o que te incomoda e propõe só o que faz sentido — inclusive quando a resposta é "não precisa".',
    items: [{
      title: 'Avaliação facial',
      time: '50 minutos',
      price: 'R$ 250',
      text: 'Análise de proporções, fotos e uma conversa honesta sobre expectativa.'
    }, {
      title: 'Toxina botulínica',
      time: '30 minutos',
      price: 'sob avaliação',
      text: 'Aplicação conservadora. Movimento preservado — expressão continua sua.'
    }, {
      title: 'Preenchimento',
      time: '45 minutos',
      price: 'sob avaliação',
      text: 'Volume onde falta, na medida. Reavaliação incluída em 15 dias.'
    }]
  },
  'Clínica geral': {
    lead: 'A base de tudo. Limpeza, restauração, prevenção — feitas com o mesmo tempo e o mesmo cuidado dos tratamentos longos.',
    items: [{
      title: 'Consulta e limpeza',
      time: '50 minutos',
      price: 'R$ 220',
      text: 'Profilaxia, orientação e um retorno agendado na hora, se você quiser.'
    }, {
      title: 'Restauração',
      time: '40 a 60 minutos',
      price: 'a partir de R$ 280',
      text: 'Resina com cor conferida na luz natural. Sem correria.'
    }, {
      title: 'Clareamento',
      time: '3 sessões',
      price: 'R$ 900',
      text: 'Supervisionado, com controle de sensibilidade em cada etapa.'
    }]
  }
};
function ServicesScreen({
  go
}) {
  const {
    Photo,
    SectionHead,
    Section
  } = window;
  const [tab, setTab] = React.useState('Ortodontia');
  const cat = CATALOG[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "blush",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Servi\xE7os",
    title: "O que a gente faz \u2014 e como explica",
    lead: "Cada tratamento com tempo estimado e faixa de pre\xE7o \xE0 vista. Se n\xE3o estiver aqui, \xE9 porque depende da sua avalia\xE7\xE3o \u2014 e a gente diz isso na cara."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBlock: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(CATALOG),
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: 720,
      margin: 'var(--space-8) auto 0',
      textAlign: 'center'
    }
  }, cat.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)'
    }
  }, cat.items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    tone: i === 0 ? 'soft' : 'plain',
    padding: "lg",
    elevation: "sm",
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: '12px 0 var(--space-6)'
    }
  }, it.text), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), it.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-label)',
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 15
  }), it.price)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    align: "left",
    eyebrow: "Transpar\xEAncia",
    title: "Por que os pre\xE7os est\xE3o escritos",
    lead: "Porque perguntar quanto custa n\xE3o deveria ser constrangedor. Voc\xEA recebe o or\xE7amento por escrito na primeira consulta, com o que est\xE1 incluso e o que n\xE3o est\xE1."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 'var(--space-7)'
    }
  }, ['Sem taxa de avaliação surpresa', 'Parcelamento sem juros', 'Retorno incluso', 'Você leva o plano impresso'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('agendar')
  }, "Agendar avalia\xE7\xE3o"))), /*#__PURE__*/React.createElement(Photo, {
    label: "Foto \u2014 consult\xF3rio",
    height: 360,
    tone: "blush",
    watermark: true
  }))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Shell.jsx
try { (() => {
const {
  Logo,
  Icon,
  Button,
  Divider
} = window.DraFlaviaPousaDesignSystem_34e809;
const NAV = [{
  id: 'home',
  label: 'Início'
}, {
  id: 'servicos',
  label: 'Serviços'
}, {
  id: 'clinica',
  label: 'A clínica'
}, {
  id: 'agendar',
  label: 'Agendar'
}];
function Photo({
  label,
  height = 320,
  radius = 'var(--radius-image)',
  tone = 'blush',
  watermark = false,
  style
}) {
  const bg = tone === 'blush' ? 'var(--gradient-blush)' : tone === 'sand' ? 'linear-gradient(180deg,var(--sand-50),var(--sand-200))' : 'var(--gradient-wine)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      background: bg,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, watermark && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol.png",
    alt: "",
    style: {
      position: 'absolute',
      width: '52%',
      opacity: 0.09,
      filter: 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: tone === 'wine' ? 'var(--text-on-wine-muted)' : 'var(--stone-500)'
    }
  }, label));
}
function Header({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      height: 76,
      background: 'rgba(253,251,250,.88)',
      backdropFilter: 'var(--blur-veil)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      height: '100%',
      margin: '0 auto',
      padding: '0 var(--gutter-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    height: 42,
    assetPath: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      background: 'none',
      border: 0,
      padding: '4px 0',
      cursor: 'pointer',
      font: 'var(--type-body-sm)',
      letterSpacing: 'var(--tracking-wide)',
      color: route === n.id ? 'var(--text-accent)' : 'var(--text-body)',
      borderBottom: '1px solid ' + (route === n.id ? 'var(--gold-500)' : 'transparent')
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), " (21) 3000-0000"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('agendar')
  }, "Agendar avalia\xE7\xE3o"))));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'center',
  maxWidth = 680
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth,
      margin: align === 'center' ? '0 auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      margin: '16px 0 0'
    }
  }, lead));
}
function Section({
  tone = 'page',
  children,
  style
}) {
  const bg = {
    page: 'var(--surface-page)',
    blush: 'var(--gradient-blush)',
    sand: 'var(--surface-sand)',
    wine: 'var(--gradient-wine)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--section-y) var(--gutter-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
function Footer({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, title), items.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-wine-muted)'
    }
  }, t)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--gradient-wine)',
      padding: 'var(--space-11) var(--gutter-lg) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-signature)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--blush-200)'
    }
  }, "Dra. Flavia Pousa"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-wine-muted)',
      maxWidth: 300,
      margin: 0
    }
  }, "Odontologia humanizada. A gente cuida da pessoa inteira \u2014 o sorriso vem junto.")), col('Atendimento', ['Ortodontia', 'DTM e dor orofacial', 'Harmonização facial', 'Clínica geral']), col('Horários', ['Seg a sex · 9h às 19h', 'Sábado · 9h às 13h', 'Domingo · fechado']), col('Onde estamos', ['Rua Exemplo, 000', 'Rio de Janeiro · RJ', '(21) 3000-0000'])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(248,221,225,.16)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-on-wine-muted)'
    }
  }, "CRO-RJ 00000 \xB7 \xA9 2026 Cl\xEDnica Odontol\xF3gica Dra. Flavia Pousa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      color: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  })))));
}
Object.assign(window, {
  Photo,
  Header,
  Footer,
  SectionHead,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Templates.jsx
try { (() => {
const {
  Logo,
  Icon,
  Badge,
  Divider
} = window.DraFlaviaPousaDesignSystem_34e809;
function Frame({
  w,
  h,
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, " \xB7 ", w, "\xD7", h), /*#__PURE__*/React.createElement("div", {
    style: {
      width: w / 2.7,
      height: h / 2.7,
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: 'scale(' + 1 / 2.7 + ')',
      transformOrigin: 'top left',
      position: 'relative',
      ...style
    }
  }, children)));
}
const Eyebrow = ({
  children,
  color = 'var(--gold-500)',
  size = 30
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: size,
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    color
  }
}, children);
function FeedQuote() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Feed \u2014 frase",
    style: {
      background: 'var(--gradient-blush)',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Odontologia humanizada"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 92,
      lineHeight: 1.14,
      letterSpacing: '-.012em',
      color: 'var(--wine-700)',
      margin: 0
    }
  }, "Ir ao dentista pode ser uma conversa tranquila."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.6,
      color: 'var(--stone-700)',
      margin: '40px 0 0',
      maxWidth: 700
    }
  }, "A primeira consulta \xE9 s\xF3 isso: voc\xEA conta o que sente, a gente explica o que d\xE1 pra fazer.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "",
    style: {
      height: 92
    }
  }));
}
function FeedService() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Feed \u2014 servi\xE7o",
    style: {
      background: 'var(--ivory)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 540,
      background: 'linear-gradient(180deg,var(--sand-50),var(--sand-200))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol.png",
    alt: "",
    style: {
      height: 240,
      opacity: .12,
      filter: 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 88,
      fontFamily: 'var(--font-sans)',
      fontSize: 26,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--stone-500)'
    }
  }, "Foto \u2014 placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '72px 88px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-700)",
    size: 28
  }, "01 \u2014 Ortodontia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 76,
      lineHeight: 1.1,
      color: 'var(--ink)',
      margin: '28px 0 0'
    }
  }, "Alinhamento no seu tempo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 30,
      color: 'var(--stone-600)'
    }
  }, "Plano explicado antes de come\xE7ar"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol.png",
    alt: "",
    style: {
      height: 82
    }
  }))));
}
function CarouselCover() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Carrossel \u2014 capa",
    style: {
      background: 'var(--gradient-wine)',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol-mono.png",
    alt: "",
    style: {
      height: 150,
      filter: 'brightness(0) invert(1)',
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-400)"
  }, "3 sinais de DTM"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 96,
      lineHeight: 1.1,
      color: 'var(--blush-100)',
      margin: 0
    }
  }, "Sua mand\xEDbula estala?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 30,
      color: 'rgba(253,238,241,.72)'
    }
  }, "Arraste para o lado \u2192"));
}
function CarouselStep() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    label: "Carrossel \u2014 passo",
    style: {
      background: 'var(--ivory)',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-700)",
    size: 28
  }, "02 de 04"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol.png",
    alt: "",
    style: {
      height: 74
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 86
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 80,
      lineHeight: 1.12,
      color: 'var(--ink)',
      margin: '40px 0 0'
    }
  }, "Dor de cabe\xE7a ao acordar"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.62,
      color: 'var(--stone-700)',
      margin: '32px 0 0',
      maxWidth: 780
    }
  }, "Se voc\xEA acorda com a cabe\xE7a pesada e a mand\xEDbula cansada, pode ser que esteja apertando os dentes \xE0 noite sem perceber.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === 1 ? 56 : 16,
      height: 6,
      borderRadius: 999,
      background: i === 1 ? 'var(--gradient-gold)' : 'var(--sand-200)'
    }
  }))));
}
function StoryCta() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    label: "Story \u2014 CTA",
    style: {
      background: 'var(--gradient-blush)',
      padding: '160px 96px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vertical.png",
    alt: "",
    style: {
      height: 340
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-700)"
  }, "Agenda de dezembro"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 104,
      lineHeight: 1.1,
      color: 'var(--wine-700)',
      margin: '40px 0 0'
    }
  }, "Vamos come\xE7ar por uma conversa?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 36,
      lineHeight: 1.6,
      color: 'var(--stone-700)',
      margin: '44px 0 0'
    }
  }, "Quarenta minutos, sem compromisso, sem jarg\xE3o.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22,
      padding: '38px 78px',
      borderRadius: 999,
      background: 'var(--gradient-gold)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 34,
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Agendar avalia\xE7\xE3o"));
}
function StoryQuote() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    label: "Story \u2014 assinatura",
    style: {
      background: 'var(--gradient-wine)',
      padding: '160px 96px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-symbol-mono.png",
    alt: "",
    style: {
      height: 130,
      filter: 'brightness(0) invert(1)',
      opacity: .45
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 88,
      lineHeight: 1.24,
      color: 'var(--blush-100)',
      margin: 0
    }
  }, "\"O meu foco vai al\xE9m dos dentes. Eu me importo com a pessoa como um todo.\""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-signature)',
      fontStyle: 'italic',
      fontSize: 62,
      color: 'var(--gold-300)'
    }
  }, "Dra. Flavia Pousa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 28,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(253,238,241,.6)',
      marginTop: 14
    }
  }, "Fundadora")));
}
Object.assign(window, {
  Frame,
  FeedQuote,
  FeedService,
  CarouselCover,
  CarouselStep,
  StoryCta,
  StoryQuote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Templates.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
