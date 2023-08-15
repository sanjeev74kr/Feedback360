import mongoose, { Schema, Types } from 'mongoose';

interface IUsers {
    _id: Types.ObjectId,
    name: string,
    email: string,
    phone: number,
    password: string,
    role: string
    adminId: string
}

const userSchema: Schema<IUsers> = new mongoose.Schema<IUsers>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "regularUser",
        enum: ['admin', 'regularUser', 'businessOwner'] as const
    },
    adminId: String
})

const userModel = mongoose.model<IUsers>('users', userSchema);

export { IUsers, userModel };