import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  ModalContainerFalse,
  ModalContainerTrue,
} from "../../redux/style-slice/menu/SideMenu";
import Style from "../../styles/modals/modal-container.module.css";

const ModalContainer = ({ children, Bloen }: any) => {
  const [ShowDiv, setShowDiv] = useState(Bloen);
  const Ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  return (
    <div className={Style.container} ref={Ref}>
      {children}
    </div>
  );
};

export default ModalContainer;
