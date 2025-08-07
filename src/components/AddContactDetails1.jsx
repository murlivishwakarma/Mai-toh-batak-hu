import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const schema = Yup.object({
  name: Yup.string().required("Name is required").matches(/^[A-Za-z ]+$/, 'Name must contain only letters'),
  mobile: Yup.string().required("Mobile number is required").matches(/^[0-9]/,'Mobile number should be 0-9'),
  reason: Yup.string().required("Reason is required").matches(/^[A-Za-z]/,'Reason should be in letter'),
  buttonLabel: Yup.string().optional(),
});

function AddContactDetails1({onParentSubmit}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "Jack",
      mobile: "911",
      reason: "I got robbed by someone",
      buttonLabel: "",
    },
  });

  const buttonLabel = watch("buttonLabel") || "Button";

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Submitted Successfully!");
    onParentSubmit(data);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-500 border-3 border-white rounded-2xl text-white font-mono flex flex-col p-10 font-bold"
      >
        <label htmlFor="name">Your name:</label>
        <input
          className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
          id="name"
          {...register("name")}
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-200">{errors.name.message}</p>}

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
          id="mobile"
          {...register("mobile")}
          placeholder="Enter mobile number"
        />
        {errors.mobile && (
          <p className="text-red-200">{errors.mobile.message}</p>
        )}

        <label htmlFor="reason">Reason:</label>
        <input
          className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
          id="reason"
          {...register("reason")}
          placeholder="Enter a reason"
        />
        {errors.reason && (
          <p className="text-red-200">{errors.reason.message}</p>
        )}

        <label htmlFor="buttonLabel">Set new button name (optional):</label>
        <input
          className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
          id="buttonLabel"
          {...register("buttonLabel")}
          placeholder="Enter button name"
        />

        <button
          type="submit"
          className="mt-4 bg-green-500 rounded-xl border-white border-2 text-white hover:bg-green-700 p-2"
        >
          Submit Form
        </button>
      </form>

      <div className="bg-blue-500 mt-5 border-white border-2 p-10 rounded-2xl text-white text-2xl font-mono font-bold">
        <h1>Hi {watch("name") || "Nigga"}</h1>
        <h1>I won't call {watch("mobile") || "911"}</h1>
        <h1>
          just because you said "
          {watch("reason") || "I got robbed by a blackman"}"
        </h1>
      </div>

      <div className="flex text-white font-mono font-bold gap-5 items-center mt-5">
        <button className="bg-blue-500 rounded-xl border-3 border-white text-xl hover:bg-green-400 p-2">
          {buttonLabel}
        </button>

        <button
          className="bg-blue-500 rounded-xl border-3 border-white text-xl hover:bg-green-400 p-2"
          onClick={goToHome}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default AddContactDetails1;
