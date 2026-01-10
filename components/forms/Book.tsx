"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import Button from "@/components/buttons/SecondBtn";
import formSchema from "@/lib/validations/book";
import clsx from "clsx";
import { useState } from "react";
import { createBooking } from "@/lib/strapi/bookings";
import whatsappIcon from "@/assets/icons/socialMedia/whatsapp.svg";
import send from "@/assets/icons/send.svg";
import { IRealEstate } from "@/types";
import { handleWhatsapp } from "@/lib/helpers/whatsappBooking";

export default function MyForm({ realEstate }: { realEstate: IRealEstate }) {
  const [locked, setLocked] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      real_estate: realEstate.documentId,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createBooking(values);
      toast.success("تم إرسال الطلب بنجاح");
      reset();
      setLocked(true);
    } catch (error: any) {
      if (error?.message?.includes("429")) {
        toast.error("لقد تجاوزت الحد المسموح به اليوم");
      } else {
        toast.error("حدث خطأ أثناء إرسال الطلب");
      }
    }
  }

  function onError(errors: any) {
    const firstError = Object.values(errors)[0] as any;
    toast.error(firstError.message);
  }

  return (
    <Form {...form}>
      <form
        id="book-form"
        onSubmit={handleSubmit(onSubmit, onError)}
        className={clsx(
          "w-full md:max-w-[329px] py-7 px-5 space-y-8",
          "bg-white border md:pt-7 lg:pb-0",
          locked && "opacity-50 pointer-events-none"
        )}
      >
        <Field>
          <FieldLabel htmlFor="name">الاسم</FieldLabel>
          <Input type="text" {...form.register("name")} />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">الهاتف</FieldLabel>
          <Input
            className="text-right"
            type="tel"
            {...form.register("phone")}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">الرسالة</FieldLabel>
          <Textarea {...form.register("message")} />
        </Field>
        <div className="gap-4 mb-4 flex flex-col">
          {locked ? (
            <div className="text-sm text-center text-green-600">
              تم إرسال الطلب بنجاح
            </div>
          ) : (
            <Button
              type="submit"
              text={isSubmitting ? "جارٍ الإرسال..." : "ارسال طلب "}
              icon={
                <div className="w-[15px] h-[15px]">
                  <img
                    className="size-full object-contain"
                    src={send.src}
                    alt="احجز"
                  />
                </div>
              }
              disabled={isSubmitting}
            />
          )}
          <div className="relative flex justify-center">
            <div className="left-0 top-1/2 absolute z-0 h-[0.5px] bg-gray-300 w-full" />
            <div className="z-10 bg-white px-3 text-sm md:text-base">او</div>
          </div>
          <Button
            type="button"
            text={"حجز مباشر"}
            onClick={() => handleWhatsapp({ realEstate })}
            icon={
              <div className="size-[20px]">
                <img
                  className="size-full object-contain"
                  src={whatsappIcon.src}
                  alt="حجز مباشر"
                />
              </div>
            }
          />
        </div>
      </form>
    </Form>
  );
}
