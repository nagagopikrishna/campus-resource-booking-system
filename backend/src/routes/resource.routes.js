import express from 'express'
import { createResource, deleteResource, getAllResource, getResourceById, updateResource } from '../controllers/resource.controller.js';
import protect from '../middlewares/auth.middleware.js';
import adminOnly from '../middlewares/admin.middleware.js';

const router = express.Router();


/**
 * @route POST /api/resource
 * @desc Create a new resource (Admin)
 */
router.post("/", protect, adminOnly, createResource);


/**
 * @route PUT /api/resource/:id
 * @desc Update a resource (Admin)
 */


router.put("/:id", protect, adminOnly, updateResource);


/**
 * @route DELETE /api/resource/:id
 * @desc Delete a resource (Admin)
 */
router.delete("/:id", protect, adminOnly, deleteResource);


/**
 * @route GET /api/resource
 * @desc Get all resources
 */

router.get("/", protect, getAllResource);


/**
 * @route GET /api/resources/:id
 * @desc Get single resource
 */

router.get("/:id", protect, getResourceById);



export default router;