import VisitorCounter from './VisitorCounter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <div className="text-xl font-bold tracking-tighter text-white">
          A<span className="text-emerald-500">.</span>X<span className="text-emerald-500">.</span>F
        </div>
        <VisitorCounter />
        <p className="text-slate-400 text-sm font-medium">
          &copy; {currentYear} Anxo Xosé Ferreirós Otero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
