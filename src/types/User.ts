import { Roles } from '@/types/Roles.ts'

interface User {
    name: string,
    email: string,
    role: Roles
}
export type {User}