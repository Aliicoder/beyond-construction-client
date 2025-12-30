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

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("تم إرسال الطلب بنجاح");
    console.log(values);
  }

  function onError(errors: any) {
    const firstError = Object.values(errors)[0] as any;
    toast.error(firstError.message);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className={clsx(
          "w-full md:max-w-[329px] py-7 px-5 space-y-8",
          "bg-white border md:pt-7 lg:pb-0"
        )}
      >
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

        <Button
          text="احجز الآن"
          icon={<img className="size-3" src={bookIcon.src} alt="" />}
        />
      </form>
    </Form>
  );
}
