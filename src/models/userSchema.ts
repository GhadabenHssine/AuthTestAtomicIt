// models/userSchema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;

    // isAdmin: boolean;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
    // isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
