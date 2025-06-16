import type { Route } from "./+types/Home";
import { redirect } from "react-router";
import { getSession, commitSession } from "../sessions.server";
import { data } from "../lib/mock-data";

export async function loader({
    request,
}: Route.LoaderArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    if (!session.get("isAuthenticated")) {
        return redirect("/login");
    }

    return {
        data,
        session,
    };
}

export async function action({
    request,
}: Route.ActionArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");

    if (username !== "admin" || password !== "admin") {
        session.flash("error", "Invalid username/password");

        // Redirect back to the login page with errors.
        return redirect("/login", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }

    session.set("isAuthenticated", true);

    // Login succeeded, send them to the home page.
    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
} 