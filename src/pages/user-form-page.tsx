import { createRoot } from "react-dom/client";
import UserForm from "@components/user-form";

const container = document.getElementById("upload-root");
if (container) {
  const root = createRoot(container);
  root.render(<UserForm />);
}
