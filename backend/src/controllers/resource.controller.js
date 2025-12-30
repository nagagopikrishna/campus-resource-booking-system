import Resource from '../model/Resource.model.js'


/**
 * @desc Create a new Resource (Admin)
 * @route POST / api/resources
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
 * @route GET /api/resources/:id
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
};

/**
 * 
 * @desc PUT update resource 
 * @route PUT /api/resources/:id
 */


export const updateResource = async (req, res) =>{
    try {
        
        const resource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if (!resource){
            return res.status(404).json({message: "Resource not found"});
        }

        res.status(200).json(resource);

    } catch (error) {
        res.status(400).json({message: "Failed to update resource", error: error.message})
    }
};


/**
 * @desc DELETE delete resource by id
 * @route DELETE /api/resources/:id
 */


export const deleteResource = async (req, res) =>{
    try {
        
        const resource = await Resource.findByIdAndDelete(req.params.id);

        if (!resource){
            return res.status(404).json({message: "Resource not found"});
        }

        res.status(200).json({message: "Resource deleted successfully"});

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete resource",
            error: error.message
        })
    }
};


/**
 * @desc GET search resource by name or type
 * @route GET /api/resources/search?query= 
 */


export const searchResource = async (req, res) =>{
    try {
        const {query} = req.query;

        if (!query){
            return res.status(400).json({message: "Search query is required"});
        }

        const resource = await Resource.find({
            $or: [
                {name: {$regex: query, $options: "i"} },
                {type: {$regex: query, $options: "i"} }
            ]
        });

        res.status(200).json(resource);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


/**
 * @desc Filter Resource by type (lab, classrooms, sports) or status(available, booked)
 * @route GET /api/resources/filter?type=?&status=?
 */

export const filterResource = async (req, res) =>{
    try {
        const {type, status} = req.query;
        const filter = {};
        if (filter) filter.type = type;
        if (status) filter.status = status;

        const resource = await Resource.find(filter);

        res.status(200).json(resource);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


/**
 * @desc GET resource sort by date, name, type
 * @route GET /api/resources/sort?by=?
 */

export const sortResource = async (req, res) =>{
    try {
        const {by} = req.query;
        let sortOption = {};

        if (by === "date") sortOption.createAt = -1;
        if (by === "name") sortOption.name = 1;
        if (by === "type") sortOption.type = 1;

        const resource = await Resource.find().sort(sortOption);
        res.status(200).json(resource);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};