import {resend} from '@/libs/resend/config'
import ExampleEmailTemplate from '@/emails/singlebio-confirm-email'

export const POST = async () => {
  try {
    const {error} = await resend.emails.send({
      from: 'Bluestash <team@bluestash.one>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: ExampleEmailTemplate({name: 'Test', confirmUrl: '#', lang: 'pt-BR'}),
    })

    if (error) throw 'Could not send the mail'

    return Response.json(true, {status: 200})
  } catch (error) {
    return Response.json({error}, {status: 500})
  }
}
