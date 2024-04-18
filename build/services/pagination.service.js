"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationService = void 0;
class PaginationService {
    constructor(paginationOptions) {
        this.paginationOptions = paginationOptions;
    }
    async getPaginatedItems({ page, limit }) {
        const skip = (page - 1) * limit;
        const { model, populate = '', filter = {} } = this.paginationOptions;
        const [items, totalItems] = await Promise.all([
            model.find(filter).skip(skip).limit(limit).populate(populate).lean(),
            model.countDocuments(),
        ]);
        const totalPages = Math.ceil(totalItems / limit);
        return {
            page,
            totalPages,
            totalItems,
            items,
        };
    }
}
exports.PaginationService = PaginationService;
