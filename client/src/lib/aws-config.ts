const awsConfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_zDBRQDCox",
    userPoolWebClientId: "3029s4phrqmadatv56ssoq4335",
    oauth: {
      domain: "https://us-east-1zdbrqdcox.auth.us-east-1.amazoncognito.com",
      scope: ["phone", "openid", "email"],
      redirectSignIn: "http://localhost:3000/api/auth/callback/cognito",
      redirectSignOut: "http://localhost:3000/auth",
      responseType: "code",
    },
  },
};

export default awsConfig;
