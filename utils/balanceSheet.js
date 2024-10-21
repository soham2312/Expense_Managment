const mongoose = require('mongoose');
const Expense = require('../models/expense');

// Function to generate a balance sheet for all users
const generateBalanceSheet = async () => {
    const expenses = await Expense.find().populate('participants.userId', 'name');
    // Initialize objects to store balance sheet and overall expenses
    const balanceSheet = {};
    const overallExpenses = {};

    // Iterate over each expense
    expenses.forEach(expense => {
        expense.participants.forEach(participant => {
            // Initialize user entry in balance sheet if it doesn't exist

            if (!balanceSheet[participant._id]) {
                balanceSheet[participant._id] = {
                    totalOwed: 0,
                    expenses: []
                };
            }

            // Add the participant's amount to their total owed
            balanceSheet[participant._id].totalOwed += participant.amount;
            // Add expense details to the user's expenses list
            balanceSheet[participant._id].expenses.push({
                description: expense.description,
                amount: participant.amount,
                createdAt: expense.createdAt
            });

            // Initialize user entry in overall expenses if it doesn't exist
            if (!overallExpenses[participant._id]) {
                overallExpenses[participant._id] = 0;
            }

            // Add the participant's amount to their overall expenses
            overallExpenses[participant._id] += participant.amount;
        });
    });

    // Return the new balance sheet and overall expenses
    return { balanceSheet, overallExpenses };
};

module.exports = generateBalanceSheet;
