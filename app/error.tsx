"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import clsx from "clsx";

const GlobalError = ({ error }: { error: Error }) => {
  return (
    <main>
      <Header />

      <div className="min-h-screen md:h-[calc(100svh-300px)] gap-4 flex flex-col items-center justify-center bg-second">
        <h1
          className={clsx(
            "px-[20px] text-4xl font-bold text-center",
            "max-md:text-2xl"
          )}
        >
          حدث خطأ غير متوقع
        </h1>

        <p
          className={clsx(
            "px-[20px] text-xl text-center text-gray-700",
            "max-md:text-lg"
          )}
        >
          {error?.message || "نعتذر، حدثت مشكلة أثناء تحميل الصفحة."}
        </p>

        <button
          onClick={() => window.location.reload()}
          className={clsx(
            "mt-8 border border-blue-500 bg-blue-500 px-4 py-2 rounded cursor-pointer text-xl text-white",
            "max-md:text-sm"
          )}
        >
          إعادة تحميل الصفحة
        </button>
        <button
          onClick={() => window.history.back()}
          className={clsx(
            "mt-4 border border-gray-500 bg-gray-500 px-4 py-2 rounded cursor-pointer text-xl text-white",
            "max-md:text-sm"
          )}
        >
          العودة للصفحة السابقة
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default GlobalError;
