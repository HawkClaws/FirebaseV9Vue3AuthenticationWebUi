<template>
  <div>
    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script lang="ts">
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css'
import firebase from "../firebase";
export default {
  name: "Authentication",
  components: {},
  data() {
    return {
      userData: {},
    };
  },
  mounted() {
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: "<url-to-redirect-to-on-success>",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "<your-tos-url>",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("<your-privacy-policy-url>");
      },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(getAuth(firebase));
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  methods: {},
};
</script>

