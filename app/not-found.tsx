import Second_Btn from "@/components/buttons/SecondBtn";

const NotFound = () => {
  return (
    <main className="bg-second">
      <div className="h-[calc(100svh-300px)] gap-4 flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-gray-400">404</div>
        <p className="text-gray-500">الصفحة التي تبحث عنها غير موجودة.</p>
        <Second_Btn width="fit" text="العودة إلى الصفحة الرئيسية" href="/" />
      </div>
    </main>
  );
};

export default NotFound;
