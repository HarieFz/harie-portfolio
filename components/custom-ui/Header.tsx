export default function Header() {
  return (
    <header className="fixed inset-x-0 z-40 flex flex-col justify-between px-8 md:px-11 py-8">
      <div className="w-full flex items-center justify-between">
        <p className="font-jersey10 font-bold text-3xl tracking-widest text-white">HARIE</p>

        <nav>
          <ul className="hidden md:flex items-center gap-10 font-jersey10">
            <li className="text-2xl uppercase text-white">Work</li>
            <li className="text-2xl uppercase text-white">Contact</li>
            <li className="text-2xl uppercase text-white">Theme</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
