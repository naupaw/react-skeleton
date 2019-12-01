'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var style = {"skeleton":"skeleton_skeleton__1U4CF","round":"skeleton_round__HxJH7","light":"skeleton_light__3vUFI","skeleton-anim":"skeleton_skeleton-anim__3iXFV","dark":"skeleton_dark__2weHo","skeleton-anim-dark":"skeleton_skeleton-anim-dark__34nwj"};

var Skeleton = function (props) {
    var propStyle = {
        maxWidth: props.width,
        width: props.round || props.square ? props.width : "none",
        height: props.round || props.square ? props.width : props.height,
    };
    var innerClassName = [style.skeleton, props.className];
    if (props.round) {
        innerClassName.push(style.round);
    }
    if (props.dark) {
        innerClassName.push(style.dark);
    }
    else {
        innerClassName.push(style.light);
    }
    return (React.createElement("div", { className: innerClassName.join(" "), style: __assign(__assign({}, propStyle), props.style) }));
};

exports.default = Skeleton;
//# sourceMappingURL=index.js.map
