import { JwtService } from "@nestjs/jwt";
import InternalServerError from "src/shared/base/domain/error/Internal.base.error";

export class GenerateToken{
    private valueToCreateToken: object

    public constructor(
        private jwtService:JwtService
    ){}

    setValueToCreateToken(value: object){
        this.valueToCreateToken = value;

        return this;
    }

    public generate(){
        try {
            const payload = {
                ...this.valueToCreateToken
            }

            return this.jwtService.signAsync(payload);
        } catch (error) {
            throw new InternalServerError().sendError()
        }
    }
}