var $83Duu$reactjsxruntime = require("react/jsx-runtime");
var $83Duu$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "MenuItem", () => $8ca5889b62f830dd$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Menu", () => $cd2e67c31a3d705a$export$2e2bcd8739ae039);




function $f6177dcded952324$export$567fc7097e064344() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
const $f6177dcded952324$export$642213d516a9b928 = function(mouseEvent) {
    let pos = {
        x: 0,
        y: 0
    };
    if (mouseEvent.pageX || mouseEvent.pageY) pos = {
        x: mouseEvent.pageX,
        y: mouseEvent.pageY
    };
    else if (mouseEvent.clientX || mouseEvent.clientY) pos = {
        x: mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        y: mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop
    };
    return pos;
};
const $f6177dcded952324$export$c32a249941905394 = function(elem) {
    const boundingBox = elem.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        topLeft: {
            x: boundingBox.left + scrollLeft,
            y: boundingBox.top + scrollTop
        },
        topRight: {
            x: boundingBox.left + scrollLeft + boundingBox.width,
            y: boundingBox.top + scrollTop
        },
        bottomLeft: {
            x: boundingBox.left + scrollLeft,
            y: boundingBox.top + scrollTop + boundingBox.height
        },
        bottomRight: {
            x: boundingBox.left + scrollLeft + boundingBox.width,
            y: boundingBox.top + scrollTop + boundingBox.height
        }
    };
};
const $f6177dcded952324$export$534bdd1067f4ef34 = function(menuBox, point, direction = "right") {
    if (direction === "right") {
        const height = menuBox.bottomRight.y - menuBox.topRight.y;
        return {
            A: {
                x: point.x,
                y: point.y
            },
            B: {
                x: menuBox.topRight.x,
                y: Math.min(0, menuBox.topRight.y - height)
            },
            C: {
                x: menuBox.bottomRight.x,
                y: Math.max(window.innerHeight + height, menuBox.bottomRight.y + height)
            }
        };
    } else if (direction === "down") return {
        A: point,
        B: menuBox.topRight,
        C: menuBox.bottomRight
    };
};
const $f6177dcded952324$export$20fc610e43966a58 = function(triangle, point) {
    const { A: A, B: B, C: C } = triangle;
    return $f6177dcded952324$var$checkSameSide($f6177dcded952324$var$toEdge(A, B), C, point) && $f6177dcded952324$var$checkSameSide($f6177dcded952324$var$toEdge(A, C), B, point) && $f6177dcded952324$var$checkSameSide($f6177dcded952324$var$toEdge(B, C), A, point);
};
const $f6177dcded952324$var$checkSameSide = function(edge, point1, point2) {
    return $f6177dcded952324$var$getPolarity(edge, point1) === $f6177dcded952324$var$getPolarity(edge, point2);
};
const $f6177dcded952324$var$getPolarity = function(edge, point) {
    const vectorA = $f6177dcded952324$var$toVector(edge.v1, edge.v2);
    const vectorB = $f6177dcded952324$var$toVector(edge.v1, point);
    const scalar = vectorA.x * vectorB.y - vectorA.y * vectorB.x;
    return scalar >= 0 ? 1 : -1;
};
const $f6177dcded952324$var$toEdge = function(pointA, pointB) {
    return {
        v1: {
            ...pointA
        },
        v2: {
            ...pointB
        }
    };
};
const $f6177dcded952324$var$toVector = function(pointA, pointB) {
    return {
        x: pointB.x - pointA.x,
        y: pointB.y - pointA.y
    };
};



function $17cf4fd71d6cc317$var$setRef(ref, value) {
    if (!ref) return;
    if (typeof ref === "function") ref(value);
    else if (ref) ref.current = value;
}
/**
 * useForkRef
 * Joins refs together and returns a combination of the two as a new ref
 *
 * @param refA
 * @param refB
 */ function $17cf4fd71d6cc317$export$ebc1e1560c2dffa5(refA, refB) {
    /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */ return (0, $83Duu$react.useMemo)(()=>{
        if (refA == null && refB == null) return null;
        return (refValue)=>{
            $17cf4fd71d6cc317$var$setRef(refA, refValue);
            $17cf4fd71d6cc317$var$setRef(refB, refValue);
        };
    }, [
        refA,
        refB
    ]);
}


const $cd2e67c31a3d705a$var$state = {
    pendingExpand: {
        item: null,
        timeoutId: null
    },
    mouseHistory: []
};
function $cd2e67c31a3d705a$var$clearPendingExpand() {
    if ($cd2e67c31a3d705a$var$state.pendingExpand && $cd2e67c31a3d705a$var$state.pendingExpand.timeoutId) clearTimeout($cd2e67c31a3d705a$var$state.pendingExpand.timeoutId);
    $cd2e67c31a3d705a$var$state.pendingExpand = null;
}
function $cd2e67c31a3d705a$var$checkAim(menuElem) {
    if ($cd2e67c31a3d705a$var$state.mouseHistory.length < 2) return false;
    const currentPosition = $cd2e67c31a3d705a$var$state.mouseHistory[$cd2e67c31a3d705a$var$state.mouseHistory.length - 1];
    const prevPosition = $cd2e67c31a3d705a$var$state.mouseHistory[0];
    const menuBox = (0, $f6177dcded952324$export$c32a249941905394)(menuElem);
    const triangle = (0, $f6177dcded952324$export$534bdd1067f4ef34)(menuBox, prevPosition);
    return (0, $f6177dcded952324$export$20fc610e43966a58)(triangle, currentPosition);
}
const $cd2e67c31a3d705a$var$defaultState = {};
const $cd2e67c31a3d705a$var$DEFAULT_HOVER_DELAY = 450;
const $cd2e67c31a3d705a$var$MOUSE_HISTORY_SIZE = 3;
const $cd2e67c31a3d705a$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $83Duu$react.createContext)($cd2e67c31a3d705a$var$defaultState);
const $cd2e67c31a3d705a$var$Menu = /*#__PURE__*/ (0, $83Duu$react.forwardRef)(function Menu({ hoverDelay: hoverDelay = $cd2e67c31a3d705a$var$DEFAULT_HOVER_DELAY, ...props }, ref) {
    const menuRef = (0, $83Duu$react.useRef)(null);
    const forkedRef = (0, $17cf4fd71d6cc317$export$ebc1e1560c2dffa5)(ref, menuRef);
    const [expandedItem, setExpandedItem] = (0, $83Duu$react.useState)(null);
    function updateExpand() {
        if (!$cd2e67c31a3d705a$var$state.pendingExpand || expandedItem === $cd2e67c31a3d705a$var$state.pendingExpand.item) return;
        setExpandedItem($cd2e67c31a3d705a$var$state.pendingExpand.item);
        $cd2e67c31a3d705a$var$state.mouseHistory = [];
        $cd2e67c31a3d705a$var$clearPendingExpand();
    }
    function onItemEnter(item) {
        $cd2e67c31a3d705a$var$clearPendingExpand();
        $cd2e67c31a3d705a$var$state.pendingExpand = {
            item: item
        };
        if (!expandedItem || !$cd2e67c31a3d705a$var$checkAim(menuRef.current)) return updateExpand();
        $cd2e67c31a3d705a$var$state.pendingExpand.timeoutId = setTimeout(()=>updateExpand(), hoverDelay);
    }
    function onItemLeave() {
        $cd2e67c31a3d705a$var$state.pendingExpand = {
            item: null,
            timeoutId: setTimeout(()=>updateExpand(), hoverDelay + 100)
        };
    }
    function onMouseMove(event) {
        props.onMouseMove && props.onMouseMove(event);
        $cd2e67c31a3d705a$var$state.mouseHistory.push((0, $f6177dcded952324$export$642213d516a9b928)(event.nativeEvent));
        if ($cd2e67c31a3d705a$var$state.mouseHistory.length > $cd2e67c31a3d705a$var$MOUSE_HISTORY_SIZE) $cd2e67c31a3d705a$var$state.mouseHistory.shift();
    }
    function handleMenuLeave(event) {
        props.onMouseLeave && props.onMouseLeave(event);
        $cd2e67c31a3d705a$var$clearPendingExpand();
        setExpandedItem(null);
    }
    return /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)($cd2e67c31a3d705a$export$c7e742effb1c51e2.Provider, {
        value: {
            onItemEnter: onItemEnter,
            onItemLeave: onItemLeave,
            expandedItem: expandedItem
        },
        children: /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)("div", {
            ...props,
            ref: forkedRef,
            onMouseLeave: handleMenuLeave,
            onMouseMove: onMouseMove,
            children: props.children
        })
    });
});
var $cd2e67c31a3d705a$export$2e2bcd8739ae039 = $cd2e67c31a3d705a$var$Menu;



const $8ca5889b62f830dd$var$MenuItem = /*#__PURE__*/ (0, ($parcel$interopDefault($83Duu$react))).forwardRef(function MenuItem({ onHover: onHover, onLeave: onLeave, ...props }, ref) {
    const [id, setId] = (0, $83Duu$react.useState)(null);
    const [expanded, setExpanded] = (0, $83Duu$react.useState)(false);
    const menu = (0, $83Duu$react.useContext)((0, $cd2e67c31a3d705a$export$c7e742effb1c51e2));
    (0, $83Duu$react.useEffect)(()=>{
        setId((0, $f6177dcded952324$export$567fc7097e064344)());
    }, []);
    (0, $83Duu$react.useEffect)(()=>{
        if (menu.expandedItem && menu.expandedItem === id && !expanded) {
            setExpanded(true);
            onHover && onHover();
        }
        if (menu.expandedItem !== id && expanded) {
            setExpanded(false);
            onLeave && onLeave();
        }
    }, [
        menu.expandedItem
    ]);
    function handleMouseEnter(event) {
        menu.onItemEnter(id);
        props.onMouseEnter && props.onMouseEnter(event);
    }
    function handleMouseLeave(event) {
        menu.onItemLeave();
        props.onMouseLeave && props.onMouseLeave(event);
    }
    return /*#__PURE__*/ (0, $83Duu$reactjsxruntime.jsx)("div", {
        ...props,
        ref: ref,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: props.children
    });
});
var $8ca5889b62f830dd$export$2e2bcd8739ae039 = $8ca5889b62f830dd$var$MenuItem;





//# sourceMappingURL=index.js.map
