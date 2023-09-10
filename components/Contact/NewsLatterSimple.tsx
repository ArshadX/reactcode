import { validateEmail } from "@/utils/regexValidation";

import React, { useRef } from "react";
const NewsLatterSimple = () => {
  const email = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email.current)) {
      await fetch(`/api/test/?email=${email.current}`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data), alert(data);
        })
        .catch((err) => alert(err));
      // await fetch("/api/test", { method: "GET" })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data), alert(data);
      //   })
      //   .catch((err) => alert(err));
    } else {
      alert("invalid");
    }
  };
  const handleInput = (e) => {
    email.current = e.target.value;
  };
  return (
    <>
      <h2 className="text-xl font-normal tracking-tight text-white sm:text-xl">Subscribe to our newsletter.</h2>
      <p className="mt-4 text-base leading-8 text-body-color">Stay updated on new releases and extensions of codes.</p>
      <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-sm bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-primary/10 focus:ring-1 focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          onInput={handleInput}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex-none rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default NewsLatterSimple;
