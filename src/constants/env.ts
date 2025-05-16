import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(__dirname,"../../.env")
});

type Env = {
    PORT: number;
    NODE_ENV: "development" | "production";
}

export const ENV: Env ={
    PORT: parseInt(process.env.PORT || "8000"),
    NODE_ENV: process.env.NODE_ENV as Env["NODE_ENV"]
}

console.log(ENV)