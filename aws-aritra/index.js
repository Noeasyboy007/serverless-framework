module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Iam Aritra Bera This is my serverless application",
        
      },
      null,
      2
    ),
  };
};
