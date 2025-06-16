import { data, redirect } from "react-router";
import { commitSession, getSession } from "~/sessions.server";
import type { Route } from "../+types/root";

export async function loader({ request }: Route.LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    if (session.get("isAuthenticated")) {
        return redirect("/");
    }

    return data(
        { error: session.get("error") },
        {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        }
    );
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

        return redirect("/login", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }

    session.set("isAuthenticated", true);

    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
} 