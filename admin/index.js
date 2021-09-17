const express = require('express');
const cors = require('cors');
const admin = require("firebase-admin");

const serviceAccount = require("./safe-citizen-life-firebase-adminsdk-wj3ek-00c2a31ea5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://safe-citizen-life-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
const db = admin.firestore();



// router of get method
app.get('/', (req, res) => {
    res.send('Welcome to Safe Citizen Life');
    // res.send('hello world');
}
);


// get data from firestore
app.post('/getData/:uid', (req, res) => {
    const uid = req.params.uid;
    const data = req.body;
    console.log("DATA",data);
    const message = {
                    notification: {
                        title: data.title,
                        body: data.text
                    },
                    data: {
                    },
                    android: {
                        notification: {
                            sound: 'default',
                        }
                    },
                    apns: {
                        payload: {
                            aps: {
                                sound: 'default',
                                priority: 'high',
                                content_available: true,
                                channel_id: 'Safe Citizen Life',
                            }
                        }
                    },
                    token: 'eIcgNh3FRKq0JldegO034v:APA91bEc_2Pa5E2xpVC0Ky_7_WmqbXlCjah9g8sTErLy8MpWU58IVvZR3yEtYMYbt2I4CzjdcC4xqxdQA4KTLv8beS-vxj2o8c2kB-GCMzEcvvLDvRAelCQZw4Ljt_OKcL1VdfOT4YOG'
                }
                admin.messaging().send(message)
                .then((response) => {
                    console.log('Successfully sent message:', response);
                    res.send("Message send successfully");
                })
                .catch((error) => {
                    console.log('Error sending message:', error);
                    res.send("Error sending message");
                });

    // db.collection('citizens')
    //     .doc(uid)
    //     .get()
    //     .then(snapshot => {
    //         const token = snapshot.data().token;
    //         console.log(token);
    //         
    //     })
    // .catch(err => {
    //     console.log(err);
    // });
}
)
// server listening on port
app.listen(port, () => {
    console.log('server is running on port ' + port);
});