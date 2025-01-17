# JAVASCRIPT FOR MEDICS

---

## Table of Contents

**Instructions**

**JavaScript Fundamentals – Part 1**

-   LECTURE: Values and Variables (Patient Data)
-   LECTURE: Data Types (Medical Records)
-   LECTURE: let, const and var (Drug Dosage)
-   LECTURE: Basic Operators (BMI Calculation)
-   LECTURE: Strings and Template Literals (Prescription Writing)
-   LECTURE: Taking Decisions: if / else Statements (Triage)
-   LECTURE: Type Conversion and Coercion (Lab Results)
-   LECTURE: Equality Operators: == vs. === (Diagnosis Check)
-   LECTURE: Logical Operators (Risk Factor Assessment)
-   LECTURE: The switch Statement (Differential Diagnosis)
-   LECTURE: The Conditional (Ternary) Operator (Treatment Decision)

**Solutions - Part 1**

**JavaScript Fundamentals – Part 2**

-   LECTURE: Functions (Patient History)
-   LECTURE: Function Declarations vs. Expressions (Dosage Calculation)
-   LECTURE: Arrow Functions (Metabolic Rate)
-   LECTURE: Functions Calling Other Functions (Referral System)
-   LECTURE: Introduction to Arrays (Patient List)
-   LECTURE: Basic Array Operations (Methods) (Medication List)
-   LECTURE: Introduction to Objects (Patient Profile)
-   LECTURE: Dot vs. Bracket Notation (Accessing Patient Data)
-   LECTURE: Object Methods (Patient Examination)
-   LECTURE: Iteration: The for Loop (Rounds)
-   LECTURE: Looping Arrays, Breaking and Continuing (Screening Tests)
-   LECTURE: Looping Backwards and Loops in Loops (Medical History Review)
-   LECTURE: The while Loop (Monitoring Vitals)

**Solutions - Part 2**

---

---

## JavaScript Fundamentals – Part 1

### LECTURE: Values and Variables (Patient Data)

1. Declare variables called `patientName`, `patientAge`, `patientWeight`, and `patientHeight`. Assign appropriate values related to a patient.
2. Log these values to the console.

### LECTURE: Data Types (Medical Records)

1. Declare a variable `isInsured` (Boolean), `bloodType` (String), `patientID` (Number or String). Assign values.
2. Log the data type of each variable to the console using `typeof`.

### LECTURE: let, const and var (Drug Dosage)

1. Declare a variable `drugName` using `const`.
2. Declare a variable `dosageMG` using `let` (as dosage might change).
3. Declare a variable `timesAdministered` using `let`.
4. Try to reassign a value to `drugName` and observe the error.

### LECTURE: Basic Operators (BMI Calculation)

1. Calculate the BMI (Body Mass Index) using the formula: BMI = weight (kg) / (height (m) \* height (m)).
2. Log the calculated BMI to the console.
3. Increase `patientWeight` by 2kg and recalculate the BMI.

### LECTURE: Strings and Template Literals (Prescription Writing)

1. Create a string variable `prescription` that uses template literals to generate a prescription text like: "Patient: \[patientName], Drug: \[drugName], Dosage: \[dosageMG]mg, Administer \[timesAdministered] times daily."
2. Log the `prescription` to the console.

### LECTURE: Taking Decisions: if / else Statements (Triage)

1. Based on the patient's reported pain level (1-10, stored in a variable `painLevel`), use `if/else` statements to categorize the patient into "Low", "Medium", or "High" priority.
2. Log the priority level to the console.

### LECTURE: Type Conversion and Coercion (Lab Results)

1. You receive a lab result for sodium level as a string: `sodiumLevel = "140"`. Convert it to a number.
2. Compare the converted `sodiumLevel` with the normal range (135-145). Log whether it's "Normal" or "Abnormal".

### LECTURE: Equality Operators: == vs. === (Diagnosis Check)

1. You have two variables: `preliminaryDiagnosis = "Flu"` and `finalDiagnosis = "flu"`.
2. Compare them using both `==` and `===`.
3. Log the results and explain the difference in your console.

### LECTURE: Logical Operators (Risk Factor Assessment)

1. Determine if a patient is at high risk for heart disease based on these conditions: `isSmoker` (Boolean), `hasHighBP` (Boolean), `hasDiabetes` (Boolean).
2. High risk is defined as being a smoker AND having either high blood pressure OR diabetes.
3. Log "High Risk" or "Low Risk" to the console based on the assessment.

### LECTURE: The switch Statement (Differential Diagnosis)

1. Based on a patient's primary symptom (e.g., "Fever", "Cough", "Headache", "Rash"), use a `switch` statement to list possible diagnoses.
2. Log the possible diagnoses to the console.

### LECTURE: The Conditional (Ternary) Operator (Treatment Decision)

1. If a patient's fever is above 38.5°C (variable `temperature`), recommend "Medication", otherwise recommend "Rest and Fluids".
2. Use the ternary operator to make this decision and log the recommendation.

---

## JavaScript Fundamentals – Part 2

### LECTURE: Functions (Patient History)

1. Write a function `getPatientHistory` that takes `patientName` and `chiefComplaint` as parameters.
2. The function should return a string like: "Patient \[patientName] presents with \[chiefComplaint]."
3. Call the function with sample data and log the result.

### LECTURE: Function Declarations vs. Expressions (Dosage Calculation)

1. Create a function declaration `calculateDosage` that takes `weight` and `dosagePerKg` to calculate a drug dosage.
2. Create a function expression `calculateAdultDosage` that takes a standard adult dosage and modifies it based on age (if under 18, reduce by half).
3. Call both functions and log the results.

### LECTURE: Arrow Functions (Metabolic Rate)

1. Create an arrow function `calculateBMR` (Basal Metabolic Rate) that takes `weight`, `height`, and `age` to estimate BMR using a simplified formula (you can find various formulas online).
2. Log the calculated BMR.

### LECTURE: Functions Calling Other Functions (Referral System)

1. Create a function `assessPatient` that takes a `patientName` and `symptom`.
2. If the `symptom` is "Chest Pain", call a function `referToCardiologist`, otherwise call `referToGeneralPhysician`.
3. Each referral function should log a message like: "Refer \[patientName] to Cardiologist/General Physician."

### LECTURE: Introduction to Arrays (Patient List)

1. Create an array `patientList` containing the names of 5 patients.
2. Log the number of patients in the list.
3. Check if a specific patient (e.g., "John Doe") is in the list and log the result (true/false).

### LECTURE: Basic Array Operations (Methods) (Medication List)

1. Create an array `medicationList` for a patient.
2. Add a new medication using `push()`.
3. Remove the last medication added using `pop()`.
4. Check if a specific medication is on the list using `includes()`.
5. Log messages to the console to show the results of each operation.

### LECTURE: Introduction to Objects (Patient Profile)

1. Create an object `patientProfile` with properties like `name`, `age`, `bloodType`, `allergies` (an array), and `emergencyContact` (another object with `name` and `phone`).
2. Log the entire `patientProfile` object.

### LECTURE: Dot vs. Bracket Notation (Accessing Patient Data)

1. Access and log the patient's `name` using dot notation.
2. Access and log the patient's `bloodType` using bracket notation.
3. Change the patient's `age` to a new value using either notation.

### LECTURE: Object Methods (Patient Examination)

1. Add a method `examinePatient` to the `patientProfile` object.
2. This method should log a string like: "Examining \[patientName]..."
3. Add a method `hasAllergy` that takes an allergen as a parameter and returns `true` if the patient is allergic, `false` otherwise.
4. Call both methods to demonstrate their use.

### LECTURE: Iteration: The for Loop (Rounds)

1. Use a `for` loop to simulate making rounds to 5 patients (you can use the `patientList` array).
2. For each patient, log: "Visiting patient: \[patientName]".

### LECTURE: Looping Arrays, Breaking and Continuing (Screening Tests)

1. You have an array `patientAges`.
2. Use a `for` loop to iterate through the ages.
3. If an age is over 65, log "Requires additional screening" and `continue` to the next age.
4. If an age is under 18, log "Pediatric patient" and `break` the loop.

### LECTURE: Looping Backwards and Loops in Loops (Medical History Review)

1. You have an array `patientRecords` where each element is another array: `[patientName, [year1Record, year2Record, ...]]`.
2. Use nested loops to iterate through each patient's records from the most recent year backwards.
3. Log each record with the year.

### LECTURE: The while Loop (Monitoring Vitals)

1. Simulate monitoring a patient's heart rate (`heartRate` variable).
2. Use a `while` loop that continues as long as the `heartRate` is within a normal range (e.g., 60-100).
3. Inside the loop, randomly adjust the `heartRate` slightly (up or down by 1-5 beats) to simulate fluctuations.
4. If the `heartRate` goes outside the normal range, log an alert: "Abnormal heart rate detected!"

---
