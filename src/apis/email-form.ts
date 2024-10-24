import {APP_URL} from '@/config/env-client'
import {EmailFormData} from '@/types/utilities'
import {FetchHttpClient} from '@/libs/http/fetch-http-client'

class EmailFormApi {
  private httpClient: FetchHttpClient
  constructor() {
    this.httpClient = new FetchHttpClient(`${APP_URL}/api`)
  }

  async sendContactForm(data: EmailFormData) {
    const {body} = await this.httpClient.post('/email/contact-form', data)
    return body
  }
}

export const emailFormApi = new EmailFormApi()
