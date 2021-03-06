"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInitEventMessage = exports.genRequestId = void 0;
function genRequestId(prefix) {
    if (prefix === void 0) { prefix = ''; }
    return "" + (prefix ? prefix + "_" : '') + +new Date() + "_" + Math.random();
}
exports.genRequestId = genRequestId;
function isInitEventMessage(msg) {
    return msg.msgType === 'INIT_EVENT';
}
exports.isInitEventMessage = isInitEventMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLFNBQWdCLFlBQVksQ0FBQyxNQUFXO0lBQVgsdUJBQUEsRUFBQSxXQUFXO0lBQ3RDLE9BQU8sTUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFJLE1BQU0sTUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxTQUFJLElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQTtBQUN2RSxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FDaEMsR0FBcUI7SUFFckIsT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQTtBQUNyQyxDQUFDO0FBSkQsZ0RBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJUmVzcG9uc2VNZXNzYWdlLFxuICBJUmVzcG9uc2VNZXNzYWdlSW5pdEV2ZW50TXNnXG59IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMvcmVhbHRpbWUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5SZXF1ZXN0SWQocHJlZml4ID0gJycpIHtcbiAgcmV0dXJuIGAke3ByZWZpeCA/IGAke3ByZWZpeH1fYCA6ICcnfSR7K25ldyBEYXRlKCl9XyR7TWF0aC5yYW5kb20oKX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luaXRFdmVudE1lc3NhZ2UoXG4gIG1zZzogSVJlc3BvbnNlTWVzc2FnZVxuKTogbXNnIGlzIElSZXNwb25zZU1lc3NhZ2VJbml0RXZlbnRNc2cge1xuICByZXR1cm4gbXNnLm1zZ1R5cGUgPT09ICdJTklUX0VWRU5UJ1xufVxuIl19