import { useEffect } from "react";

export const useSetValidation = (error, setError, errorField) => {
  useEffect(() => {
    if (error && error.errors) {
      const err = error.errors;
      if (err["email"]) {
        setError("email", {
          message: err["email"][0],
        });
      }
      if (err["birthday"]) {
        setError("birthday", {
          message: err["birthday"][0],
        });
      }
      if (err["password"]) {
        setError("password", {
          message: err["password"][0],
        });
      }
    }
    if(error && errorField) {
      setError(errorField, {
        message: error.message
      })
    }
  }, [error, setError, errorField]);
};
