import { Button } from "../atoms";
import { FormField } from "../molecules";

export const LoginForm = () => {
  return (
    <form className="space-y-4">
      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
};
