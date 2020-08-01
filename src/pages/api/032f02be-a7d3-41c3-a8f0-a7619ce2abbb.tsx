import {verifyIdToken} from "src/utils/auth/firebaseAdmin";

const fbRes = async (req: any, res: any) => {

    const token = req.headers.token
    try {
        await verifyIdToken(token)
        res.send("token valid");
    }
    catch (error) {
        return res.status(401).send('You are unauthorised')
    }
}

export default fbRes;
