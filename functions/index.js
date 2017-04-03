var functions = require('firebase-functions');
var provider = new firebase.auth.GithubAuthProvider();

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// })

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
// });
//
// var uiConfig = {
//         signInSuccessUrl: '<url-to-redirect-to-on-success>',
//         signInOptions: [
//           // Leave the lines as is for the providers you want to offer your users.
//           firebase.auth.GithubAuthProvider.PROVIDER_ID
//         ],
//         // Terms of service url.
//         tosUrl: '<your-tos-url>'
//       };
//
//       // Initialize the FirebaseUI Widget using Firebase.
//       var ui = new firebaseui.auth.AuthUI(firebase.auth());
//       // The start method will wait until the DOM is loaded.
//       ui.start('#firebaseui-auth-container', uiConfig);
//
//
//       initApp = function() {
//               firebase.auth().onAuthStateChanged(function(user) {
//                 if (user) {
//                   // User is signed in.
//                   var displayName = user.displayName;
//                   var email = user.email;
//                   var emailVerified = user.emailVerified;
//                   var photoURL = user.photoURL;
//                   var uid = user.uid;
//                   var providerData = user.providerData;
//                   user.getToken().then(function(accessToken) {
//                     document.getElementById('sign-in-status').textContent = 'Signed in';
//                     document.getElementById('sign-in').textContent = 'Sign out';
//                     document.getElementById('account-details').textContent = JSON.stringify({
//                       displayName: displayName,
//                       email: email,
//                       emailVerified: emailVerified,
//                       photoURL: photoURL,
//                       uid: uid,
//                       accessToken: accessToken,
//                       providerData: providerData
//                     }, null, '  ');
//                   });
//                 } else {
//                   // User is signed out.
//                   document.getElementById('sign-in-status').textContent = 'Signed out';
//                   document.getElementById('sign-in').textContent = 'Sign in';
//                   document.getElementById('account-details').textContent = 'null';
//                 }
//               }, function(error) {
//                 console.log(error);
//               });
//             };
//
//             window.addEventListener('load', function() {
//               initApp()
//             });
