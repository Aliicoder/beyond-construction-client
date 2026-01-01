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
import formSchema from "@/lib/validations/contact";
import clsx from "clsx";
import sendMail from "@/assets/icons/sendMail.svg";
import { createMessage } from "@/lib/strapi/messages";
import { useState } from "react";

type FormValues = z.infer<typeof formSchema>;

export default function MyForm() {
  const [locked, setLocked] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: FormValues) {
    try {
      await createMessage(values);
      toast.success("تم إرسال الرسالة بنجاح");
      reset();
      setLocked(true);
    } catch (error: any) {
      if (error?.message?.includes("429")) {
        toast.error("لقد تجاوزت الحد المسموح به اليوم");
      } else {
        toast.error("حدث خطأ أثناء إرسال الرسالة");
      }
    }
  }

  function onError(errors: any) {
    const firstError = Object.values(errors)[0] as any;
    toast.error(firstError?.message);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={clsx(
          "md:w-[350px] py-7 px-5 space-y-8 rounded-sm outline outline-black bg-white fade-up",
          locked && "opacity-50 pointer-events-none"
        )}
      >
        <Field>
          <FieldLabel htmlFor="name">الاسم</FieldLabel>
          <Input {...form.register("name")} />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">البريد الالكتروني</FieldLabel>
          <Input {...form.register("email")} />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">الهاتف</FieldLabel>
          <Input
            type="tel"
            className="text-right"
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
            icon={<img className="size-5" src={sendMail.src} alt="" />}
            disabled={isSubmitting}
          />
        )}
      </form>
    </Form>
  );
}
