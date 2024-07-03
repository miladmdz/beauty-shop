import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

let private_key: string = process.env.AccessTokenSecretKey!;

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateToken = (data: {}) => {
  const token = sign({ ...data }, private_key, {
    expiresIn: "60d",
    algorithm: "HS256",
  });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const tokenPayload = verify(token, private_key);
    return tokenPayload;
  } catch (err) {
    console.log("verify access token error ->", err);
    return false;
  }
};

const validFirstAndLastname = (name: string) => {
  if (name.length > 2 && name.length < 20) {
    return true;
  } else {
    return false;
  }
};

const validPhoneNumbre = (phone: string) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regex.test(phone);
};

const validEmail = (email: string) => {
  const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return regex.test(email);
};
const validPassword = (password: string) => {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return regex.test(password);
};

export {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  validFirstAndLastname,
  validPhoneNumbre,
  validEmail,
  validPassword,
};
