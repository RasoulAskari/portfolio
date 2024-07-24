"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <>
      <Header />
    </>
  );
}
