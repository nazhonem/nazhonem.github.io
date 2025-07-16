import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, NavLink } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement } from "react";
import { Listbox, ListboxItem, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Button as Button$1 } from "@heroui/button";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-DcTMgZT-.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "Nazhone Morgan's Portfolio Website"
  }, {
    name: "description",
    content: "Welcome to my portfolio site for both my art and web development skills!"
  }];
}
const home$2 = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "relative md:mx-20 mt-16 p-6",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-2xl",
        children: "Hello, I'm Nazhone"
      }), /* @__PURE__ */ jsx("p", {
        children: "If you've found your way to this page, you might be interested in some of the things I do! I have two main businesses I run: Art and Web Development. My portfolios for both are linked below. Please check them out and be sure to contact me with any questions!"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "w-full mx-auto mt-8 max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100",
      children: /* @__PURE__ */ jsxs(Listbox, {
        "aria-label": "Links",
        children: [/* @__PURE__ */ jsx(ListboxItem, {
          children: /* @__PURE__ */ jsx(NavLink, {
            to: "/cs_dev",
            end: true,
            children: "Web Dev"
          })
        }, "Web Dev"), /* @__PURE__ */ jsx(ListboxItem, {
          children: /* @__PURE__ */ jsx(NavLink, {
            to: "https://mitranova.carrd.co/#",
            end: true,
            children: "Art"
          })
        }, "Art")]
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home$2,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const about = withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx("p", {
    children: "Hello World!"
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const cs_dev = withComponentProps(function DevHome() {
  return /* @__PURE__ */ jsx("div", {
    className: "purple-dark",
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs_dev
}, Symbol.toStringTag, { value: "Module" }));
function DevNavbar() {
  return /* @__PURE__ */ jsxs(Navbar, { shouldHideOnScroll: true, className: "bg-transparent", children: [
    /* @__PURE__ */ jsx(NavbarBrand, { children: /* @__PURE__ */ jsx("p", { className: "text-white font-josefin", children: "NM" }) }),
    /* @__PURE__ */ jsxs(NavbarContent, { className: "hidden sm:flex gap-4", justify: "end", children: [
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/cs_dev", "aria-current": "page", children: "Home" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("p", { className: "text-white", children: "•" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/cs_dev/construction", children: "Work" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("p", { className: "text-white", children: "•" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/cs_dev/construction", children: "Contact" }) })
    ] })
  ] });
}
const skills = [
  {
    name: "React",
    imageURL: "",
    projects: [0, 2]
  },
  {
    name: "TypeScript",
    imageURL: "",
    projects: [1, 2]
  },
  {
    name: "Java",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Web Building",
    imageURL: "",
    projects: [0]
  },
  {
    name: "JavaScript",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Python",
    imageURL: "",
    projects: [0]
  },
  {
    name: "HTML5",
    imageURL: "",
    projects: [0]
  },
  {
    name: "CSS",
    imageURL: "",
    projects: [0]
  },
  {
    name: "C/C++",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Tailwind",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Spring Boot",
    imageURL: "",
    projects: [0]
  },
  {
    name: "RESTful APIs",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Docker",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Figma",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Git",
    imageURL: "",
    projects: [0]
  },
  {
    name: "NodeJS",
    imageURL: "",
    projects: [0]
  },
  {
    name: "SQL",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Relational Databases",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Photoshop",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Adobe Suite",
    imageURL: "",
    projects: [0]
  },
  {
    name: "Microsoft Office",
    imageURL: "",
    projects: [0]
  }
];
const projects = [
  {
    id: 0,
    name: "The Wedding Seamstress",
    imageUrl: "TWS.png",
    desc: "I led a full redesign of a Kajabi-based website, enhancing its user experience with a modern layout, optimized navigation, and a fresh visual style. The project included migrating content to a new platform, incorporating SEO best practices, and adding new features like a blog and podcast.",
    skills: ["React", "Java"],
    srcLink: "",
    prjLink: ""
  },
  {
    id: 1,
    name: "CANDLE",
    imageUrl: "CNDL.png",
    desc: "An app code framework developed using React Native and Spring Boot. Projected for deployment on Apple and Android platforms. I lead the process of taking design notes from the design team and integrating them into a smooth seamless User Interface.",
    skills: ["React", "Java"],
    srcLink: "",
    prjLink: ""
  },
  {
    id: 2,
    name: "Values",
    imageUrl: "figma-values.png",
    desc: "A full stack application and business created during the Entreprenurial senior projects course. CANDLE is a social connection app that allows users to create wishlists for holidays and birthdays and see others.",
    skills: ["React", "Java"],
    srcLink: "",
    prjLink: ""
  }
];
function SkillsPopover() {
  return /* @__PURE__ */ jsx("div", { className: "purple-dark flex flex-wrap gap-4", children: skills.map((skill) => /* @__PURE__ */ jsx(Button, { className: "capitalize", color: "primary", children: skill.name })) });
}
const home$1 = withComponentProps(function DevHome2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "purple-dark bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...",
    children: [/* @__PURE__ */ jsx(DevNavbar, {}), /* @__PURE__ */ jsx("div", {
      className: "hidden md:block absolute right-[0] mt-5 h-[120vh] w-[120vh] rounded-full bg-contain transform translate-x-1/4 z-0",
      style: {
        backgroundImage: "url(/me.jpg)"
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative md:mx-20 z-10 p-6 space-y-10",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "md:w-[45vw] min-h-[30vh] flex flex-col justify-end p-20 pb-10",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-7xl text-white font-bold",
          children: "Nazhoné Morgan"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-white italic text-right",
          children: "/nuh-ZHOH-nay MOR-gan/"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "md:w-[45vw] bg-white text-center min-h-[40vh] flex flex-col items-center justify-center rounded-lg",
        children: [/* @__PURE__ */ jsx("p", {
          className: "mt-2 w-[75%] text-lg",
          children: "A passionate and dedicated software developer with a strong eye for detail and aesthetics. I thrive on creating user-friendly applications that solve real-world problems."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-4",
          children: /* @__PURE__ */ jsx(Button$1, {
            as: "a",
            href: "/NazhoneM_Software_Resume-1.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            color: "primary",
            variant: "ghost",
            className: "mt-10 p-2 rounded-md m-5",
            children: "View My Resume"
          })
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mx-auto  p-6 bg-white shadow-md rounded-lg text-center w-full md:w-auto",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-2xl font-semibold text-primary-50",
          children: "Skills"
        }), /* @__PURE__ */ jsx("div", {
          className: "purple-dark items-center mt-6",
          children: /* @__PURE__ */ jsx(SkillsPopover, {})
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "p-6 my-6",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-semibold text-white",
          children: "Selected Projects"
        }), /* @__PURE__ */ jsx("div", {
          className: "gallery",
          children: projects.map((project) => /* @__PURE__ */ jsxs("div", {
            className: "p-6",
            children: [/* @__PURE__ */ jsx("img", {
              className: "h-lg max-h-md mx-auto rounded-lg",
              src: project.imageUrl,
              alt: `Img ${project.id}`
            }, project.id), /* @__PURE__ */ jsx("h3", {
              className: "text-2xl font-semibold text-white mt-5",
              children: project.name
            }), /* @__PURE__ */ jsx("p", {
              className: "text-md text-white",
              children: project.desc
            })]
          }))
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "p-6 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col md:flex-row justify-between items-start md:items-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-center mb-6 md:mb-0 md:mr-6 w-[40vw]",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-semibold text-primary-50",
            children: "Contact Me!"
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-2"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-center md:text-left w-[60vw]",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-md",
            children: "If you have any questions about me or my projects, feel free to reach out! Here’s where you can contact me for anything concerning my web development work."
          }), /* @__PURE__ */ jsxs("p", {
            className: "mt-2 text-primary-500",
            children: ["Email me at ", /* @__PURE__ */ jsx("a", {
              href: "mailto:nazhonem@gmail.com",
              className: "underline",
              children: "nazhonem@gmail.com"
            })]
          })]
        })]
      })
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home$1
}, Symbol.toStringTag, { value: "Module" }));
const work$1 = withComponentProps(function DevWork() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Dev Work"
    })
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: work$1
}, Symbol.toStringTag, { value: "Module" }));
const contact$1 = withComponentProps(function DevContact() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Contact"
    })
  });
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact$1
}, Symbol.toStringTag, { value: "Module" }));
const construction = withComponentProps(function DevConstruction() {
  return /* @__PURE__ */ jsxs("div", {
    className: "purple-dark h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...",
    children: [/* @__PURE__ */ jsx(DevNavbar, {}), /* @__PURE__ */ jsxs("div", {
      className: "max-w-xl mt-8 mx-auto p-6 bg-white border rounded-lg shadow-sm",
      children: [/* @__PURE__ */ jsx("h5", {
        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900",
        children: "This page is still under construction!"
      }), /* @__PURE__ */ jsx("p", {
        className: "mb-3 font-normal text-gray-700",
        children: "Apologies for the inconvience. I am doing my best to get this up as soon as possible. Thank you for understanding!"
      }), /* @__PURE__ */ jsx("div", {
        className: "text-center",
        children: /* @__PURE__ */ jsx(Button$1, {
          as: "a",
          href: "/cs_dev",
          color: "primary",
          variant: "solid",
          className: "mt-10 p-2 rounded-md m-5",
          children: "Back to Dev Home"
        })
      })]
    })]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: construction
}, Symbol.toStringTag, { value: "Module" }));
const art = withComponentProps(function ArtHome() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-xl mt-8 mx-auto p-6 bg-white border rounded-lg shadow-sm",
      children: [/* @__PURE__ */ jsx("h5", {
        className: "mb-2 text-2xl font-bold tracking-tight text-gray-900",
        children: "This page is still under construction!"
      }), /* @__PURE__ */ jsx("p", {
        className: "mb-3 font-normal text-gray-700",
        children: "Apologies for the inconvience. I am doing my best to get this up as soon as possible. Thank you for understanding!"
      })]
    })
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: art
}, Symbol.toStringTag, { value: "Module" }));
function ArtNavbar() {
  return /* @__PURE__ */ jsxs(Navbar, { shouldHideOnScroll: true, children: [
    /* @__PURE__ */ jsx(NavbarBrand, { children: /* @__PURE__ */ jsx("img", { src: "/Lettermark.png", alt: "Logo", className: "w-8" }) }),
    /* @__PURE__ */ jsxs(NavbarContent, { className: "hidden sm:flex gap-4", justify: "end", children: [
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "#", "aria-current": "page", children: "Home" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/art/work", children: "Work" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/art/contact", children: "Contact" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "/art/commission", children: "Commissions" }) })
    ] })
  ] });
}
const home = withComponentProps(function DevHome3() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-slate-200 text-gray-900",
    children: [/* @__PURE__ */ jsx(ArtNavbar, {}), /* @__PURE__ */ jsx("div", {
      className: "hidden md:block absolute right-[0] mt-5 h-[120vh] w-[120vh] rounded-full bg-contain transform translate-x-1/4 z-0",
      style: {
        backgroundImage: "url('/me.jpg')"
      }
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative md:mx-20 z-10 p-6 space-y-10",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "md:w-[45vw] bg-white text-center min-h-[70vh] flex flex-col items-center justify-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-6xl font-bold text-blue-600",
          children: "Nazhoné Morgan"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-gray-500 italic",
          children: "/nuh-ZHOH-nay MOR-gan/"
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-2 w-[75%] text-lg",
          children: "A passionate and dedicated software developer with a strong eye for detail and aesthetics. I thrive on creating user-friendly applications that solve real-world problems."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-4"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "mx-auto  p-6 bg-white shadow-md rounded-lg text-center w-full md:w-auto",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-2xl font-semibold text-blue-600",
          children: "Skills"
        }), /* @__PURE__ */ jsx("div", {
          className: "items-center mt-6"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "p-6 my-6"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "p-6 bg-white",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col md:flex-row justify-between items-start md:items-center",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-center mb-6 md:mb-0 md:mr-6 w-[40vw]",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-4xl font-semibold text-blue-600",
            children: "Contact Me!"
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-2"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "text-center md:text-left w-[60vw]",
          children: [/* @__PURE__ */ jsx("p", {
            className: "text-md",
            children: "If you have any questions about me or my projects, feel free to reach out! Here’s where you can contact me for anything concerning my web development work."
          }), /* @__PURE__ */ jsxs("p", {
            className: "mt-2 text-blue-500",
            children: ["Email me at ", /* @__PURE__ */ jsx("a", {
              href: "mailto:nazhonem@gmail.com",
              className: "underline",
              children: "nazhonem@gmail.com"
            })]
          })]
        })]
      })
    })]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const work = withComponentProps(function ArtWork() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Work"
    })
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: work
}, Symbol.toStringTag, { value: "Module" }));
const contact = withComponentProps(function ArtContact() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Contact"
    })
  });
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact
}, Symbol.toStringTag, { value: "Module" }));
const commissions = withComponentProps(function ArtComm() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("h1", {
      children: "Commissions"
    })
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: commissions
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-quo574dW.js", "imports": ["/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/index-DO_hivWk.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Bv5mxiD5.js", "imports": ["/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/index-DO_hivWk.js", "/assets/with-props-C4hFCt5Y.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-CgBkH2Vn.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/chunk-GH5E4FQB-Cq7D9Bb6.js", "/assets/index-DO_hivWk.js", "/assets/useHover-BMZLkspd.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-VGMWPdCZ.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/cs_dev": { "id": "routes/cs_dev", "parentId": "root", "path": "cs_dev", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/cs_dev-OPl04b1J.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/cs_dev/home": { "id": "routes/cs_dev/home", "parentId": "routes/cs_dev", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-PQUBmbH3.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/DevNavbar-13su6hIW.js", "/assets/chunk-GH5E4FQB-Cq7D9Bb6.js", "/assets/useHover-BMZLkspd.js", "/assets/chunk-5LMKFFWA-KGaYxOwB.js", "/assets/index-DO_hivWk.js"], "css": [] }, "routes/cs_dev/work": { "id": "routes/cs_dev/work", "parentId": "routes/cs_dev", "path": "work", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/work-00DfhqQo.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/cs_dev/contact": { "id": "routes/cs_dev/contact", "parentId": "routes/cs_dev", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-D8WDdSVT.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/cs_dev/construction": { "id": "routes/cs_dev/construction", "parentId": "routes/cs_dev", "path": "construction", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/construction-C4bECyU9.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/DevNavbar-13su6hIW.js", "/assets/chunk-GH5E4FQB-Cq7D9Bb6.js", "/assets/useHover-BMZLkspd.js", "/assets/chunk-5LMKFFWA-KGaYxOwB.js", "/assets/index-DO_hivWk.js"], "css": [] }, "routes/art": { "id": "routes/art", "parentId": "root", "path": "art", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/art-BvNX9JIh.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/art/home": { "id": "routes/art/home", "parentId": "routes/art", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-sREg5x0g.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js", "/assets/chunk-5LMKFFWA-KGaYxOwB.js", "/assets/chunk-GH5E4FQB-Cq7D9Bb6.js", "/assets/index-DO_hivWk.js"], "css": [] }, "routes/art/work": { "id": "routes/art/work", "parentId": "routes/art", "path": "work", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/work-B5b5g69l.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/art/contact": { "id": "routes/art/contact", "parentId": "routes/art", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-CR5JLIwE.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] }, "routes/art/commissions": { "id": "routes/art/commissions", "parentId": "routes/art", "path": "commission", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/commissions-Chl3kr04.js", "imports": ["/assets/with-props-C4hFCt5Y.js", "/assets/chunk-SYFQ2XB5-Ds6VJ359.js"], "css": [] } }, "url": "/assets/manifest-e74a571b.js", "version": "e74a571b" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/cs_dev": {
    id: "routes/cs_dev",
    parentId: "root",
    path: "cs_dev",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/cs_dev/home": {
    id: "routes/cs_dev/home",
    parentId: "routes/cs_dev",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/cs_dev/work": {
    id: "routes/cs_dev/work",
    parentId: "routes/cs_dev",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/cs_dev/contact": {
    id: "routes/cs_dev/contact",
    parentId: "routes/cs_dev",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/cs_dev/construction": {
    id: "routes/cs_dev/construction",
    parentId: "routes/cs_dev",
    path: "construction",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/art": {
    id: "routes/art",
    parentId: "root",
    path: "art",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/art/home": {
    id: "routes/art/home",
    parentId: "routes/art",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route9
  },
  "routes/art/work": {
    id: "routes/art/work",
    parentId: "routes/art",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/art/contact": {
    id: "routes/art/contact",
    parentId: "routes/art",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/art/commissions": {
    id: "routes/art/commissions",
    parentId: "routes/art",
    path: "commission",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
