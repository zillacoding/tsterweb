import dewMascot from "@/assets/dew-mascot.png";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Sunburst Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="sunburst-bg animate-sunburst w-[200vmax] h-[200vmax] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Title */}
        <h1 className="font-display text-8xl md:text-9xl lg:text-[12rem] text-foreground animate-pulse-glow tracking-wider mb-4">
          DEW
        </h1>

        {/* Floating Mascot */}
        <div className="animate-float my-8">
          <img
            src={dewMascot}
            alt="Dew Mascot"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl rounded-3xl"
          />
        </div>

        {/* CA TBA Text */}
        <div className="mt-8 px-8 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-primary/30 shadow-xl">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary tracking-widest animate-pulse">
            CA TBA
          </p>
        </div>

        {/* Subtle tagline */}
        <p className="mt-6 text-muted-foreground text-lg md:text-xl font-medium">
          The meme coin that slaps different 🚀
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground/50 text-sm">
        © 2025 Dew Coin
      </div>
    </div>
  );
};

export default Index;
