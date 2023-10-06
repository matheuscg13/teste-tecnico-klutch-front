import { iMainContext, iContextProps } from "@/interfaces/interfaces";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext<iMainContext>({} as iMainContext);

export const MainProvider = ({ children }: iContextProps) => {
  const [installments, setInstallments] = useState([]);
  const [partnerInstallments, setPartnerInstallments] = useState([]);
  const [footerData, setFooterData] = useState({});
  const [user, setUser] = useState({});
  const [bodyRequest, setBodyRequest] = useState({});
  const teste = "teste";
  return (
    <MainContext.Provider
      value={{
        teste,
        user,
        setUser,
        installments,
        setInstallments,
        bodyRequest,
        setBodyRequest,
        partnerInstallments,
        setPartnerInstallments,
        footerData,
        setFooterData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
