export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl mb-6 flex flex-col gap-y-3 tracking-tight">
            <span className="text-primary font-extrabold text-6xl ">
              Shanghai
            </span>
            <span className="font-bold">Wall Panel</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            *Transforming Interiors with Innovation*
          </p>
        </div>
      </section>
    </div>
  );
}
