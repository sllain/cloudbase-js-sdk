var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RealtimeErrorMessageError = (function (_super) {
    __extends(RealtimeErrorMessageError, _super);
    function RealtimeErrorMessageError(serverErrorMsg) {
        var _this = _super.call(this, "Watch Error " + JSON.stringify(serverErrorMsg.msgData) + " (requestid: " + serverErrorMsg.requestId + ")") || this;
        _this.isRealtimeErrorMessageError = true;
        _this.payload = serverErrorMsg;
        return _this;
    }
    return RealtimeErrorMessageError;
}(Error));
export { RealtimeErrorMessageError };
export var isRealtimeErrorMessageError = function (e) { return e === null || e === void 0 ? void 0 : e.isRealtimeErrorMessageError; };
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'timeout';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return TimeoutError;
}(Error));
export { TimeoutError };
export var isTimeoutError = function (e) {
    return e.type === 'timeout';
};
var CancelledError = (function (_super) {
    __extends(CancelledError, _super);
    function CancelledError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'cancelled';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return CancelledError;
}(Error));
export { CancelledError };
export var isCancelledError = function (e) {
    return e.type === 'cancelled';
};
var CloudSDKError = (function (_super) {
    __extends(CloudSDKError, _super);
    function CloudSDKError(options) {
        var _this = _super.call(this, options.errMsg) || this;
        _this.errCode = 'UNKNOWN_ERROR';
        Object.defineProperties(_this, {
            message: {
                get: function () {
                    return ("errCode: " + this.errCode + " " + (ERR_CODE[this.errCode] ||
                        '') + " | errMsg: " + this.errMsg);
                },
                set: function (msg) {
                    this.errMsg = msg;
                }
            }
        });
        _this.errCode = options.errCode || 'UNKNOWN_ERROR';
        _this.errMsg = options.errMsg;
        return _this;
    }
    Object.defineProperty(CloudSDKError.prototype, "message", {
        get: function () {
            return "errCode: " + this.errCode + " | errMsg: " + this.errMsg;
        },
        set: function (msg) {
            this.errMsg = msg;
        },
        enumerable: false,
        configurable: true
    });
    return CloudSDKError;
}(Error));
export { CloudSDKError };
export var ERR_CODE = {
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG: 'SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG',
    SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA: 'SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED',
    SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBO0lBQStDLDZDQUFLO0lBSWxELG1DQUFZLGNBQXdDO1FBQXBELFlBQ0Usa0JBQ0UsaUJBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHFCQUNuRCxjQUFjLENBQUMsU0FBUyxNQUN2QixDQUNKLFNBRUY7UUFWRCxpQ0FBMkIsR0FBRyxJQUFJLENBQUE7UUFTaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFaRCxDQUErQyxLQUFLLEdBWW5EOztBQUVELE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFHLFVBQ3pDLENBQU0sV0FDNkIsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLDJCQUEyQixHQUFBLENBQUE7QUFFbkU7SUFBa0MsZ0NBQUs7SUFBdkM7UUFBQSxxRUFLQztRQUhDLFVBQUksR0FBRyxTQUFrQixDQUFBO1FBQ3pCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxhQUFPLEdBQUcsSUFBSSxDQUFBOztJQUNoQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0MsS0FBSyxHQUt0Qzs7QUFFRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFNO0lBQ25DLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTO0FBQXBCLENBQW9CLENBQUE7QUFFdEI7SUFBb0Msa0NBQUs7SUFBekM7UUFBQSxxRUFLQztRQUhDLFVBQUksR0FBRyxXQUFvQixDQUFBO1FBQzNCLGFBQU8sR0FBRyxJQUFJLENBQUE7UUFDZCxhQUFPLEdBQUcsSUFBSSxDQUFBOztJQUNoQixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBb0MsS0FBSyxHQUt4Qzs7QUFFRCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLENBQU07SUFDckMsT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVc7QUFBdEIsQ0FBc0IsQ0FBQTtBQUV4QjtJQUFtQyxpQ0FBSztJQU10Qyx1QkFBWSxPQUFpQztRQUE3QyxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FrQnRCO1FBeEJNLGFBQU8sR0FBRyxlQUFlLENBQUE7UUFROUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUksRUFBRTtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsR0FBRztvQkFDRCxPQUFPLENBQ0wsY0FBWSxJQUFJLENBQUMsT0FBTyxVQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNoRCxFQUFFLGlCQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FDaEMsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELEdBQUcsRUFBSCxVQUFJLEdBQVc7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7Z0JBQ25CLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQTtRQUVGLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUE7UUFDakQsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBOztJQUM5QixDQUFDO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNFLE9BQU8sY0FBWSxJQUFJLENBQUMsT0FBTyxnQkFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDNUQsQ0FBQzthQUVELFVBQVksR0FBVztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUNuQixDQUFDOzs7T0FKQTtJQUtILG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFtQyxLQUFLLEdBa0N2Qzs7QUFPRCxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQXVDO0lBRTFELGFBQWEsRUFBRSxlQUFlO0lBQzlCLDhDQUE4QyxFQUM1QyxnREFBZ0Q7SUFFbEQsbURBQW1ELEVBQ2pELHFEQUFxRDtJQUV2RCxpREFBaUQsRUFDL0MsbURBQW1EO0lBRXJELCtDQUErQyxFQUM3QyxpREFBaUQ7SUFFbkQsK0NBQStDLEVBQzdDLGlEQUFpRDtJQUVuRCwwREFBMEQsRUFDeEQsNERBQTREO0lBRTlELHlEQUF5RCxFQUN2RCwyREFBMkQ7SUFFN0QsMERBQTBELEVBQ3hELDREQUE0RDtJQUU5RCw4Q0FBOEMsRUFDNUMsZ0RBQWdEO0lBRWxELHFEQUFxRCxFQUNuRCx1REFBdUQ7Q0FFMUQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHZW5lcmljRXJyb3IgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzJ1xuaW1wb3J0IHsgSVJlc3BvbnNlTWVzc2FnZUVycm9yTXNnIH0gZnJvbSAnQGNsb3VkYmFzZS90eXBlcy9yZWFsdGltZSdcblxuZXhwb3J0IGNsYXNzIFJlYWx0aW1lRXJyb3JNZXNzYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGlzUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciA9IHRydWVcbiAgcGF5bG9hZDogSVJlc3BvbnNlTWVzc2FnZUVycm9yTXNnXG5cbiAgY29uc3RydWN0b3Ioc2VydmVyRXJyb3JNc2c6IElSZXNwb25zZU1lc3NhZ2VFcnJvck1zZykge1xuICAgIHN1cGVyKFxuICAgICAgYFdhdGNoIEVycm9yICR7SlNPTi5zdHJpbmdpZnkoc2VydmVyRXJyb3JNc2cubXNnRGF0YSl9IChyZXF1ZXN0aWQ6ICR7XG4gICAgICAgIHNlcnZlckVycm9yTXNnLnJlcXVlc3RJZFxuICAgICAgfSlgXG4gICAgKVxuICAgIHRoaXMucGF5bG9hZCA9IHNlcnZlckVycm9yTXNnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGlzUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciA9IChcbiAgZTogYW55XG4pOiBlIGlzIFJlYWx0aW1lRXJyb3JNZXNzYWdlRXJyb3IgPT4gZT8uaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yXG5cbmV4cG9ydCBjbGFzcyBUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvclxuICBpbXBsZW1lbnRzIElHZW5lcmljRXJyb3I8J3RpbWVvdXQnLCBudWxsPiB7XG4gIHR5cGUgPSAndGltZW91dCcgYXMgY29uc3RcbiAgcGF5bG9hZCA9IG51bGxcbiAgZ2VuZXJpYyA9IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IGlzVGltZW91dEVycm9yID0gKGU6IGFueSk6IGUgaXMgVGltZW91dEVycm9yID0+XG4gIGUudHlwZSA9PT0gJ3RpbWVvdXQnXG5cbmV4cG9ydCBjbGFzcyBDYW5jZWxsZWRFcnJvciBleHRlbmRzIEVycm9yXG4gIGltcGxlbWVudHMgSUdlbmVyaWNFcnJvcjwnY2FuY2VsbGVkJywgbnVsbD4ge1xuICB0eXBlID0gJ2NhbmNlbGxlZCcgYXMgY29uc3RcbiAgcGF5bG9hZCA9IG51bGxcbiAgZ2VuZXJpYyA9IHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IGlzQ2FuY2VsbGVkRXJyb3IgPSAoZTogYW55KTogZSBpcyBDYW5jZWxsZWRFcnJvciA9PlxuICBlLnR5cGUgPT09ICdjYW5jZWxsZWQnXG5cbmV4cG9ydCBjbGFzcyBDbG91ZFNES0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgZXJyQ29kZSA9ICdVTktOT1dOX0VSUk9SJ1xuICBwdWJsaWMgZXJyTXNnOiBzdHJpbmdcblxuICBwdWJsaWMgcmVxdWVzdElEPzogc3RyaW5nXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogSUVycm9yQ29uc3RydWN0b3JPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucy5lcnJNc2cpXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYGVyckNvZGU6ICR7dGhpcy5lcnJDb2RlfSAke0VSUl9DT0RFW3RoaXMuZXJyQ29kZV0gfHxcbiAgICAgICAgICAgICAgJyd9IHwgZXJyTXNnOiBgICsgdGhpcy5lcnJNc2dcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIHNldChtc2c6IHN0cmluZykge1xuICAgICAgICAgIHRoaXMuZXJyTXNnID0gbXNnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5lcnJDb2RlID0gb3B0aW9ucy5lcnJDb2RlIHx8ICdVTktOT1dOX0VSUk9SJ1xuICAgIHRoaXMuZXJyTXNnID0gb3B0aW9ucy5lcnJNc2dcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiBgZXJyQ29kZTogJHt0aGlzLmVyckNvZGV9IHwgZXJyTXNnOiBgICsgdGhpcy5lcnJNc2dcbiAgfVxuXG4gIHNldCBtZXNzYWdlKG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5lcnJNc2cgPSBtc2dcbiAgfVxufVxuXG5pbnRlcmZhY2UgSUVycm9yQ29uc3RydWN0b3JPcHRpb25zIHtcbiAgZXJyQ29kZT86IHN0cmluZ1xuICBlcnJNc2c6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgRVJSX0NPREU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0gPSB7XG4gIC8vIFwiLTFcIjogXCJcIixcbiAgVU5LTk9XTl9FUlJPUjogJ1VOS05PV05fRVJST1InLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfSU5JVF9XQVRDSF9GQUlMOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfSU5JVF9XQVRDSF9GQUlMJyxcbiAgLy8gXCJyZWFsdGltZSBsaXN0ZW5lciBpbml0IHdhdGNoIGZhaWxcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQ09OTkVDVF9XQVRDSF9GQUlMOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfUkVDT05ORUNUX1dBVENIX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlY29ubmVjdCB3YXRjaCBmYWlsXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUJVSUxEX1dBVENIX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUJVSUxEX1dBVENIX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlYnVpbGQgd2F0Y2ggZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfQ0xPU0VfV0FUQ0hfRkFJTDpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX0NMT1NFX1dBVENIX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlYnVpbGQgd2F0Y2ggZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfU0VSVkVSX0VSUk9SX01TRzpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1NFUlZFUl9FUlJPUl9NU0cnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlY2VpdmUgc2VydmVyIGVycm9yIG1zZ1wiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfUkVDRUlWRV9JTlZBTElEX1NFUlZFUl9EQVRBOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfUkVDRUlWRV9JTlZBTElEX1NFUlZFUl9EQVRBJyxcbiAgLy8gXCJyZWFsdGltZSBsaXN0ZW5lciByZWNlaXZlIGludmFsaWQgc2VydmVyIGRhdGFcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0VSUk9SOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfV0VCU09DS0VUX0NPTk5FQ1RJT05fRVJST1InLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHdlYnNvY2tldCBjb25uZWN0aW9uIGVycm9yXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9XRUJTT0NLRVRfQ09OTkVDVElPTl9DTE9TRUQ6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9XRUJTT0NLRVRfQ09OTkVDVElPTl9DTE9TRUQnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHdlYnNvY2tldCBjb25uZWN0aW9uIGNsb3NlZFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfQ0hFQ0tfTEFTVF9GQUlMOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfQ0hFQ0tfTEFTVF9GQUlMJyxcbiAgLy8gXCJyZWFsdGltZSBsaXN0ZW5lciBjaGVjayBsYXN0IGZhaWxcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1VORVhQRUNURURfRkFUQUxfRVJST1I6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9VTkVYUEVDVEVEX0ZBVEFMX0VSUk9SJ1xuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHVuZXhwZWN0ZWQgZmF0YWwgZXJyb3JcIlxufSJdfQ==