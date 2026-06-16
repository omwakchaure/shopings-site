
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="p-10">
     
      <h1 className = "text-2xl font-semibold p-3"> home </h1>
      <p className="text-center bg-shop-light-pink text-black">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur
        incidunt suscipit modi impedit voluptatum quae libero, eligendi
        asperiores repellat vitae nostrum tenetur adipisci alias soluta
        laboriosam eaque, quisquam et?
      </p>

    <Button variant = "destructive"> check out </Button>
    </div>
  );
};

export default Home;
