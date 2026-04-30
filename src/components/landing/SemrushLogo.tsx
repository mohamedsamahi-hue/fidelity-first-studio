export function SemrushLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.46-.06-.81-.12-2.06.03-2.95.13-.79.86-5.04.86-5.04s-.22-.44-.22-1.09c0-1.02.59-1.79 1.33-1.79.63 0 .93.47.93 1.04 0 .63-.4 1.58-.61 2.46-.17.74.37 1.34 1.1 1.34 1.32 0 2.34-1.39 2.34-3.4 0-1.78-1.28-3.02-3.1-3.02-2.11 0-3.35 1.58-3.35 3.22 0 .64.24 1.32.55 1.69.06.07.07.13.05.21-.06.24-.18.74-.21.84-.03.13-.11.16-.25.1-.93-.43-1.51-1.79-1.51-2.88 0-2.34 1.7-4.49 4.91-4.49 2.58 0 4.58 1.84 4.58 4.29 0 2.56-1.62 4.62-3.86 4.62-.75 0-1.46-.39-1.7-.85l-.46 1.76c-.17.65-.62 1.46-.92 1.96A10.005 10.005 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="#FF642D"/>
        </svg>
        <span className="text-[18px] font-bold tracking-tight text-brand-black">SEMRUSH</span>
      </div>
      <span className="text-[10px] text-brand-black/70 mt-1 ml-[30px]">An Adobe Company</span>
    </div>
  );
}
