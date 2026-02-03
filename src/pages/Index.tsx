import dewMascot from "@/assets/dew-mascot.png";
import { Wallet, CreditCard, Rocket } from "lucide-react";
import StarOfDavid from "@/components/StarOfDavid";

const Index = () => {
  return (
    <div className="relative min-h-[200vh] overflow-hidden bg-background">
      {/* Animated Sunburst Background */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="sunburst-bg animate-sunburst w-[200vmax] h-[200vmax] opacity-60" />
      </div>

      {/* Floating Stars of David Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Left side stars */}
        <StarOfDavid className="absolute top-[15%] left-[3%] w-20 h-20 text-primary/10 animate-float" style={{ animationDelay: '0s' }} />
        <StarOfDavid className="absolute top-[45%] left-[6%] w-24 h-24 text-primary/12 animate-float" style={{ animationDelay: '2s' }} />
        <StarOfDavid className="absolute top-[75%] left-[4%] w-18 h-18 text-primary/8 animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Right side stars */}
        <StarOfDavid className="absolute top-[25%] right-[4%] w-28 h-28 text-primary/10 animate-float" style={{ animationDelay: '1s' }} />
        <StarOfDavid className="absolute top-[55%] right-[6%] w-20 h-20 text-primary/12 animate-float" style={{ animationDelay: '0.5s' }} />
        <StarOfDavid className="absolute top-[85%] right-[3%] w-22 h-22 text-primary/10 animate-float" style={{ animationDelay: '2.5s' }} />
        
        {/* Far left edge */}
        <StarOfDavid className="absolute top-[35%] left-[1%] w-16 h-16 text-primary/8 animate-float" style={{ animationDelay: '3s' }} />
        <StarOfDavid className="absolute top-[65%] left-[2%] w-14 h-14 text-primary/6 animate-float" style={{ animationDelay: '1.8s' }} />
        
        {/* Far right edge */}
        <StarOfDavid className="absolute top-[12%] right-[2%] w-16 h-16 text-primary/8 animate-float" style={{ animationDelay: '0.8s' }} />
        <StarOfDavid className="absolute top-[70%] right-[1%] w-18 h-18 text-primary/10 animate-float" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* Hero Section */}
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
          This was promised 3000 years ago
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* How to Buy Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-16 tracking-wide">
          HOW TO BUY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Step 1 - Phantom Wallet */}
          <div className="group bg-card/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 shadow-xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
              <Wallet className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center">
              <span className="font-display text-6xl text-primary/30">1</span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-4">
                DOWNLOAD PHANTOM
              </h3>
              <p className="text-muted-foreground">
                Get the Phantom wallet from{" "}
                <a 
                  href="https://phantom.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  phantom.com
                </a>
              </p>
            </div>
          </div>

          {/* Step 2 - Buy Solana */}
          <div className="group bg-card/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 shadow-xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
              <CreditCard className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center">
              <span className="font-display text-6xl text-primary/30">2</span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-4">
                BUY SOLANA
              </h3>
              <p className="text-muted-foreground">
                Purchase SOL on{" "}
                <a 
                  href="https://moonpay.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  MoonPay
                </a>
                {" "}and send it directly to your Phantom wallet.
              </p>
            </div>
          </div>

          {/* Step 3 - Buy $DEW */}
          <div className="group bg-card/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/20 shadow-xl hover:border-primary/50 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center">
              <span className="font-display text-6xl text-primary/30">3</span>
              <h3 className="font-display text-2xl text-foreground mt-2 mb-4">
                BUY $DEW
              </h3>
              <p className="text-muted-foreground">
                Go to{" "}
                <a 
                  href="https://pump.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  pump.fun
                </a>
                {" "}and swap your SOL for $DEW.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-12 text-center">
        <p className="font-display text-2xl md:text-3xl text-primary tracking-widest mb-4">
          Ca: TBA
        </p>
        <p className="text-muted-foreground/50 text-sm">
          © 2025 Dew Coin
        </p>
      </div>
    </div>
  );
};

export default Index;
