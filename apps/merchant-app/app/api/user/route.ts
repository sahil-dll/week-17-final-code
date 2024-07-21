import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "",
            name: "",
            number: "", // Provide a valid number
            password: "" // Provide a secure password
        }
    });
    return NextResponse.json({
        message: "hi there"
    });
};
