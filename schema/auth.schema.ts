import * as yup from 'yup'

export const loginSchema=yup.object({
  email:yup.string().email('Invalid email format').required('email is required'),
  password:yup.string().required()
})

//* register schema
export const registerSchema = yup.object({
  full_name: yup.string().required("full name is required"),
  email: yup.string().email().required("email is required"),
  password: yup
    .string()
    .min(6, "at least 6 characters required")
    .matches(/[A-Z]/, "at least one uppercase is required")
    .matches(/[a-z]/, "at least one lowercase is required")
    .matches(/[0-9]/, "at least one number is required")
    .matches(/[@!#%&*]/, "at least one special character is required")
    .required("password  is required"),
  c_password: yup
    .string()
    .oneOf([yup.ref("password")], "password does not matched")
    .required("confirm password is required"),
  phone: yup
    .string()
    .matches(/^\d+$/, {
      message: "phone must contain only numbers",
      excludeEmptyString: true,
    })
    .test("test-length", "phone must contain 10 digits", (value) => {
      if (value && value.trim().length === 10) {
        return true;
      }
    })
    .notRequired(),
});