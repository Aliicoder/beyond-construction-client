"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import Button from "@/components/buttons/FirstBtn";
import Image from "next/image";
import leftUpArrowPath from "@/assets/icons/left-up-arrow.svg";

const formSchema = z.object({
  name: z.string().min(1).min(0).max(20),
  email: z.string(),
  mobile_number: z.string(),
  message: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[329px] space-y-8  md:mx-auto py-10 px-5 mx-5 bg-white outline outline-black rounded-sm md:p-10"
      >
        <Field>
          <FieldLabel htmlFor="name">الاسم</FieldLabel>
          <Input id="name" placeholder="" {...form.register("name")} />

          <FieldError>{form.formState.errors.name?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">البريد الالكتروني</FieldLabel>
          <Input id="email" placeholder="" {...form.register("email")} />

          <FieldError>{form.formState.errors.email?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="mobile_number">الهاتف</FieldLabel>
          <Input
            id="mobile_number"
            placeholder=""
            {...form.register("mobile_number")}
          />

          <FieldError>
            {form.formState.errors.mobile_number?.message}
          </FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">الرسالة</FieldLabel>
          <Textarea id="message" placeholder="" {...form.register("message")} />

          <FieldError>{form.formState.errors.message?.message}</FieldError>
        </Field>
        <Button
          className="w-full bg-second"
          icon={
            <Image
              width={10}
              height={10}
              className="object-contain md:w-[14px] md:h-[14px]"
              src={leftUpArrowPath}
              alt="up-left-arrow"
            />
          }
          text="إرسال"
        />
      </form>
    </Form>
  );
}
