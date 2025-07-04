const Signup = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]  flex items-center justify-center h-full">
      <div className="shadow-xl rounded-xl w-[400px] p-6 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign Up on Financely
        </h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="johndoe@gmail.com"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Example123"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              required
              placeholder="Example123"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mt-4 space-y-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up with Email and Password
            </button>
            <p className="text-center text-sm text-gray-500">or</p>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
