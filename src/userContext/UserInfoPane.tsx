import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { CurrentUserInfo } from "./CurrentUserInfo";
import { LoginForm } from "./UserLoginForm";
import { Modal } from "../ui/Modal";
import { useRef, useState } from "react";
import { useUserSlice } from "../store/slices/user/userSlice";

export const UserInfoPane = () => {
  const { user } = useUserSlice();
  const ref = useRef<{
    open: () => void;
    close: () => void;
    isOpen: boolean;
  }>(null);
  const [isModalOpen, seIsModalOpen] = useState(false);
  const onOpenModalClick = () => {
    if (ref.current?.isOpen) {
      ref.current.close();
      seIsModalOpen(false);
    } else {
      ref.current?.open();
      seIsModalOpen(true);
    }
  };
  return (
    <div>
      {user ? <CurrentUserInfo /> : <LoginForm />}
      <Modal modalRef={ref}>TEST</Modal>
      <button onClick={onOpenModalClick}>
        {isModalOpen ? "CLOSE" : "OPEN"}
      </button>

      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
