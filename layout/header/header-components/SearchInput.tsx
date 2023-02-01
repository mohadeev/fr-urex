import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "@react-icons/all-files/io5/IoSearchSharp";
import Style from "../../../styles/layout/header/header-compnents/search-input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMenu } from "../../../redux/style-slice/menu/SideMenu";
import { ParagraphsP } from "../../../components/modals/NormalText";
import ModalContainer from "../../../components/modals/ModalContainer";

const SearchInput = () => {
  const dispatch = useDispatch();
  const handelDispatch = () => {
    // dispatch(ToggleMenu());
    setShowDiv(true);
  };
  const UserIsSignedIn = useSelector(
    (state: any) => state.UserSignIn.UserIsSignedIn
  );
  const ModalContainerBlo = useSelector(
    (state: any) => state.SideMenu.ModalContainer
  );
  const Ref = React.useRef<HTMLDivElement>(null);
  const RefContainer = React.useRef<HTMLDivElement>(null);

  const [ShowDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const handelClick = (e: any) => {
      if (RefContainer && RefContainer.current && Ref && Ref.current) {
        const refany = RefContainer.current;
        const refBtn = Ref.current;
        if (refany.contains(e.target)) {
          setShowDiv(true);
        } else if (refBtn.contains(e.target)) {
          //setShowDiv(!ShowDiv);
        } else {
          setShowDiv(false);
        }
      }
    };
    window.addEventListener("click", handelClick);
  }, [ShowDiv]);
  return (
    <div className={Style.container}>
      <div
        ref={Ref}
        onClick={handelDispatch}
        className={Style.container_my_account}
      >
        {/* <ParagraphsP
          Text={UserIsSignedIn ? "Mohamed" : "Log-in"}
          TextName={"text_flex_start_normal"}
        /> */}
        <input className={Style.input_search} />
        <button className={Style.svg}>
          <IoSearchSharp />
        </button>
      </div>
      {ShowDiv && (
        <div ref={RefContainer} className={Style.modal_}>
          <ModalContainer Bloen={ShowDiv}>
            <div className={Style.modal_container}></div>
          </ModalContainer>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
