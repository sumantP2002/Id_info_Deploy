import {create,display,todelete,displayall} from '../Controllers/ocrController.js';
import express from "express";
import formidable from 'express-formidable';
const router =express.Router();

router.post('/create-ocr' ,formidable(),create);
router.get('/display-ocr/:identificationNumber',display);
router.delete('/delete-ocr/:identificationNumber',todelete);
router.get('/getall',displayall);
export default router;