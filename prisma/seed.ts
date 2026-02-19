import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@polapedia.com" },
    update: {},
    create: {
      name: "ADMIN",
      email: "admin@polapedia.com",
      password,
    },
  });

  console.log("✅ ADMIN SEEDED");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
