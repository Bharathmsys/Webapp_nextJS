import React from 'react'
import axios from 'axios';
import Image from 'next/image';
import next from "../public/next-JS.png"

export const sendEmail = async (from, to, subject,name,msg) => {
  try {
    const apiKey = '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';

    const response = await axios({
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      data: {
        sender: {
          name: from,
          email: from,
        },
        to: [{ email: to }],
        subject: subject,
        htmlContent: `
        <html>
          <head>
            <style>
              img{
                width:300px;
                heigth:500px;
              }
            </style>
          </head>
          <body>
            <h1>Hello,Dear ${name}</h1>
            <img className="img" src='https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'/>
            <p>${msg}</p>
            <p>This Is Your Query And Our Team Will Contact You Shortly...!</p> 
            <p>Thank You for Visiting & Intresting </p>
            <p>Regards,</p>
            <p>Next Js</p>
          </body>
        </html>`
      },
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
     console.error('Error sending email:', error);
  }
};


// import axios from 'axios';
// export const sendEmail = async (to, from, subject, htmlContent) => {
//   try {
//     const apiKey = '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';

//     const response = await axios({
//       method: 'post',
//       url: 'https://api.sendinblue.com/v3/smtp/email',
//       headers: {
//         'Content-Type': 'application/json',
//         'api-key': apiKey,
//       },
//       data: {
//         sender: {
//           name: from,
//           email: from,
//         },
//         to: [{ email: to }],
//         subject: subject,
//         htmlContent: htmlContent,
//       },
//     });

//     if (response.status === 201) {
//       console.log('Email sent successfully:', response.data);
//     } else {
//       console.error('Error sending email:', response.status);
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

