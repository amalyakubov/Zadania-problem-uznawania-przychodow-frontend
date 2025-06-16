import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("login", "routes/Login.tsx"),
  route("logout", "routes/Logout.tsx"),
] satisfies RouteConfig;
