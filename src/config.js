const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "sls-stack-notes-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8j1tkcjgi4.execute-api.us-east-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_QGjDN1Yua",
    APP_CLIENT_ID: "79am22r6prdej9g4cvukhh2cl6",
    IDENTITY_POOL_ID: "us-east-1:a699fce4-2a05-4c6c-9047-103e8f9ee7fb",
  },
};

export default config;