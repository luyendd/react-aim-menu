import {jsx as $9Ue0q$jsx} from "react/jsx-runtime";
import $9Ue0q$react, {useState as $9Ue0q$useState, useContext as $9Ue0q$useContext, useEffect as $9Ue0q$useEffect, createContext as $9Ue0q$createContext, forwardRef as $9Ue0q$forwardRef, useRef as $9Ue0q$useRef, useMemo as $9Ue0q$useMemo} from "react";





function $25b17ad0c4ab4e98$export$567fc7097e064344() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
const $25b17ad0c4ab4e98$export$642213d516a9b928 = function(mouseEvent) {
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
const $25b17ad0c4ab4e98$export$c32a249941905394 = function(elem) {
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
const $25b17ad0c4ab4e98$export$534bdd1067f4ef34 = function(menuBox, point, direction = "right") {
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
const $25b17ad0c4ab4e98$export$20fc610e43966a58 = function(triangle, point) {
    const { A: A, B: B, C: C } = triangle;
    return $25b17ad0c4ab4e98$var$checkSameSide($25b17ad0c4ab4e98$var$toEdge(A, B), C, point) && $25b17ad0c4ab4e98$var$checkSameSide($25b17ad0c4ab4e98$var$toEdge(A, C), B, point) && $25b17ad0c4ab4e98$var$checkSameSide($25b17ad0c4ab4e98$var$toEdge(B, C), A, point);
};
const $25b17ad0c4ab4e98$var$checkSameSide = function(edge, point1, point2) {
    return $25b17ad0c4ab4e98$var$getPolarity(edge, point1) === $25b17ad0c4ab4e98$var$getPolarity(edge, point2);
};
const $25b17ad0c4ab4e98$var$getPolarity = function(edge, point) {
    const vectorA = $25b17ad0c4ab4e98$var$toVector(edge.v1, edge.v2);
    const vectorB = $25b17ad0c4ab4e98$var$toVector(edge.v1, point);
    const scalar = vectorA.x * vectorB.y - vectorA.y * vectorB.x;
    return scalar >= 0 ? 1 : -1;
};
const $25b17ad0c4ab4e98$var$toEdge = function(pointA, pointB) {
    return {
        v1: {
            ...pointA
        },
        v2: {
            ...pointB
        }
    };
};
const $25b17ad0c4ab4e98$var$toVector = function(pointA, pointB) {
    return {
        x: pointB.x - pointA.x,
        y: pointB.y - pointA.y
    };
};



function $49b56054fec6d207$var$setRef(ref, value) {
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
 */ function $49b56054fec6d207$export$ebc1e1560c2dffa5(refA, refB) {
    /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */ return (0, $9Ue0q$useMemo)(()=>{
        if (refA == null && refB == null) return null;
        return (refValue)=>{
            $49b56054fec6d207$var$setRef(refA, refValue);
            $49b56054fec6d207$var$setRef(refB, refValue);
        };
    }, [
        refA,
        refB
    ]);
}


const $41861d0d5459ac5f$var$state = {
    pendingExpand: {
        item: null,
        timeoutId: null
    },
    mouseHistory: []
};
function $41861d0d5459ac5f$var$clearPendingExpand() {
    if ($41861d0d5459ac5f$var$state.pendingExpand && $41861d0d5459ac5f$var$state.pendingExpand.timeoutId) clearTimeout($41861d0d5459ac5f$var$state.pendingExpand.timeoutId);
    $41861d0d5459ac5f$var$state.pendingExpand = null;
}
function $41861d0d5459ac5f$var$checkAim(menuElem) {
    if ($41861d0d5459ac5f$var$state.mouseHistory.length < 2) return false;
    const currentPosition = $41861d0d5459ac5f$var$state.mouseHistory[$41861d0d5459ac5f$var$state.mouseHistory.length - 1];
    const prevPosition = $41861d0d5459ac5f$var$state.mouseHistory[0];
    const menuBox = (0, $25b17ad0c4ab4e98$export$c32a249941905394)(menuElem);
    const triangle = (0, $25b17ad0c4ab4e98$export$534bdd1067f4ef34)(menuBox, prevPosition);
    return (0, $25b17ad0c4ab4e98$export$20fc610e43966a58)(triangle, currentPosition);
}
const $41861d0d5459ac5f$var$defaultState = {};
const $41861d0d5459ac5f$var$DEFAULT_HOVER_DELAY = 450;
const $41861d0d5459ac5f$var$MOUSE_HISTORY_SIZE = 3;
const $41861d0d5459ac5f$export$c7e742effb1c51e2 = /*#__PURE__*/ (0, $9Ue0q$createContext)($41861d0d5459ac5f$var$defaultState);
const $41861d0d5459ac5f$var$Menu = /*#__PURE__*/ (0, $9Ue0q$forwardRef)(function Menu({ hoverDelay: hoverDelay = $41861d0d5459ac5f$var$DEFAULT_HOVER_DELAY, ...props }, ref) {
    const menuRef = (0, $9Ue0q$useRef)(null);
    const forkedRef = (0, $49b56054fec6d207$export$ebc1e1560c2dffa5)(ref, menuRef);
    const [expandedItem, setExpandedItem] = (0, $9Ue0q$useState)(null);
    function updateExpand() {
        if (!$41861d0d5459ac5f$var$state.pendingExpand || expandedItem === $41861d0d5459ac5f$var$state.pendingExpand.item) return;
        setExpandedItem($41861d0d5459ac5f$var$state.pendingExpand.item);
        $41861d0d5459ac5f$var$state.mouseHistory = [];
        $41861d0d5459ac5f$var$clearPendingExpand();
    }
    function onItemEnter(item) {
        $41861d0d5459ac5f$var$clearPendingExpand();
        $41861d0d5459ac5f$var$state.pendingExpand = {
            item: item
        };
        if (!expandedItem || !$41861d0d5459ac5f$var$checkAim(menuRef.current)) return updateExpand();
        $41861d0d5459ac5f$var$state.pendingExpand.timeoutId = setTimeout(()=>updateExpand(), hoverDelay);
    }
    function onItemLeave() {
        $41861d0d5459ac5f$var$state.pendingExpand = {
            item: null,
            timeoutId: setTimeout(()=>updateExpand(), hoverDelay + 100)
        };
    }
    function onMouseMove(event) {
        props.onMouseMove && props.onMouseMove(event);
        $41861d0d5459ac5f$var$state.mouseHistory.push((0, $25b17ad0c4ab4e98$export$642213d516a9b928)(event.nativeEvent));
        if ($41861d0d5459ac5f$var$state.mouseHistory.length > $41861d0d5459ac5f$var$MOUSE_HISTORY_SIZE) $41861d0d5459ac5f$var$state.mouseHistory.shift();
    }
    function handleMenuLeave(event) {
        props.onMouseLeave && props.onMouseLeave(event);
        $41861d0d5459ac5f$var$clearPendingExpand();
        setExpandedItem(null);
    }
    return /*#__PURE__*/ (0, $9Ue0q$jsx)($41861d0d5459ac5f$export$c7e742effb1c51e2.Provider, {
        value: {
            onItemEnter: onItemEnter,
            onItemLeave: onItemLeave,
            expandedItem: expandedItem
        },
        children: /*#__PURE__*/ (0, $9Ue0q$jsx)("div", {
            ...props,
            ref: forkedRef,
            onMouseLeave: handleMenuLeave,
            onMouseMove: onMouseMove,
            children: props.children
        })
    });
});
var $41861d0d5459ac5f$export$2e2bcd8739ae039 = $41861d0d5459ac5f$var$Menu;



const $5e4e676fa2787364$var$MenuItem = /*#__PURE__*/ (0, $9Ue0q$react).forwardRef(function MenuItem({ onHover: onHover, onLeave: onLeave, ...props }, ref) {
    const [id, setId] = (0, $9Ue0q$useState)(null);
    const [expanded, setExpanded] = (0, $9Ue0q$useState)(false);
    const menu = (0, $9Ue0q$useContext)((0, $41861d0d5459ac5f$export$c7e742effb1c51e2));
    (0, $9Ue0q$useEffect)(()=>{
        setId((0, $25b17ad0c4ab4e98$export$567fc7097e064344)());
    }, []);
    (0, $9Ue0q$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $9Ue0q$jsx)("div", {
        ...props,
        ref: ref,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: props.children
    });
});
var $5e4e676fa2787364$export$2e2bcd8739ae039 = $5e4e676fa2787364$var$MenuItem;





export {$5e4e676fa2787364$export$2e2bcd8739ae039 as MenuItem, $41861d0d5459ac5f$export$2e2bcd8739ae039 as Menu};
//# sourceMappingURL=module.js.map
