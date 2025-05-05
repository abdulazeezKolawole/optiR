"use client";


import Image from "next/image";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import { resetStatus, signupUser } from "@/app/features/authSlice";
import { AppDispatch, RootState } from "@/app/store";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

type FormFields = {
  Email: string;
  Password: string;
  firstName: string;
  lastName: string;
  Role: string;
  BVN:string;
  Gender:string
  Address:string
  PhoneNumber:Number
  LocalGovt:string
  Country:string
};



export default function Home() {

  const dispatch = useDispatch<AppDispatch>()
  const {error, success} = useSelector((state:RootState)=> state.auth)
    const[showLogin, setShowLogin] =useState(false);

      const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isValid },
      } = useForm<FormFields>({
        mode: "onChange",
        defaultValues: {
          Role: "Admin",
          BVN: "12345678911",
          Gender:"Male",
          Address:"23",
          PhoneNumber: 123123,
          LocalGovt:"Ikeja",
           Country: "Nigeria",
        },
      });
    
      const router = useRouter()
    
      const onSubmit: SubmitHandler<FormFields> = async (data) => {
        dispatch(resetStatus());
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // dispatch(signupUser(data));
        console.log(data);
        router!.push("/Login")
    
      };
    
      useEffect(()=>{
        if(success){
            console.log("Sign up successful")
            // router.push("/Login")
    
        }
      },[success])
    
      
      useEffect(()=>{
        if(error){
            console.log("error occured")
        }
      },[error])
    



  return (
    <div className="bg-[#B1D9DB] min-h-screen flex flex-col lg:flex-row">
      <div className="lg:flex-2 font-bold mt-15 text-center flex-1 p-4">
        <div className="mb-5">
          <span className="text-[#003399] text-5xl">Opti</span>
          <span className="text-[#0DDE65] text-5xl">Reach</span>
        </div>
        <div>
          <span>Banking your community...</span>
        </div>
        <div className="relative flex justify-end mt-12 bg-red-100">
          <Image
            src="/Abstraction.png"
            alt="Abstraction Graphic"
            width={400}
            height={300}
            className="hidden md:block absolute right-[-60px] md:right-[-60px] lg:right-[-90px]"
          />
        </div>
      </div>

      <div className="lg:flex-3 bg-white rounded-l-[70px] flex flex-col justify-center flex-5 items-center">
      <div className="flex justify-center mb-3 mt-3">
             <div className="inline-flex rounded-full bg-slate-100 p-1">
               <button
                onClick={() => setShowLogin(false)}
                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  !showLogin 
                    ? "bg-white shadow-md text-[#003399]" 
                     : "text-slate-600 hover:text-slate-800"
                }`}
               >
                 Sign Up
              </button>
               <button
                 onClick={() => setShowLogin(true)}
                 className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  showLogin 
                     ? "bg-white shadow-md text-[#003399]" 
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                Log In
             </button>
            </div>
        </div>   
      <h2 className="text-[20px] font-bold text-slate-800">
              {showLogin ? "Welcome Back!" : "Create Your Account"}
       </h2>

       <p className="text-slate-400 mt-2 text-[12px]">
              {showLogin 
                 ? "Sign in to access your OptiReach dashboard" 
                 : "Join thousands of people managing their finances with OptiReach"
               }
             </p>

      

        <div className="m-[1%] p-5 md:w-[80%] lg:w-[70%] shadow-lg w-full text-[13px]">
      
        {showLogin ? <LoginForm /> : <SignupForm setShowLogin={setShowLogin} />}


        
     
      </div>
    </div>
    </div>
  );
}
