import {NextRequest, NextResponse} from 'next/server';
import {prisma} from '@/lib/prisma';
import {statusCodes} from "@/constants";

export const GET = async (req: NextRequest) => {
    const searchString = new URL(req.url).searchParams.get('search')?.trim();
    try {
        const users = await prisma.user.findMany({
            where: searchString
                ? {
                    OR: [
                        {firstname: {contains: searchString, mode: 'insensitive'}},
                        {lastname: {contains: searchString, mode: 'insensitive'}},
                        {email: {contains: searchString, mode: 'insensitive'}},
                    ],
                }
                : undefined,
        });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({error: error instanceof Error ? error.message : 'Failed to fetch users'}, {status: statusCodes.INTERNAL_SERVER_ERROR});
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const {email, firstname, lastname} = await req.json()

        if (!email || !firstname || !lastname) {
            return NextResponse.json(
                {error: 'Email, Firstname and Lastname are required'},
                {status: statusCodes.INTERNAL_SERVER_ERROR}
            );
        }

        const existingUser = await prisma.user.findUnique({where: {email}});

        if (existingUser) {
            return NextResponse.json(
                {error: `User with ${email} email already exist.`},
                {status: statusCodes.INTERNAL_SERVER_ERROR}
            );
        }

        const newUser = await prisma.user.create({
            data: {email, firstname, lastname},
        });

        return NextResponse.json({id: newUser.id}, {status: statusCodes.CREATED});
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error ? error.message : 'Failed to create user',
            },
            {status: statusCodes.INTERNAL_SERVER_ERROR}
        );
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        const {email, firstname, lastname, id} = await req.json()

        if (!email || !firstname || !lastname || !id) {
            return NextResponse.json(
                {error: 'Email, Id, Firstname and Lastname are required'},
                {status: statusCodes.INTERNAL_SERVER_ERROR}
            );
        }

        const userWithEmail = await prisma.user.findUnique({where: {email}});

        if (userWithEmail && userWithEmail.id !== id) {
            return NextResponse.json(
                {error: `Email "${email}" is already used by another user.`},
                {status: statusCodes.CONFLICT}
            );
        }

        const updatedUser = await prisma.user.update({
            where: {id},
            data: {email, firstname, lastname},
        });

        return NextResponse.json({user: updatedUser}, {status: statusCodes.OK});
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error ? error.message : 'Failed to update user',
            },
            {status: statusCodes.INTERNAL_SERVER_ERROR}
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const {id} = await req.json();
        if (!id) {
            return NextResponse.json({error: 'User id is required'}, {status: statusCodes.BAD_REQUEST});
        }

        const existingUser = await prisma.user.findUnique({where: {id}})

        if (!existingUser) {
            return NextResponse.json({error: 'User not found.'}, {status: statusCodes.BAD_REQUEST});
        }


        await prisma.user.delete({where: {id}});
        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({error: error instanceof Error ? error.message : 'Failed to delete user'}, {status: statusCodes.INTERNAL_SERVER_ERROR});
    }
}