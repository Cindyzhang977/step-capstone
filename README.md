# step-capstone

## Run Servers

If running for the first time, see [Initial Setup](#initial-setup)

#### Starting the front end server:

`cd` into `capstone-app/src/main/webapp/my-app`  
run `npm start`

Test your react server by opening a browser and hitting [`localhost:8000`](http://localhost:8000)

#### Starting the back end server:

`cd` into `capstone-app`  
run `mvn package appengine:run`  
Test your Java Servlet by hitting [`localhost:8080/helloworld`](http://localhost:8080/helloworld)

## Initial Setup

Open the terminal (in ChromeOS, launch via crostini by hitting "search" key > search for "terminal")

Clone the git repo (assuming git is already set up):

```bash
git clone https://github.com/Cindyzhang977/step-capstone.git
```

Install nodejs
```bash
sudo apt-get install -y nodejs
```

Install maven
```bash
sudo apt-get install maven
```

Install Java
```bash
sudo apt install openjdk-8-jdk
```

`cd` to the my-app folder (`step-capstone/capstone-app/src/main/webapp/my-app`) and prepare the npm project for initial use.
```bash
npm install
```

That completes the setup. You can now start the [Front end](#starting-the-front-end-server) and [Back end](#starting-the-back-end-server) servers.
