import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (error) {
      setErro("Email ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-zinc-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-4 border rounded dark:text-white"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        {erro && <p className="text-red-500 mb-4 text-sm">{erro}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
        <p
          onClick={() => navigate("/register")}
          className="mt-4 text-sm text-center text-blue-600 dark:text-blue-400 cursor-pointer"
        >
          Ainda não tem conta? Registre-se
        </p>
      </form>
    </div>
  );
}
