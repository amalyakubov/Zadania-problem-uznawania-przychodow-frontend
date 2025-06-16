import { createCookieSessionStorage } from "react-router";
import type { SessionData } from "./types/session";

const { getSession, commitSession, destroySession } =
    createCookieSessionStorage<SessionData, SessionData>({
        cookie: {
            name: "__session",
            // domain: "reactrouter.com",
            httpOnly: true,
            maxAge: 60,
            path: "/",
            sameSite: "lax",
            secrets: ["ThereIsAHouseInNewOrleans"],
            secure: true,
        },
    });

export { getSession, commitSession, destroySession };
