import {resend} from '@/libs/resend/config'
import {EMAIL_RECEIVER, EMAIL_SENDER} from '@/config/env-server'
import ExampleEmailTemplate from '@/emails/singlebio-confirm-email'

export const POST = async () => {
  try {
    const {error} = await resend.emails.send({
      from: `Bluestash <${EMAIL_SENDER}>`,
      to: [EMAIL_RECEIVER],
      subject: 'Contact via site form',
      react: ExampleEmailTemplate({name: 'Test', confirmUrl: '#', lang: 'pt-BR'}),
    })

    if (error) throw 'Could not send the mail'

    return Response.json(true, {status: 200})
  } catch (error) {
    return Response.json({error}, {status: 500})
  }
}
