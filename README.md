  

  

# Beep Boop Page

  

  

  

  

#### A web application that allows user to input a numeral and return a range of numbers from 0 to the user inputted number with the following exceptions:

  

  

  

- Numbers that contain a 1: all digits are replaced (all digits) with _"Beep!"_

  

  

- Numbers that contain a 2: all digits are replaced (all digits) with _"Boop!"_

  

  

- Numbers that contain a 3: all digits are replaced (all digits) with _"I'm sorry, Dave. I'm afraid I can't do that."_.

  

  

  

##### Date: **2/7/2020**

  

  

#### By **Salim Mayan**

  

  

  

  

## Description

  

  

  

The 3 above listed exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

  

  

  

- The number 13 should be replaced with _"I'm sorry, Dave. I'm afraid I can't do that."_

  

  

- The number 21 should be replaced with _"Boop"_.

  

  

- The number 32 should be replaced with _"I'm sorry, Dave. I'm afraid I can't do that."_

  

  

- Includes an option that returns the output in reversed order (beginning with the largest number upon clicking of Radio button Marked "Reverse").

  

  

- Upon clicking of Checkbox labelled "Substitute Dave with another Name for all multiples of 3?", a second form field would accept a name which would replace name _Dave_ in _"I'm sorry, Dave. I'm afraid I can't do that"_ for all integers that are multiples of 3.

  

  

A user should be able to enter a new number and see new results over and over again.

  

  

_**Example:**_ If a user inputs a `8`and selects "Normal" radio button, and does not click the checkbox, the program shall display a list of values: `0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8`

  

  

  

  

### Specs

  

  

  

| Spec | Input | Output |

  

  

  

| :------------- | :------------- | :------------- |

  

  

  

| **Homepage** | User accesses localhost:5500 | Homepage with user input form |

  

  

| **Program only accepts Integer as User Input**| User Input: "5.3", Radio "Normal", and Checkbox unclicked| Output: `Please enter a valid value. The two nearest valid values are 5 and 6 ` |

  

  

  

| **Program will not accept empty Input in first form**| User Input: "" | Output: `Please fill out this field. ` |

  

  

  

| **Program will not accept negative numeral Input in first form**| User Input: "" | Output: `Value must be greater than equal to 0.` |

  
| **Program usage for Numeral values** | Input: "36" and chooses radio button "Normal", Checkbox is unclicked| Output: `You entered Integer value of 36, and chose Normal order. Your Beep Boop output is as follows ...`

`0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that.` |

| **Program usage for Numeral values** | Input: "9" and chooses radio button "Reverse", Checkbox is unclicked| Output: `You entered Integer value of 9, and chose Reverse order. Your Beep Boop output is as follows ...`

  

  

`9, 8, 7, 6, 5, 4, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Beep!, 0` |

  

  

  

| **Program usage for Numeral values (radio button set to "Reverse" & Checkbox clicked with string inputted to 2nd form)** | Input: "15", chooses radio button "Reverse", Checkbox is clicked with String "Ezra" inputted to 2nd form| Output: `You entered Integer value of 15, chose Reverse order, and Substitute name for  Dave  is  Ezra. Your Beep Boop output is as follows ...`

  

  

`Beep!, Beep!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Beep!, Beep!, 9, 8, 7, 6, 5, 4, I'm sorry, Ezra I'm afraid I can't do that., Boop!, Beep!, 0` |

  

  

## Setup/Installation Requirements

  

  

  

1. Clone this repository.

  

  

  

2. To run program, open index.html from browser

  

  

  

## Known Bugs

  

  

  

* No known bugs at this time.

  

  

  

  

## Technologies Used

  

  

  

* HTML

  

  

* CSS

  

  

* JQuery

  

  

* JS

  

  

* Bootstrap

  

  

  

## Support and contact details

  

  

  

_Email no one with any questions, comments, or concerns._

  

  

  

  

### License

  

  

  

  

*{This software is licensed under the MIT license}*

  

  

  

  

Copyright (c) 2020 **_{Salim Mayan}_**
