"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const getSizes_1 = require("../../../controllers/admin/sizes/getSizes");
const createSize_1 = require("../../../controllers/admin/sizes/createSize");
const getSizeById_1 = require("../../../controllers/admin/sizes/getSizeById");
const updateSize_1 = require("../../../controllers/admin/sizes/updateSize");
const deleteSize_1 = require("../../../controllers/admin/sizes/deleteSize");
const router = (0, express_1.Router)();
router.get('/:storeId/sizes', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), getSizes_1.getSizes);
router.get('/:storeId/size/:sizeId', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), getSizeById_1.getSizesById);
router.post('/:storeId/createSize', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), createSize_1.createSize);
router.patch('/:storeId/updateSize', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), updateSize_1.updateSize);
router.delete('/:storeId/deleteSize/:sizeId', (0, clerk_sdk_node_1.ClerkExpressRequireAuth)(), deleteSize_1.deleteSize);
exports.default = router;