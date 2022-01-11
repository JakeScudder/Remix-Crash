import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description = "Cool blog build with remix";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

function Document({ children, title }) {
  return (
    <html lang="en">
      My App
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>My Remix Blog</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </>
  );
}
