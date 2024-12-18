import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

const SignupForm = ({ onToggle }) => {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Create your Account
      </h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log("Signup Data:", values)}
      >
        <Form className="space-y-4">
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-b border-gray-300 p-2 text-center focus:outline-none"
            />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 p-2 text-center focus:outline-none"
            />
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 p-2 text-center focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </Form>
      </Formik>

      <div className="text-center mt-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <span
            onClick={onToggle}
            className="text-yellow-500 cursor-pointer font-semibold hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default SignupForm;
