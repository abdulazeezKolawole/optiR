"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, signupUser } from "@/app/features/authSlice";
import { AppDispatch, RootState } from "@/app/store";

// Form types
type LoginFormFields = {
  Email: string;
  Password: string;
};


const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login data:", data);
      router.push("/Dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-4">
        <label htmlFor="login-email" className="block mb-1 font-medium text-gray-700">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@optimusbank\.com$/i,
              message: "Email must be an @optimusbank.com address"
            }
          })}
          type="email"
          id="login-email"
          placeholder="Email"
          aria-invalid={errors.Email ? "true" : "false"}
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        {errors.Email && <div className="text-red-500 text-sm mt-1">{errors.Email.message}</div>}
      </div>

      <div className="mb-4">
        <label htmlFor="login-password" className="block mb-1 font-medium text-gray-700">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
          type="password"
          id="login-password"
          placeholder="Enter your password"
          aria-invalid={errors.Password ? "true" : "false"}
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
        />
        {errors.Password && <div className="text-red-500 text-sm mt-1">{errors.Password.message}</div>}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember-me" 
            className="mr-2"
          />
          <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me</label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-2" role="alert">
          {error}
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white transition w-full ${
            isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;