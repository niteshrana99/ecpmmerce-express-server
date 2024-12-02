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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBillboard = void 0;
const express_1 = require("@clerk/express");
const db_1 = __importDefault(require("../../../../db"));
const createBillboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = (0, express_1.getAuth)(req);
    const { label, imageUrl, storeId } = req.body;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const store = yield db_1.default.store.findFirst({
        where: {
            id: storeId,
            userId,
        },
    });
    if (!store) {
        res.status(404).json({ message: 'Store not found with user.' });
    }
    const response = yield db_1.default.billboard.create({
        data: {
            label,
            backgroundImage: imageUrl,
            storeId,
        },
    });
    res
        .status(200)
        .json({ data: response, message: 'Billboard created successfully' });
});
exports.createBillboard = createBillboard;