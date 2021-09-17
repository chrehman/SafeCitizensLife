import axios from 'axios';

const path="http:192.168.10.25:3000/getData/"

export const sendAlert = async(userId,data) => {
    console.log("Sending")
    console.log("PAAAAAAA",`${path}${userId}`)
    console.log(userId,data)

    return await axios.post(`${path}${userId}`,data)
    
    
}