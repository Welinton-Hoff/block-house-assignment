# Block House Assignment

This project is a mobile application developed using React Native and Expo. It includes user authentication (login and signup) functionalities and uses styled-components for styling.

## Table of Contents

- [Dependencies](#dependencies)
- [Project Setup](#project-setup)
- [Running the App](#running-the-app)
- [Useful Commands](#useful-commands)
- [CI/CD Integration](#cicd-integration)

## Dependencies

The project uses the following key dependencies:

- **React Native**: A JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.
- **Expo**: A framework and platform for universal React applications.
- **React Navigation**: Routing and navigation for React Native apps.
- **Styled-components**: A library for React and React Native to style applications with tagged template literals.
- **Zustand**: A small, fast, and scalable state-management library.
- **Immer**: To help work with immutable state.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

For a full list of dependencies, please refer to the [package.json](./package.json) file.

## Project Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Welinton-Hoff/block-house-assignment.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd block-house-assignment
   ```

3. **Install the project dependencies**:

   Run the following command:

   ```bash
   yarn install
   ```

4. **Start the Expo development server**:

   To start the project with Expo, run:

   ```bash
   yarn start
   ```

5. **Running on Android or iOS**:

   You can run the project on an Android or iOS device/emulator:

   - **Android**: 

     ```bash
     yarn android
     ```

   - **iOS**:

     ```bash
     yarn ios
     ```

## Useful Commands

- **Starting the app**: `yarn start`
- **Run on Android**: `yarn android`
- **Run on iOS**: `yarn ios`

## CI/CD Integration

This project integrates GitHub Actions to automate the following processes:

### 1. **Trigger Events**
   - **Push to master branch**: The pipeline triggers on any push to the `master` branch.
   - **Pull request to master branch**: The pipeline also triggers on pull requests to the `master` branch.

### 2. **Pipeline Jobs**

- **Android Build**:
    - **Node.js setup**: Installs Node.js and dependencies.
    - **Yarn & Expo CLI**: Caches and installs dependencies, updates Expo CLI.
    - **Android SDK & Emulator Setup**: Installs necessary SDK packages, sets up the emulator, and verifies the environment.
    - **Build and Run**: Executes linting, testing, and builds the Android app using Expo.

- **iOS Build**:
    - **Node.js setup**: Installs Node.js and dependencies.
    - **Yarn & Expo CLI**: Caches and installs dependencies, updates Expo CLI.
    - **Cocoapods & Dependencies**: Installs iOS dependencies and runs `pod install`.
    - **Build and Run**: Executes linting, testing, and builds the iOS app using Expo.

### 3. **Tools Used**
   - **GitHub Actions**: Automates the pipeline.
   - **Yarn**: Dependency management.
   - **Expo CLI**: Building and running React Native apps.
   - **Android SDK**: Provides the necessary tools and dependencies for building Android apps.
   - **Cocoapods**: Manages iOS dependencies.

### 4. **Configuration File**
   The CI/CD pipeline is defined in `.github/workflows` as a YAML file. It includes steps for setting up environments, running tests, and building both Android and iOS apps.
