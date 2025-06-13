export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-4">Maaf, produk yang Anda cari tidak tersedia.</p>
        <a href="/produk" className="text-blue-600 hover:underline">Kembali ke Daftar Produk</a>
      </div>
    </main>
  );
} 