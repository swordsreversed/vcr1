export default defineEventHandler(async (event) => {
  return {
    user: await prisma.user.findFirst({orderBy: { id: 'desc'}}),
  };
});

