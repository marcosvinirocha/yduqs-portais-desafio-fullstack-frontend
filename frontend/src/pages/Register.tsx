import React from 'react';
import Cardinfo from '../components/CardInfo';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from '../components/ui/form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Spinner } from '../components/ui/spinner';
import FooterRegister from '../components/FooterRegister';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  cpf: z
    .string()
    .length(11, 'CPF deve ter exatamente 11 dígitos')
    .regex(/^\d{11}$/, 'CPF deve conter apenas números'),
  birthday: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato deve ser DD/MM/AAAA'),
  email: z.email({
    message: 'E-mail inválido',
  }),
  cellphone: z.string().length(11, 'Celular deve ter exatamente 11 dígitos'),
  graduationYear: z
    .string()
    .length(4)
    .regex(/^\d{4}$/),
});

export default function Register() {
  const CardTitleInfo = 'Queremos saber um pouco mais sobre você';
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Cardinfo title={CardTitleInfo} isRegister={true} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 mx-4 md:mx-[88px] mt-8 mb-14'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Nome Completo' {...field} />
                </FormControl>
                <FormDescription className='font-sans'>
                  Preencha seu nome completo, sem abreviações, igual ao seu
                  documento de identificação.{' '}
                  <u className='cursor-pointer'>Confira o exemplo.</u>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cpf'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Cpf' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='birthday'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Data de nascimento' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='cellphone'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Celular para contato' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='graduationYear'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormControl>
                  <Input placeholder='Ano de conclusão do ensino' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className='flex items-start gap-2 mb-6'>
              <Checkbox defaultChecked id='terms' className='mt-1' />
              <Label htmlFor='terms' className='cursor-pointer'>
                <span className='text-black font-sans text-sm leading-tight whitespace-pre-wrap inline'>
                  Li e concordo com os{' '}
                  <u className='cursor-pointer underline text-black'>
                    termos do edital
                  </u>
                  , bem como com o tratamento dos meus dados para fins de
                  prospecção dos serviços educacionais prestados pela Estácio e
                  demais instituições de ensino do mesmo{' '}
                  <u className='cursor-pointer underline text-black'>
                    Grupo Econômico
                  </u>
                  , de acordo com a nossa{' '}
                  <u className='cursor-pointer underline text-black'>
                    Política de Privacidade
                  </u>
                  .
                </span>
              </Label>
            </div>
            <div className='flex items-center gap-2 mb-8 space-x-2'>
              <Checkbox defaultChecked id='terms-2' />
              <Label htmlFor='terms'>
                Aceito receber atualizações sobre minha inscrição pelo WhatsApp.
              </Label>
            </div>
          </div>
          <Button className='mb-10' type='submit'>
            <Spinner />
            Avançar
          </Button>
        </form>
      </Form>
      <FooterRegister />
    </div>
  );
}
