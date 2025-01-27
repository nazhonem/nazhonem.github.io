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
    ]),
    
    // route("art", "./art.tsx", [
    //     index("./home.tsx"),
    //     route("work", "./art/work.tsx"),
    //     route("contact", "./art/contact.tsx"),
    //     route("commission", "./art/commission.tsx"),
    // ]),

  ] satisfies RouteConfig;
  