import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import imagem1 from "../../../app/public/Photo.jpg";
import imagem2 from "../../../app/public/Photo2.jpg";
import imagem3 from "../../../app/public/Photo3.jpg";
import imagem4 from "../../../app/public/Photo4.jpg";
import imagem5 from "../../../app/public/Photo5.jpg";
import imagem6 from "../../../app/public/Photo6.jpg";


const Cards = () => {
  return (
    <div >
      <div className="w-{400} flex items-center space-x-6 mt-3 justify-center">
      <Card>
        <Image src={imagem1} alt="car1" width={400} height={400} />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Card>
        <Image src={imagem2} alt="car2" width={400} height={400} />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Card>
        <Image src={imagem3} alt="car3" width={400} height={400} />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      </div>
      <div className="w-{400} flex items-center space-x-6 mt-3 justify-center">
      <Card>
        <Image src={imagem4} alt="car4" width={400} height={400} className="items-center justify-center"/>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Card>
        <Image src={imagem5} alt="car5" width={400} height={400} />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Card>
        <Image src={imagem6} alt="car6" width={400} height={400} />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </CardDescription>
        </CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default Cards;
