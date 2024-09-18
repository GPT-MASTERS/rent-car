import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col">
        <Card>
          <CardTitle className="text-2xl flex justify-center items-center mt-4 ">
            Crie sua conta
          </CardTitle>
          <CardContent className="flex justify-center ml-8 p-4">
            <CardHeader>Nome</CardHeader>
            <Input label="Name" className="mt-5 bg-slate-300" />
            <CardHeader>Email</CardHeader>
            <Input label="Name" className="mt-5 bg-slate-300" />
            <Button className="bg-slate-600 ml-40 mr-4 mt-4">Cadastrar</Button>
          </CardContent>
          <CardFooter className="justify-center text-lg">Axium desenvolvimentos agradece.</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
