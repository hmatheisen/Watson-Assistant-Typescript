import AssistantV2, { MessageParams, SessionResponse, CreateSessionParams, MessageResponse } from 'ibm-watson/assistant/v2';

export class Watson {
    private assistant: AssistantV2;
    private session_id: string;

    createService(): Watson {
        this.assistant = new AssistantV2({
            version: '2018-11-08',
        });
        
        return this;
    }

    createSession(): Promise<SessionResponse> {
        return new Promise((resolve, reject) => {
            const params: CreateSessionParams = {
                assistant_id: process.env.ASSISTANT_ID || ''
            };
    
            this.assistant.createSession(params, (err, response: SessionResponse | undefined) => {
                if (err) {
                    reject(err);
                } else if (response) {
                    this.session_id = response.session_id;
                    resolve(response);
                }
            });
        });
    }

    sendMessage(message: string): Promise<MessageResponse> {
        return new Promise((resolve, reject) => {
            const params: MessageParams = {
                assistant_id: process.env.ASSISTANT_ID || '',
                session_id: this.session_id,
                input: {
                    message_type: 'text',
                    text: message
                }
            }

            this.assistant.message(params, (err, response: MessageResponse | undefined) => {
                if (err) {
                    reject(err)
                } else if (response) {
                    resolve(response);
                }
            });
        });
    }
}