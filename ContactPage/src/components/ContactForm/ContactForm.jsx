import React, { useState } from "react";
import { MdMessage, MdCall, MdEmail } from "react-icons/md";
import Button from "../Button/Button";

function ContactForm() {
  const [name, setName] = useState("name will be here");
  const [email, setEmail] = useState("gmail will be here");
  const [text, setText] = useState("text will be here");

  const Onsubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className=" max-w[1000px] mr-0 flex mx-auto justify-between items-center px-12 ">
      <div className="w-[50%]">
        <div className="flex gap-6 px-26 ">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
            bgcolor="bg-cyan-700"
            Hovercol="hover:bg-cyan-900"
            Hovercur="hover:cursor-pointer"
          />

          <Button
            text="VIA CALL"
            icon={<MdCall fontSize="24px" />}
            bgcolor="bg-pink-700"
            Hovercol="hover:bg-pink-900"
            Hovercur="hover:cursor-pointer"
          />
        </div>
        <div className="px-50 py-5 flex items-center justify-items-center  flex-col">
          <button
            className="text-white w-94 rounded-sm flex gap-1
               border items-center justify-center outline-2 outline-black bg-red-600 px-10 py-3 hover:bg-red-800 hover:cursor-pointer"
          >
            VIA EMAIL FORM
          </button>
        </div>
        <div className="px-50  flex items-center justify-items-center  flex-col">
          <form action="" className="" onSubmit={Onsubmit}>
            <div className="flex flex-col w-full relative py-3">
              <label
                htmlFor="name"
                className="absolute top-0 left-4 bg-white font-bold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className=" w-94 h-10 px-0 8px border-1 border-gray-700 "
              />
            </div>
            <div className="flex flex-col w-full relative py-3">
              <label
                htmlFor="name"
                className="absolute top-0 left-4 bg-white font-bold"
              >
                Email
              </label>
              <input
                type="text"
                name="Email"
                className=" w-94 h-10 px-0 8px border-1 border-gray-700 "
              />
            </div>
            <div className="flex flex-col w-full relative py-3">
              <label
                htmlFor="name"
                className="absolute -top-1 left-4 bg-white font-bold"
              >
                Text
              </label>
              <textarea
                type="text"
                name="Text"
                className=" w-94 h-25 px-0 8px border-1 border-gray-700 "
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="px-4 py-3 bg-green-500
     text-white w-50 rounded-sm
    flex  justify-center items-center  justify-items-center gap-1 border-1
    -space-x-px hover:bg-green-800 hover:cursor-pointer"
              >
                Submit
              </button>
              <div>{name + " " + email + " " + text}</div>
            </div>
          </form>
        </div>
      </div>

      <div className=" w-[50%] flex justify-end">
        <img src="./public/images/service34.svg" alt="" className="w-400" />
      </div>
    </section>
  );
}

export default ContactForm;
