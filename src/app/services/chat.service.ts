import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiKey =
    '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';
  openai = new OpenAI({apiKey: this.apiKey, dangerouslyAllowBrowser: true});
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  public sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo', // Or the model you have access to
      messages: [{ role: 'user', content: prompt }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
