import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // // Create User
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Paijo",
  //     email: "paijo@gmail.com",
  //     role: {
  //         connect: {
  //             id: 1
  //         }
  //     }
  //   },
  // });
  // //---------------
  // // Get users
  //   const users = await prisma.user.findMany();
  // //---------------
  //   // Create Event
  //   const event = await prisma.events.create({
  //     data: {
  //       title: "RFC",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //       body: "Lesgo",
  //     },
  //   });
  // //---------------
  // Get Events
  //  const events = await prisma.events.findMany();
  // //---------------
  // Create user, event n associate
  const user = await prisma.user.create({
    data: {
      name: "Paijo",
      email: "paijo@gmail.com",
      role: {
        connect: {
          id: 1,
        },
      },
      Events: {
        create: {
          title: "RFC",
          body: "Lesgo",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Oops: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
