export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10">
      <div className="container-1200 flex flex-col sm:flex-row items-center justify-between gap-4 py-12 pb-[60px]">
        <div className="flex items-center gap-3">
          <svg width="68" height="15" viewBox="0 0 68 15" fill="none">
            <path d="M0 14L7 0L14 14H10.5L7 6.5L3.5 14H0Z" fill="#EB1000"/>
            <text x="18" y="12" fontSize="11" fontWeight="700" fill="#EB1000">Apexa</text>
          </svg>
          <span className="text-[12px] text-white/60">© 2026 Trafliq Holdings. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6 text-[12px] text-white/60">
          <a href="#" className="hover:underline">Legal Info</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Do not sell my personal info</a>
        </nav>
      </div>
    </footer>
  );
}
