import AWS from "aws-sdk";

// Create an Email function
export const mailService = async (to: any, sub: any, content: any) => {
  let ses = new AWS.SES();

  let from = "tphtphtphtph@hotmail.com"; // The email address added here must be verified in Amazon SES
  //Amazon SES email format
  ses.sendEmail(
    {
      Source: from,
      Destination: { ToAddresses: to },
      Message: {
        Subject: {
          Data: sub,
        },
        Body: {
          Html: {
            Data: content,
          },
        },
      },
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent:");
        console.log(data);
      }
    }
  );
  return "Email sent";
};
