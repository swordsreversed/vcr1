import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  assertMethod(event, ['PUT', 'PATCH', 'POST']);

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

