"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWisataDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wisata_dto_1 = require("./create-wisata.dto");
class UpdateWisataDto extends (0, mapped_types_1.PartialType)(create_wisata_dto_1.CreateWisataDto) {
}
exports.UpdateWisataDto = UpdateWisataDto;
//# sourceMappingURL=update-wisata.dto.js.map