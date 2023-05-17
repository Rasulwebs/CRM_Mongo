import JWT from"jsonwebtoken";
import config  from "config";

export default {
  SIGN: (payload) => {
    return JWT.sign({ payload }, config.get("secret"), {
      expiresIn: "300000000000",
    });
  },
  VERIFY: (token) => {
    try {
      if (JWT.verify(token, config.get("secret")) instanceof Error) return 0;
      else return JWT.verify(token, config.get("secret"));
    } catch (error) {
      return 0;
    }
  },

};
