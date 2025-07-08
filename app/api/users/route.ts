import {NextRequest, NextResponse} from 'next/server';
import {prisma} from '@/lib/prisma';

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
        return NextResponse.json({error: error instanceof Error ? error.message : 'Failed to fetch users'}, {status: 500});
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const {email, firstname, lastname} = await req.json()

        if (!email || !firstname || !lastname) {
            return NextResponse.json(
                {error: 'Email, Firstname and Lastname are required'},
                {status: 500}
            );
        }

        const existingUser = await prisma.user.findUnique({where: {email}});

        if (existingUser) {
            return NextResponse.json(
                {error: `User with ${email} email already exist.`},
                {status: 500}
            );
        }

        const newUser = await prisma.user.create({
            data: {email, firstname, lastname},
        });

        return NextResponse.json({id: newUser.id}, {status: 201});
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error ? error.message : 'Failed to create user',
            },
            {status: 500}
        );
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        const {email, firstname, lastname, id} = await req.json()

        if (!email || !firstname || !lastname || !id) {
            return NextResponse.json(
                {error: 'Email, Id, Firstname and Lastname are required'},
                {status: 500}
            );
        }

        const userWithEmail = await prisma.user.findUnique({where: {email}});

        if (userWithEmail && userWithEmail.id !== id) {
            return NextResponse.json(
                {error: `Email "${email}" is already used by another user.`},
                {status: 409}
            );
        }

        const updatedUser = await prisma.user.update({
            where: {id},
            data: {email, firstname, lastname},
        });

        return NextResponse.json({user: updatedUser}, {status: 201});
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error ? error.message : 'Failed to update user',
            },
            {status: 500}
        );
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const {id} = await req.json();
        if (!id) {
            return NextResponse.json({error: 'User id is required'}, {status: 400});
        }

        const existingUser = await prisma.user.findUnique({where: {id}})

        if (!existingUser) {
            return NextResponse.json({error: 'User not found.'}, {status: 400});
        }


        await prisma.user.delete({where: {id}});
        return NextResponse.json({success: true});
    } catch (error) {
        return NextResponse.json({error: error instanceof Error ? error.message : 'Failed to delete user'}, {status: 500});
    }
}