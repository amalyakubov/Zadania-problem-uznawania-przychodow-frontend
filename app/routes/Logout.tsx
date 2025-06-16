import { redirect } from "react-router";
import { destroySession, getSession } from "~/sessions.server";
import type { Route } from "../+types/root";

export async function loader() {
    // If someone navigates to /logout directly, just redirect to login
    return redirect("/login");
}

export async function action({ request }: Route.ActionArgs) {
    const session = await getSession(request.headers.get("Cookie"));

    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
} 