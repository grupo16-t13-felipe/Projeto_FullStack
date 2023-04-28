import { Button } from "@mui/material";

import style from "./style.module.css";
import buttonStyle from "./style.module.css";

import { Dispatch, ReactNode, SetStateAction } from "react";

interface IModalBase {
  children: ReactNode;
  modalTitle: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalBase({
  children,
  modalTitle,
  closeModal,
}: IModalBase) {
  return (
    <div
      className={style.modal_background}
      onClick={() => {
        closeModal((prevState) => !prevState);
      }}
    >
      <div
        className={style.modal_container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={style.modal_header}>
          <p className="headline-6-600">{modalTitle}</p>
          <Button
            onClick={() => {
              closeModal((prevState) => !prevState);
            }}
            className={buttonStyle.modal_header_button}
            disableRipple={true}
          >
            X
          </Button>
        </div>
        <div className={style.modal_body}>{children}</div>
      </div>
    </div>
  );
}
