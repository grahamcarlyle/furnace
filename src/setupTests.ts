import "@testing-library/jest-dom";

// Polyfills for jsdom environment
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
