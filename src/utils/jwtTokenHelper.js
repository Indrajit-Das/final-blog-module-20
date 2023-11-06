import { jwtVerify, SignJWT } from "jose";

//Create JWT Token
export async function CreateToken(email, id, firstName) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    let token = await new SignJWT({
        email: email,
        id: id,
        firstName: firstName,
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPAIRATION)
        .sign(secret);
    return token;
}

// Verify JWT Token
export async function VerifyToken(token) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token, secret);
    return decoded["payload"];
}
