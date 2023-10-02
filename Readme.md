# Тестовое задание 02.10.23

**Автор:** Лузан Андрей  
**E-mail:** andrejluzan@gmail.com  

**Технологии:** Selenium WebDriber + JS, [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/)

### Задачи

1. Составить баг-репорт
2. Составить баг-репорт, определить ответственного для исправления баги
3. Написать API-автотесты
4. Написать UI-автотесты

Подробный текст задания по [ссылке](https://telegra.ph/SE-Testovoe-zadanie-09-25)

### Структура проекта

В файлах **package.json** и **package-lock.json** находятся зависимости проекта. Их необходимо установить, перейдя в директорию проекта и введя в консоли команду `npm install`. Для этого требуется заранее установить [Node.js](https://nodejs.org/)
  
Файл **ui-test.js** содержит решение трех кейсов тестового задания.

### Запуск тестов

1. Раскомментируйте нужную функцию в конце файла **ui-test.js** (для первого кейса функция testNumberOne, для второго - testNumberTwo, для третьего - testNumberThree). Расскоментированной должна быть **только одна функция**. Параметры влияют на вводимые в тестах значения и проверяемый результат.
2. Введите в консоли, находясь в папке проекта, команду `npm run ui`.
3. Результат теста отобразится в консоли.

### Примечание

Не смог разобраться как провести API-тесты. Хотел использовать JS-библиотеку Pactum, но не было ясно что именно нужно протестировать