import React from "react";
import { NavbarLink, NavbarWrapper } from "./Navbar.style";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { ButtonWrapper } from "../../components/Button/Button.style";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";
import { toast } from "react-toastify";

const LogoutButton = styled.button`
  background: none;
  border: 1px solid #4E46B4;
  color: #4E46B4;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: #4E46B4;
    color: white;
  }
`;

const Navbar = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      router.push("/createAdvertisement");
    } else {
      toast.info('Для добавления объявления необходимо войти в систему', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/Auth/signIn");
    }
  };

  const handleUserNavigation = () => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      toast.info('Для доступа к профилю необходимо войти в систему', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/Auth/signIn");
    }
  };

  const handleUserNavigationFavorities = () => {
    if (isAuthenticated) {
      router.push("/favorites");
    } else {
      toast.info('Для доступа к избранному необходимо войти в систему', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/Auth");
    }
  };

  const handleUserNavigationChat = () => {
    if (isAuthenticated) {
      router.push("/chat");
    } else {
      toast.info('Для доступа к сообщениям необходимо войти в систему', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/Auth");
    }
  };

  const handleClickHomePage = () => {
    router.push("/");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <NavbarWrapper>
          <h2 className="logo" onClick={handleClickHomePage}>Phono</h2>
          <NavbarLink>
            <div className="link-content" onClick={handleUserNavigationChat}>
              <HiOutlineMailOpen />
              <span>Сообщения</span>
            </div>
            <div
              className="link-content"
              onClick={handleUserNavigationFavorities}
            >
              <GrFavorite />
            </div>
            <div className="link-content" onClick={handleUserNavigation}>
              <FaRegUser />
              <span>Ваш профиль</span>
            </div>
            <ButtonWrapper onClick={handleClick}>
              Добавить объявление
            </ButtonWrapper>
            {isAuthenticated && (
              <LogoutButton onClick={handleLogout}>
                Выйти
              </LogoutButton>
            )}
          </NavbarLink>
        </NavbarWrapper>
      </div>
    </header>
  );
};

export default Navbar;
