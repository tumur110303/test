import axios from "axios";
import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginSuccess = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [nameNull, setNameNull] = useState("");
  const [passNull, setPassNull] = useState("");

  const login = (userName, password) => {
    if (userName === "" || userName === null || userName === undefined) {
      setNameNull("Нэвтрэх нэр оруулна уу!");
      return;
    } else setNameNull(null);

    if (password === "" || password === null || password === undefined) {
      setPassNull("Нууц үгээ оруулна уу!");
      return;
    } else setPassNull(null);

    setIsLoading(true);
    axios
      .post("http://192.168.8.64:4550", {
        username: userName,
        password: password,
      })
      .then((result) => {
        console.log("Амжилттай нэвтэрлээ!... ", result.data);
        setIsLoggedIn(true);
        console.log("Нэвтэрснийг context мэдсэн: ", isLoggedIn);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        setIsLoading(false);
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(error.message);
        }
      });

    setIsLoading(false);
  };

  return (
    <LoginContext.Provider
      value={{ login, errorMessage, nameNull, passNull, isLoggedIn, isLoading }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
