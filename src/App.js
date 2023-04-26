import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function App() {
  // 675398915609-jv2leivogtqgk2v96mqn8l0vstlshqim.apps.googleusercontent.com
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="675398915609-jv2leivogtqgk2v96mqn8l0vstlshqim.apps.googleusercontent.com">
        <h1>vdbhjk</h1>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded.email);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
