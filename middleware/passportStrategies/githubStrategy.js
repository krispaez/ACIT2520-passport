"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_github2_1 = require("passport-github2");
const githubStrategy = new passport_github2_1.Strategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "",
    passReqToCallback: true,
}, 
/* FIX ME 😭 */
(req, accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () { }));
const passportGitHubStrategy = {
    name: 'github',
    strategy: githubStrategy,
};
exports.default = passportGitHubStrategy;
