import React from "react";

export default function Footer(){
  return (
    <footer className="rg-footer">
      <div className="container rg-footer-inner">
        <div>© {new Date().getFullYear()} Syntx Cakes</div>
        <div className="rg-small">Chennai • +91 9551662672 • info@synt-x.com</div>
      </div>
    </footer>
  );
}
