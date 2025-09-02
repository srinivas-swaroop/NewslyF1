// src/pages/Signup.jsx
export default function Signup() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <br /><br />
        <input type="email" placeholder="Email" required />
        <br /><br />
        <input type="password" placeholder="Password" required />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
