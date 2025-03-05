"use strict";
// const arr :number[] = [1,2,4,9,5,3,4,7,2]
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// const non_dubplicate : number[] = arr.filter((item,index)=>{ return arr.indexOf(item) === index })  // to return non-duplicate element
// const dubplicate : number[] = arr.filter((item,index)=>{ return arr.indexOf(item) !== index })      // to return duplicate element
// console.log(non_dubplicate);
// console.log(dubplicate);
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function palindrome() {
    rl.question("Give any string you want to revers ", (str) => {
        let revers = str.split("").reverse().join("");
        if (revers === str) {
            console.log(`${revers} is a palindrome string`);
            rl.close();
        }
        else {
            console.log(`${revers} this string is not palindrome`);
            rl.close();
        }
    });
}
palindrome();
