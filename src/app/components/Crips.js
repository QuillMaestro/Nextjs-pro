"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("da60b580-9896-469e-94e3-c20e8a1e2987");
  });

  return null;
}

export default CrispChat;