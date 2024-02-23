export const publicRoutes = {
  AUTH: {
    PATH: '/auth',
    LOGIN: '/login',
    REGISTER: '/register',
  },
};

export const modulePublicRoutes = {
  loginPage: `${publicRoutes.AUTH.PATH}${publicRoutes.AUTH.LOGIN}`,
  registerPage: `${publicRoutes.AUTH.PATH}${publicRoutes.AUTH.REGISTER}`,
};
