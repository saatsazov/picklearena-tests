# Picklearena E2E Tests

This repository contains the End-to-End (E2E) automated tests for the Picklearena mobile application using [WebdriverIO](https://webdriver.io/) and [Appium](https://appium.io/). 

The tests are written in TypeScript and follow the Page Object Model (POM) design pattern.

## Prerequisites

Before running the tests locally, ensure you have the following installed and set up:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/)
- [Android Studio](https://developer.android.com/studio) (for Android SDK and Emulators)
- An active Android Emulator running or a physical device connected via ADB.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saatsazov/picklearena-tests.git
   cd picklearena-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure you have the target application (`.apk` or `.app`) placed in the `app/` directory (or update the path in `wdio.conf.ts`).

## Project Structure

```text
picklearena-tests/
├── .github/          # GitHub Actions CI/CD workflows
├── allure-results/   # Generated allure test results (gitignored)
├── app/              # Directory for storing the mobile app build (.apk)
├── src/
│   ├── data/         # Test data (e.g., test credentials, constants)
│   ├── pages/        # Page Object Model (POM) classes representing app screens
│   └── tests/        # Test specification files (*.spec.ts)
├── .env              # Environment variables (e.g., credentials)
├── package.json      # Project dependencies and npm scripts
├── tsconfig.json     # TypeScript configuration
└── wdio.conf.ts      # WebdriverIO test runner configuration
```

## Running the Tests

Here are the available npm commands to run and manage tests:

### 1. Start Appium Server (Optional)
If your `wdio.conf.ts` doesn't automatically start Appium, or you want to run it manually:
```bash
npm run appium
```

### 2. Run Tests
To execute the test suite (this will run all `*.spec.ts` files defined in `wdio.conf.ts`):
```bash
npm run test
```

## Test Reports (Allure)

This project uses [Allure Reporter](https://allurereport.org/) for detailed test execution results.

After running the tests, you can generate and view the report using the following commands:

- **Generate and serve report (Recommended):**
  This will spin up a local Web Server to display the report.
  ```bash
  npm run report:serve
  ```

- **Generate static HTML report:**
  ```bash
  npm run report:generate
  ```

- **Open the generated HTML report:**
  ```bash
  npm run report:open
  ```

## Adding New Tests
- **Pages**: Add new screen interactions in the `src/pages/` folder. Export the page class instance at the bottom of the file.
- **Tests**: Add new test specs in the `src/tests/` folder naming them `*.spec.ts`.
- **Data**: Keep hardcoded test data out of the specs by placing them in `src/data/`.
