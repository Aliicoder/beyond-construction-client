"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import Button from "@/components/buttons/FirstBtn";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";
import formSchema from "@/lib/validations/query";
import clsx from "clsx";

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
        className={clsx(
          "max-w-[329px] py-10 px-5 space-y-8 mx-auto rounded-sm",
          "bg-white outline outline-black"
        )}
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
          <FieldLabel>الهاتف</FieldLabel>

          <Controller
            control={form.control}
            name="mobile_number"
            render={({ field }) => (
              <PhoneInput
                {...field}
                countries={["SA"]}
                defaultCountry="SA"
                international={false}
                withCountryCallingCode
                countryCallingCodeEditable={false}
                className="
          PhoneInput
          flex items-center gap-2
          rounded-sm border border-gray-200 shadow-2xs
          px-3 py-2
        "
              />
            )}
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
          className="w-full! rounded-md!"
          textClassName="text-sm!"
          text="إرسال"
        />
      </form>
    </Form>
  );
}
