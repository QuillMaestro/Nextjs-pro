"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("52cb77dc-110d-491d-b412-970c115276bb");
  });

  return null;
}

export default CrispChat;