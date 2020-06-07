# reactnd-UdaciCard
React Native project to complete the module of React Nanodegree @ Udacity

This is allows to create flashcards and use them to study. First you can create new deck and then add cards (questions).
When decks are prepared you can navigate to selected deck and start the quiz.

# Requirements
The app requires Node.js to be installed on your compoter as well as a package manager.

To install the application in a development environment you should use `yarn` package manager. In order to install it please run `npm i -g yarn`.

# How to install?
1. Clone the repository using: `git clone https://github.com/21010/reactnd-UdaciCard`
2. Go inside the folder: `cd reactnd-UdaciCard`
3. Install all dependencies: `yarn install`

# How to run the app?
## Device setup
First you must prepare the Android phone or emulator. To use the physical phone, please use the USB cable to connect the phone to the computer. On the phone developer mode must be enabled as well as USB debugging mode - please google how to set your phone.
Alternatively you can use Android phone emulator - just make sure it is runing before you run the application.

## Running the app
Run `yarn start` and wait until expo finishes configuring everything. You can follow the instructions provided by the expo. To run the app on the Android phone just press `a` button. The app should start on the device.

# Demo data
Some DEMO data has been implemented to demonstrate how the app works.

# Notifications
For DEMO purpose, the notifications has been set to pops up every minute.
To change that, please edit the file `helpers/notifications.js` and switch the schedule funtions from `createMinuteSchedule` to `createDailySchedule` - line 59.
The first notification difers from the one which is set when the user completes the Quiz.