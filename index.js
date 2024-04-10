#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.underline.green("\t\nWelcome to my Currency converter project\n\t"));
let exchange_rates = {
    "USD": 1,
    "PKR": 280,
    "GBP": 0.8,
    "EUR": 0.9,
    "INR": 80,
    "JPY": 100,
    "AUD": 1.3,
    "NZD": 1.4,
    "CAD": 1.3,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "INR", "JPY", "AUD", "NZD", "CAD"],
        message: "Select your currency to convert from"
    },
    {
        name: "to_currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "INR", "JPY", "AUD", "NZD", "CAD"],
        message: "Select your currency to convert into"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
// formula of currency conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted amount is ${chalk.green(converted_amount.toFixed(2))}`);
