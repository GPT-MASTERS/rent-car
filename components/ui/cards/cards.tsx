import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = () => {
  return (
    <div className="flex  gap-32 justify-center p-10 ">
      <div className=" gap-10 flex space-y-10 flex-col w-56 h-100">
        <Card className="">
          <CardHeader>
            <CardTitle>Corola</CardTitle>
            <CardDescription>Ano 2019 - Usado</CardDescription>
          </CardHeader>
          <CardContent>
            <p>R$ 90.000,00</p>
          </CardContent>
          <CardFooter>
            <p>Disponível</p>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Corola</CardTitle>
            <CardDescription>Ano 2019 - Usado</CardDescription>
          </CardHeader>
          <CardContent>
            <p>R$ 90.000,00</p>
          </CardContent>
          <CardFooter>
            <p>Disponível</p>
          </CardFooter>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Corola</CardTitle>
            <CardDescription>Ano 2019 - Usado</CardDescription>
          </CardHeader>
          <CardContent>
            <p>R$ 90.000,00</p>
          </CardContent>
          <CardFooter>
            <p>Disponível</p>
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className=" gap-10 flex flex-col w-56 space-y-10 h-100">
          <Card className="">
            <CardHeader>
              <CardTitle>Corola</CardTitle>
              <CardDescription>Ano 2019 - Usado</CardDescription>
            </CardHeader>
            <CardContent>
              <p>R$ 90.000,00</p>
            </CardContent>
            <CardFooter>
              <p>Disponível</p>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Corola</CardTitle>
              <CardDescription>Ano 2019 - Usado</CardDescription>
            </CardHeader>
            <CardContent>
              <p>R$ 90.000,00</p>
            </CardContent>
            <CardFooter>
              <p>Disponível</p>
            </CardFooter>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Corola</CardTitle>
              <CardDescription>Ano 2019 - Usado</CardDescription>
            </CardHeader>
            <CardContent>
              <p>R$ 90.000,00</p>
            </CardContent>
            <CardFooter>
              <p>Disponível</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
