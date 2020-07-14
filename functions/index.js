const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.getAllFish = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getAllFish = functions.https.onRequest(async (req, res) => {
    const data = await admin.firestore().collection('fish').get()
    data.forEach(doc => {
        console.log(doc.data())
    })
    return res.send("fish")
})