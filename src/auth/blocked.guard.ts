import { CanActivate, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class BlockedGuard implements CanActivate {
    canActivate(): boolean {
        throw new ForbiddenException('Este endpoint no está disponible');
    }
}
