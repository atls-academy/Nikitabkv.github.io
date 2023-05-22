export class AuthError extends Error {
    status: number;

    constructor(status: number, message: string, name: string) {
        super(message);
        this.status = status;
        this.name = name;
    }

    static ValidationError(message: string): AuthError {
        return new AuthError(400, message, `Validation Error`)
    }

    static AuthError(message: string): AuthError {
        return new AuthError(401, message, `Auth Error`)
    }
}
