const awsConfig = {
  Auth: {
    region: "eu-west-2",
    userPoolId: "eu-west-2_8wSj0Ydvl",
    userPoolWebClientId: "2v0ommbuufhovsc466krc6vhbm",
    oauth: {
      domain: "https://eu-west-28wsj0ydvl.auth.eu-west-2.amazoncognito.com",
      scope: ["phone", "openid", "email"],
      redirectSignIn: "https://master.d3tc1sivtcnky8.amplifyapp.com/api/auth/callback/cognito",
      redirectSignOut: "https://master.d3tc1sivtcnky8.amplifyapp.com/auth",
      responseType: "code",
    },
  },
};

export default awsConfig;
