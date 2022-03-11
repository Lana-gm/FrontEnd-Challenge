import { AuthProvider } from "./Auth";
import { ModalProvider } from "./Modal";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default Providers;
