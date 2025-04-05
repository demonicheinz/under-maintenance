import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh p-4 text-center">
      <div className="max-w-3xl w-full px-4 py-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            heinz.id
          </h1>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full my-4" />
        </div>

        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-dashed animate-spin" />
            <div className="absolute inset-3 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow" />
          </div>

          <h2 className="text-3xl font-bold mb-4">Website Sedang Dalam Pemeliharaan</h2>
          <p className="text-xl text-gray-400 mb-6">
            Kami sedang bekerja untuk memberikan pengalaman yang lebih baik.
            <br />
            Mohon kunjungi kembali dalam beberapa waktu.
          </p>
        </div>

        <div className="p-4 bg-black/20 rounded-lg max-w-md mx-auto mb-8">
          <p className="text-sm">
            Untuk informasi lebih lanjut, silakan hubungi kami melalui email:
            <a
              href="mailto:contact@heinz.id"
              className="block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              contact@heinz.id
            </a>
          </p>
        </div>

        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Heinz - All Rights Reserved
        </div>
      </div>
    </div>
  );
}
