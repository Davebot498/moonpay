import BuySolCard from "@/components/BuySolCard";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-white dark:bg-[#030303]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-700"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse delay-1000"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>

      <div className="relative z-10 w-full flex justify-center">
        <BuySolCard />
      </div>
    </main>
  );
}
