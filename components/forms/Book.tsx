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
import bookIcon from "@/assets/icons/book.svg";
import { useState } from "react";
import { createBooking } from "@/lib/strapi/bookings";

export default function MyForm({ documentId }: { documentId: string }) {
  const [locked, setLocked] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
        onSubmit={handleSubmit(onSubmit, onError)}
        className={clsx(
          "w-full md:max-w-[329px] py-7 px-5 space-y-8",
          "bg-white border md:pt-7 lg:pb-0",
          locked && "opacity-50 pointer-events-none"
        )}
      >
        <input
          type="hidden"
          {...form.register("real_estate")}
          value={documentId}
        />
        <Field>
          <FieldLabel htmlFor="name">الاسم</FieldLabel>
          <Input type="text" {...form.register("name")} />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">البريد الالكتروني</FieldLabel>
          <Input {...form.register("email")} />
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

        {locked ? (
          <div className="text-sm text-center text-green-600">
            تم إرسال الرسالة بنجاح
          </div>
        ) : (
          <Button
            type="submit"
            text={isSubmitting ? "جارٍ الإرسال..." : "إرسال"}
            icon={<img className="size-3" src={bookIcon.src} alt="" />}
            disabled={isSubmitting}
          />
        )}
      </form>
    </Form>
  );
}
