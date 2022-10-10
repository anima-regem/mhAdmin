import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" id="email" />
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
