import { NextRequest, NextResponse } from 'next/server';
import { withBody } from '@/lib/body';

// Store your API token securely in environment variables
const API_TOKEN = process.env.CHATBOT_API_TOKEN;
const API_ENDPOINT = process.env.CHATBOT_API_ENDPOINT;
const APP_AUTHORIZATION = process.env.CHATBOT_API_AUTHORIZATION;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, idDevice, deviceAddress, eventFilter } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Just send the question - backend manages history
    const requestBody = withBody(
      {
        model: 'rag-default',
        messages: [{ role: 'user', content: message }],
        rag_config: {
          enabled: true,
          search_limit: 5,
          min_similarity: 0.5,
          keyword_weight: 0.3
          // event_filter: eventFilter || [] // Disabled for now - documents don't have categories set
        }
      },
      'chatbot-message',
      idDevice || 'unknown',
      deviceAddress || '0.0.0.0'
    );

    // Make request to the new /v1/chat/completions endpoint
    const apiUrl = `${API_ENDPOINT}/v1/chat/completions`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-App-Authorization': `X-Auth ${APP_AUTHORIZATION}`,
        'Authorization': `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Backend API request failed' },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Parse Result[ChatCompletionsResponse] format
    if (result.success && result.data?.choices?.length > 0) {
      return NextResponse.json({
        response: result.data.choices[0].message.content
      });
    }

    return NextResponse.json({ error: result.info || 'No response' }, { status: 500 });

  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
