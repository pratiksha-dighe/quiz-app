# Quiz API
This project implements a simple Quiz API built with TypeScript, Node.js, and Express.js. It provides endpoints to create quizzes, submit answers, and retrieve user results. The data is stored in an in-memory data structure, making it suitable for testing and development purposes.

## Features
1. Create Quizzes: Create a quiz with multiple-choice questions.
2. Fetch Quizzes: Retrieve a quiz without revealing the correct answers.
3. Submit Answers: Submit answers and get immediate feedback on whether they are correct or incorrect.
4. Get Results: Fetch the results and score for a specific user on a specific quiz.

## Folder Structure

```
quiz-api/
│
├── src/
│   ├── controllers/           # Contains controller logic for handling requests
│   │   ├── quizController.ts   # Handles quiz creation and retrieval
│   │   └── answerController.ts # Handles answer submission and result retrieval
│   ├── models/                # Data models for Quiz, Question, Answer, and Result
│   │   ├── Quiz.ts
│   ├── routes/                # Express routes for quiz and answer endpoints
│   │   ├── quizRoutes.ts
│   │   └── answerRoutes.ts
│   ├── utils/                 # Utility functions
│   │   └── asyncHandler.ts    # Middleware to handle async route errors
│   ├── app.ts                 # App initialization and route mounting
│   └── server.ts              # Server setup and listening
├── package.json               # Dependencies and npm scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation

```
## Local start
```
npm install
npm start
```


### Docker Start
```
docker-compose up --build
```
## API Endpoints
### 1. Create a New Quiz

- Endpoint: POST /api/quiz
- Description: Creates a new quiz with multiple questions.
- Sample Request:

```
curl -X POST http://localhost:3000/api/quiz \
-H "Content-Type: application/json" \
-d '{
  "title": "General Knowledge Quiz",
  "questions": [
    {
      "id": "q1",
      "text": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correct_option": 2
    },
    {
      "id": "q2",
      "text": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correct_option": 1
    }
  ]
}'
```

### 2. Get Quiz by ID
- Endpoint: GET /api/quiz/:quizId
- Description: Retrieves a quiz by its ID without revealing the correct answers.
- Sample Request:


```
curl -X GET http://localhost:3000/api/quiz/{quizId} \
-H "Content-Type: application/json"
```

### 3. Submit Answer 
- Endpoint: POST /api/answer
- Submits an answer for a specific question in a quiz.
- Sample Request:
```
curl -X POST http://localhost:3000/api/answer \
-H "Content-Type: application/json" \
-d '{
  "quizId": "{quizId}",
  "questionId": "{questionId}",
  "selected_option": 2,
  "user_id": "{userId}"
}'
```

### 4. Get Quiz Results
- Endpoint: GET /api/result/:quizId/:userId
- Description: Retrieves the user's score and detailed results for a specific quiz.
- Sample Request:
```
curl -X GET http://localhost:3000/api/result/{quizId}/{userId} \
-H "Content-Type: application/json"
```
