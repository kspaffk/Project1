
//ebay call for find items by keyword
https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords
&SERVICE-VERSION=1.0.0
&SECURITY-APPNAME=TylerCas-ComicSea-PRD-a844463b1-2f780528
&RESPONSE-DATA-FORMAT=XML
&REST-PAYLOAD
&keywords=harry%20potter%20phoenix



//Firebase setup...still need to change storage

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBucOADTvEUKByNXdujg0Xz01JGOrw94S4",
    authDomain: "comicsearch-baf00.firebaseapp.com",
    databaseURL: "https://comicsearch-baf00.firebaseio.com",
    projectId: "comicsearch-baf00",
    storageBucket: "",
    messagingSenderId: "569479066676",
    appId: "1:569479066676:web:8328e59cd4e99f11430661",
    measurementId: "G-EEQ0N3BQTZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>


