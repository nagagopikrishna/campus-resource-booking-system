import Resource from '../model/Resource.model.js'


/**
 * @desc Create a new Resource (Admin)
 * @route POST / api/resource
 */


export const createResource = async (req, res) =>{
    try {
        const resource = await Resource.create(req.body);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


/**
 * @desc Get all resource
 * @route GET / api/resources
 */


export const getAllResource = async (req, res) =>{
    try {
        const resources = await Resource.find({isActive: true});
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


/**
 * @desc Get single resource by ID
 * @route GET /api/resource/:id
 */


export const getResourceById = async (req, res) =>{
    try {
        const resource = await Resource.findById(req.params.id);

        if (!resource){
            return res.status(404).json({message: "Resource not found"});
        }

        res.status(200).json(resource);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}