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
            Instagram:{" "}
            <a href="https://www.instagram.com/insidecreative__/" target="blank">
              @insidecreative_
            </a>
          </li>
          <li>Facebook: </li>
          <li>Mail: </li>
        </ul>
      </div>
      <div className="copyright">&copy; Hecho con 💜 por Inside Creative</div>
    </footer>
  );
}

export { Footer };
