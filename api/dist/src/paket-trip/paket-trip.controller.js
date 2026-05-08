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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaketTripController = void 0;
const common_1 = require("@nestjs/common");
const paket_trip_service_1 = require("./paket-trip.service");
let PaketTripController = class PaketTripController {
    paketTripService;
    constructor(paketTripService) {
        this.paketTripService = paketTripService;
    }
    create(createPaketTripDto) {
        return this.paketTripService.create(createPaketTripDto);
    }
    findAll() {
        return this.paketTripService.findAll();
    }
    findOne(id) {
        return this.paketTripService.findOne(+id);
    }
    update(id, updatePaketTripDto) {
        return this.paketTripService.update(+id, updatePaketTripDto);
    }
    remove(id) {
        return this.paketTripService.remove(+id);
    }
};
exports.PaketTripController = PaketTripController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaketTripController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaketTripController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaketTripController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PaketTripController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaketTripController.prototype, "remove", null);
exports.PaketTripController = PaketTripController = __decorate([
    (0, common_1.Controller)('paket-trip'),
    __metadata("design:paramtypes", [paket_trip_service_1.PaketTripService])
], PaketTripController);
//# sourceMappingURL=paket-trip.controller.js.map