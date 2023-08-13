import {Router} from "express";
import studentController from "../controller/student.js";


const studentRouter= new Router();

studentRouter.get("/pin" , studentController.getAll);


export default studentRouter;