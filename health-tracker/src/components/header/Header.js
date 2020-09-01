import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../../auth/AuthOptions.js";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">MERN Health Tracker</h1>
        <h2>My Exercise Rest Nutrition Health Tracker</h2>
      </Link>
      <AuthOptions></AuthOptions>
    </header>
  );
}
