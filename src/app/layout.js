
import'./globals.css'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
