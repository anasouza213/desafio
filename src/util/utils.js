import Md5 from "../js/md5.min";

const privateKey = "ebcba1402451019739deea1c14df097e2af4f1ea";
const publicKey = "3d204c9b3a3f03ed929dbe1841f22e1b";
const maxCharacters = 1500;

const Util = {

    createHash (timeStamp) {
        const toBeHashed = timeStamp + privateKey + publicKey;
        const hashedMessage = Md5(toBeHashed);
        return hashedMessage;    
    }
}

export default Util;