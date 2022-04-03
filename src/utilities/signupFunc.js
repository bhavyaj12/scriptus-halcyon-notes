import axios from "axios";

const signupFunc = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    console.log("from signupFunc data", data );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { signupFunc };
