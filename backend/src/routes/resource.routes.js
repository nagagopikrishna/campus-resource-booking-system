import express from 'express'
import { createResource, getAllResource, getResourceById } from '../controllers/resource.controller.js';

const router = express.Router();


/**
 * @route POST /api/resource
 * @desc Create a new resource (Admin)
 */
router.post("/", createResource);


/**
 * @route GET /api/resource
 * @desc Get all resources
 */

router.get("/", getAllResource);


/**
 * @route GET /api/resources/:id
 * @desc Get single resource
 */

router.get("/:id", getResourceById);


export default router;