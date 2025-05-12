import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useEffect(() => {
    document.title = "Runvo - Simplifica, Comparte, Disfruta";
  }, []);

  return (
    <div className="bg-[#0A1E3F] text-white min-h-screen">
      <section className="text-center py-20 px-4">
        <img
          src="/logo.png"
          alt="Runvo Logo"
          className="mx-auto mb-6 w-32"
        />
        <h1 className="text-4xl font-bold mb-2">SIMPLIFICA · COMPARTE · DISFRUTA</h1>
        <p className="text-lg text-[#A9CFF4] mb-6 max-w-xl mx-auto">
          La forma más fácil de ahorrar y gastar en grupo para vuestros viajes.
        </p>
        <Button className="bg-[#F97D7D] text-black hover:bg-[#f26161]">
          Apúntate a la beta
        </Button>
      </section>
      <section className="bg-[#122E5C] py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Crea un fondo común",
              desc: "Invita a tu grupo y define el objetivo: viaje compartido."
            },
            {
              title: "Aportad dinero de forma flexible",
              desc: "Cada miembro aporta lo que puede, cuando puede. Transparente y sin líos."
            },
            {
              title: "Pagad desde el fondo",
              desc: "Usad el fondo para los gastos del viaje. Nada de cuentas pendientes."
            }
          ].map((step, idx) => (
            <Card key={idx} className="bg-[#0A1E3F] border-none text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[#A9CFF4]">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">¿Por qué usar Runvo en tus viajes?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Evita líos con cuentas y pagos", "Ahorra con tu grupo antes del viaje", "Gestiona el dinero común desde un solo lugar"].map((benefit, idx) => (
            <Card key={idx} className="bg-[#122E5C] border-none text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{benefit}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-[#F97D7D] py-16 px-4 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">¿Listo para vuestro próximo viaje?</h2>
        <p className="mb-6">Empieza a planificarlo hoy con Runvo.</p>
        <Button className="bg-black text-white hover:bg-gray-800">Apúntate a la beta</Button>
      </section>
    </div>
  );
}
