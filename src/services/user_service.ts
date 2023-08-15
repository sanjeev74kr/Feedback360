import { IUsers, userModel } from "../models/user_model";
import bcrypt from 'bcryptjs';

//User Login function
const logIn = async (email: string, password: string, adminId: string) => {
    try {
        const user = await userModel.findOne({ email: email });

        if (user != null) {
            const isCompare = await bcrypt.compare(password, user.password);

            if (isCompare) {
                if (user.role === 'admin') {
                    if (validateAdmin(user, adminId))
                        return user;
                    else
                        return null;
                }
                return user;
            }
            else
                return null;
        }
    }
    catch (error) {
        console.log(error);
        throw new Error();
    }
}


//Admin validation function
const validateAdmin = (user: IUsers, adminId: string): boolean => {
    if (user.adminId.includes(adminId))
        return true;
    else
        return false;

}


//User Sign Up function
const signUp = async (data: IUsers): Promise<IUsers> => {
    try {
        const password = data.password;
        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashedpassword,
            role: data.role,
            adminId: data.adminId
        });

        await newUser.validate();
        await newUser.save();

        return newUser;
    }
    catch (error) {
        console.log(error);
        throw new Error();
    }
}



export { logIn, signUp };