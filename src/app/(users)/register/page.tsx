import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <section className="h-[calc(100vh-150px)] container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-slate-300 rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Create New Account
        </h1>
        <RegisterForm />
      </div>
    </section>
  )
}

export default Register
