import React,{useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-purple-600 p-5 rounded-lg">
        <form
          onSubmit={submitHandeler}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            className="border-2 outline-none border-purple-600 rounded-lg"
            style={{ padding: "2%", margin: "2%" }}
            type="email"
            placeholder="Enter your email"
            required
            autoFocus
          />
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 outline-none border-purple-600 rounded-lg"
            style={{ padding: "2%", margin: "2%" }}
            type="password"
            placeholder="Enter your password"
            required
          />
          <button
            className="rounded-full"
            style={{ backgroundColor: "purple", width: "60%", height: "35px" }}
          >
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
