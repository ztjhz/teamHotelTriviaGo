# Team Hotel Trivia Go

![First place](https://img.shields.io/badge/First%20Place-brightgreen?logo=champion)
![Most Innovative Award](https://img.shields.io/badge/-Most%20Innovative%20Award-blue)

SMU LIT Hackathon 2022

We are a team of 6 students from SMU and NTU, studying Law and Computer Science.
- [Chen Xin Han | NTU Computer Science](https://github.com/imevahans)
- [Ho Shu Hao Eugene | SMU Law](https://www.linkedin.com/in/eugenehoshuhao)
- [Martin Liu | SMU Information Systems](https://github.com/L1uM4rt1n)
- [Ong Tsien Jin | NTU Computer Science](https://github.com/TsienJin)
- [Ramasamy Vignesh | SMU Computer Information Systems](https://github.com/v1ghn35h)
- [Toh Jing Hua | NTU Computer Science](https://github.com/ztjhz)

***

Website: https://team-hotel-trivia-go.vercel.app/

Demo: https://youtu.be/ePtYqfwluSI

Devpost: https://devpost.com/software/hotel-trivia-go

***

# How can the efficiency of (MD&A) section drafting be improved?

Our team’s solution is aimed at improving the efficiency of lawyers’ work processes when drafting the Management’s Discussion and Analysis (“MD&A”) section in the prospectus in Capital Market US-related deals (SMU LIT Hackathon Problem Statement, 2022).

This is done by automating the process of extracting relevant economic data from financial statements and drafting excerpts of the MD&A section for the lawyer. By doing so, lawyers can spend minimal time on formulaic data entry work and instead, devote their time to considering the legal issues that their clients may face. Further, the risk of human error from copy-pasting and manual calculations would also be mitigated, if not fully removed.

Lawyers can use our solution by simply uploading a PDF copy of the relevant financial statements on our designated website, together with keywords provided by the user. Statements for the MD&A section will be generated automatically. Thereafter, the lawyer can make any necessary amendments or additions, such as to the possible reasons for the period-on-period changes, in finalising the MD&A into the prospectus that they were working on. Additionally, given that company financial statements are likely to contain sensitive data, our solution provides for data security by providing an option for lawyers to set a password when uploading financial statements, which would later be required to access the generated excerpts of the MD&A.

Project solution for our team can be found [here](https://team-hotel-trivia-go.vercel.app/).

Alternatively, the data can also be accessed via a `RESTFUL` API for this solution to be easily integrated into the existing workflows of legal entities working with other third-party service providers. This endpoint is available on `http://api.teamhotel.dev/mda/get?session_token=[UUID]` via `GET` method. The schema is as follows:

```
{
    _id: ObjectId(BSON),
    isComplete: BOOL,
    isError: BOOL,
    sessionToken: STRING, // uuid
    usePassword: STRING, // hash
    time: STRING, // DD-MM-YYYY, HH:MM:SS AM/PM
    mdna: { // Object
        nameOfFile1.pdf: [ // array
            'arrOfSTRING', // string
        ],
    },
    fileNames: [ // array
        'arrOfSTRING', // string
    ]
}
```

**Note:** Sample files can be found [here](https://github.com/TsienJin/teamHotelTriviaGo/tree/main/sampleFinancialStatements)


# Technology Stack
- [Next.js](https://nextjs.org) hosted on [Vercel](https://vercel.com/)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/) backend for PDF analysis hosted on [Heroku](https://www.heroku.com)
- [MongoDb](https://www.mongodb.com) hosted on [MongoDB Atlas Database](https://www.mongodb.com/atlas/database)


***

# References
- [ReactJS File drag and drop](https://www.codemzy.com/blog/react-drag-drop-file-upload)
- [Password hashing in JS | bycryptjs](https://www.npmjs.com/package/bcryptjs)
- [Handling multipart-form data on Next.js backend | formidable](https://chadalen.com/blog/how-to-use-a-multipart-form-in-nextjs-using-api-routes)
- [Formidable docs](https://www.npmjs.com/package/formidable)
- [React v18 ```useEffect()``` being called twice -- work around](https://javascript.plainenglish.io/react-18-useeffect-double-call-for-apis-emergency-fix-724b7ee6a646)
- [How To Read PDF Files in Python using PyPDF2](https://www.youtube.com/watch?v=N6Su4Hk8_-g)
- [Use Python to extract accounting data from a PDF on the web](https://www.youtube.com/watch?v=MjY7UUSAqqE&t=298s)
