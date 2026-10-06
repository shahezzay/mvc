import bcrypt from "bcrypt";

const hashPassword= async (plainPassword) => {
    const saltRounds = 10; //10 is recommended
    const hasPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashPassword;
};

const comparePassword = async (plainPassword, hashedPassword)=>{
    return await bcrypt.compare(plainPassword, hashPassword);
};

export {hashPassword, comparePassword};