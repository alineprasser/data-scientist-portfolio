import { certificates } from "@/lib/certificates";
import CertificateCard from "@/components/CertificateCard";

export default function Certificates() {
  return (
    <main className="min-h-screen w-screen py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl text-accent font-bold mb-4 text-golden">
            Certificados e Conquistas
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.codigo}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
