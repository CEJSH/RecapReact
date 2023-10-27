import { useForm } from "react-hook-form";

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    Username: string;
    Password: string;
    Password1: string;
    extraError?: string;
}

function Practice() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com"
        }
    });
    const onValid = (data: IForm) => {
        if (data.Password !== data.Password1) {
            setError("Password1", { message: "Password are not the same." }, { shouldFocus: true })
        }
        // setError("extraError", { message: "Server offline" })
    }
    console.log(errors)
    return <div>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
            <input {...register("email", {
                required: "Email is required", pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "only naver.com emails allowed"
                }
            })} placeholder="Email" />
            <span>{errors?.email?.message}</span>
            <input {...register("firstName", { required: true, validate: (value) => value.includes("nico") ? "no nicos allowed" : true })} placeholder="First Name" />
            <span>{errors?.firstName?.message}</span>
            <input {...register("lastName", {
                required: true, validate: {
                    noNico: (value) => value.includes("nico") ? "no nicos allowed" : true,
                    noNick: (value) => value.includes("nick") ? "no nicks allowed" : true,
                }
            })} placeholder="Last Name" />
            <span>{errors?.lastName?.message}</span>
            <input {...register("Username", { required: true, minLength: 5 })} placeholder="Username" />
            <span>{errors?.Username?.message}</span>
            <input {...register("Password", {
                required: "Password is Required", minLength: {
                    value: 5,
                    message: "Your password is too short"
                }
            })} placeholder="Password" />
            <span>{errors?.Password?.message}</span>
            <input {...register("Password1", { required: true, minLength: 5 })} placeholder="Password1" />
            <span>{errors?.Password1?.message}</span>
            <button>Add</button>
            <span>{errors.extraError?.message}</span>
        </form>
    </div>
}

export default Practice;