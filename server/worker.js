import { Worker } from "bullmq";

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    console.log(`Job:`, job.data);
    const data = JSON.parse(job.data);
    /*
        Take file path
        read PDF from path
        chunk the pdf 
        call the OpenAI embedding model for every chunk
        store the chunk in QDrant DB
    */
   
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
