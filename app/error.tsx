"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Button from "@/components/buttons/SecondBtn";

const Error = ({ error }: { error: Error }) => {
  const router = useRouter();
  return (
    <main className="bg-second">
      <Header />

      <div className="h-[calc(100svh-300px)] gap-4 flex flex-col items-center justify-center">
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
        <Button
          width="fit"
          text="العودة للصفحة السابقة"
          onClick={() => router.back()}
        />
      </div>

      <Footer />
    </main>
  );
};

export default Error;
