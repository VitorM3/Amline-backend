import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { GenerateToken } from "./providers/generate-token.auth.provider";

@Injectable()
export default class AuthProviders{
    public generateJwtToken: GenerateToken

    public constructor(
        private readonly jwtService: JwtService
    ){
        this.generateJwtToken = new GenerateToken(this.jwtService)
    }
}