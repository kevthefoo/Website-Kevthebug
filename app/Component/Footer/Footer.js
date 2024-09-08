export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col h-32  items-center justify-end border-t-2 bg-white pb-4 pt-8 transition duration-700 ease-linear dark:bg-neutral-900 dark:text-white">
      <div>© {currentYear} Kevin Caviar. All rights reserved.</div>
    </footer>
  );
}
