# Express Boilerplate
A quick and simple ExpressJS boilerplate

## How to Install
1. Fork this repository. The fork button should be at the upper right of this page. Fork it to your personal GitHub profiles. By doing so, you'll have a copy of the boilerplate in your respective profiles. To check, your URL should be like this: `https://github.com/your_username/express-boilerplate`

2. After forking, clone it to your local machines. Forking gives you ownership to the copy of the project, thus you'll have automatic read and write (pull and push) privileges. No need to authenticate through your professor as long as you have configured your SSH keys.

3. After cloning, open a command line (terminal) and go to the boilerplate directory. Issue an `npm install` command. This will download module dependencies of the project. **Note that this requires a working internet connection**.

4. After installing all the dependencies, open the `.env.sample` file and copy the contents of it. Create a new `.env` file and paste everything in there. The sample file has comments in it for each field present.

5. Run the application using `node index.js` or `nodemon` if you have installed it (`npm install nodemon -g`).

## Quirks

If you want to enable the database part of the application, then you have to check the following first:
- MySQL should be installed
- You have a usable credential to login to your MySQL database, provide them in the .env file
- You have created a database in MySQL, provide the name in the .env file
- You have a table called 'users' with the following columns
    - id (*int, not null, auto_increment*)
    - name (*varchar(50), not null*)
    - age (*int*)
- Set *id* column as the primary key
- Your table should have at least one record

Once all of those are satisfied, you should be able to see your list of users in the `/index` route when you run the app.