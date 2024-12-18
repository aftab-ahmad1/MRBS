import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

const LoginForm = ({ onToggle }) => {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold mb-6 text-center">Welcome</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("Login Data:", values)}
      >
        <Form className="space-y-4">
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
          <p className="text-gray-500 text-sm text-center cursor-pointer">
            Forgot password?
          </p>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            Sign In
          </button>
        </Form>
      </Formik>

      <div className="text-center mt-4">
        <p className="text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={onToggle}
            className="text-yellow-500 cursor-pointer font-semibold hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default LoginForm;
