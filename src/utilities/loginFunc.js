import axios from "axios";

const loginFunc = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", user);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { loginFunc };
