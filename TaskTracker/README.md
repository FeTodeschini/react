This Repository contains the code for the "TaskTracker App". It is just a demo for showing the author's knowledge about React.

For runnning the App, simply:

1- Clone the repository to a local folder
2- Make sure that you have node.js installed
3- From a terminal (I use the one from Visual Code"), run the command below from the App's root folder to bring the application up:

    npm start

4- Make sure that you have the json-server installed by running the command below from a different terminal window:

    npm i json-server

    - This component simulates a server with a "database" from which data can be pulled by API calls
    - The database is actually the db.json file

5- Bring the json-server up by running the command below in the second terminal window:

    npm server

    (this will trigger the command already added to the package.json file under the "Scripts" session)

6- Check the App in your browser (http://localhost:3000)

You can:

- Add a new task by typing the details in the input boxes and clicking "Save task"
- Remove a task by clicking the red "X"
- Enable/disable the task reminder by dounle-clicking it
- Hide/Show the "Add Task panel" by clicking on "Close/Add"