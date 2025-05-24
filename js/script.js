// Copyright (c) 2025 Adrina Peighambarzadeh All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

/**
 * This function calculates the factorial of a number
 */
// eslint-disable-next-line no-unused-vars
function calculateFactorial () {
  // input
  const number = parseInt(document.getElementById('input-number').value)
  let result = 1
  let counter = 1

  // process
  if (isNaN(number) || number < 0) {
    document.getElementById('answer').innerHTML = 'Please enter a non-negative integer.'
    return
  }

  while (counter <= number) {
    result = result * counter
    counter = counter + 1
  }

  // output
  document.getElementById('answer').innerHTML = 'The factorial of ' + number + ' is: ' + result
}
