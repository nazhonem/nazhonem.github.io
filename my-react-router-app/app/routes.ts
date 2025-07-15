import {
    type RouteConfig,
    route,
    index,
  } from "@react-router/dev/routes";
  
  export default [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),

    route("cs_dev", "./routes/cs_dev.tsx", [
        index("./routes/cs_dev/home.tsx"),
        route("work", "./routes/cs_dev/work.tsx"),
        route("contact", "./routes/cs_dev/contact.tsx"),
        route("construction", "./routes/cs_dev/construction.tsx"),
    ]),
    
    route("art", "./routes/art.tsx", [
        index("./routes/art/home.tsx"),
        route("work", "./routes/art/work.tsx"),
        route("contact", "./routes/art/contact.tsx"),
        route("commission", "./routes/art/commissions.tsx"),
    ]),

  ] satisfies RouteConfig;
  