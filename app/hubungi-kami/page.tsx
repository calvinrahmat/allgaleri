import { MapPin, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HubungiKami() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-lavender py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Hubungi Kami
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, permintaan penawaran,
            atau konsultasi tentang kebutuhan kemasan Anda.
          </p>
        </div>
      </section>


      <div className="py-16 px-4 bg-cream">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Hubungi Kami
              </h2>
              
      <Tabs defaultValue="whatsapp">
                
                <TabsContent value="whatsapp">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="grid gap-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <div className="flex items-center mb-4">
                            <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
                            <h3 className="font-semibold text-gray-800">
                              Konsultasi
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Hubungi tim konsultasi kami untuk mendiskusikan
                            kebutuhan kemasan Anda dan mendapatkan saran
                            terbaik.
                          </p>
                          <a
                            href="https://wa.me/6281234567890?text=Halo%20Maxellpack,%20saya%20ingin%20konsultasi%20tentang%20kemasan"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="mr-2"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Konsultasi via WhatsApp
                            </Button>
                          </a>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="flex items-center mb-4">
                            <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                            <h3 className="font-semibold text-gray-800">
                              Order
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Sudah siap untuk memesan? Hubungi tim order kami
                            untuk memproses pesanan Anda dengan cepat.
                          </p>
                          <a
                            href="https://wa.me/6289876543210?text=Halo%20Maxellpack,%20saya%20ingin%20memesan%20kemasan"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="mr-2"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Order via WhatsApp
                            </Button>
                          </a>
                        </div>

                        <div className="bg-lavender p-4 rounded-lg border border-purple-100">
                          <div className="flex items-center mb-4">
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
                            <h3 className="font-semibold text-gray-800">
                              Linktree
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Temukan semua link penting kami di satu tempat.
                          </p>
                          <a
                            href="https://linktr.ee/maxellpack"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                              Kunjungi Linktree Kami
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>              
              </Tabs>
            </div>

      {/* Contact Information */}
      <section className=" px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Informasi Kontak
              </h2>

              <div className="grid gap-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-indigo mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Alamat
                        </h3>
                        <p className="text-gray-600">
                          Jl. Kencana Raya No.C1 No.5 Jakarta
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-indigo mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Telepon
                        </h3>
                        <p className="text-gray-600">+62 812 3456 7890</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              
              </div>

              
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Lokasi Kami
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.035313943259!2d106.72282017903063!3d-6.125950244213389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d54d05fd783%3A0xe9d6031cf3d04ca!2sPT%20MAXELL%20PETROASIA%20INDONESIA!5e0!3m2!1sen!2sid!4v1748506343752!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Lokasi Maxellpack"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
