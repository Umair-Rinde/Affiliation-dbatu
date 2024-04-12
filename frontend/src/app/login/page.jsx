'use client';
import { useState } from "react";
import Link from "next/link";
import NavTitle from "../components/common/NavTitle";

const LoginPage = () => {

    const [option, setOption] = useState('Institute Login');
    const options = ['Institute Login', 'LIC Login', 'Admin Login'];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        alert('Logined successfully!');
    }

    return (
        <main className="flex flex-col w-screen min-h-screen">
            <NavTitle pageTitle="Login Page" />
            <section className="bg-[#EEEEEE1A] shadow-lg rounded-xl flex flex-col px-16 py-7 gap-7 items-center my-auto mx-auto">
                <h2 className="text-2xl font-bold">Login</h2>
                <span className="text-gray-600 text-sm">Enter your username & password</span>
                <div className="flex items-center gap-2">
                    {options.map((optn) => {
                        return (
                        <span 
                            onClick={() => setOption(optn)}
                            className={`py-2 px-4 rounded-full cursor-pointer
                                ${optn==option? 'bg-purple-600 text-white':'bg-gray-200'}`}
                            >
                            {optn}
                        </span>);
                    })}
                </div>
                <div className="flex flex-col w-full gap-3 my-3">
                    <input
                        className="w-full rounded-lg border outline-none py-2 px-4"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="w-full rounded-lg border outline-none py-2 px-4"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-400 py-2 text-center w-full"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <div className="w-5/6 flex items-center gap-1 justify-center my-3">
                    <span className="w-40 bg-gray-300 h-0.5 rounded-full"></span>
                    <Link href="#" className="w-full text-center text-sm text-gray-400">Forgot password?</Link>
                    <span className="w-40 bg-gray-300 rounded-full h-0.5"></span>
                </div>
            </section>
        </main>
    )
}

export default LoginPage;