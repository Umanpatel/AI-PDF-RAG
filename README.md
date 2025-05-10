# PDF RAG Chat Application

A full-stack application that allows users to upload PDF documents and chat with an AI assistant about their contents using RAG (Retrieval Augmented Generation).

## Features

- 📁 PDF file upload and processing
- 💬 AI-powered chat interface
- 🔍 Document retrieval using vector similarity search
- 🔐 User authentication with Clerk
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- Next.js 15
- React
- Tailwind CSS
- Clerk Authentication
- TypeScript

### Backend
- Express.js
- BullMQ for job queue
- Multer for file uploads
- LangChain.js
- Qdrant Vector Database
- OpenAI API

## Prerequisites

- Node.js 18+
- Redis Server
- Qdrant Server
- OpenAI API Key
- Clerk Account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Umanpatel/AI-PDF-RAG
```

2. Install dependencies:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:

For the server (.env):
```
OPENAI_API_KEY=your_openai_api_key
REDIS_HOST=localhost
REDIS_PORT=6379
QDRANT_URL=http://localhost:6333
```

For the client (.env.local):
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. Start the services:
```bash
# Start Redis
redis-server

# Start Qdrant
docker run -p 6333:6333 qdrant/qdrant

# Start the backend server
cd server
npm start

# Start the frontend
cd client
npm run dev
```

5. Open http://localhost:3000 in your browser

## How It Works

1. Users upload PDF documents through the file upload interface
2. The backend processes the PDF, splits it into chunks, and creates embeddings
3. Embeddings are stored in the Qdrant vector database
4. Users can ask questions about the documents through the chat interface
5. The system retrieves relevant context using vector similarity search
6. OpenAI's GPT model generates responses based on the retrieved context

## Project Structure

```
├── client/
│   ├── app/
│   ├── components/
│   └── public/
├── server/
│   ├── uploads/
│   ├── index.js
│   └── worker.js
```
