import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div
      className="flex
        min-h-full
        flex-col
        justify-center
        py-7
        sm:px-6
        lg:px-8
      bg-gray-100"
    >
      <div className={righteous.className}>
        <h2
          className="
            text-center 
            text-3xl  
            tracking-tight 
            font-extrabold
            text-transparent  bg-clip-text bg-gradient-to-r from-rose-400 to-rose-800
          "
        >
          SOCIALIZE
        </h2>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Image
          height={10}
          width={10}
          sizes=""
          className="mx-auto w-auto"
          src="/images/logo.ico"
          alt="Logo"
        />
        <h2
          className=" 
            mt-1
            text-center 
            text-3xl 
            font-semibold 
            tracking-tight 
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
