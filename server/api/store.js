import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Endpoint that updates the progress of a lesson
export default defineEventHandler(async (event) => {
  // Only allow PUT, PATCH, or POST requests
  assertMethod(event, ['PUT', 'PATCH', 'POST']);


  // Get the completed value from the request body and update progress in DB
  // Select based on the chapter and lesson slugs
  // const { school_name, fname } = await readBody(event);
  const body = await readBody(event) 


  const message = await prisma.message.create({
    data: {
      school: body.data.school,
      name: body.data.name,
      year: body.data.year,
      teacher: body.data.teacher,
      message: body.data.message
    },
  })

  return {
    message: message
  }
});

