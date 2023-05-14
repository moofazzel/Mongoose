import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";



export const app: Application = express()

// using cors
app.use(cors())

// Parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    // inserting a test data into mongodb


    // res.send('db connected')
    // next()

    // 1. Create an interface representing a document in MongoDB.
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        dateOfBirth: string;
        gender: "male" | "female";
        email: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // 2. Create a Schema corresponding to the document interface.

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
            },
            lastName: {
                type: String,
                required: true
            },
        },

        dateOfBirth: {
            type: String
        },
        gender: {
            type: String,
            enum: ["male", "female"]

        },
        email: {
            type: String
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        },
    });


    const User = model<IUser>("User", userSchema)

    const createUserToDB = async () => {
        const user = new User({
            id: "118",
            role: "student",
            password: "rony100",
            name: {
                firstName: "Rana",
                middleName: "Hossen",
                lastName: "Khan",
            },
            gender: "male",
            email: "rony@dev.com",
            contactNo: "01938688488",
            emergencyContactNo: "018000000",
            presentAddress: "khulna",
            permanentAddress: "Khulna",
        });
        await user.save();
        console.log(user)
    }

    createUserToDB()


})

