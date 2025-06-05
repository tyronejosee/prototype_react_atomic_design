import { LoginForm } from "../organisms";

export const LoginPage = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md p-6 bg-white border border-neutral-300 rounded-xl">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};
