import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { publicRequest } from "../../Requests/RequestsMethods";
function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    username: yup.string().required("Username is required"),
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    birthDate: yup.date().nullable()
    .transform((curr, orig) => orig === '' ? null : curr)
    .required('Birth Date is required'),
    gender: yup.string().required("Gender is required").nullable(),
    password: yup.string().required("Password is required"),
  })
  .required();
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (object) => {
    try {
      const res = await publicRequest.post("/api/auth/register", {
        email: object.email,
        username: object.username,
        name: object.name,
        surname: object.surname,
        birthDate: object.birthDate,
        gender: object.gender,
        password: object.password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <main className="d-flex w-100" style={{ backgroundColor: "white" }}>
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-lg-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Get started</h1>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          id={errors?.username ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.username?.message ? "is-invalid" : null
                          }`}
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          {...register("username")}
                        />
                        <div className="invalid-feedback">
                          {errors.username?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          id={errors?.name ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.name?.message ? "is-invalid" : null
                          }`}
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          {...register("name")}
                        />
                        <div className="invalid-feedback">
                          {errors.name?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Surname</label>
                        <input
                          id={errors?.Surname ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.surname?.message ? "is-invalid" : null
                          }`}
                          type="text"
                          name="surname"
                          placeholder="Enter your surname"
                          {...register("surname")}
                        />
                        <div className="invalid-feedback">
                          {errors.surname?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Birth Date</label>
                        <input
                          id={errors?.birthDate ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.birthDate?.message ? "is-invalid" : null
                          }`}
                          type="date"
                          name="birthDate"
                          placeholder="Enter your birthDate"
                          {...register("birthDate")}
                        />
                        <div className="invalid-feedback">
                          {errors.birthDate?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          id={errors?.email ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.email?.message ? "is-invalid" : null
                          }`}
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                          {...register("email")}
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          id={errors?.password ? "validationCustom03" : null}
                          className={`form-control form-control-lg ${
                            errors.password?.message ? "is-invalid" : null
                          }`}
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          {...register("password")}
                        />
                        <div className="invalid-feedback">
                          {errors.password?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="male">
                          <input
                            {...register("gender")}
                            type="radio"
                            name="gender"
                            value="Male"
                            className="form-check-input"
                            id="male"
                          />{" "}
                          Male
                        </label>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="female">
                          <input
                            {...register("gender")}
                            type="radio"
                            name="gender"
                            value="Female"
                            className="form-check-input"
                            id="female"
                          />{" "}
                          Female
                        </label>
                      </div>
                      <div className="invalid-feedback">
                        {errors.gender?.message}
                      </div>
                      <div className="text-center">
                        {/* <a href="index.html" className="btn btn-lg btn-primary">Sign up</a> */}
                        <input
                          type="submit"
                          className="btn btn-lg btn-primary"
                          value="Sign up"
                        />
                        <div className="text-center">
                          <span>If you have an account </span>
                          <a href="/login">Login {">"}</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
