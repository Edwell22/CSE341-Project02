const validate = require('../helpers/validate');

// VALIDATES CREATE AND UPDATES TO THE INFORMATION COLLECTION
const saveRectifierInfoValidate = (req, res, next) => {
    const validateRule = {
        facilityId: "required|string",
        manufacturer: "required|string",
        model: "required|string",
        serialNumber: "required|string",
        dcVolts: "required|numeric",
        dcAmps: "required|numeric",
        tapSet: "required|string",
    };
    validate(req.body, validateRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

// VALIDATES CREATE AND UPDATE TO INSPECTION COLLECTION
const saveRectifierInspecValidate = (req, res, next) => {
    const validateRule = {
        facilityId: "required|string",
        mdcVolts: "required|numeric",
        mdcAmps: "required|numeric",
        tapSet: "required|string",
        inspectionDate: "required|date",
        comments: "required|string",
        technician: "required|string"
    };
    validate(req.body, validateRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
}

module.exports = { 
    saveRectifierInfoValidate,
    saveRectifierInspecValidate
}