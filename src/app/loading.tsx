export default function Loading() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-12">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </div>
  );
}
