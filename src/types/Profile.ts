import { Profile } from "@prisma/client";


export type ProfileUpdateData = Partial<Omit<Profile, "id" | "createdAt" | "userId">>