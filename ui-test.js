const webDriver = require('selenium-webdriver');
const {By, Browser} = require('selenium-webdriver');
const {Select} = require('selenium-webdriver');

let driver = new webDriver.Builder().forBrowser('chrome').build();

async function testNumberOne (firstValue, secondValue, pendingResult) {
  driver.get('https://testsheepnz.github.io/BasicCalculator.html');
  driver.manage().setTimeouts({implicit: 500});

  const BUILD_SELECT = await driver.findElement(By.xpath('//*[@id="selectBuild"]'));
  let buildSelectElement = new Select(BUILD_SELECT);
  const FIRST_VALUE_FIELD = await driver.findElement(By.xpath('//*[@id="number1Field"]'));
  const SECOND_VALUE_FIELD = await driver.findElement(By.xpath('//*[@id="number2Field"]'));
  const OPERATION_SELECT = await driver.findElement(By.xpath('//*[@id="selectOperationDropdown"]'));
  let operationSelectElement = new Select(OPERATION_SELECT);
  const SUBMIT_BUTTON = await driver.findElement(By.xpath('//*[@id="calculateButton"]'));
  const RESULT_FIELD = await driver.findElement(By.xpath('//*[@id="numberAnswerField"]'));

  buildSelectElement.selectByVisibleText('Prototype');
  FIRST_VALUE_FIELD.clear()
  SECOND_VALUE_FIELD.clear();
  FIRST_VALUE_FIELD.sendKeys(firstValue);
  SECOND_VALUE_FIELD.sendKeys(secondValue);
  await operationSelectElement.selectByVisibleText('Subtract');

  SUBMIT_BUTTON.click();
  let result = await RESULT_FIELD.getAttribute('value');

  (+result === pendingResult) ? console.log('Тест #1 пройден') : console.log('Тест #1 не пройден')
  driver.close();
}

async function testNumberTwo (firstValue, secondValue, pendingResult) {
  driver.get('https://testsheepnz.github.io/BasicCalculator.html');
  driver.manage().setTimeouts({implicit: 500});

  const BUILD_SELECT = await driver.findElement(By.xpath('//*[@id="selectBuild"]'));
  let buildSelectElement = new Select(BUILD_SELECT);
  const FIRST_VALUE_FIELD = await driver.findElement(By.xpath('//*[@id="number1Field"]'));
  const SECOND_VALUE_FIELD = await driver.findElement(By.xpath('//*[@id="number2Field"]'));
  const OPERATION_SELECT = await driver.findElement(By.xpath('//*[@id="selectOperationDropdown"]'));
  let operationSelectElement = new Select(OPERATION_SELECT);
  const SUBMIT_BUTTON = await driver.findElement(By.xpath('//*[@id="calculateButton"]'));
  const RESULT_FIELD = await driver.findElement(By.xpath('//*[@id="numberAnswerField"]'));

  buildSelectElement.selectByVisibleText('Prototype');
  FIRST_VALUE_FIELD.clear()
  SECOND_VALUE_FIELD.clear();
  FIRST_VALUE_FIELD.sendKeys(firstValue);
  SECOND_VALUE_FIELD.sendKeys(secondValue);
  await operationSelectElement.selectByVisibleText('Concatenate');

  SUBMIT_BUTTON.click();
  let result = await RESULT_FIELD.getAttribute('value');

  (result === pendingResult) ? console.log('Тест #2 пройден') : console.log('Тест #2 не пройден')
  driver.close();
}

async function testNumberThree (inputValue) {
  driver.get('https://testsheepnz.github.io/random-number.html');
  driver.manage().setTimeouts({implicit: 500});

  const SELECT = await driver.findElement(By.xpath('//*[@id="buildNumber"]'));
  let selectElement = new Select(SELECT);
  const REROLL_BUTTON = await driver.findElement(By.xpath('//*[@id="rollDiceButton"]'));
  const INPUT_FIELD = await driver.findElement(By.xpath('//*[@id="numberGuess"]'));
  const SUBMIT_BUTTON = await driver.findElement(By.xpath('//*[@id="submitButton"]'));

  await selectElement.selectByVisibleText('Demo');
  REROLL_BUTTON.click();
  await driver.wait(webDriver.until.elementIsVisible(INPUT_FIELD), 2000);
  await INPUT_FIELD.sendKeys(inputValue);
  await SUBMIT_BUTTON.click();

  const ERROR_LABEL = await driver.findElement(By.xpath('//*[@id="feedbackLabel"]'));
  let result = await ERROR_LABEL.isEnabled();

  result ? console.log('Тест #3 пройден') : console.log('Тест #3 не пройден')

  driver.close();
}

// testNumberOne(2, 3, -1);
// testNumberTwo('gs', 'bu', 'gsbu');
// testNumberThree('string');