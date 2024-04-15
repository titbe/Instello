export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "Tu 5-32 ki tu",
    },
    notEmpty: {
      errorMessage: "Username khong duoc trong",
    },
    isString: {
      errorMessage: "Username phai la kieu string",
    },
  },
  displayname: {
    notEmpty: true,
  },
  password:{
    notEmpty: true,
  },
};
