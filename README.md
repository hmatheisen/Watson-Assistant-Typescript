# Watson Assistant Typescript

Demo of Watson Assistant using Node.js and Typescript for the IBM France Client Center

## Prerequisites

In order to use this connector, you need to be able to use IBM Watson Assistant. Therefore you need an IBM Cloud account, here are the steps to get you started :

- Sign up for an [IBM Cloud account](https://cloud.ibm.com/registration/).
- Create an instance of the [Watson Assistant](https://cloud.ibm.com/catalog/services/conversation) service and get your credentials.

## Configuring Watson Assistant

1. In your IBM Cloud console, open the Watson Assistant service instance
2. Click **Create a Skill** and **Create New**.
3. Choose the **Import skill** tab and **Choose a JSON File** and select the previously downloaded file.
4. Then deploy your skill in an Assistant in the **Assistants** tab :
   - Click on **Create New**
   - Give it a proper name and click on **Create**
   - Then add your Dialog Skill that you previously created
   - Go to **View API Details** and save your credentials, you will need them later.

## Configuring the Server

- Create the `.env` file :

```bash
mv .env.example .env
```

- Fill it with your own credentials from Watson Assistant

## Run Tests

```bash
npm run test
```

## Run the server in development

```bash
npm run dev
```

## Run the server in production

Build into Javascript :

```bash
npm run build
```

Run the compiled server :

```bash
npm start
```
