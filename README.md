# Cloud Video Converter App

A cloud-based application that allows users to upload and convert video files using scalable cloud infrastructure. **CPSC 454 Project at CSUF**

## Team Members

- Khoa Nguyen
- Thomas Oh
- Owen Rotenberg
- Amy Parker
- Randy Do

## Project Structure

This project is split into two main parts:

- **`frontend/`** – A React application built with [Next.js](https://nextjs.org/)
- **`backend/`** – A TypeScript and Python API deployed using the [AWS Cloud Development Kit (CDK)](https://aws.amazon.com/cdk/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/tomasohCHOM/cpsc-454-project.git
cd cpsc-454-project
```

### 2. Install Dependencies

Ensure you have the latest version of **Node.js** installed.

```bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd ../backend
npm install
```

### 3. Build and Run the Backend

```bash
cd backend
npm run build
```

### 4. Start the Frontend Development Server

```bash
cd ../frontend
npm run dev
```

### 5. Open in Your Browser

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

## Technologies Used

- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Backend:** TypeScript, AWS CDK, Node.js, Python
- **Infrastructure:** AWS API Gateway, Lambda, S3, Transcribe
