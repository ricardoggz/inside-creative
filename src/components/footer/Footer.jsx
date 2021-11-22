import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="flex-container social-container">
        <span>
          <b>Social :</b>
        </span>
        <ul>
          <li>
            Instagram:
            <a
              href="https://www.instagram.com/insidecreative__/"
              target="blank"
            >
               @insidecreative_
            </a>
          </li>
          <li>
            Facebook:
            <a href="https://www.facebook.com/InsideCreative1" target="blank">
               Inside Creative
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">&copy; Hecho con 💜 por Inside Creative</div>
    </footer>
  );
}

export { Footer };
