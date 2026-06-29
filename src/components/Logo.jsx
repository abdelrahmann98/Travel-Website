export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2 font-display font-bold">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-lg text-white shadow-md shadow-brand-500/30">
        🌴
      </span>
      <span className={`text-lg leading-tight ${light ? 'text-white' : 'text-brand-900'}`}>
        Sharm Horizon
        <span className="block text-xs font-medium tracking-wide text-sand-500">TOURS</span>
      </span>
    </div>
  )
}
