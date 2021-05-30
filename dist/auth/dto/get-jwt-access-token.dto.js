"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJwtAccessTokenDto = void 0;
const class_validator_1 = require("class-validator");
class GetJwtAccessTokenDto {
}
__decorate([
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(8),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], GetJwtAccessTokenDto.prototype, "nickname", void 0);
__decorate([
    class_validator_1.MinLength(7),
    class_validator_1.MaxLength(15),
    class_validator_1.IsMobilePhone(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], GetJwtAccessTokenDto.prototype, "phone", void 0);
exports.GetJwtAccessTokenDto = GetJwtAccessTokenDto;
//# sourceMappingURL=get-jwt-access-token.dto.js.map