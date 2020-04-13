import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";

export default function Header() {
  let location = useLocation();
  return (
    <header className="header">
      <ul className="header__nav nav">
        <li>
          <Link to="/">
            Ciné<span>o</span>
          </Link>
        </li>
        <li>
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/series" ? "active" : ""}
            to="/series"
          >
            Séries
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/movies" ? "active" : ""}
            to="/movies"
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/my-list" ? "active" : ""}
            to="/my-list"
          >
            Mes enregistrement
          </Link>
        </li>
      </ul>
      <div className="header__tools tools">
        <SearchBar />
        <div className="tool__acount acount">
          <svg viewBox="0 0 26 26">
            <path d="M13 0C5.85 0 0 5.85 0 13C0 20.15 5.85 26 13 26C20.15 26 26 20.15 26 13C26 5.85 20.15 0 13 0ZM13 3.9C15.21 3.9 16.9 5.59 16.9 7.8C16.9 10.01 15.21 11.7 13 11.7C10.79 11.7 9.1 10.01 9.1 7.8C9.1 5.59 10.79 3.9 13 3.9ZM13 22.36C9.75 22.36 6.89 20.6701 5.2 18.2C5.2 15.6 10.4 14.17 13 14.17C15.6 14.17 20.8 15.6 20.8 18.2C19.11 20.67 16.25 22.36 13 22.36Z" />
          </svg>
          <Link to="/profil">
            <p>Mon Compte</p>
          </Link>
        </div>
        <div className="tool__questions">
          <svg viewBox="0 0 26 27">
            <circle cx="13" cy="13" r="13"></circle>
            <path
              d="M12.9092 7.004C14.1572 7.004 15.1592 7.346 15.9152 8.03C16.6832 8.702 17.0672 9.632 17.0672 10.82C17.0672 11.996 16.6892 12.896 15.9332 13.52C15.1772 14.132 14.1752 14.438 12.9272 14.438L12.8552 15.824H10.6412L10.5512 12.764H11.3612C12.4052 12.764 13.2092 12.626 13.7732 12.35C14.3372 12.074 14.6192 11.57 14.6192 10.838C14.6192 10.31 14.4632 9.89 14.1512 9.578C13.8512 9.266 13.4372 9.11 12.9092 9.11C12.3572 9.11 11.9252 9.26 11.6132 9.56C11.3132 9.86 11.1632 10.274 11.1632 10.802H8.78723C8.77523 10.07 8.93123 9.416 9.25523 8.84C9.57923 8.264 10.0532 7.814 10.6772 7.49C11.3132 7.166 12.0572 7.004 12.9092 7.004ZM11.7392 20.126C11.2832 20.126 10.9052 19.988 10.6052 19.712C10.3172 19.424 10.1732 19.07 10.1732 18.65C10.1732 18.23 10.3172 17.882 10.6052 17.606C10.9052 17.318 11.2832 17.174 11.7392 17.174C12.1832 17.174 12.5492 17.318 12.8372 17.606C13.1252 17.882 13.2692 18.23 13.2692 18.65C13.2692 19.07 13.1252 19.424 12.8372 19.712C12.5492 19.988 12.1832 20.126 11.7392 20.126Z"
              fill="#0e0e0e"
            />
          </svg>
        </div>

        <div className="tool__logout">
          <Link to="/sign-in-up">
            <svg viewbox="0 0 28 28">
              <path d="M13.9585 24.6572H4.2396C3.69873 24.6572 3.25975 24.2182 3.25975 23.6774V4.23965C3.25975 3.69879 3.69878 3.2598 4.2396 3.2598H13.9585C14.6109 3.2598 15.1383 2.73234 15.1383 2.07995C15.1383 1.42757 14.6109 0.9 13.9585 0.9H4.2396C2.39826 0.9 0.9 2.39832 0.9 4.23965V23.6773C0.9 25.5187 2.39827 27.0169 4.2396 27.0169H13.9585C14.6109 27.0169 15.1383 26.4895 15.1383 25.8371C15.1383 25.1847 14.6109 24.6572 13.9585 24.6572Z" />
              <path d="M26.7519 13.1185L26.752 13.1186C26.9771 13.3414 27.1035 13.6423 27.1035 13.9584C27.1035 14.2748 26.976 14.5768 26.752 14.7984L26.7519 14.7985L20.1864 21.2776L26.7519 13.1185ZM26.7519 13.1185L20.1864 6.63935C19.7236 6.18126 18.9756 6.18748 18.518 6.65098C18.0602 7.11468 18.0649 7.86162 18.5298 8.31943L23.0483 12.7786H10.719C10.0666 12.7786 9.53916 13.3061 9.53916 13.9585C9.53916 14.6109 10.0666 15.1384 10.719 15.1384H23.0483L18.5298 19.5976C18.0648 20.0555 18.0614 20.8024 18.5179 21.266L18.5181 21.2662M26.7519 13.1185L18.5181 21.2662M18.5181 21.2662C18.7491 21.4995 19.0535 21.6176 19.358 21.6176M18.5181 21.2662L19.358 21.6176M19.358 21.6176C19.6574 21.6176 19.9573 21.5044 20.1863 21.2778L19.358 21.6176Z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
