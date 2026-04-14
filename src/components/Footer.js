"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-sm uppercase tracking-widest text-scgoff">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-scgred transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-scgred transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-scgred transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-scgoff/60">
          © 2026 Summit Closing Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
