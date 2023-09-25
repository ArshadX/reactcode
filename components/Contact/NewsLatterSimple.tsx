"use client";

import { validateEmail } from "@/utils/regexValidation";

import React, { useRef, useState } from "react";
const NewsLatterSimple = () => {
  const [subscribed, setSubscribe] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [processing, setProcessing] = useState(false);
  const email = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email.current)) {
      setProcessing(true);
      const res = await fetch(`/api/test?email=${email.current}`, { method: "POST" });
      if (res.ok) {
        setProcessing(false);
        setSubscribe(true);
      } else {
        setProcessing(false);
        alert(res.statusText);
      }
    } else {
      setInvalidEmail(true);
    }
  };
  const handleInput = (e) => {
    email.current = e.target.value;
  };
  return (
    <>
      <h2 className="text-xl font-normal tracking-tight text-white sm:text-xl">Subscribe to our newsletter.</h2>
      <p className="mt-4 text-base leading-8 text-body-color">Stay updated on new releases and extensions of codes.</p>
      <div className="isolate mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>

        <p className={`font-serif text-red duration-300 ${subscribed ? "visible opacity-100" : "invisible opacity-0"}`}>
          Thank you for subscribing!
        </p>
        {subscribed ? (
          ""
        ) : (
          <section className="absolute">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-sm bg-white/5 py-2 pl-3 pr-8 text-white shadow-sm focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              onInput={handleInput}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className=" flex-none -translate-x-6 transform rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-x-2 hover:bg-primary hover:ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <svg className={`inline h-4 w-6 animate-spin ${processing ? "" : "hidden"}`} viewBox="0 0 400 200">
                <path d="M305 100 A40 40 40 10, 90 100, 0" className="stroke-dark stroke-[30px]" fill="transparent" />
              </svg>
              Subscribe
            </button>
          </section>
        )}
      </div>
    </>
  );
};

export default NewsLatterSimple;
