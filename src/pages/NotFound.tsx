import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          <span className="text-primary font-mono text-sm">Error 404</span>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mt-2 mb-4">
            <span className="text-gradient">404</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            The page <span className="font-mono text-foreground">{location.pathname}</span> doesn't
            exist.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
