export const code_sites: {
  key: string;
  sites: { image: string; site: string; title: string; default?: boolean }[];
  documentation_site: { image: string; site: string; title: string };
}[] = [
  {
    key: "css",
    sites: [
      {
        image: "css-tricks.png",
        site: "https://css-tricks.com",
        title: "CSS-Tricks",
      },
      {
        default: true,
        image: "mozilla.png",
        site: "https://developer.mozilla.org",
        title: "Mozilla Developer Network",
      },
      {
        image: "w3.png",
        site: "https://www.w3schools.com",
        title: "W3Schools",
      },
      {
        image: "css-ref.png",
        site: "https://cssreference.io",
        title: "CSS Reference",
      },
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://www.reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://www.quora.com",
        title: "Quora",
      },
    ],
    documentation_site: {
      title: "CSS documentation",
      image: "css.png",
      site: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  },
  {
    key: "js",
    sites: [
      {
        default: true,
        image: "mozilla.png",
        site: "https://developer.mozilla.org",
        title: "Mozilla Developer Network",
      },
      {
        image: "w3.png",
        site: "https://w3schools.com",
        title: "W3Schools",
      },
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
    ],
    documentation_site: {
      title: "Javascript documentation",
      image: "js.png",
      site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  },
  {
    key: "html",
    sites: [
      {
        default: true,
        image: "mozilla.png",
        site: "https://developer.mozilla.org",
        title: "Mozilla Developer Network",
      },
      {
        image: "w3.png",
        site: "https://w3schools.com",
        title: "W3Schools",
      },
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
    ],
    documentation_site: {
      title: "HTML documentation",
      image: "html.png",
      site: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  },
  {
    key: "python",
    sites: [
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
      {
        default: true,
        image: "python-docs.png",
        site: "https://docs.python.org",
        title: "Python Docs",
      },
    ],
    documentation_site: {
      title: "Python documentation",
      image: "python.png",
      site: "https://docs.python.org/3/",
    },
  },
  {
    key: "c",
    sites: [
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
      {
        default: true,
        image: "gnu.png",
        site: "https://gnu.org",
        title: "GNU",
      },
    ],
    documentation_site: {
      title: "C documentation",
      image: "c.png",
      site: "https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html",
    },
  },
  {
    key: "php",
    sites: [
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
      {
        default: true,
        image: "phpnet.png",
        site: "https://php.net",
        title: "PHP.net",
      },
    ],
    documentation_site: {
      title: "PHP documentation",
      image: "php.png",
      site: "https://www.php.net/manual/en/intro-whatis.php",
    },
  },
  {
    key: "mysql",
    sites: [
      {
        default: true,
        image: "stack.png",
        site: "https://stackoverflow.com",
        title: "Stack Overflow",
      },
      {
        image: "reddit.png",
        site: "https://reddit.com",
        title: "Reddit",
      },
      {
        image: "github.png",
        site: "https://github.com",
        title: "Github",
      },
      {
        image: "quora.png",
        site: "https://quora.com",
        title: "Quora",
      },
      {
        default: true,
        image: "mysql.png",
        site: "https://dev.mysql.com",
        title: "MySQL",
      },
    ],
    documentation_site: {
      title: "Mysql documentation",
      image: "mysql.png",
      site: "https://www.php.net/manual/en/intro-whatis.php",
    },
  },
];
