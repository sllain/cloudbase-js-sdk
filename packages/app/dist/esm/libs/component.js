var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { constants } from '@cloudbase/utilities';
var ERRORS = constants.ERRORS;
var components = {};
export function registerComponent(app, component) {
    var name = component.name, namespace = component.namespace, entity = component.entity, injectEvents = component.injectEvents, _a = component.IIFE, IIFE = _a === void 0 ? false : _a;
    if (components[name] || (namespace && app[namespace])) {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "Duplicate component " + name
        }));
    }
    if (IIFE) {
        if (!entity || typeof entity !== 'function') {
            throw new Error(JSON.stringify({
                code: ERRORS.INVALID_PARAMS,
                msg: 'IIFE component\'s entity must be a function'
            }));
        }
        entity.call(app);
    }
    components[name] = component;
    if (namespace) {
        app.prototype[namespace] = entity;
    }
    else {
        deepExtend(app.prototype, entity);
    }
    if (injectEvents) {
        var bus = injectEvents.bus, events = injectEvents.events;
        if (!bus || !events || events.length === 0) {
            return;
        }
        var originCallback_1 = app.prototype.fire || function () { };
        if (!app.prototype.events) {
            app.prototype.events = {};
        }
        var originEvents = app.prototype.events || {};
        if (originEvents[name]) {
            app.prototype.events[name].events = __spreadArrays(app.prototype.events[name].events, events);
        }
        else {
            app.prototype.events[name] = { bus: bus, events: events };
        }
        app.prototype.fire = function (eventName, data) {
            originCallback_1(eventName, data);
            for (var name_1 in this.events) {
                var _a = this.events[name_1], bus_1 = _a.bus, eventList = _a.events;
                if (eventList.includes(eventName)) {
                    bus_1.fire(eventName, data);
                    break;
                }
            }
        };
    }
}
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            target = [];
            break;
        default:
            return source;
    }
    for (var key in source) {
        if (!source.hasOwnProperty(key)) {
            continue;
        }
        target[key] = deepExtend(target[key], source[key]);
    }
    return target;
}
export function registerHook(app, hook) {
    var entity = hook.entity, target = hook.target;
    if (!app.prototype.hasOwnProperty(target)) {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "target:" + target + " is not exist"
        }));
    }
    var originMethod = app.prototype[target];
    if (typeof originMethod !== 'function') {
        throw new Error(JSON.stringify({
            code: ERRORS.INVALID_OPERATION,
            msg: "target:" + target + " is not a function which is the only type supports hook"
        }));
    }
    app.prototype[target] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        entity.call.apply(entity, __spreadArrays([this], args));
        return originMethod.call.apply(originMethod, __spreadArrays([this], args));
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYnMvY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekMsSUFBQSxNQUFNLEdBQUssU0FBUyxPQUFkLENBQWU7QUFFN0IsSUFBTSxVQUFVLEdBQTJCLEVBQUUsQ0FBQztBQUU5QyxNQUFNLFVBQVUsaUJBQWlCLENBQUMsR0FBTyxFQUFDLFNBQTZCO0lBQzdELElBQUEsSUFBSSxHQUFrRCxTQUFTLEtBQTNELEVBQUUsU0FBUyxHQUF1QyxTQUFTLFVBQWhELEVBQUUsTUFBTSxHQUErQixTQUFTLE9BQXhDLEVBQUUsWUFBWSxHQUFpQixTQUFTLGFBQTFCLEVBQUUsS0FBZSxTQUFTLEtBQWQsRUFBVixJQUFJLG1CQUFDLEtBQUssS0FBQSxDQUFlO0lBR3hFLElBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsU0FBUyxJQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtZQUM5QixHQUFHLEVBQUUseUJBQXVCLElBQU07U0FDbkMsQ0FBQyxDQUFDLENBQUM7S0FDTDtJQUVELElBQUcsSUFBSSxFQUFDO1FBQ04sSUFBRyxDQUFDLE1BQU0sSUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUM7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWM7Z0JBQzNCLEdBQUcsRUFBRSw2Q0FBNkM7YUFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDTDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FD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XG5pbXBvcnQgeyBJQ2xvdWRiYXNlQ29tcG9uZW50LCBJQ2xvdWRiYXNlSG9vayB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvY29tcG9uZW50JztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ0BjbG91ZGJhc2UvdXRpbGl0aWVzJztcblxuY29uc3QgeyBFUlJPUlMgfSA9IGNvbnN0YW50cztcblxuY29uc3QgY29tcG9uZW50czpLVjxJQ2xvdWRiYXNlQ29tcG9uZW50PiA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoYXBwOmFueSxjb21wb25lbnQ6SUNsb3VkYmFzZUNvbXBvbmVudCl7XG4gIGNvbnN0IHsgbmFtZSwgbmFtZXNwYWNlLCBlbnRpdHksIGluamVjdEV2ZW50cywgSUlGRT1mYWxzZSB9ID0gY29tcG9uZW50O1xuICBcbiAgLy8g5LiN5YWB6K646YeN5aSN5rOo5YaM5oiW5ZG95ZCN56m66Ze06YeN5ZCNXG4gIGlmKGNvbXBvbmVudHNbbmFtZV18fChuYW1lc3BhY2UmJmFwcFtuYW1lc3BhY2VdKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX09QRVJBVElPTixcbiAgICAgIG1zZzogYER1cGxpY2F0ZSBjb21wb25lbnQgJHtuYW1lfWBcbiAgICB9KSk7XG4gIH1cbiAgLy8gSUlGReexu+Wei+eahOe7hOS7tuS7pWFwcOS4unNjb3Bl5omn6KGMZW50aXR55Ye95pWw77yM5LiN5oyC6L295YiwYXBwLnByb3RvdHlwZeS4ilxuICBpZihJSUZFKXtcbiAgICBpZighZW50aXR5fHx0eXBlb2YgZW50aXR5ICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX1BBUkFNUyxcbiAgICAgICAgbXNnOiAnSUlGRSBjb21wb25lbnRcXCdzIGVudGl0eSBtdXN0IGJlIGEgZnVuY3Rpb24nXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGVudGl0eS5jYWxsKGFwcCk7XG4gIH1cbiAgXG5cbiAgY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuICBpZihuYW1lc3BhY2Upe1xuICAgIChhcHAgYXMgYW55KS5wcm90b3R5cGVbbmFtZXNwYWNlXSA9IGVudGl0eTtcbiAgfWVsc2V7XG4gICAgZGVlcEV4dGVuZCgoYXBwIGFzIGFueSkucHJvdG90eXBlLGVudGl0eSk7XG4gIH1cbiAgaWYoaW5qZWN0RXZlbnRzKXtcbiAgICBjb25zdCB7IGJ1cywgZXZlbnRzIH0gPSBpbmplY3RFdmVudHM7XG4gICAgaWYoIWJ1c3x8IWV2ZW50c3x8ZXZlbnRzLmxlbmd0aD09PTApe1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbkNhbGxiYWNrID0gKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5maXJlIHx8IGZ1bmN0aW9uKCl7fTtcbiAgICBpZighKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5ldmVudHMpe1xuICAgICAgKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luRXZlbnRzOktWPGFueT4gPSAoYXBwIGFzIGFueSkucHJvdG90eXBlLmV2ZW50cyB8fCB7fTtcbiAgICBpZihvcmlnaW5FdmVudHNbbmFtZV0pe1xuICAgICAgKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5ldmVudHNbbmFtZV0uZXZlbnRzID0gWy4uLihhcHAgYXMgYW55KS5wcm90b3R5cGUuZXZlbnRzW25hbWVdLmV2ZW50cywuLi5ldmVudHNdO1xuICAgIH1lbHNle1xuICAgICAgKGFwcCBhcyBhbnkpLnByb3RvdHlwZS5ldmVudHNbbmFtZV0gPSB7YnVzLGV2ZW50c307XG4gICAgfVxuICAgIChhcHAgYXMgYW55KS5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZTpzdHJpbmcsZGF0YT86YW55KXtcbiAgICAgIG9yaWdpbkNhbGxiYWNrKGV2ZW50TmFtZSxkYXRhKTtcbiAgICAgIGZvcihjb25zdCBuYW1lIGluIHRoaXMuZXZlbnRzKXtcbiAgICAgICAgY29uc3QgeyBidXMsIGV2ZW50czpldmVudExpc3QgfSA9IHRoaXMuZXZlbnRzW25hbWVdO1xuICAgICAgICBpZihldmVudExpc3QuaW5jbHVkZXMoZXZlbnROYW1lKSl7XG4gICAgICAgICAgYnVzLmZpcmUoZXZlbnROYW1lLGRhdGEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0OmFueSxzb3VyY2U6YW55KTpLVjxhbnk+e1xuICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XG4gICAgY2FzZSBEYXRlOlxuICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlIGFzIERhdGU7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XG4gICAgY2FzZSBPYmplY3Q6XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0ID0ge307XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFycmF5OlxuICAgICAgdGFyZ2V0ID0gW107XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHRhcmdldFtrZXldLHNvdXJjZVtrZXldKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckhvb2soYXBwOmFueSxob29rOklDbG91ZGJhc2VIb29rKXtcbiAgY29uc3QgeyBlbnRpdHksIHRhcmdldCB9ID0gaG9vaztcbiAgaWYoIWFwcC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkodGFyZ2V0KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGNvZGU6IEVSUk9SUy5JTlZBTElEX09QRVJBVElPTixcbiAgICAgIG1zZzogYHRhcmdldDoke3RhcmdldH0gaXMgbm90IGV4aXN0YFxuICAgIH0pKTtcbiAgfVxuICBjb25zdCBvcmlnaW5NZXRob2QgPSBhcHAucHJvdG90eXBlW3RhcmdldF07XG4gIGlmKHR5cGVvZiBvcmlnaW5NZXRob2QgIT09ICdmdW5jdGlvbicpe1xuICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb2RlOiBFUlJPUlMuSU5WQUxJRF9PUEVSQVRJT04sXG4gICAgICBtc2c6IGB0YXJnZXQ6JHt0YXJnZXR9IGlzIG5vdCBhIGZ1bmN0aW9uIHdoaWNoIGlzIHRoZSBvbmx5IHR5cGUgc3VwcG9ydHMgaG9va2BcbiAgICB9KSk7XG4gIH1cbiAgYXBwLnByb3RvdHlwZVt0YXJnZXRdID0gZnVuY3Rpb24oLi4uYXJnczphbnkpe1xuICAgIGVudGl0eS5jYWxsKHRoaXMsLi4uYXJncyk7XG4gICAgcmV0dXJuIG9yaWdpbk1ldGhvZC5jYWxsKHRoaXMsLi4uYXJncyk7XG4gIH1cbn0iXX0=