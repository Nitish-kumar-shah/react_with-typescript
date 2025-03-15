import { FormEvent, useRef, useState } from "react";

type DataType = {
  name: string;
  email: string;
  password: string | number;
};

const Form = () => {
  const [submitData, setSubmitData] = useState<DataType>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
    name.current!.value = "";
    email.current!.value = "";
    password.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-7 w-screen h-screen bg-teal-200 outline-0 justify-center"
    >
      <section className="flex flex-col items-center justify-center">
        <input
          className="outline-0 mt-3 bg-teal-100 px-3 rounded-[7px]"
          type="text"
          placeholder="Enter your name"
          ref={name}
        />
        <input
          className="outline-0  mt-3 bg-teal-100 px-3 rounded-[7px]"
          type="text"
          placeholder="Enter your email"
          ref={email}
        />
        <input
          className="outline-0  mt-3 bg-teal-100 px-3 rounded-[7px]"
          type="password"
          placeholder="Enter your password"
          ref={password}
        />

        <button
          className="mt-7 bg-red-300 rounded-[7px] px-5 items-center hover:scale-x-125 transition-all duration-300 cursor-pointer select-none"
          type="submit"
        >
          Submit
        </button>
      </section>

      <section>
        <h1>Name: {submitData.name}</h1>
        <h1>Email: {submitData.email}</h1>
        <h1>Password: {submitData.password}</h1>
      </section>

      <p className="border-b-2">create by @nitish</p>
    </form>
  );
};

export default Form;
