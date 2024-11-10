// floating-chat.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-floating-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './floating-chat.component.html',
  styleUrls: ['./floating-chat.component.scss'],
})
export class FloatingChatComponent {
  userInput = '';
  messages: { role: string; content: string }[] = [
    { role: 'assistant', content: 'Hello! How can I assist you today?' }
  ];
  isVisible = true;

  @ViewChild('chatMessages') chatMessages!: ElementRef;

  constructor(private openAiService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'user', content: this.userInput });

    this.openAiService.sendMessage(this.userInput).subscribe(
      (response) => {
        const aiMessage = response.choices[0].message.content;
        this.messages.push({ role: 'assistant', content: aiMessage });
        this.scrollToBottom();
      },
      (error) => {
        console.error('Error connecting to OpenAI API:', error);
        this.messages.push({
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again later.'
        });
        this.scrollToBottom();
      }
    );

    this.userInput = '';
    this.scrollToBottom();
  }

  toggleChat() {
    this.isVisible = !this.isVisible;
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatMessages) {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
