import { Formik } from "formik";
const Connect = () => {
  return (
    <>
      <div className=" m-1 h-screen flex justify-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className=" m-8 flex flex-col" onSubmit={handleSubmit}>
                <h1 className=" mt-10 text-3xl">Ask a query!!</h1>
              <input
              placeholder="Enter your email"
                className="p-2 mt-20 mb-5 bg-blue-50"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <input
              placeholder="Enter your query"
                className="p-2 mb-10  bg-blue-50"
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text && errors.text}
              <button
                className="mb-20 p-2  bg-blue-50 border-slate-950 border-2"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Connect;
