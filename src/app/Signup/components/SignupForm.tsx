"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, signupUser } from "@/app/features/authSlice";
import { AppDispatch, RootState } from "@/app/store";

type SignupFormFields = {
  Email: string;
  Password: string;
  firstName: string;
  lastName: string;
  Role: string;
  BVN: string;
  Gender: string;
  Address: string;
  PhoneNumber: string; // Changed from Number to string for proper form handling
  LocalGovt: string;
  Country: string;
};

type SignupFormProps = {
  setShowLogin: (value: boolean) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ setShowLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, success } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignupFormFields>({
    mode: "onChange",
    defaultValues: {
      Role: "Admin",
      BVN: "12345678911",
      Gender: "Male",
      Address: "23",
      PhoneNumber: "",
      LocalGovt: "Ikeja",
      Country: "Nigeria",
    },
  });

  const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
    try {
      dispatch(resetStatus());
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(signupUser(data));
      console.log("Signup data:", data);
      setShowLogin(true)
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Sign up successful");
      router.push("/Login");
    }
  }, [success, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-2">
          <label htmlFor="firstName" className="block mb-1 font-medium text-gray-700">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="Enter First Name"
            className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            id="firstName"
          />
          {errors.firstName && <div className="text-red-500 text-[12px]">{errors.firstName.message}</div>}
        </div>

        <div className="mb-2">
          <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Enter Last Name"
            className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            id="lastName"
          />
          {errors.lastName && <div className="text-red-500 text-[12px]">{errors.lastName.message}</div>}
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
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
          placeholder="Email"
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          id="email"
        />
        {errors.Email && <div className="text-red-500 text-[12px]">{errors.Email.message}</div>}
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
          Password<span className="text-red-500">*</span>
        </label>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
            }
          })}
          type="password"
          placeholder="Enter your password"
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          id="password"
        />
        {errors.Password && <div className="text-red-500 text-[12px]">{errors.Password.message}</div>}
      </div>

      <div className="mb-2">
        <label htmlFor="role" className="block mb-1 font-medium text-gray-700">
          Role
        </label>
        <select
          {...register("Role")}
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          id="role"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="phoneNumber" className="block mb-1 font-medium text-gray-700">
          Phone Number
        </label>
        <input
          {...register("PhoneNumber", {
            pattern: {
              value: /^\d{10,15}$/,
              message: "Please enter a valid phone number"
            }
          })}
          type="tel"
          placeholder="Enter Phone Number"
          className="w-full border-b-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          id="phoneNumber"
        />
        {errors.PhoneNumber && <div className="text-red-500 text-[12px]">{errors.PhoneNumber.message}</div>}
      </div>

      {error && (
        <div className="text-red-500 text-center mb-1" role="alert">
          {error}
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white transition w-full ${
            isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;