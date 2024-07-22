export default defineEventHandler(async (event) => {
  return {
    message: await prisma.message.findFirst({orderBy: { id: 'desc'}}),
  };
});

