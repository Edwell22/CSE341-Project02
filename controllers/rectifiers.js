// FUNCTIONS TO GET, CREATE, PUT, and DELETE RECORDS FROM DATABASE
const mongodb = require('../modules/db');
const ObjectId = require('mongodb').ObjectId;


/* ******************************************
 * FUNCTIONS TO WORK WITH THE INFORMATION 
 * COLLECTION
 * *****************************************/
// GET ALL RECORDS IN THE INFO COLLECTION
const getAllRectifierInfo = async (req, res) => {
    //#swagger.tags=['Rectifier-Info']
    const result = await mongodb.getDb().db().collection('Information').find()
    result.toArray().then((info) => {
        res.setHeader('Contents-Type', 'application/json');
        res.status(200).json(info);
    })
}

// GET ONE RECORD IN INFO COLLECTION
const getOneRectifierInfo = async (req, res) => {
    //#swagger.tags=['Rectifier-Info']
    const rectId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('Information').find({_id: rectId});
    result.toArray().then((rectifier) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(rectifier[0]);
    })
}

// CREATE NEW RECORD IN INFO COLLECTION
const createRectifierInfo = async (req, res) => {
    //#swagger.tags=['Rectifier-Info']
    const rectInfo = {
        facilityId: req.body.facilityId,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
        dcVolts: req.body.dcVolts,
        dcAmps: req.body.dcAmps,
        tapSet: req.body.tapSet,
    };
    const response = await mongodb.getDb().db().collection('Information').insertOne(rectInfo);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating record');
    }
}

// UPDATE RECTIFIER IN INFO COLLECTION
const updateRectifierInfo = async (req, res) => {
    //#swagger.tags=['Rectifier-Info']
    const rectId = new ObjectId(req.params.id);
    const rectInfo = {
        facilityId: req.body.facilityId,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
        dcVolts: req.body.dcVolts,
        dcAmps: req.body.dcAmps,
        tapSet: req.body.tapSet, 
    };
    const response = await mongodb.getDb().db().collection('Information').replaceOne({_id: rectId}, rectInfo);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.statu(500).json(response.error || 'Some error occured while updating record');
    }
}

// DELETE RECTIFIER IN INFO COLLECTION
const delecteRectifierInfo = async (req, res) => {
    //#swagger.tags=['Rectifier-Info']
    const rectId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('Information').deleteOne({_id: rectId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting record');
    }
}

/* *******************************************
 * FUNCTIONS TO WORK WITH THE INSPECTION 
 * COLLECTION
 * ******************************************/
// GET ALL RECORD IN THE INSPECTION COLLECTION
const getAllRectifierInspections = async (req, res) => {
    //#swagger.tags=['Rectifier-Inspection']
    const result = await mongodb.getDb().db().collection('Inspections').find();
    result.toArray().then((inspect) => {
        res.setHeader('Contents-Type', 'applicaiton/json');
        res.status(200).json(inspect);
    })
}

// GET ONE RECORD IN INPSECTION COLLECTION
const getOneRectifierInspection = async (req, res) => {
    //#swagger.tags=['Rectifier-Inspection']
    const rectId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('Inspections').find({_id: rectId});
    result.toArray().then((rectifier) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(rectifier[0]);
    })
}

// CREATE NEW INSPECITON RECORD IN INSPECTION COLLECTION
const createRectifierInspection = async (req, res) => {
    //#swagger.tags=['Rectifier-Inspection']
    const rectInsp = {
        facilityId: req.body.facilityId,
        mdcVolts: req.body.mdcVolts,
        mdcAmps: req.body.mdcAmps,
        tapSet: req.body.tapSet,
        inspectionDate: req.body.inspectionDate,
        comments: req.body.comments,
        technician: req.body.technician
    };
    const response = await mongodb.getDb().db().collection('Inspections').insertOne(rectInsp);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating record');
    }
}

// UPDATE INSPECTION RECORD IN INSPECTION COLLECTION
const updateRectifierInspection = async (req, res) => {
    //#swagger.tags=['Rectifier-Inspection']
    const rectId = new ObjectId(req.params.id);
    const rectInfo = {
        facilityId: req.body.facilityId,
        mdcVolts: req.body.mdcVolts,
        mdcAmps: req.body.mdcAmps,
        tapSet: req.body.tapSet,
        inspectionDate: req.body.inspectionDate,
        comments: req.body.comments,
        technician: req.body.technician 
    };
    const response = await mongodb.getDb().db().collection('Inspections').replaceOne({_id: rectId}, rectInfo);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.statu(500).json(response.error || 'Some error occured while updating record');
    }
}

// DELETE INSPECTION RECORD IN INSPECTION COLLECTION
const deleteRectifierInspection = async (req, res) => {
    //#swagger.tags=['Rectifier-Inspection']
    const rectId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('Inspections').deleteOne({_id: rectId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting record');
    }
}

module.exports = { 
    getAllRectifierInfo, 
    getOneRectifierInfo, 
    createRectifierInfo,
    getAllRectifierInspections,
    getOneRectifierInspection,
    createRectifierInspection,
    updateRectifierInfo,
    delecteRectifierInfo,
    updateRectifierInspection,
    deleteRectifierInspection
 }