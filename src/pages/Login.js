import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className=" h-full flex justify-center overflow-hidden">
      <div className="w-96 mx-40 pb-10 bg-gray-300 text-center rounded-lg mt-10 shadow-2xl flex flex-col justify-center  ">
        <div className="mb-5 mt-5">
          <h1 className="font-bold text-xl">Oturum Aç</h1>
          <span className="flex justify-center mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
        </div>

        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 px-20">
            <input
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              className="w-full h-12 border border-gray-800 rounded px-5 "
              placeholder="Email"
            />
          </div>
          <div className="px-20 mb-5">
            <input
              {...register("Password", {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
              type="password"
              className="w-full h-12 border border-gray-800 rounded px-5"
              placeholder="Password"
            />
          </div>
          <div>
            <a
              href=""
              className="font-bold text-red-800 hover:text-red-500 duration-200"
            >
              Şifremi Unuttum
            </a>
          </div>
          <div className="mt-5  px-20 mb-5">
            <button className=" w-full text-base  bg-red-800 font-bold  px-20  h-12 rounded text-white hover:bg-red-600 duration-200">
              <div className="w-20"> Sign In</div>
            </button>
          </div>
          <div className="flex justify-center">
            <span className="mr-5 font-bold">Hesabın yok mu?</span>
            <a
              href="#"
              className="text-red-800 font-bold hover:text-red-500 duration-200"
            >
              Kayıt Ol
            </a>
            <div className="ml-3 mt-1 text-red-800  hover:text-red-500 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
