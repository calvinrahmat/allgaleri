import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HubungiKami() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-lavender py-20 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Kami siap membantu Anda dengan pertanyaan, permintaan penawaran, atau konsultasi tentang kebutuhan kemasan Anda.
          </p>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="py-16 px-4 bg-cream border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
            Hubungi Tim Kami
          </h2>
          <Tabs defaultValue="whatsapp">
            <TabsContent value="whatsapp">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Konsultasi */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="font-semibold text-gray-800 text-lg">Konsultasi</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm flex-1">
                      Hubungi tim konsultasi kami untuk mendiskusikan kebutuhan kemasan Anda dan mendapatkan saran terbaik.
                    </p>
                    <a
                      href="https://wa.me/6281292773973?text=Halo%20Maxellpack,%20saya%20ingin%20konsultasi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-base py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat via WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                {/* Order */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold text-gray-800 text-lg">Order</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm flex-1">
                      Sudah siap untuk memesan? Hubungi tim order kami untuk memproses pesanan Anda dengan cepat.
                    </p>
                    <a
                      href="https://wa.me/6285171119019?text=Halo%20Maxellpack,%20saya%20ingin%20memesan%20kardus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order via WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                {/* Linktree */}
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-500 mr-2"
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      <h3 className="font-semibold text-gray-800 text-lg">Linktree</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm flex-1">
                      Temukan semua link penting kami di satu tempat.
                    </p>
                    <a
                      href="https://linktr.ee/maxellpack"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold text-base py-2">
                        Kunjungi Linktree Kami
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
            Informasi Kontak
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md bg-gray-50">
              <CardContent className="p-6 flex items-start">
                <Phone className="h-6 w-6 text-indigo-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-lg">Telepon</h3>
                  <p className="text-gray-600 text-base">0812-9277-3973</p>
                </div>
              </CardContent>
            </Card>
            {/* You can add more contact cards here if needed */}
          </div>
        </div>
      </section>

      {/* Section 6: Lokasi Kami */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Lokasi Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <h3 className="text-xl font-semibold text-center mt-6 mb-2 text-gray-800">PABRIK PRODUKSI</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.23644422461!2d106.53754468161617!3d-6.232530144914096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd0027042631%3A0x486838918ab07de8!2sPT.%20Maxell%20Sukses%20Gemilang!5e0!3m2!1sen!2sid!4v1749800026893!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pabrik Maxellpack"
              ></iframe>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
              <h3 className="text-xl font-semibold text-center mt-6 mb-2 text-gray-800">KANTOR PUSAT</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.027745358406!2d106.7251174754024!3d-6.126968660076136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02ab937a1c13%3A0x3d3fdd8936e09d01!2sMaxellpack!5e0!3m2!1sen!2sid!4v1749799817720!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Maxellpack"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
