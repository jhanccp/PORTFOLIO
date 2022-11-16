import React from "react";
import Loader from "./components/loader/Loader";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
      <div className="contenedor_loader">
      <div className="loader"></div>
    </div>
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);
  return (
    <div className="">{
      loading && <Loader />
    }
    </div>
  );
}
