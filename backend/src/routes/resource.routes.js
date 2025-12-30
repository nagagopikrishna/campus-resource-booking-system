import express from 'express'
import { createResource, deleteResource, filterResource, getAllResource, getResourceById, searchResource, sortResource, updateResource } from '../controllers/resource.controller.js';
import protect from '../middlewares/auth.middleware.js';
import adminOnly from '../middlewares/admin.middleware.js';

const router = express.Router();


/**
 * @route POST /api/resources
 * @desc Create a new resource (Admin)
 */
router.post("/", protect, adminOnly, createResource);


/**
 * @route PUT /api/resources/:id
 * @desc Update a resource (Admin)
 */


router.put("/:id", protect, adminOnly, updateResource);


/**
 * @route DELETE /api/resources/:id
 * @desc Delete a resource (Admin)
 */
router.delete("/:id", protect, adminOnly, deleteResource);


/**
 * @route GET /api/resources
 * @desc Get all resources
 */

router.get("/", protect, getAllResource);


/**
 * @route GET /api/resources/search?query=
 * @desc GET search resource by name or type
 */

router.get("/search", protect, searchResource);


/**
 * @route GET /api/resources/filter?type=?&status=?
 * @desc GET Filter Resource by type (lab, classrooms, sports) or status(available, booked)
 */
router.get("/filter", protect, filterResource);


/**
 * @route GET /api/resources/sort?by=?
 * @desc GET resource sort by name, type, date
 */

router.get("/sort", protect, sortResource)

/**
 * @route GET /api/resources/:id
 * @desc Get single resource
 */

router.get("/:id", protect, getResourceById);



export default router;